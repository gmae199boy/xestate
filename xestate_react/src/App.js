import React, {Component} from "react";
import './App.css';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { rooms, RegisterRoom, report } from './';
// import Home from './Home';
import ReactDOM from "react-dom";
import Login from "./Login";
import Signup from "./Signup";


class App extends React.Component{
  state = {
    isLoading: true,
    room: []
  };
  render(){
    return( 
      <Router>
        <div>
        {/* <Home /> */}
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/rooms">매물 조회</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/RegisterRoom">매물 등록</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/report">매물 신고</Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/login">login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signup">sign up</Nav.Link>
          </Nav.Item>
        </Nav>

          <Route path='/Login' component={Login}/>
          <Route path='/Signup' component={Signup}/>
          <Route exact path='/rooms' component={rooms}/>
          <Route path='/RegisterRoom' component={RegisterRoom}/>
          <Route path='/report' component={report}/>
          
        </div>
      </Router>
      );
    }
  }


export default App;
 