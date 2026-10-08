ROUTING=$(basename $(ls dist/client/assets/entries/entry-server-routing.*.js 2>/dev/null | head -1))
INDEX=$(basename $(ls dist/client/assets/entries/pages_index.*.js 2>/dev/null | head -1))
DETAIL=$(basename $(ls dist/client/assets/entries/pages_detail.*.js 2>/dev/null | head -1))
cat > wrangler.jsonc <<- EOF
{
  "name": "wallpaper",
  "compatibility_date": "$(date +%Y-%m-%d)",
  "main": "dist/client/_worker.js",
  "assets": {
    "directory": "./dist/client",
    "binding": "ASSETS",
    "not_found_handling": "404-page",
    "run_worker_first": [
      "/",
      "/detail",
      "/detail/",
      "/assets/entries/$ROUTING",
      "/assets/entries/$INDEX",
      "/assets/entries/$DETAIL"
    ]
  },
  "vars": {
    "ROUTING_JS": "$ROUTING",
    "INDEX_JS": "$INDEX",
    "DETAIL_JS": "$DETAIL"
  },
  "services": [
    {
      "binding": "wallpaperApiWorker",
      "service": "wallpaper-api"
    }
  ],
  "observability": {
    "logs": {
      "enabled": true,
      "head_sampling_rate": 1,
      "invocation_logs": true,
      "persist": true
    },
    "traces": {
      "enabled": false,
      "head_sampling_rate": 1,
      "persist": true
    }
  },
  "cache": {
    "enabled": true
  }
}
EOF
echo -n "_worker.js" > dist/client/.assetsignore