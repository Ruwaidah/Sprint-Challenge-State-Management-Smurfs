1. What problem does the context API help solve?

enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?
   Why is the store known as a 'single source of truth' in a redux application?

it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer.

Reducer:
The reducer is a pure function that takes the current state and an action, and returns the next state.
A reducer is a pure function that calculates the next State Tree based on the previous State Tree

Actions:
An action is like a message that we send (i.e. dispatch) to our central Redux store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   The difference between this and application state is that application state is narrowed down through cursor paths - that is, sub components may not have access to the entire application state - while shared state is always accessible.

1) Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   the store actions reducer for react-redux and redux make it easy to update our state
