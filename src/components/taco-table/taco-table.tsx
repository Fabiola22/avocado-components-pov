import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'taco-table',
  styleUrl: 'taco-table.scss',
  shadow: true,
})
export class TacoTable {
  container: HTMLElement;
  window: Window | any;
  document: Document | any;
  root:Element | any;
  _element: any;

  init() {
    return Promise.resolve(this._init());
  }

  async componentWillLoad() {
    this.window = window;
    await this._init();
  }

  async _init(): Promise<void> {
    this.document = this.window.document;
    this.root = this.document.documentElement;
  }

  componentShouldUpdate(){
    this.onColumnChanged(this.columns);
    this.onRowsChanged(this.rows);
  }

  @Prop() columns = [{
      title:'',
      id: '',
      hasSorting: Boolean,
      class: ""
    }];
  @Prop() rows: [any];
  @Watch('columns')
  @Watch('rows')

  onColumnChanged(newValue:any) {
    this.columns = newValue;
  }

  onRowsChanged(newValue:any) {
    this.rows = newValue;
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            { this.columns.map(column =>
              <th>
                { column.hasSorting ? <sort-column  column-name={column.title} class="red"></sort-column> : column.title }
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {
            this.rows.map(row =>
              <tr>
              {
                this.columns.map(column => <td class={column.class}>{row[column.id]}</td>)
              }
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}
