import { newE2EPage } from '@stencil/core/testing';

describe('native-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<native-table></native-table>');

    const element = await page.find('native-table');
    expect(element).toHaveClass('hydrated');
  });
});
