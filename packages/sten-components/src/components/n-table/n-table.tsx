import { Component, Prop, h, Element, State, Method, Watch } from '@stencil/core';
import { Nrender } from './n-render';

@Component({
  tag: 'n-table',
  styleUrl: 'n-table.scss',
  // shadow: true,
  scoped: true,
})

export class NTable {
  @Prop() columns: Array<any> = [];
  @Prop() data: Array<any> = [];
  @Prop() height: string = '';
  @Prop() fixedHead: boolean = false;
  @Prop() tableClass: string = 'table-wrapper';

  @Element() el: HTMLElement;

  @State() tableShadowDom: HTMLElement = null;
  @State() tableDom: HTMLElement = null;
  @State() tableDomHeight: string = '';

  // 获取DOM
  @Method()
  async getDom() {
    if (!this.tableShadowDom) {
      this.tableShadowDom = this.el.querySelector('.fixed-shadow');
    }
    if (!this.tableDom) {
      this.tableDom = this.el.querySelector('table');
    }
  }

  // 设置阴影高度
  @Method()
  async setShadowHeight() {
    this.tableDomHeight = this.height || this.tableDom.offsetHeight + 'px';
  }

  @Watch('data')
  dataChangeHandle() {
    this.tableShadowDom = this.el.querySelector('.fixed-shadow');
    console.log('zl-tableShadowDom', this.tableShadowDom);
  }

  async componentDidRender() {
    await this.getDom();
    this.setShadowHeight();
  }

  render() {
    return (
      <div
        class={this.tableClass}
        style={{height: this.height}}
      >
        <slot name="my-slot"/>
        <table>
          <thead>
            <tr class={this.fixedHead ? 'fixed-top' : ''}>
              {
                this.columns.map((item) => <th
                  class={`
                    ${item.type === 'fixedRight' ? 'fixed-right' : ''}
                    ${item.type === 'fixedLeft' ? 'fixed-left' : ''}
                  `}
                >
                  {
                    item.title || <slot name={item.key}></slot>
                  }
                  {['fixedRight', 'fixedLeft'].includes(item.type) &&
                    <div
                      class="fixed-shadow"
                      style={{height: this.tableDomHeight}}
                    />
                  }
                </th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              this.data.map((row) => {
                return <tr class="tr">
                  {
                    this.columns.map((item) => {
                      return <td
                        class={`
                          ${item.type === 'fixedRight' ? 'fixed-right' : ''}
                          ${item.type === 'fixedLeft' ? 'fixed-left' : ''}
                      `}
                      >
                        {
                          item.render ?
                            <Nrender row={row} renderFun={item.render}></Nrender> :
                            row[item.key]
                        }
                      </td>
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table> 
      </div>
    );
  }
}
