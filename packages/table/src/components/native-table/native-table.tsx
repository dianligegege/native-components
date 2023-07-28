import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'native-table',
  styleUrl: 'native-table.css',
  shadow: true,
})

export class NativeTable {
  createMyRender() {
    return <div>myRender</div>
  }
  render() {
    return (
      <Host>
        <native-table-render renderFun={this.createMyRender}></native-table-render>
      </Host>
    );
  }
}
