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

  init() {
    return Promise.resolve(this._init());
  }

  async componentWillLoad() {
    this.window = window;
    await this._init();
  }

  componentDidLoad() {
  }

  async _init(): Promise<void> {
    this.document = this.window.document;
    this.root = this.document.documentElement;
  }
  columns:any = [
    {
      title: 'Name',
      id: 'name',
      hasSorting: true,
      class: "primary-blue"
    },
    {
      title: 'Date',
      id: 'date',
      hasSorting: true,
    },
    {
      title: 'Address',
      id: 'address',
      hasSorting: false
    },
    {
      title: 'Order Info',
      id: 'order',
      hasSorting: true
    }
  ];
  rows:any =  [
    {
      name: 'Kim Parrish',
      address: '4420 Valley Street, Garnerville, NY 10923',
      date: '07/11/2020',
      order: '87349585892118',
    },
    {
      name: 'Michele Castillo',
      address: '637 Kyle Street, Fullerton, NE 68638',
      date: '07/11/2020',
      order: '58418278790810',
    },
    {
      name: 'Eric Ferris',
      address: '906 Hart Country Lane, Toccoa, GA 30577',
      date: '07/10/2020',
      order: '81534454080477',
    },
    {
      name: 'Gloria Noble',
      address: '2403 Edgewood Avenue, Fresno, CA 93721',
      date: '07/09/2020',
      order: '20452221703743',
    },
    {
      name: 'Darren Daniels',
      address: '882 Hide A Way Road, Anaktuvuk Pass, AK 99721',
      date: '07/07/2020',
      order: '22906126785176',
    },
    {
      name: 'Ted McDonald',
      address: '796 Bryan Avenue, Minneapolis, MN 55406',
      date: '07/07/2020',
      order: '87574505851064',
    },
  ];
  render() {
    return <div>
      <taco-table columns={this.columns} rows={this.rows}></taco-table>
    </div>;
  }
}
