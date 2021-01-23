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
      hasSorting: Boolean
    }
  ];

  @Prop() rows: [any]; // Change this to state?

  render() {
    return(
      <table>
        <tr>
          { this.columns.map(column => <th>{column.title}</th>) }
        </tr>
          {
            this.rows.map(row =>
              <tr> { this.columns.map(column => <td>{row[column.id]}</td>) } </tr>
            )
          }
      </table>
    )
  }
}
