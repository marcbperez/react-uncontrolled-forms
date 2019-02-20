import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { registerObserver } from 'react-perf-devtool'
import { logger } from 'redux-logger'
import { Provider } from 'react-redux'
import Reducers from './reducers'
import routes from './routes'

import './styles/main.css'

/* Observers. */

if (process.env.NODE_ENV === 'development') registerObserver()

/* Store and middlewares. */

const middlewares = process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware, logger))

const store = createStore(Reducers, middlewares)

/* Render method. */

render(
    <Provider store={store}>{routes}</Provider>, document.getElementById('root')
)
