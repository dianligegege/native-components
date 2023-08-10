import { Component, Prop, h, Element, State, Method, Watch } from '@stencil/core';
import { combineThrottle } from '../../utils/tools';
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
  @State() tableWrapperDom: HTMLElement = null;
  @State() tableDomHeight: string = '';
  @State() initEnd: boolean = false;
  @State() tableWrapperWidth: number = 0;
  @State() tableWidth: number = 0;
  @State() shadowClass: string = 'scroll-none';
  @State() myResizeObserver;

  // 获取DOM
  @Method()
  async getDom() {
    if (!this.tableShadowDom) {
      this.tableShadowDom = this.el.querySelector('.fixed-shadow');
    }
    if (!this.tableDom) {
      this.tableDom = this.el.querySelector('table');
    }
    if (!this.tableWrapperDom) {
      this.tableWrapperDom = this.el.querySelector('.__n_table_wrapper');
    }
    this.initEnd = true;
  }

  // 获取需要的宽高
  @Method()
  async getSize() {
    this.tableWrapperWidth = this.tableWrapperDom.clientWidth;
    this.tableWidth = this.tableDom.clientWidth;
    this.tableDomHeight = this.tableDom.offsetHeight + 'px';
  }

  // 判断阴影是否展示
  @Method()
  async chargeShadow() {
    const scrollRight = this.tableWidth - this.tableWrapperWidth;
    if (scrollRight <= 0) {
      this.shadowClass = 'scroll-none';
      return;
    }
    const { scrollLeft } = this.tableWrapperDom;
    const isScrollLeft = scrollLeft === 0;
    const isScrollRight = Math.abs(scrollRight - scrollLeft) < 1;

    if (isScrollLeft) {
      this.shadowClass = 'scroll-left';
    } else if (isScrollRight) {
      this.shadowClass = 'scroll-right';
    } else {
      this.shadowClass = 'scroll-middle';
    }
  }

  // 监听scroll 和 resize
  @Method()
  async watchScroll() {
    const scrollHandle = combineThrottle(() => {
      this.chargeShadow();
    }, 0);

    this.myResizeObserver = new ResizeObserver(() => {
      this.getSize();
      scrollHandle();
    })

    this.tableWrapperDom.addEventListener('scroll', scrollHandle);
    this.myResizeObserver.observe(this.tableWrapperDom);
  }

  // 数据初始化完毕
  @Watch('initEnd')
  watchInitEnd() {
    this.getSize();
    this.watchScroll();
  }

  componentDidRender() {
    this.getDom();
  }

  disconnectedCallback() {
    this.myResizeObserver.unobserve(this.tableWrapperDom);
  }

  render() {
    return (
      <div
        class={`${this.tableClass}  __n_table_wrapper ${this.shadowClass}`}
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
