import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-btn',
  styleUrl: 'my-btn.css',
  shadow: true,
})
export class MyBtn {

  render() {
    return (
      <Host>
        <button class="my-btn"><slot></slot></button>
      </Host>
    );
  }

}
