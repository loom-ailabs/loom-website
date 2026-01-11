#!/bin/bash

sudo chown -R node:node ~/.ssh

pnpm install

echo "✨ Docusaurus env is ready! Use 'pnpm start' to run."