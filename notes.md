__trick to debug__

```html
<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
```

__React knows what to do with an array of elements/components__

__`shape` means `object` in the module `prop-types`__

__untracked input__

```html
<input type="text" placeholder="Search" />
```

__functional component aka stateless functional component__

it does not have a state

```js
const Search = () => (
  <div>
    <h1>search</h1>
    <input type="text" placeholder="Search" />
  </div>
);
```

__es6 class component__

it has state

MUST have a render method and must return markup

```js
class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  render () {
    return (
      <div>
        <h1>search</h1>
        <input type="text" value={this.state.search} placeholder="Search" />
      </div>
    );
  }
}
```
__how to change state to a component__

```js
this.setState({yourState: 'newValue'})
```

```js
// this is wrong since it won't tell React something change
// Do NOT modify state directly
this.yourState = 'newValue';
```

__`propTypes` of a component are immutable__

__binding functions__

```js
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  handleSearchTermChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }
  render(){
    /* ... */
  }
}
```

__no binding: one (not recomended as each instace will have the same function)__


```js
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.handleSearchTermChange = (event) => {
      this.setState({
        searchTerm: event.target.value,
      });
    }
  }
  render(){
    /* ... */
  }
}
```

__no binding: two Class-Properties (requires to config .eslintrc.json and .babelrc)__


```js
class Search extends Component {
  state = {
    searchTerm: ''
  };
  // NOTE: event is a synthetic react event
  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  };
  render(){
    /* ... */
  }
}
```
