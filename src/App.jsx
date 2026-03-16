import {BrowserRouter, Router} from "react-router-dom";
import Home from "./components/Home";

export default function App(){
    return (
        <BrowserRouter>
            <Router>
                <Route exact path="/home" component={<Home />}  />

            </Router>
        </BrowserRouter>
    )
}