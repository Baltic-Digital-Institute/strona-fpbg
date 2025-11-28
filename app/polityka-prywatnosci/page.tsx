export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 px-4 py-12 md:px-6 md:py-16">
      <h1 className="font-serif text-3xl text-primary md:text-4xl">
        Polityka prywatności
      </h1>
      <p className="text-sm text-primary/80">
        Strona Fundacji Przyjaźń bez Granic działa w modelu statycznym (SSG). Nie gromadzimy danych osobowych, nie stosujemy formularzy ani mechanizmów logowania.
      </p>
      <ul className="space-y-2 text-sm text-primary/80">
        <li>• Pliki cookies: stosowane wyłącznie w zakresie niezbędnym do działania serwisu statycznego.</li>
        <li>• Brak profilowania, brak śledzenia użytkowników.</li>
        <li>• Kontakt z fundacją możliwy mailowo lub telefonicznie; dane udostępniane dobrowolnie używane są wyłącznie do udzielenia odpowiedzi.</li>
      </ul>
      <p className="text-sm text-primary/80">
        W sprawach dotyczących prywatności prosimy o kontakt pod adresem: {`kontakt@fpbg.org`}.
      </p>
    </div>
  );
}
