#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$REPO_ROOT/handoff"
DEST_BASE="$HOME/agent-coordination/rubi-platform-builder"

mkdir -p "$DEST_BASE"
rsync -ah --delete "$SRC_DIR/" "$DEST_BASE/"
echo "Synced $SRC_DIR -> $DEST_BASE" >&2

