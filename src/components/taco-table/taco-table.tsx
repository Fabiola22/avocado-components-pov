import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'taco-table',
  styleUrl: 'taco-table.css',
  shadow: true,
})
export class TacoTable {
  @Prop() columns =
   [
    {
      title:'',
      id: '',
      hasSorting: Boolean,
      class: ""
    }
  ];


  @Prop() rows: [any]; // Change this to state?

  render() {
    return(
      <table>
        <thead>
          <tr>
            { this.columns.map(column =>
              <th>
                { column.hasSorting ? <sort-column  title={column.title} class="r-margin-5"></sort-column> : column.title }
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
