import { expect, test } from "@playwright/test";

test("strona główna prezentuje hub FPbG", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Fundacja Przyjaźń bez Granic/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    /Pomorski Hub współpracy międzynarodowej/i
  );
  await expect(page.getByRole("link", { name: /Skontaktuj się z nami/i })).toBeVisible();
});
