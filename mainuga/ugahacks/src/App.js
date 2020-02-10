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
    Button,
    Image,
    Card,
    CardDeck,
    Carousel
} from 'react-bootstrap';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            //isOpen: false
            apiResponse:""
        };
    }
    callAPI(){
      fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}));
    }

    componentWillMount(){
      this.callAPI();
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
            <div className="demo-big-content">
                <Layout>
                    <Header className = "header-color" title="Game Hype" scroll>
                        <Navigation>
                          <Link to="/project">Project</Link>
                        </Navigation>
                    </Header>

                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                </Layout>
            </div>





            </div>

        );
    }
}

export default App;
