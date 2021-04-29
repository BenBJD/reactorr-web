import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./index.css"
import { ResultsPage } from "./Results.jsx"
import { SettingsPage } from "./Settings.jsx"
import { SearchPage } from "./Search.jsx"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/search">
                    <ResultsPage />
                </Route>
                <Route path="/settings">
                    <SettingsPage />
                </Route>
                <Route path="/">
                    <SearchPage />
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
