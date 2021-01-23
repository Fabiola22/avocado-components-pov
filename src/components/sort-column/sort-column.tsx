import { Component, h } from '@stencil/core';

@Component({
  tag: 'sort-column',
  styleUrls: ['../../assets/fontawesome/css/all.css', 'sort-column.css'],
  shadow: false,
})
export class sortColumn {
  onToggle() {}

  render() {
    return (
      <span class="cursor-pointer">
        <i class="fa fa-sort-up cursor-pointer"></i>
        <i class="fa fa-sort-down cursor-pointer l-margin-minus-8"></i>
      </span>
    )
  }
}
