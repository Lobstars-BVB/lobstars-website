import { test, expect } from '@playwright/test';

test('contact form sends correct data to emailjs', async ({ page }) => {
  let capturedBody = null;

  await page.route('**/api.emailjs.com/**', async (route) => {
    capturedBody = route.request().postDataJSON();
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ status: 200, text: 'OK' }),
    });
  });

  await page.goto('http://localhost:4321/');
  await page.getByRole('button', { name: 'Contact' }).click();
  await page.locator('input[name="name"]').fill('testName');
  await page.locator('input[name="email"]').fill('testemail@test.com');
  await page.getByRole('spinbutton').fill('123');
  await page.locator('input[name="home_team"]').fill('CBEStars');
  await page.getByRole('radio', { name: 'Join one/few training/s' }).click();
  await page.locator('textarea[name="message"]').fill('stmessage');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Thanks for contacting us!')).toBeVisible();

  expect(capturedBody).not.toBeNull();
  expect(capturedBody.service_id).toBe('default_service');
  expect(capturedBody.template_id).toBe('template_aillhuc');
  expect(capturedBody.template_params).toEqual({
    from_name: 'testName',
    from_email: 'testemail@test.com',
    message: [
      'Years of experience: 123',
      'Home team: CBEStars',
      'Commitment: Join one/few training/s',
      'Message: stmessage',
    ].join('\n'),
  });
});

test('contact form with company field blocks emailjs call', async ({ page }) => {
  let emailjsCalled = false;

  await page.route('**/api.emailjs.com/**', async (route) => {
    emailjsCalled = true;
    await route.continue();
  });

  await page.goto('http://localhost:4321/');
  await page.getByRole('button', { name: 'Contact' }).click();
  await page.locator('input[name="name"]').fill('bot');
  await page.locator('input[name="email"]').fill('bot@spam.com');
  await page.getByRole('spinbutton').fill('0');
  await page.locator('input[name="home_team"]').fill('Bots FC');
  await page.getByRole('radio', { name: 'Join one/few training/s' }).click();
  await page.evaluate(() => {
    document.querySelector('input[name="company"]').value = 'ACME Corp';
  });
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Thanks for contacting us!')).toBeVisible();
  expect(emailjsCalled).toBe(false);
});
