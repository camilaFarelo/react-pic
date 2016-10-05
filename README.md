# react-pic

[![Coverage Status](https://coveralls.io/repos/github/benox3/react-pic/badge.svg?branch=master)](https://coveralls.io/github/benox3/react-pic?branch=master)

A responsive image loading component.

## Installation

#### NPM:
```sh
npm install react-pic --save
```

#### CDN:
```html
<script src='https://unpkg.com/react-pic@0.0.1/dist/react-pic.js'></script>

<!-- or use minified -->
<script src='https://unpkg.com/react-pic@0.0.1/dist/react-pic.min.js'></script>
```

## Usage
```javascript
import React, { Component } from 'react';
import Pic from 'react-pic';

const images = [
  {
    width: 40,
    url: 'http://placehold.it/40?text=♥'
  },
  {
    width: 250,
    url: 'http://placehold.it/250?text=♥'
  }
];

export default class Example extends Component {
  render() {
    return <Pic images={images} />;
  }
}
```

## Props

| name         | required | type   | description                                                                                                                |
|--------------|----------|--------|----------------------------------------------------------------------------------------------------------------------------|
| images       | true     | Array  | The collection of images you would like to use as a source.                                                                |
| defaultIndex | false    | Number | The image object to use on initial render.                                                                                 |
| style        | false    | Object | Override the style object. **This will remove the default style:** `{ margin: '0 auto', maxWidth: '100%', width: '100%' }` |

## Testing

```sh
$ npm test
```

## Special Thanks

- To [remarkablemark](https://github.com/remarkablemark) and [tdlm](https://github.com/tdlm) for their feedback and review.

## License

[MIT](https://github.com/benox3/react-pic/blob/master/LICENSE)
