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
  }

  async _init(): Promise<void> {
    this.document = this.window.document;
    this.root = this.document.documentElement;
  }

  @Prop() columnName: string;
  @Watch('columnName')
  // onColumnNameChanged(newValue:any) {
  //   this.columnName = newValue;
  // }

  // componentShouldUpdate(){
  //   this.onColumnNameChanged(this.columnName);
  // }

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
