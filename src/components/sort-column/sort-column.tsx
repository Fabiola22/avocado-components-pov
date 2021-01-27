import { Component, h, Prop, Watch } from '@stencil/core';
import { Event, EventEmitter, State } from '@stencil/core/internal';

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

  @State() orderBy = '';
  @Event() toggle: EventEmitter<any>;

  onToggleHandler(_event: MouseEvent) {
    this.orderBy = this.orderBy == 'asc' ? 'desc' : 'asc';
    const orderInfo = {
      orderby: this.orderBy,
      activeColumn: this.activeColumn
    }
    this.toggle.emit(orderInfo);
  }

  @Prop() columnName: string;
  @Prop() activeColumn: string;
  @Watch('columnName')
  @Watch('activeColumn')

  render() {
    const upIsActive = (this.orderBy === 'asc') ? 'active-column' : '';
    const downIsActive = (this.orderBy === 'desc') ? 'active-column' : '';
    return (
      <span class="container" onClick={(event) => this.onToggleHandler(event)}>
        <span class="icon-container">
          <i class="fa fa-sort-up" id={upIsActive}></i>
          <i class="fa fa-sort-down" id={downIsActive}></i>
        </span>
        {this.columnName}
      </span>
    )
  }
}
