import {BrowserRouter, Route, Switch} from "react-router-dom"


function app() {
    return(
    
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <h1>dashboard</h1>
                </Route>
            </Switch>
        </BrowserRouter>

    )
}