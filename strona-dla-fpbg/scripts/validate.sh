#!/usr/bin/env bash

set -euo pipefail

# Walidacja projektu: lint + build + (opcjonalnie) testy e2e, jeżeli są dostępne.
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "🧪 Walidacja kodu w ${PROJECT_ROOT}"
npm run lint
npm run build

if node -e "const s=require('./package.json').scripts; process.exit(s['test:e2e']?0:1)"; then
  echo "▶ Uruchamiam testy e2e (tryb headless)."
  npm run test:e2e
else
  echo "ℹ️ Pomińnięto testy e2e (brak skryptu test:e2e)."
fi

echo "✅ Walidacja zakończona powodzeniem."
