import { Component, h } from '@stencil/core';

@Component({
  tag: 'table-sort-header',
  styleUrl: 'table-sort-header.css',
  shadow: true,
})
export class TableSortHeader {
  render() {
    return <span>Sort me!</span>;
  }
}
