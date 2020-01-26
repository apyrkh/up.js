# up.js

`up.js` allows to load, prefetch and import css, js, images and etc. on demand in right order.

## How to use

Download `up.js` manually or install via `npm`

```
npm install -S up.js
```

Load scripts and apply them in right order

```javascript
up
  .js('path/to/your/script1.js', function() { console.log('script1 loaded') })
  .js('path/to/your/script2.js')
  .js('path/to/your/script3.js', function() { console.log('script3 loaded') })
```

Load styles

```javascript
up
  .link('path/to/your/styles1.css', 'stylesheet')
  .link('path/to/your/styles2.css', 'stylesheet')
  .link('path/to/your/styles3.css', 'stylesheet')
```

Prefetch resources

```javascript
up
  .link('path/to/your/resource.css', 'prefetch')
  .link('path/to/your/resource.js', 'prefetch')
  .link('path/to/your/resource.png', 'prefetch')
```

Import resources

```javascript
up
  .link('path/to/your/file1.html', 'import')
  .link('path/to/your/file2.html', 'import')
  .link('path/to/your/file3.html', 'import')
```


* Copyright (c) 2015 Aliaksandr Pyrkh
* License: MIT
