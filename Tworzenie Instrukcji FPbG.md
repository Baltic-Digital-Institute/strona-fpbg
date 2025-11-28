# Tworzenie Instrukcji The FPbG Way

## Sekcja 1: Mandat Strategiczny i Filozofia Architektoniczna

### 1.1. Fundament Tożsamości: Od Pomocy Doraźnej do Systemowej Sprawczości

Niniejszy dokument stanowi konstytucyjną specyfikację wdrożeniową dla nowej platformy cyfrowej Fundacji Przyjaźń bez Granic (FPbG). Jest on bezpośrednią adaptacją metodologii „The BDI Way”, zmodyfikowaną w celu odzwierciedlenia unikalnej, humanistycznej misji organizacji. Podczas gdy Baltic Digital Institute (BDI) funkcjonuje jako „Mózg i Logika” ekosystemu, dostarczając technologie i standardy, Fundacja Przyjaźń bez Granic zdefiniowana jest jako jego „Serce i Ręce”. Ta fundamentalna dychotomia determinuje każdy aspekt architektury nowej strony internetowej.

Transformacja Fundacji z lokalnego podmiotu pomocowego w „Pomorski Hub Współpracy Międzynarodowej i Działań Humanitarnych” wymusza zmianę paradygmatu cyfrowego. Nowa witryna nie może być jedynie pasywną tablicą ogłoszeń czy prostą wizytówką; musi stać się strategicznym narzędziem legitymizacji, budującym kapitał zaufania niezbędny do operowania na skalę międzynarodową.

Zgodnie z dokumentacją strategiczną, strona ma pełnić funkcję „Wizytówki Emocjonalnej” połączonej z „Platformą Ustrukturyzowaną”. Oznacza to, że warstwa wizualna musi komunikować ciepło, empatię i solidarność, podczas gdy warstwa techniczna i strukturalna musi demonstrować żelazną logikę, transparentność i ład korporacyjny, charakterystyczny dla całego Systemu Operacyjnego Baltic (SOB).

Projekt ten definiuje stronę WWW jako **Artefakt Audytowalny**. W obliczu rosnących wymagań donatorów (np. w ramach programów NOWEFIO, FEP, Erasmus+), zdolność organizacji do transparentnego raportowania działań staje się jej kluczowym aktywem. Dlatego też, architektura informacji została zaprojektowana w taki sposób, aby każdy element – od prezentacji Statutu w sekcji „Ład Korporacyjny” po szczegółowe Karty Projektów – stanowił gotowy „wsad grantowy”, dowodzący zdolności operacyjnej i finansowej rzetelności Fundacji. W tym ujęciu, strona internetowa przestaje być kosztem marketingowym, a staje się inwestycją w wiarygodność, niezbędną do pozyskiwania systemowego finansowania.

### 1.2. Ograniczenia Architektoniczne i Decyzja „No-Code/No-Form”

W przeciwieństwie do komercyjnych platform BDI nastawionych na agresywną akwizycję leadów, strona FPbG przyjmuje model **Pasywnego Bezpieczeństwa**. Decyzja o całkowitej rezygnacji z formularzy zgłoszeniowych i interaktywnych elementów zbierających dane (input) jest świadomym zabiegiem strategicznym, a nie ograniczeniem technicznym.

* **Bezpieczeństwo w Strefie Ryzyka:** Fundacja, angażując się w pomoc humanitarną na terytorium Ukrainy i współpracując z podmiotami międzynarodowymi, operuje w środowisku podwyższonego ryzyka cyfrowego. Eliminacja dynamicznego backendu, baz danych użytkowników oraz formularzy kontaktowych drastycznie redukuje wektor ataku (attack surface).
* Strona w technologii Static Site Generation (SSG) jest odporna na typowe ataki typu SQL Injection czy Cross-Site Scripting (XSS), co gwarantuje ciągłość dostępności informacji nawet w warunkach cyberzagrożenia.
* **Jedno Źródło Prawdy (SSOT) jako Imperatyw:** Strona internetowa FPbG nigdy nie jest źródłem danych pierwotnych. Jest jedynie warstwą prezentacyjną dla informacji, których autorytatywne źródła znajdują się w bezpiecznych, wewnętrznych repozytoriach Systemu Operacyjnego Baltic. Dane formalne (KRS, Statut) pochodzą z Hubu 80 (Zasoby Wspólne), a treści merytoryczne z Kart Projektów w systemie ClickUp. Taka architektura wymusza spójność i eliminuje ryzyko rozbieżności między stanem faktycznym a deklarowanym.
* **Ekstremalna Efektywność Kosztowa:** Jako organizacja non-profit, FPbG jest zobowiązana do maksymalnej racjonalizacji wydatków. Model strony statycznej (Next.js Export) pozwala na hosting na infrastrukturze typu CDN (np. Vercel, Netlify) przy zerowych lub minimalnych kosztach stałych, eliminując potrzebę utrzymywania drogich serwerów aplikacyjnych, licencji na bazy danych czy skomplikowanych procedur patchowania systemów CMS. Zasoby zaoszczędzone na infrastrukturze IT mogą być bezpośrednio przekierowane na realizację celów statutowych.

### 1.3. Symbioza Dwóch Filarów: Model Yin-Yang

Kluczowym wyzwaniem strategicznym jest wizualne i funkcjonalne osadzenie Fundacji w ekosystemie BDI przy jednoczesnym zachowaniu jej autonomicznej tożsamości. Raport strategiczny definiuje tę relację jako „Model Yin-Yang” lub „Rodzinę Marek Wspieranych Systemowo”.

* **BDI (Yang):** Reprezentuje pierwiastek techniczny – chłodny, geometryczny, wertykalny, skupiony na standardach i certyfikacji. Jego domena to „Mózg”.
* **FPbG (Yin):** Reprezentuje pierwiastek humanistyczny – ciepły, organiczny, horyzontalny (mosty), skupiony na relacjach i wsparciu. Jej domena to „Serce”.

Strona internetowa musi być cyfrową manifestacją tej komplementarności. Zgodnie z wytycznymi strategii identyfikacji, witryna FPbG przejmuje „kod genetyczny” BDI w warstwie strukturalnej (siatki, typografia korporacyjna, standardy nazewnictwa), co sygnalizuje profesjonalizm i przynależność do silnej grupy. Jednocześnie, w warstwie emocjonalnej (kolorystyka, kształty, ikonografia), wprowadza radykalną dywergencję, stosując „Organiczną Geometrię” i paletę barw ziemi (Terakota/Bursztyn), aby budować bliskość i zaufanie.

---

## Sekcja 2: Kanoniczny Blueprint: Architektura Informacji i System Projektowy

### 2.1. Ostateczna Mapa Strony (Sitemap)

Poniższa architektura informacji została zsyntetyzowana na podstawie Specyfikacji Wdrożeniowej i stanowi nienegocjowalny szkielet witryny. Jest ona zoptymalizowana pod kątem czytelności dla dwóch głównych interesariuszy: beneficjentów (szukających pomocy/współpracy) oraz audytorów/grantodawców (weryfikujących wiarygodność). Struktura jest płaska, pozbawiona głębokich zagnieżdżeń, co sprzyja transparentności.

**Tabela 1: Kanoniczna Mapa Strony FPbG v1.0**

| Poziom 1 (Główny) | Poziom 2 (Podstrony) | URL | Opis Funkcjonalny i Źródło Blueprintu | Komponent Next.js |
| :--- | :--- | :--- | :--- | :--- |
| **Strona Główna** | — | `/` | Wizytówka ideowa. Sekcja Hero z misją „Pomorskiego Huba”, Wartości (Solidarność, Partnerstwo), Dynamiczny blok CTA. | `app/page.tsx` |
| **O Fundacji** | — | `/o-fundacji` | Historia, DNA (korzenie ukraińskie), Zespół (Zarząd). Dowód na kompetencje. | `app/o-fundacji/page.tsx` |
| | **Ład Korporacyjny** | `/o-fundacji/lad-korporacyjny` | Krytyczne dla Compliance. Repozytorium dokumentów formalnych (Statut, KRS, Sprawozdania). Wymóg NOWEFIO. | `app/o-fundacji/lad-korporacyjny/page.tsx` |
| **Strategia** | — | `/strategia` | Wizualizacja 3 Filarów Strategicznych (Spójność, Brama, Solidarność). Prezentacja twardych KPI. | `app/strategia/page.tsx` |
| **Projekty** | — | `/projekty` | Indeks zrealizowanych i trwających inicjatyw. Dowód sprawczości. | `app/projekty/page.tsx` |
| | **Karta Projektu** | `/projekty/[slug]` | Szczegółowy opis projektu wg standardu „Dowód Wpływu”. | `app/projekty/[slug]/page.tsx` |
| **Aktualności** | — | `/aktualnosci` | Blog/Komunikaty. Transparentna komunikacja bieżąca. | `app/aktualnosci/page.tsx` |
| | **Wpis** | `/aktualnosci/[slug]` | Pojedynczy komunikat/relacja. | `app/aktualnosci/[slug]/page.tsx` |
| **Kontakt** | — | `/kontakt` | Dane teleadresowe, Partnerzy, Mapa (statyczna). | `app/kontakt/page.tsx` |
| **Stopka** | **Polityka Prywatności** | `/polityka-prywatnosci` | Wymogi RODO. | `app/polityka-prywatnosci/page.tsx` |
| | **Deklaracja Dostępności** | `/deklaracja-dostepnosci` | Wymóg WCAG 2.2 / EAA. | `app/deklaracja-dostepnosci/page.tsx` |

**Kluczowe Decyzje Architektoniczne:**

* **Wydzielenie „Ładu Korporacyjnego”:** Utworzenie dedykowanej podstrony `/o-fundacji/lad-korporacyjny` jest bezpośrednią odpowiedzią na wymogi transparentności grantów publicznych (Priorytet 3 NOWEFIO). Sekcja ta musi być sterylna, pozbawiona marketingu, zawierająca wyłącznie „twarde” dane i pliki do pobrania, co ułatwia pracę audytorom.
* **Statyczna Natura Projektów:** Sekcja `/projekty` nie jest dynamicznie przeszukiwalną bazą danych, lecz statycznie generowanym katalogiem (SSG). Każdy projekt jest trwałym artefaktem (stroną HTML), co gwarantuje jego niezmienność i dostępność jako dowodu rzeczowego w długim okresie (Digital Permanence).
* **Brak Konta Użytkownika:** Całkowita rezygnacja z sekcji logowania (`/login`, `/rejestracja`) eliminuje konieczność przetwarzania danych osobowych na serwerze, co drastycznie upraszcza politykę prywatności i obowiązki RODO.

### 2.2. Design System: Kodyfikacja „Organicznej Geometrii”

Warstwa wizualna strony jest bezpośrednim przełożeniem strategii marki opisanej w Brand Booku oraz Strategii Identyfikacji Wizualnej. System ten, nazwany „Organiczną Geometrią”, łączy w sobie rygor inżynierski BDI z humanistycznym ciepłem Fundacji. Poniższa specyfikacja stanowi instrukcję dla deweloperów front-end do konfiguracji frameworka Tailwind CSS.

**Filozofia Tokenów Projektowych:**

* **Kolorystyka (Emocjonalna Dywergencja):** System odrzuca technologiczny chłód „Cyber Turkusu” BDI na rzecz ciepłych, ziemskich barw. Kolor wiodący to **Bursztyn/Terakota** (#E07A5F), symbolizujący energię, ciepło, pomoc (cegła/odbudowa) oraz regionalną tożsamość Pomorza (bursztyn). Kolor ten jest komplementarny do Granatu BDI, który pozostaje kolorem strukturalnym (tekst, ramy), zapewniając spójność rodziny marek.
* **Kształt (Semiotyka Opieki):** W kontrze do ostrych kątów BDI (symbolizujących technologiczną precyzję), FPbG stosuje formy obłe. Przyciski, karty i kontenery muszą mieć zaokrąglone rogi (radius xl lub 2xl), co podświadomie komunikuje bezpieczeństwo, łagodność i inkluzywność (Archetyp Opiekuna).
* **Typografia (Dialog Humanistyki z Technologią):** Utrzymano font Lato lub Inter dla treści podstawowych (Body), co stanowi „wspólny kod genetyczny” z BDI i zapewnia czytelność dokumentów. Jednakże, dla nagłówków (Display) wprowadzono nowoczesny szeryf (Slab Serif, np. Roboto Slab lub Fira Sans Slab), który wnosi element edukacyjny, literacki i tradycyjny, pasujący do misji społecznej.

**Tabela 2: Specyfikacja Tokenów (Tailwind Config Reference)**

| Kategoria Tokenu | Nazwa Tokenu (Semantyczna) | Wartość Techniczna (Hex/Rem) | Zastosowanie i Uzasadnienie Strategiczne |
| :--- | :--- | :--- | :--- |
| **Kolory** | `colors.primary.main` | #1C2B3A (Granat BDI) | Główny tekst, nagłówki strukturalne, stopka. Gwarant powagi i ładu (DNA BDI). |
| | `colors.accent.main` | #E07A5F (Terakota) | Główne przyciski CTA, ikony, wyróżnienia. Symbol ciepła i aktywnej pomocy. |
| | `colors.accent.hover` | #C46245 (Ciemna Terakota) | Stan interakcji dla elementów aktywnych. |
| | `colors.neutral.bg` | #F7F3E8 (Ciepły Piasek) | Tło sekcji, alternatywa dla sterylnej bieli. Buduje atmosferę „High-touch” zamiast „High-tech”. |
| | `colors.secondary.teal` | #2A9D8F (Morski/Sage) | Elementy sukcesu, tła informacyjne. Symbol nadziei i wzrostu. |
| **Typografia** | `font.heading` | "Roboto Slab, serif" | Nagłówki H1-H3. Humanistyczny kontrapunkt dla technicznej treści. |
| | `font.body` | "Lato, sans-serif" | Tekst akapitowy. Czytelność i spójność z dokumentacją BDI. |
| **Kształty** | `radius.button` | 9999px (Full Pill) | Przyciski. Maksymalna obłość symbolizująca brak kantów/barier. |
| | `radius.card` | 1.5rem (24px) | Karty projektów i sekcji. „Miękka” architektura informacji. |
| **Cienie** | `shadow.soft` | 0 10px 30px -10px rgba(...) | Subtelne uniesienie na tle piaskowym. |

### 2.3. Wymagania Szczegółowe dla Komponentów UI

Projekt interfejsu musi realizować konkretne cele komunikacyjne zdefiniowane w Specyfikacji Wdrożeniowej.

* **Sekcja Hero (Strona Główna):**
    * Musi łączyć **mapę Pomorza** (zakorzenienie regionalne) z abstrakcyjnymi liniami **mostów/splotów** (zasięg międzynarodowy).
    * Użycie SVG z animacją wejścia (fade-in) linii łączących Polskę z resztą świata.
    * Nagłówek H1 musi być czytelny i kontrastowy na ciemnym tle (Granat BDI), z akcentami w kolorze Terakoty.
* **Sekcja Wartości (Strona Główna):**
    * Cztery karty: Solidarność, Partnerstwo, Odwaga, Skuteczność.
    * Ikonografia: Zamiast technicznych piktogramów, należy użyć ikon linearnych o grubszej kresce (2px+), z zaokrąglonymi końcami linii (stroke-linecap: round), w kolorze `accent.main`.
    * Motywy: dłonie, sploty, tarcza.
* **Wizualizacja Strategii (Podstrona `/strategia`):**
    * Zamiast ściany tekstu, należy wdrożyć interaktywny komponent (np. Tabs lub Accordion), pozwalający przełączać się między trzema filarami: „Spójność Społeczna”, „Pomorska Brama”, „Solidarność bez Granic”.
    * Dla każdego filaru muszą zostać wyeksponowane **twarde KPI** (np. „65 osób”, „100% kwalifikacji”) przy użyciu powiększonej typografii (`text-4xl`, `font-heading`), co stanowi dowód na „Zorganizowaną Sprawczość”.
* **Karta Projektu (Szczegóły):**
    * Musi zawierać dedykowaną sekcję **„Metryka Projektu”** (Sidebar lub Topbar) z logotypami grantodawców i partnerów. Jest to kluczowe dla audytowalności (Visibility Rules programów UE).
    * Zdjęcia w galerii muszą być prezentowane w stylu reportażowym (autentyczność, emocje), unikając estetyki stockowej.

---

## Sekcja 3: Architektura Merytoryczna: Standard „Karty Projektu”

W ekosystemie FPbG, Karta Projektu nie jest tylko podstroną informacyjną; jest **cyfrowym dowodem rzeczowym**. Jej struktura, zdefiniowana w dokumencie Standard „Karty Projektu”_FPbG, musi zostać wiernie odwzorowana w kodzie strony, aby spełnić funkcję „audytowalnego repozytorium”.

### 3.1. Struktura Danych i Prezentacja (Model Techniczny)

Każdy projekt na stronie będzie instancją ustrukturyzowanego modelu danych (np. plik JSON lub Markdown z Frontmatterem). Poniższa tabela mapuje sekcje merytoryczne na wymagania techniczne.

**Tabela 3: Model Danych Karty Projektu (Standard Audytowalny)**

| Sekcja Karty | Pole Danych (Schema) | Typ Danych | Wymagania Prezentacyjne i Logicze |
| :--- | :--- | :--- | :--- |
| **Nagłówek Wizualny** | `title` | String | Tytuł H1. Musi być skoncentrowany na rezultacie. |
| | `heroImage` | URL | Duże, inspirujące zdjęcie reportażowe. Atrybut alt obowiązkowy (WCAG). |
| **Identyfikacja i Ład** | `status` | Enum | Wartości: Zrealizowany, W toku. Wizualizowane jako „Chip” (kolor zielony/żółty). |
| | `period` | String | Ramy czasowe (np. "2024-2025"). Kluczowe dla sprawozdawczości. |
| | `strategicPillar` | Enum | Powiązanie z Filarem I, II lub III Strategii. Linkuje do /strategia. |
| **Uzasadnienie (Story)** | `context` | Markdown | Tekst „Geneza Projektu”. Wyjaśnia problem i rolę FPbG jako Huba. |
| | `action` | Markdown | Opis działań. Styl narracyjny, empatyczny. |
| **Mierzalne Rezultaty** | `impactMetrics` | Array | Tablica obiektów `{ value: "30", label: "wózków" }`. Wyświetlana jako kafelki z dużymi liczbami (kolor Terakota). |
| | `beneficiaries` | String | Opis grupy docelowej (np. "43 osoby z krajów trzecich"). |
| **Ład i Transparentność** | `fundingSources` | Array | Lista źródeł: `{ name: "FEP", logo: "fep.svg" }`. Logotypy muszą być widoczne bez przewijania (Above the fold). |
| | `partners` | Array | Logotypy partnerów realizacyjnych (np. Fundacja Viktoriia). |
| | `auditLinks` | Array | Linki do mediów/dowodów zewnętrznych („Pisali o nas”). |

### 3.2. Funkcja Dowodowa (Proof of Impact)

Implementacja tego standardu na stronie WWW realizuje bezpośrednio wymogi audytowe. Dla audytora (np. z Urzędu Marszałkowskiego weryfikującego grant FEP), strona projektu staje się pierwszym punktem weryfikacji.

* **Sekcja Metryk:** Prezentuje twarde dane ("120 000 PLN wartości pomocy"), które muszą pokrywać się z dokumentacją księgową.
* **Sekcja Partnerów:** Udowadnia sieciowanie i potencjał koalicyjny (wymóg Filaru II Strategii).
* **Sekcja Finansowania:** Spełnia obowiązek informacyjny o źródłach finansowania (np. emblemat UE), co jest warunkiem kwalifikowalności kosztów.

---

## Sekcja 4: Algorytm Implementacji: Technologia Statyczna

Zgodnie z zasadą „Ekstremalnej Efektywności” i wymogiem braku formularzy, wdrożenie oparte jest na technologii **Static Site Generation (SSG)** z wykorzystaniem frameworka Next.js 14.

### 4.1. Stack Technologiczny i Konfiguracja Środowiska

Wybrany stos technologiczny zapewnia maksymalną szybkość, bezpieczeństwo i zerowe koszty utrzymania dynamicznego serwera.

* **Framework:** Next.js 14 (App Router). Wybór ten gwarantuje nowoczesną architekturę i łatwość generowania statycznego eksportu.
* **Tryb Budowania:** `output: 'export'` w pliku `next.config.js`. Powoduje to wygenerowanie czystych plików HTML/CSS/JS w katalogu `out`, które mogą być serwowane przez dowolny serwer statyczny (np. Nginx, Apache, S3).
* **Stylowanie:** Tailwind CSS v3.4 (lub nowszy). Konfiguracja oparta na tokenach zdefiniowanych w Sekcji 2.2.
* **Język:** TypeScript. Wymuszona ścisła typizacja danych (zwłaszcza dla modeli Projektów i Aktualności) zapobiega błędom w treści.

### 4.2. Plan Implementacji (Bloki Robocze)

Proces wdrożenia podzielony jest na dyskretne, sekwencyjne bloki, realizujące filozofię „pracy blokowej” BDI.

* **Blok 0: Fundamenty (Setup & Design System)**
    * Inicjalizacja repozytorium i konfiguracja Next.js z flagą `export`.
    * Implementacja `tailwind.config.ts` z paletą kolorów (Terakota/Granat) i fontami (Roboto Slab/Lato).
    * Stworzenie struktury katalogów: `app/` (strony), `components/` (UI), `content/` (dane JSON/MD), `public/` (assets).
* **Blok 1: Rdzeń Informacyjny (Statyczne Podstrony)**
    * Implementacja komponentów globalnych: Navbar (z obsługą mobile) i Footer (z sekcją na logotypy grantodawców).
    * Budowa stron statycznych: Strona Główna (Hero, Wartości), O Fundacji, Strategia, Kontakt.
    * Wdrożenie podstrony `/o-fundacji/lad-korporacyjny` jako prostej, czytelnej listy dokumentów do pobrania (PDF). Pliki te muszą fizycznie znajdować się w katalogu `public/documents/` dla zapewnienia stałych linków (Permalinks).
* **Blok 2: Silnik Projektowy (Dynamiczne Ścieżki w SSG)**
    * Stworzenie mechanizmu `generateStaticParams` dla ścieżek `/projekty/[slug]` i `/aktualnosci/[slug]`. Funkcja ta podczas budowania strony (build time) skanuje katalog `content/`, pobiera listę projektów i generuje dla każdego z nich osobny plik HTML.
    * Implementacja szablonów stron szczegółowych (`page.tsx`) odwzorowujących Standard Karty Projektu (Sekcja 3).
    * Implementacja stron indeksowych (`/projekty`, `/aktualnosci`) prezentujących kafelki z zajawkami.
* **Blok 3: Compliance i Deploy**
    * Audyt dostępności (WCAG 2.2 AA). Weryfikacja kontrastów, nawigacji klawiaturą, atrybutów alt dla obrazów.
    * Wdrożenie polityk prywatności i deklaracji dostępności.
    * Konfiguracja potoku CI/CD (np. GitHub Actions + Vercel), który automatycznie przebudowuje i publikuje stronę po każdym zatwierdzeniu zmian w repozytorium treści.

---

## Sekcja 5: Integracja z Agentami AI i Zarządzanie Treścią

Mimo braku CMS z panelem administracyjnym, strona jest ściśle zintegrowana z ekosystemem agentowym BDI, który pełni rolę „bezgłowego” (headless) edytora treści. Proces ten realizuje wizję „Symbiozy Human-AI”.

### 5.1. Rola Agentów w Procesie Publikacji

Zarządzanie treścią odbywa się poprzez edycję plików źródłowych (Markdown/JSON) i repozytorium dokumentów, przy wsparciu dedykowanych agentów AI.

* **Agent „Ola” (Kreatywny Producent Treści):**
    * **Zadanie:** Ola odpowiada za transformację surowych notatek z realizacji projektu (z systemu ClickUp) w gotowy plik Markdown dla strony.
    * **Instrukcja (Prompt):** „Jako Ola, przygotuj opis projektu dla strony FPbG. Używaj języka empatycznego, inkluzywnego ('My', 'Wspólnie'), unikaj technokratycznego żargonu BDI. Podkreślaj wartości: solidarność, wsparcie, dom. Tekst ma być sformatowany w Markdown, z wyodrębnionym frontmatterem zawierającym datę, status i tagi filarów strategicznych”.
    * **Efekt:** Ola generuje gotowy plik `.md`, który programista lub Lider Fundacji zatwierdza w repozytorium (Pull Request).
* **Agent „Karol” (Wizualny):**
    * **Zadanie:** Generowanie i dobór materiałów graficznych.
    * **Instrukcja:** „Generując grafiki dla FPbG, używaj palety kolorów: #E07A5F (Terakota) i #2A9D8F (Morski). Stosuj miękkie oświetlenie, unikaj cybernetycznych motywów. Skup się na ludzkich emocjach i interakcjach. Obrazy mają mieć format WebP i zawierać opis alternatywny (Alt Text) dla dostępności”.
* **Agent „Mariusz” (Compliance & Audit):**
    * **Zadanie:** Weryfikacja zgodności przed publikacją.
    * **Działanie:** Mariusz skanuje treść nowego projektu pod kątem wymogów formalnych. Sprawdza, czy dla projektu finansowanego z UE znajduje się klauzula o współfinansowaniu i czy w metadanych wskazano odpowiedni plik z logotypem (np. `flag_eu.svg`). Jeśli wykryje brak, blokuje publikację (fail build) lub zgłasza alert w ClickUp.

### 5.2. Przepływ Pracy (Workflow) „Bez Formularzy”

W modelu tym strona jest pasywnym odbiornikiem treści.

1.  **Trigger:** Zakończenie etapu projektu w świecie rzeczywistym (np. dostarczenie wózków).
2.  **Input:** Pracownik Fundacji wgrywa zdjęcia i notatkę do ClickUp/Drive.
3.  **Processing (AI):** Agenci (Ola/Karol) formatują te dane do struktury wymaganej przez stronę (JSON/Markdown).
4.  **Verification (Human):** Lider Fundacji akceptuje treść (zasada Human-in-the-Loop).
5.  **Build & Deploy:** System automatycznie przebudowuje stronę (Static Export) i publikuje nową wersję w ciągu kilku minut.
6.  Strona jest zawsze aktualna, szybka i bezpieczna.

---

## Sekcja 6: Ramy Zarządcze i Wymogi Formalne (Compliance)

### 6.1. Dostępność Cyfrowa (WCAG 2.2 AA)

Fundacja, działając na rzecz osób wykluczonych, musi traktować dostępność priorytetowo. Strona musi spełniać standardy WCAG 2.2 na poziomie AA, co jest również wymogiem Europejskiego Aktu o Dostępności (EAA) dla usług cyfrowych.

* **Kontrast:** Tekst podstawowy (Granat) na tle (Piasek/Biel) musi mieć stosunek kontrastu min. 4.5:1. Kolor akcentowy (Terakota) może być używany do dużych nagłówków (min. 3:1), ale nie do małego tekstu.
* **Fokus:** Wszystkie elementy interaktywne (linki, przyciski) muszą mieć wyraźny, widoczny stan fokusu (np. podwójna obwódka) dla nawigacji klawiaturą.
* **Responsywność:** Strona musi wspierać powiększanie tekstu do 200% bez utraty funkcjonalności i układu (Reflow).

### 6.2. Audytowalność Grantowa

W kontekście funduszy europejskich (Horizon Europe, FEP), strona WWW jest przedmiotem kontroli.

* **Logotypy:** Muszą być umieszczone „Above the fold” (widoczne bez przewijania) na stronach projektów finansowanych.
* **Trwałość:** Statyczna natura strony ułatwia archiwizację. Zaleca się robienie „zrzutów” (snapshotów) całej witryny po zakończeniu dużych projektów jako dowodu w razie audytu ex-post (do 5 lat po zakończeniu projektu).

### 6.3. Macierz Odpowiedzialności (RACI)

Dla zapewnienia skutecznego wdrożenia w strukturach SOB:

* **Sponsor (Zarząd FPbG):** Accountable (A) – Akceptacja strategii i budżetu.
* **Project Manager (BDI):** Responsible (R) – Koordynacja prac technicznych i harmonogramu.
* **Tech Lead:** Responsible (R) – Implementacja kodu Next.js i konfiguracja Tailwind.
* **Agent Ola/Karol (AI):** Consulted (C) – Generowanie wsadu treściowego i graficznego.
* **Compliance Officer (BDI):** Informed (I) – Weryfikacja zgodności z wymogami grantowymi (sekcja Ład Korporacyjny).

Zatwierdzenie niniejszego dokumentu uruchamia proces wdrożeniowy zgodnie z opisanym Algorytmem Implementacji, transformując cyfrową obecność Fundacji w potężne narzędzie budowania zaufania i systemowej sprawczości.