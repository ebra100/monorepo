import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import * as moviesService from "./services/movies/moviesService"

class Main extends Component {


    constructor(props) {

        super(props);
        this.state = {
            data: undefined
        }

    }

    async componentWillMount() {

        let data = moviesService.getMovies()
        data.then(response => response.json())
            .then(data => this.setState(state => ({ data: data.result })));


    }

    render() {

        console.log(this.state.data);

        if (this.state.data)

            return (
                < Container >

                    <Row xs="1" sm="2" md="4">
                        {this.state.data.map((item, index) => {

                            return <Col key={index}>
                                <div><img src={item.poster} /></div>
                                <div style={{ textAlign: "center" , fontStyle:"inherit" }}>{item.name}</div>
                            </Col>
                        })}
                    </Row>


                </Container >

            );

        else
            return (

                <div></div>

            );
    }
}

export default Main;
