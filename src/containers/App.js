import React from 'react'
import { Router } from 'react-router-dom'
import history from '../routes/History'
import Routes from '../routes/Routes'
import { IntlProvider } from 'react-intl'
import './App.scss'

class App extends React.Component {
    render() {
        return (
            <IntlProvider>
                <Router history={history}>{<Routes />}</Router>
            </IntlProvider>
        )
    }
}

export default App
