#!/bin/bash

sudo chown -R node:node ~/.ssh

pnpm install

chmod +x .husky/commit-msg
chmod +x .husky/pre-commit

echo "✨ Docusaurus env is ready! Use 'pnpm start' to run."