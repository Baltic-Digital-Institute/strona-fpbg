#!/usr/bin/env bash

set -euo pipefail

# Skrypt startowy: sprawdza wersję Node, instaluje zależności i weryfikuje lint.
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

REQUIRED_NODE_MAJOR=18
CURRENT_NODE_MAJOR=$(node -p "process.versions.node.split('.')[0]")

if (( CURRENT_NODE_MAJOR < REQUIRED_NODE_MAJOR )); then
  echo "⚠️  Wymagana wersja Node to co najmniej ${REQUIRED_NODE_MAJOR}. Zaktualizuj środowisko i uruchom ponownie." >&2
  exit 1
fi

echo "🔧 Instalacja zależności w ${PROJECT_ROOT}"
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "🧹 Uruchamiam lint, aby upewnić się, że bazowy kod jest czysty…"
npm run lint

echo "✅ Środowisko gotowe. Uruchom \"npm run dev\" (port 3000) aby wystartować aplikację."
