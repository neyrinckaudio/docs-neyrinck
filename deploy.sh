#!/bin/bash

# MkDocs Build and Deploy Script
# This script builds MkDocs, commits changes, and pushes to git

set -e  # Exit on any error

echo "🔨 Building MkDocs site..."
mkdocs build

echo "📝 Adding all changes to git..."
git add .

# Check if there are any changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
    exit 0
fi

echo "💾 Committing changes..."
# You can customize the commit message here
COMMIT_MSG="Auto-deploy: Update MkDocs site $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

echo "🚀 Pushing to remote repository..."
git push

echo "✅ Successfully built and deployed MkDocs site!"