React JSON Translation component based on @cristianbote's original, tweaked for React v18

Overview
--------

### Instalation
```
npm install --save react-translate-json
```

### Getting started
Just think of it in these steps:

1. Define your translation directory
1. Define the current user locale code, e.g. `'en'`, `'de'`, `'fr'` and so on.
1. Optionally use a fallback language code. Usually `'en'`.

Then, use the thin, built-in component, to translate your strings.

#### Example
The following examples are based on `create-react-app` results.

```json
// This is our json file, with translations
{
  "HELLO": "Hi {{user}}!",
  "PAGES": {
    "HOME": {
      "TITLE": "Home Page Title"
    }
  }
}
```

```js
// This is usually our index.js
import React from 'react';
import ReactDOM from 'react-dom';
// Import the TranslateProvider function to provide the service with your settings
import { TranslateProvider } from 'react-translate-json';
import App from './App';

const translationOptions = {
    pathPrefix: '/translations', // Path to your translations
    locale: 'en', // User current locale
    fallbackLocale: 'en' // Fallback locale
};

// That's it! You are all set!

ReactDOM.render(
    <TranslateProvider {...translationOptions}>
        <App />
    </TranslateProvider>,
    document.getElementById('root')
);
```

Now, you can easily add in your translations by importing the component.

```js
// App.js
import React, { Component } from 'react';
import { Translate } from 'react-translate-json/react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* Render-prop based */}
          <Translate label="PAGES.HOME.TITLE" render={(res) => (
            <h1 className="App-title">{res}</h1>
          )}/>

          {/* Regular component usage */}
          <h2 className="greet">
              <Translate label="HELLO" params={{user: 'John'}}/>
          </h2>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

#### Preact
```js
// App.js
import { Component, h } from 'preact';
import { Translate } from 'react-translate-json/preact';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2 className="greet">
              <Translate label="HELLO" params={{user: 'John'}}/>
          </h2>
      </div>
    );
  }
}

export default App;
```