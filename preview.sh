#!/bin/bash
# preview.sh

echo "Building landing page..."
mkdocs build

echo "Injecting product manuals..."
# Add a line for every product you have
if [ -d "v-control-pro" ]; then
    cp -r v-control-pro site/
fi
if [ -d "pt-peek" ]; then
    cp -r pt-peek site/
fi
if [ -d "soundcode-dolby-e" ]; then
    cp -r soundcode-dolby-e site/
fi

echo "Serving at http://localhost:8001"
echo "Note that hot builds will not happen. Use mkdocs serve without sub projects for that."
python3 -m http.server --directory site 8001