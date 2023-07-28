import { newSpecPage } from '@stencil/core/testing';
import { NativeTable } from '../native-table';

describe('native-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NativeTable],
      html: `<native-table></native-table>`,
    });
    expect(page.root).toEqualHtml(`
      <native-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </native-table>
    `);
  });
});
