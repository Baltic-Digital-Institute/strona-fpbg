import { SectionHeading } from "@/components/SectionHeading";
import { governance } from "@/content/data";

export default function GovernancePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 md:px-6 md:py-16">
      <SectionHeading
        eyebrow="Ład korporacyjny"
        title="Transparentność zgodna z wymogami NOWEFIO"
        description="Dedykowana podstrona spełniająca wymagania grantowe: dane rejestrowe, dokumenty do pobrania, organy zarządzające oraz rejestr zapytań ofertowych."
      />

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
          <h3 className="text-lg font-semibold text-primary">Rejestry i dokumenty</h3>
          <dl className="mt-4 space-y-2 text-sm text-primary/85">
            <div className="flex gap-2">
              <dt className="w-28 font-semibold">Statut</dt>
              <dd>
                <a
                  href={governance.documents[0]?.url}
                  className="text-accent hover:text-accent-hover"
                >
                  Aktualny statut fundacji
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-28 font-semibold">KRS</dt>
              <dd>{governance.register.krs}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-28 font-semibold">NIP</dt>
              <dd>{governance.register.nip}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-28 font-semibold">REGON</dt>
              <dd>{governance.register.regon}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-primary/10 bg-sand p-6 shadow-sm shadow-primary/5">
          <h3 className="text-lg font-semibold text-primary">Sprawozdawczość finansowa</h3>
          <p className="mt-3 text-sm text-primary/80">
            Sprawozdania finansowe publikujemy w formie plików PDF. Każdy raport jest
            podpisany cyfrowo i dostępny dla grantodawców w stałej lokalizacji.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-primary/85">
            <li>• Sprawozdanie finansowe 2023 – w przygotowaniu</li>
            <li>• Sprawozdanie finansowe 2024 – publikacja po zakończeniu roku</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
          <h3 className="text-lg font-semibold text-primary">Organy zarządzające</h3>
          <p className="mt-2 text-sm text-primary/80">
            Skład Zarządu i Rady Fundacji wraz z zasadami funkcjonowania, zgodnie z
            wymogami transparentności grantów publicznych.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-primary/85">
            {governance.board.map((person) => (
              <li key={person} className="rounded-2xl bg-sand px-4 py-2 font-semibold text-primary">
                {person}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
          <h3 className="text-lg font-semibold text-primary">Zamówienia i przetargi</h3>
          <p className="mt-2 text-sm text-primary/80">
            Rejestr zapytań ofertowych oraz zamówień publicznych publikujemy w tym miejscu,
            aby spełnić wymagania transparentności wydatkowania środków (benchmark Fundacji Gdańskiej).
          </p>
          <div className="mt-4 rounded-2xl border border-dashed border-primary/20 bg-sand px-4 py-3 text-sm text-primary/70">
            Aktualnie brak otwartych zapytań ofertowych. Nowe ogłoszenia dodajemy natychmiast po publikacji.
          </div>
        </div>
      </section>
    </div>
  );
}
