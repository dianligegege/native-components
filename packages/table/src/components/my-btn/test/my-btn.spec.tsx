import { newSpecPage } from '@stencil/core/testing';
import { MyBtn } from '../my-btn';

describe('my-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyBtn],
      html: `<my-btn></my-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <my-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-btn>
    `);
  });
});
