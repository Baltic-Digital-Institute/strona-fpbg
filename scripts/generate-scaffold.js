#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Generator prostego szkieletu strony w katalogu app/.
 * Uzycie:
 *    node scripts/generate-scaffold.js <sciezka> [Tytul strony] [--force]
 *
 * Przyklad:
 *    node scripts/generate-scaffold.js o-fundacji "O Fundacji"
 */

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const routeArg = args.find((arg) => !arg.startsWith("--"));
const titleArg = args.slice(1).find((arg) => !arg.startsWith("--"));
const force = args.includes("--force");

if (!routeArg) {
  console.error(
    'Podaj sciezke podstrony. Przyklad: node scripts/generate-scaffold.js strategia "Strategia"'
  );
  process.exit(1);
}

const route = routeArg.replace(/^\/+/, "").replace(/\/+$/, "");
const title =
  titleArg || route.split(/[\/_-]/).map(capitalize).join(" ") || "Nowa strona";
const componentName = `${route.split(/[\/_-]/).map(capitalize).join("")}Page`;
const projectRoot = path.join(__dirname, "..");
const targetDir = path.join(projectRoot, "app", route);
const targetFile = path.join(targetDir, "page.tsx");

if (fs.existsSync(targetFile) && !force) {
  console.error(
    `Plik ${targetFile} juz istnieje. Uzyj flagi --force, aby go nadpisac.`
  );
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

const template = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${title} | Fundacja Przyjaźń bez Granic",
  description: "${title} - szkielet wygenerowany automatycznie, uzupelnij tresc zgodnie z instrukcja FPbG.",
};

export default function ${componentName}() {
  // Automatyczny szablon FPbG — dodaj wlasciwe tresci i sekcje RWD.
  return (
    <main className="bg-sand text-primary">
      <section className="mx-auto max-w-5xl space-y-4 px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Fundacja Przyjaźń bez Granic
        </p>
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">${title}</h1>
        <p className="max-w-3xl text-primary/80">
          Uzupelnij te sekcje trescia zgodnie ze specyfikacja FPbG oraz dokumentem "Tworzenie Instrukcji FPbG.md".
        </p>
      </section>
    </main>
  );
}
`;

fs.writeFileSync(targetFile, template, "utf8");
console.log(`✅ Utworzono szkielet: ${targetFile}`);

function capitalize(value) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
}
