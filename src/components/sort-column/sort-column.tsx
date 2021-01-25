import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sort-column',
  styleUrl: 'sort-column.css',
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

  componentDidLoad() {
  }

  async _init(): Promise<void> {
    this.document = this.window.document;
    this.root = this.document.documentElement;
  }

  @Prop() columnName: string;
  onToggle() {}

  render() {
    return (
      <span class="container">
        <ion-icon
          name="caret-up"
          class="absolute left-13 top-1">
        </ion-icon>
        <ion-icon
          name="caret-down"
          class="absolute top-6 left-13">
        </ion-icon>
        {this.columnName}
      </span>
    )
  }
}
