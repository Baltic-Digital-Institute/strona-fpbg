import { SectionHeading } from "@/components/SectionHeading";
import { contactInfo, partners } from "@/content/data";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 md:px-6 md:py-16">
      <SectionHeading
        eyebrow="Kontakt i partnerzy"
        title="Zostan czescia mostow FPbG"
        as="h1"
        description="Jestesmy integralna czescia ekosystemu, ktory zapewnia technologiczne i organizacyjne wsparcie. Skontaktuj sie, aby dolaczyc do naszych inicjatyw."
      />

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
          <h2 className="text-lg font-semibold text-primary">Dane kontaktowe</h2>
          <ul className="mt-3 space-y-2 text-sm text-primary/80">
            <li>Adres: {contactInfo.address}</li>
            <li>Email: {contactInfo.email}</li>
            <li>Telefon: {contactInfo.phone}</li>
            <li>Godziny pracy: {contactInfo.hours}</li>
          </ul>
          <p className="mt-3 rounded-2xl bg-sand px-4 py-3 text-sm text-primary/80">
            {contactInfo.mapNote}
          </p>
        </div>

        <div className="rounded-3xl border border-primary/10 bg-sand p-6 shadow-sm shadow-primary/5">
          <h2 className="text-lg font-semibold text-primary">Partnerzy systemowi</h2>
          <p className="mt-2 text-sm text-primary/80">
            Wspolpraca buduje sie na relacjach i zaufaniu. Ponizej lista partnerow, ktorzy wzmacniaja nasze dzialania.
          </p>
          <ul className="mt-3 space-y-2 text-sm font-semibold text-primary">
            {partners.map((partner) => (
              <li
                key={partner.name}
                className="rounded-2xl border border-primary/10 bg-white px-4 py-2"
              >
                {partner.url ? (
                  <a
                    href={partner.url}
                    className="text-accent hover:text-accent-hover"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {partner.name}
                  </a>
                ) : (
                  <span>{partner.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
