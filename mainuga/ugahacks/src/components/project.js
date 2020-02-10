import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavDropdown,
    Form,
    FormControl,
    Nav,
    NavItem,
    Container,
    Row,
    Col,
    Jumbotron,
    Image,
    Card,
    CardDeck,
    Carousel
} from 'react-bootstrap';
import { Button, Cell } from 'react-mdl';
import TeamForm from "./TeamForm"


class Project extends Component {
  constructor(props) {
      super(props);

      this.state = {
          //isOpen: false
          apiResponse:"",
          isPressed: false
      };
      this.callAPI = this.callAPI.bind(this);
  }
  callAPI(){
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }


  //getSelectInfo(){
      //kissMe = document.getElementByID("selecct").selectedIndex;
  //}

  //wrapperFunc() {
    //getSelectInfo();
    //callAPI();
  //}
  //componentDidMount(){
    //this.callAPI();
  //}
  pressButton(){
    this.state = {
      isPressed: !this.state.isPressed
    };
  }

  render() {

      return(
        <div><Carousel>
  <Carousel.Item>
  <img
  className="d-block w-100"
  src="https://pbs.twimg.com/media/DrmwTzSWsAAUVqn.jpg"
  alt="First slide"
  />

  <Carousel.Caption>
  <TeamForm/>
  <h3>{this.state.apiResponse}</h3>
  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  
  <Button id = "btn" raised onClick = {this.callAPI}>hey</Button>
  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
  className="d-block w-100"
  src="https://pbs.twimg.com/media/DrmwTzSWsAAUVqn.jpg"
  alt="Third slide"
  />
  <Carousel.Caption>
  <h3>Second slide label</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
  className="d-block w-100"
  src="https://pbs.twimg.com/media/DrmwTzSWsAAUVqn.jpg"
  alt="Third slide"
  />

  <Carousel.Caption>
  <h3>Third slide label</h3>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  </div>
      )
    }
} export default Project;
