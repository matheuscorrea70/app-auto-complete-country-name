# Questions

1. What is the difference between Component and PureComponent?
Give an example where it might break my app.

The class component extended by the `Component` will re-render every time that your parent re-renders and the class component extended by the `PureComponent` will re-render just if at least one prop that was passed to this component changed, to check that the react use a shallow comparison.
It might break if you change an inner value or key of an object without changing the reference that way the PureComponent won't re-render.


2. Context + ShouldComponentUpdate might be dangerous. Why is
that?

Because the context can cause re-render in the component without passing to the `shouldComponentUpdate` function.

3. Describe 3 ways to pass information from a component to its
PARENT.

- Using callback functions

```
const ChildComponent = ({ callback }) => {
  callback(propsToPass)
  ...
}
```

- Using react context

```
const ChildComponent = () => {
  const context = useContext(ParentContext)
  context.setProps(propsToPass)
  ...
}
```

- Using custom events

```
const ParentComponent = () => {
  useEffect(() => {
    window.addEventListener('propsToPass', handleProps);
    return () => {
      window.removeEventListener('propsToPass', handleProps);
    };
  }, []);

  ...
}
const ChildComponent = () => {
  window.dispatchEvent(new CustomEvent('propsToPass', { detail: propsToPass }));
  ...
}
```


4. Give 2 ways to prevent components from re-rendering.

Using the `shouldComponentUpdate` method of a class component and using the `React.memo` in a functional component.


5. What is a fragment and why do we need it? Give an example where it might break my app.

It's used to group elements and component without creating a real element. It can break the app when you use CSS with an immediate child and there is a fragment between the parent and child, making the child element not be stylized 


6. Give 3 examples of the HOC pattern.

- To validate if the user is authenticate.
```
const withAuth = (Comp) => {
  return (props) => {
    if (isAuthenticated()) {
      return <Comp {...props} />
    }

    return <NotAuthenticated />
  }
}
```

- To use a translation function.
```
const withTranslation = (Comp) => {
  return (props) => {
    const translation = () => {
      ...
    }

    return <Comp {...props} translation={translation}  />
  }
}
```

- To use a router object
```
const withRouter = (Comp) => {
  return (props) => {
    const router = ...

    return <Comp {...props} router={router}  />
  }
}
```


7. What's the difference in handling exceptions in promises,
callbacks and async...await?

- promises

You can handle exceptions using the `.catch` method when is promise, this method receives a function as the first argument and the first argument of this function is the error.

```
promise
  .then(response => ...)
  .catch(error => ...)
```

- callback

You can use the function arguments to handle exceptions when is a callback function, for example the first argument could be the error and the second could be the response, if there is an error the response will be empty and the error will be defined.

```
callback(error, response) {
  if (error) {
    ...
  }

  ...
}
```

- async/await

You can handle exceptions by using the try/catch when is async/await.

```
try {
  ...
} catch (error) {
  ...
}
```


8. How many arguments does setState take and why is it async.

Just one argument that can be a number, string, object, function, etc.
The `setState` is async because it accumulates with others `setState` to re-render together and optimize the performance


9. List the steps needed to migrate a Class to Function
Component.

- Create a new functional component.
- Rewrite the life cycle functions `constructor`, `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` using the `useEffect` hook.
- Rewrite the state using the `useState`.
- Rewrite the class attributes using the `useRef` or create a variable outside of the functional component.
- Copy the return of the function `render` and return in the new functional component.
- Copy the others function to the functional component if necessary.
- Create a type for the props of the component and use the object destruct to access this props.
- Change the code `this.props.*` to use the props directly.


10. List a few ways styles can be used with components.

- Creating a css file and importing this file into the component
- Using the attribute style of each element.
- Using an external library like tailwind, styled components, stylex
- Using a CSS pre-processor


11. How to render an HTML string coming from the server.

Using the attribute `dangerouslySetInnerHTML` of the element you want to render the HTML. It's important to sanitize this HTML to prevent JS injection.
```
  <div
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
```