export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 px-4 py-12 md:px-6 md:py-16">
      <h1 className="font-serif text-3xl text-primary md:text-4xl">
        Deklaracja dostępności
      </h1>
      <p className="text-sm text-primary/80">
        Fundacja Przyjaźń bez Granic zobowiązuje się zapewnić dostępność serwisu internetowego zgodnie z ustawą o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.
      </p>
      <ul className="space-y-2 text-sm text-primary/80">
        <li>• Kontrast kolorystyczny spełnia wymagania WCAG 2.2 AA.</li>
        <li>• Strona jest responsywna i wspiera powiększenie tekstu do 200%.</li>
        <li>• Elementy interaktywne posiadają wyróżniony fokus dla nawigacji klawiaturą.</li>
      </ul>
      <p className="text-sm text-primary/80">
        W przypadku problemów z dostępnością skontaktuj się: kontakt@fpbg.org. Na zgłoszenia odpowiadamy w terminie 14 dni roboczych.
      </p>
    </div>
  );
}
