import { Component, Prop, h, State } from '@stencil/core';

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

  @Prop() rows: [any];


  render() {
    return(
      <table>
        {/* Header */}
        <tr>
          {
            this.columns.map(column => <th>{column.title}</th>)
          }
        </tr>
        {/* Body */}
        {
          this.rows.map(row =>
            <tr>
              <td>{row.name}</td>
              <td>{row.address}</td>
              <td>{row.date}</td>
              <td>{row.order}</td>
            </tr>
          )
        }
      </table>
    )
  }
}
