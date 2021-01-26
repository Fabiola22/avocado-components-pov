import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'sort-column',
  styleUrl: 'sort-column.scss',
  shadow: true,
})
export class sortColumn {
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
    this.oncolumnNameChanged(this.columnName);
  }

  async _init(): Promise<void> {
    this.document = this.window.document;
    this.root = this.document.documentElement;
  }

  @Prop() columnName: string;
  @Watch('columnName')
  oncolumnNameChanged(newValue:any) {
    this.columnName = newValue;
  }

  onToggle() {}

  render() {
    return (
      <span class="container">
        <span class="icon-container">
          <i class="fa fa-sort-up"></i>
          <i class="fa fa-sort-down"></i>
        </span>
        {this.columnName}
      </span>
    )
  }
}
