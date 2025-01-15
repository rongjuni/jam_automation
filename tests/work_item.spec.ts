import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://jam.up.railway.app/login");
});

const datadata = [
  {
    name: "djseo",
    pass: "djseo",
  },
  { name: "marco", pass: "marcoseo" },
];

test.describe("work item testing", () => {
  test("should login", async ({ page }) => {
    // Locate the input element by ID
    const elementByIdUserName = page.locator("#username");
    // Ensure the element is visible
    await expect(elementByIdUserName).toBeVisible();
    // Perform actions, e.g., typing into the input
    await elementByIdUserName.fill(datadata[0].name);
    await page.pause();

    // const elementByIdPassword = page.getByLabel("#password");
    const elementByIdPassword = page.locator("#password");
    await expect(elementByIdPassword).toBeVisible();
    await elementByIdPassword.fill("djseo");
    await page.pause();

    const grabLoginButton = page.getByRole("button", { name: "Login" });
    await grabLoginButton.click();
    // await page.pause();
  }); // Should Login ends

  test("confirm the posting", async ({ page }) => {
    const grabPosting = page.getByText("Hello World");
    await expect(grabPosting).toBeVisible();
    await grabPosting.click();
    await page.pause();
  });
}); // describe ends
