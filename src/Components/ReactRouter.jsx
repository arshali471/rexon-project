import React from 'react'
import Career from './Career';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Navb';
import Footer from './Footer';
import Contact from './Contact'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function ReactRouter() {
    return (
        <div>
            <Navb />
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Career} />
                <Route path="/contact" component={ Contact} />
                <Route component={Error} />

            </Switch>
            </BrowserRouter>
            {/* <Career/> */}
            {/* <Contact/> */}
            <Footer />
        </div>
    )
}

export default ReactRouter
