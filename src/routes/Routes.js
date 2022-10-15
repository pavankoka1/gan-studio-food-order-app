import React, { Suspense } from 'react'
import { Router, Switch } from 'react-router-dom'
import history from './History'
import * as LazyComponent from '../utils/LazyLoaded'
import PrivateRoute from '../utils/PrivateRoute'

const Routes = () => {
    return (
        <Suspense fallback={<div>loading... </div>}>
            <Router history={history}>
                <Switch>
                    <LazyComponent.Login path="/login" exact />
                    <LazyComponent.Login path="/" exact />
                    <PrivateRoute
                        component={LazyComponent.Products}
                        path="/products"
                        exact
                    />
                    <PrivateRoute
                        component={LazyComponent.Cart}
                        path="/cart"
                        exact
                    />
                    <LazyComponent.NotFound path="*" />
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routes
