export type Value = {
  title: string;
  description: string;
  accent: string;
};

export type StrategyPillar = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  kpis: string[];
  initiatives: string[];
};

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  status: "Zrealizowany" | "W toku";
  period: string;
  strategicPillar: string;
  summary: string;
  metrics: Metric[];
  beneficiaries: string;
  context: string;
  action: string;
  partners: string[];
  fundingSources: string[];
  auditLinks: { label: string; url: string; thumbnail?: string }[];
};

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string;
};

export type Partner = {
  name: string;
  url?: string;
};

export const foundationInfo = {
  name: "Fundacja Przyjaźń bez Granic",
  tagline:
    "Pomorski Hub współpracy międzynarodowej i działań humanitarnych.",
  address: "ul. Hołdu Pruskiego 6, 80-321 Gdańsk",
  email: "kontakt@fpbg.org",
  phone: "+48 000 000 000",
  motto: "Empatyczni, sprawczy, zorganizowani.",
};

export const values: Value[] = [
  {
    title: "Solidarność",
    description:
      "Odpowiadamy na potrzeby osób w kryzysie, łącząc empatię z realnym działaniem.",
    accent: "SOLIDARNOŚĆ",
  },
  {
    title: "Partnerstwo",
    description:
      "Budujemy trwałe relacje i mosty pomiędzy Pomorzem a światem, aby zwielokrotniać wpływ.",
    accent: "PARTNERSTWO",
  },
  {
    title: "Odwaga",
    description:
      "Podejmujemy interwencje tam, gdzie inni się wahają, opierając się na doświadczeniu terenowym.",
    accent: "ODWAGA",
  },
  {
    title: "Skuteczność",
    description:
      "Łączymy humanistyczne podejście z mierzalnymi rezultatami i audytowalnym raportowaniem.",
    accent: "SKUTECZNOŚĆ",
  },
];

export const strategyPillars: StrategyPillar[] = [
  {
    id: "filar-i",
    title: "Spójność Społeczna na Pomorzu",
    subtitle: "„Witaj w domu” - Integracja i nowe kompetencje",
    description:
      "Budujemy mosty międzykulturowe w regionie, korzystając z ugruntowanego modelu działania.",
    kpis: [
      "65 osób objętych kompleksowym wsparciem do 2026 r.",
      "100% wskaźnik kwalifikacji w projekcie FEP",
    ],
    initiatives: [
      "Centrum Usług Integracyjnych (FEP 2025-2026)",
      "Poradnictwo w Centrach Wsparcia: prawne, psychologiczne, zawodowe",
    ],
  },
  {
    id: "filar-ii",
    title: "Pomorska Brama na Świat",
    subtitle: "„Mosty” - partnerstwa i mobilność międzynarodowa",
    description:
      "Pozycjonujemy FPbG jako międzynarodowe ramię dla lokalnych partnerów strategicznych.",
    kpis: [
      "Akredytacja Erasmus+ i EKS do 2026 r.",
      "3 misje gospodarcze i 5 nowych partnerstw do 2028 r.",
    ],
    initiatives: [
      "Programy wymiany (Erasmus+, EKS)",
      "Misje gospodarcze i kulturalne dla regionu",
    ],
  },
  {
    id: "filar-iii",
    title: "Solidarność bez Granic",
    subtitle: "„Pomocna Dłoń” - interwencje humanitarne",
    description:
      "Reaktywujemy i profesjonalizujemy działania pomocowe oraz rozwijamy partnerstwa humanitarne.",
    kpis: [
      "2 konwoje humanitarne do Ukrainy do końca 2026 r.",
      "Partnerstwo z dużą organizacją humanitarną do 2027 r.",
    ],
    initiatives: [
      "Kryzysowe interwencje humanitarne",
      "Partnerstwa międzynarodowe i konwoje pomocy",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "wozki-rehabilitacyjne-2024",
    title: "30 wozkow rehabilitacyjnych dla szpitala w Dzierzaznie",
    status: "Zrealizowany",
    period: "2024",
    strategicPillar: "Filar III: Solidarnosc bez Granic",
    summary:
      "Dwukierunkowa solidarnosc - 30 wozkow rehabilitacyjnych o wartosci 120 000 PLN trafilo do szpitala w Dzierzaznie jako gest wdziecznosci partnerow z Ukrainy.",
    metrics: [
      { label: "Wozki", value: "30" },
      { label: "Wartosc darowizny", value: "120 000 PLN" },
      { label: "Rok realizacji", value: "2024" },
    ],
    beneficiaries:
      "Pacjenci i zespol szpitala w Dzierzaznie oraz lokalna spolecznosc Pomorza",
    context:
      "Akcja Wozki dla Szpitala pokazala, ze wsparcie otrzymane przez naszych partnerow z Ukrainy wraca do Pomorza. Sprzet medyczny jest dowodem wdziecznosci i realnej wspolpracy transgranicznej.",
    action:
      "Zorganizowalismy transport i przekazanie 30 wozkow rehabilitacyjnych wraz z Fundacja Viktoriia i Stowarzyszeniem Otwarte Kaszuby, koordynujac logistyke i komunikacje ze szpitalem.",
    partners: [
      "Fundacja Viktoriia",
      "Stowarzyszenie Otwarte Kaszuby",
      "Szpital w Dzierzaznie",
    ],
    fundingSources: ["Fundacja Viktoriia (darowizna)", "wklad FPbG"],
    auditLinks: [
      {
        label: "Express Kaszubski",
        url: "https://expresskaszubski.pl/pl/11_wiadomosci/49157_dzierzazno-dzieki-polsko-ukrainskiej-wspolpracy-do-szpitala-trafilo-30-wozkow.html",
        thumbnail: "/screenshots/projekty/express-kaszubski.png",
      },
      {
        label: "Nasze Miasto Zukowo",
        url: "https://zukowo.naszemiasto.pl/spolecznicy-z-ukrainy-przekazali-wozki-inwalidzkie/ar/c14-9534271",
        thumbnail: "/screenshots/projekty/nasze-miasto-zukowo.png",
      },
      {
        label: "Radio Kaszebe",
        url: "https://radiokaszebe.pl/30-nowych-wozkow-rehabilitacyjnych-w-dzierzaznie/",
        thumbnail: "/screenshots/projekty/radio-kaszebe.png",
      },
      {
        label: "Dziennik Baltycki",
        url: "https://dziennikbaltycki.pl/spolecznicy-z-ukrainy-przekazali-wozki-inwalidzkie-szpitalowi-w-dzierzaznie/gh/c14-18106465",
        thumbnail: "/screenshots/projekty/dziennik-baltycki.png",
      },
    ],
  },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "mosty-solidarnosci-dzierzazno",
    title: "Mosty solidarności: 30 wózków rehabilitacyjnych dla szpitala",
    date: "2024-10-15",
    category: "Humanitarny",
    excerpt:
      "Transgraniczna akcja FPbG i Fundacji Viktoriia umocniła zasoby szpitala w Dzierżążnie.",
    body: `W 2024 roku FPbG koordynowała przekazanie 30 wózków rehabilitacyjnych o wartości 120 tys. zł dla szpitala w Dzierżążnie. Darowizna jest formą wdzięczności strony ukraińskiej za wcześniejsze wsparcie humanitarne.

To dowód na naszą zdolność do działania dwukierunkowego – pozyskujemy zasoby z zagranicy i kierujemy je na wzmocnienie pomorskich instytucji.`,
  },
  {
    slug: "fep-centrum-integracji-start",
    title: "Start Centrum Usług Integracyjnych (FEP 2025-2026)",
    date: "2025-01-10",
    category: "FEP",
    excerpt:
      "Rozpoczynamy program wsparcia kompetencji podstawowych i poradnictwa dla nowych mieszkańców Pomorza.",
    body: `Centrum Usług Integracyjnych zapewni kompleksowe wsparcie dla 65 osób, w tym poradnictwo prawne, psychologiczne oraz ścieżkę rozwoju kompetencji podstawowych. Program realizujemy w oparciu o sprawdzony model FPbG, z transparentnym raportowaniem efektów.`,
  },
];

export const partners: Partner[] = [
  { name: "Baltic Digital Institute (BDI)", url: "https://www.baltic-digital.org/" },
  { name: "Stowarzyszenie Otwarte Kaszuby", url: "https://otwartekaszuby.pl/" },
  { name: "Fundacja Pomorska" },
  { name: "Gmina Zdołbica" },
  { name: "Fundacja Viktoriia" },
];

export const governance = {
  register: {
    krs: "000000000",
    nip: "5842835506",
    regon: "525383411",
    address: "ul. Hołdu Pruskiego 6, 80-321 Gdańsk",
  },
  documents: [
    {
      label: "Statut Fundacji (PDF)",
      url: "https://drive.google.com/file/d/13KaPOJZH3ThClfRdFWsrskPhw-4ImdSi/view?usp=sharing",
    },
  ],
  board: [
    "Krzysztof Lizak - Prezes Zarządu",
    "Oksana Antsyferova - Członkini Zarządu",
  ],
};

export const contactInfo = {
  address: foundationInfo.address,
  email: foundationInfo.email,
  phone: foundationInfo.phone,
  hours: "Pon-Pt, 9:00-17:00",
  mapNote: "Spotkania po wcześniejszym umówieniu; preferujemy kontakt mailowy/telefoniczny.",
};
