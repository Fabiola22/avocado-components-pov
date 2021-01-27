import { Component, h } from '@stencil/core';

@Component({
  tag: 'wrapper-component',
  styleUrl: 'wrapper-component.css',
  shadow: true,
})
export class WrapperComponent {
  container: HTMLElement;
  window: Window | any;
  document: Document | any;
  root:Element | any;
  _element: any;
  rows: any = [];

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
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    this.rows = await response.json();
  }
  columns:any = [
    {
      title: 'Name',
      id: 'name',
      hasSorting: true,
      class: "primary-blue"
    },
    {
      title: 'UserName',
      id: 'username',
      hasSorting: true,
    },
    {
      title: 'Email',
      id: 'email',
      hasSorting: false
    },
    {
      title: 'Id',
      id: 'id',
      hasSorting: true
    }
  ];
  onSortColumn(e: { detail: any; }) {
    console.log('this is from the wrapper', e.detail);
  }
  render() {
    return <div>
      <taco-table
        onSort={(ev:any) => this.onSortColumn(ev)}
        columns={this.columns}
        rows={this.rows}>
      </taco-table>
    </div>;
  }
}
