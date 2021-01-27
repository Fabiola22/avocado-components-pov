import { Component, Prop, h, Watch } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core/internal';

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
  @Event() sort: EventEmitter<any>;

  @Prop() columns = [{
      title:'',
      id: '',
      hasSorting: Boolean,
      class: ""
    }];
  @Prop() rows: [any];
  @Watch('columns')
  @Watch('rows')

  onSortHandler(_event) {
    const orderDetails = _event.detail;
    this.sort.emit(orderDetails);
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            { this.columns.map(column =>
              <th>
                { column.hasSorting ?
                  <sort-column
                    active-column={column.id}
                    onToggle={(ev:any) => this.onSortHandler(ev)}
                    column-name={column.title}
                  >
                  </sort-column> :

                  column.title
                }
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
