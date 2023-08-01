import { Component, Prop, h } from '@stencil/core';
import { Nrender } from './n-render';

@Component({
  tag: 'n-table',
  styleUrl: 'n-table.scss',
  shadow: true,
})

export class NTable {
  @Prop() columns: Array<any> = [];

  @Prop() data: Array<any> = [];

  @Prop() height: string = 'auto';

  // @Prop() tableClass: string = 'table-wrapper';

  render() {
    return (
      <div
        class='table-wrapper'
        style={{height: this.height}}
      >
        <slot name="my-slot"/>
        <table>
          <thead>
            <tr>
              {
                this.columns.map((item) =>  {
                  return <td>{item.title}</td>;
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.data.map((row) => {
                return <tr class="tr">
                  {
                    this.columns.map((item) => {
                      return <td >
                        {/* {item.render(row)} */}
                        <Nrender row={row} renderFun={item.render}></Nrender>
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
