import { newE2EPage } from '@stencil/core/testing';

describe('my-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-btn></my-btn>');

    const element = await page.find('my-btn');
    expect(element).toHaveClass('hydrated');
  });
});
