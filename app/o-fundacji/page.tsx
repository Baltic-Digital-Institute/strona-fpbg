import { SectionHeading } from "@/components/SectionHeading";
import { governance } from "@/content/data";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 md:px-6 md:py-16">
      <section className="space-y-4">
        <SectionHeading
          eyebrow="O fundacji"
          title="Pomorski Hub współpracy międzynarodowej"
          as="h1"
          description="Fundacja Przyjaźń bez Granic buduje dwukierunkowe mosty – wzmacnia spójność społeczną w regionie i wspiera interwencje humanitarne za granicą."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Misja
            </p>
            <p className="mt-3 text-lg text-primary/85">
              Budujemy dwukierunkowe mosty między Pomorzem a światem. Wewnętrznie tworzymy spójne społeczeństwo, zewnętrznie jesteśmy bramą dla współpracy międzynarodowej i kanałem pomocy humanitarnej.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Wizja
            </p>
            <p className="mt-3 text-lg text-primary/85">
              Pomorze jako rozpoznawalny lider solidarności w regionie Morza Bałtyckiego – łączący kompetencje społeczne, gospodarcze i humanitarne.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
          <SectionHeading
            eyebrow="Nasze DNA"
            title="Historia i korzenie"
            description="Doświadczenie działań transgranicznych, filia w Ukrainie oraz strategia profesjonalizacji czynią FPbG wiarygodnym partnerem grantowym."
          />
          <ul className="mt-4 space-y-2 text-sm text-primary/80">
            <li>• Doświadczenie w interwencjach humanitarnych i projektach transgranicznych.</li>
            <li>• Udokumentowana zdolność operacyjna – akredytacja filii FPbG w Ukrainie (1.08.2023).</li>
            <li>• Powrót do autentycznych korzeni organizacji poprzez profesjonalizację procesów.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-primary/10 bg-sand p-6 shadow-sm shadow-primary/5">
          <SectionHeading
            eyebrow="Dane formalne"
            title="Przejrzystość i ład"
            description="Zestaw danych niezbędnych dla grantodawców i audytorów."
          />
          <dl className="mt-4 space-y-2 text-sm text-primary/85">
            <div className="flex gap-2">
              <dt className="w-24 font-semibold">KRS</dt>
              <dd>{governance.register.krs}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-24 font-semibold">NIP</dt>
              <dd>{governance.register.nip}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-24 font-semibold">REGON</dt>
              <dd>{governance.register.regon}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-24 font-semibold">Adres</dt>
              <dd>{governance.register.address}</dd>
            </div>
          </dl>
          <div className="mt-4 space-y-2">
            {governance.documents.map((doc) => (
              <a
                key={doc.url}
                href={doc.url}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
              >
                ↗ {doc.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
        <SectionHeading
          eyebrow="Organy i zespół"
          title="Zarząd i Rada Fundacji"
          description="Struktura zarządcza FPbG, która zapewnia transparentność, odpowiedzialność i ciągłość decyzyjną."
        />
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {governance.board.map((person) => (
            <li
              key={person}
              className="rounded-2xl border border-primary/10 bg-sand px-4 py-3 text-sm font-semibold text-primary"
            >
              {person}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
