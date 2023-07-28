import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'native-table-render',
  styleUrl: 'native-table-render.css',
  shadow: true,
})
export class NativeTableRender {
  @Prop() renderFun: Function;


  render() {
    return (
      <Host>
        { this.renderFun() }
        <slot></slot>
      </Host>
    );
  }

}
