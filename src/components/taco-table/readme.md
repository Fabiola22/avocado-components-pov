# taco-table



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                                                              | Default                                                                              |
| --------- | --------- | ----------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `columns` | --        |             | `{ title: string; id: string; hasSorting: BooleanConstructor; class: string; }[]` | `[{       title:'',       id: '',       hasSorting: Boolean,       class: ""     }]` |
| `rows`    | --        |             | `[any]`                                                                           | `undefined`                                                                          |


## Events

| Event  | Description | Type               |
| ------ | ----------- | ------------------ |
| `sort` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [wrapper-component](../wrapper-component)

### Depends on

- [sort-column](../sort-column)

### Graph
```mermaid
graph TD;
  taco-table --> sort-column
  wrapper-component --> taco-table
  style taco-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
