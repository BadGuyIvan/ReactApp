import React, { Component } from "react";
import ViewBooks from "./ViewBooks";
import { Grid, Row, Col} from "react-bootstrap";
import {Link, Route, Switch, NavLink,Redirect} from "react-router-dom";
import Home from "./Home"
import "./app.css";
//higher order components
// const HOC = Component => match => {
//   return <Component {...this.props} match={match}/>
// }

const About = () => {
 return (
   <h1>About Us</h1>
 )
}
// const getMatch = HOC(ViewBooks);

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
         <Col className="nav" md={2}>
            <h2 className="Title">Books</h2>
            <ul className="list-unstyled">
              <NavLink  to="/home"    activeClassName="selected">Home</NavLink>
              <NavLink  to="/books"  activeClassName="selected">Books</NavLink>       
              <NavLink  to="/about"   activeClassName="selected">About</NavLink>
            </ul>
          </Col>
          <Col className="main" md={10}>
          <Switch>
            <Route exact  path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path="/books" render={() => (<Redirect to="/books/page=1"/>)}/>
            <Route path="/books/page=:id([^0\D].*)" render={ (match) => <ViewBooks url={match}/>}/>
            <Route render={() => <h1>Sorry</h1>}/>
          </Switch>
          </Col>
          </Row>
      </Grid>
    )
  }
}

export default App;
// <Route path="/List/:id" component={getMatch}/>
            // <Route path="/books/page=:id([^0\D].*)" render={ (match) => <ViewBooks url={match}/>}/>