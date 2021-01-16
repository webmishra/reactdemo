import React, { Component } from 'react';
import banner from '../images/banner-1.jpg';
import bannerone from '../images/banner-2.jpg';
import bannertwo from '../images/banner-3.jpg';
import bannerthree from '../images/banner-3.jpg';
import Carousel from 'react-bootstrap/Carousel'
class Banner extends Component {
    render() {
        return (
                <div className="logo">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerone}
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
                            src={bannertwo}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerthree}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Fourth slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>

        );
    }
} 
export default Banner;
