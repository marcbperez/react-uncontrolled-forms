import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainContainer from './containers/MainContainer'

const routes = (
    <BrowserRouter>
        <Switch>
            <Route component={MainContainer}/>
        </Switch>
    </BrowserRouter>
)

export default routes
