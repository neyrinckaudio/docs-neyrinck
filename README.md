# Neyrinck Docs

This is a Material for Mkdocs project that navigates to Neyrinck user guides.

https://squidfunk.github.io/mkdocs-material/

## Project Structure

This repository contains:
- **Main site**: Built from the `docs/` directory using MkDocs
- **Subproject sites**: Pre-built static HTML sites for each product documentation
  - `v-control-pro/` - V-Control Pro documentation
  - `v-console/` - V-Console documentation
  - `spill/` - Spill documentation

## Building and Deploying

1. Build the main site locally:
   ```bash
   mkdocs build
   ```

2. Copy subproject sites to the build output:
   ```bash
   cp -r v-control-pro site/
   cp -r v-console site/
   cp -r spill site/
   ```

3. The `site/` directory now contains the complete website ready for deployment

**Note**: The GitHub Actions workflow (`.github/workflows/main.yml`) automatically copies the subproject directories to the `site/` directory before deploying.

## Local Preview

`preview.sh` - This script simulates the deployment process by copying subproject site code to the main site for local testing.

