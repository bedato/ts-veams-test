
# tsTest (`component`)

## Description

This blueprint is based on the blueprint of Veams.

> Just place a generic quote for your type.

-----------

## Requirements
- [@veams/core](https://github.com/Veams/core) - Veams Core Framework.
- [@veams/component](https://github.com/Veams/component) - Veams Component Base Class.

-----------

## Installation

### Installation with Veams from local machine

``` cmd
veams install bp absolute/filepath/to/ts-test
```

### Installation with npm or Veams

When published on npm you can install the component by executing:

``` cmd
veams install c veams-component ts-test
```

-----------

## Fields

### `c-ts-test`


| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| settings.tsTestClasses | String | | _Modifier classes for component._ | 
| settings.tsTestContextClass | String | `default` |  - _Context class of component._ |  
| settings.tsTestJsOptions | Object | | _JavaScript options which gets stringified._ | 

#### Content
| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| content.tsTestField | String | |  _Please add a description!_ |

-------------

## JavaScript Options

The module gives you the possibility to override default JS options:

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| optionOne | String | `is-option` | _Please add a description!_ |

------------

## Sass Options

| Variable | Value | Description |
|:--- | :---: |:--- |
| $ts-test-my-custom-var | | _Please add a description!_ |
