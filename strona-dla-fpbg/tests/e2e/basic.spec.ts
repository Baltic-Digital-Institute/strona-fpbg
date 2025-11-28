import { expect, test } from "@playwright/test";

test("strona główna ładuje szkic FPbG", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Fundacja Przyjaźń bez Granic/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Szkielet nowej strony jest gotowy/i
  );
});
