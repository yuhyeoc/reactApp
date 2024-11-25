import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BackBtn } from './Home'


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            slidesToScroll: 1
        };
        return (
            <Fragment>
                <h6 className="slickTitle">{this.props.title}</h6>
                <Slider className="sliderWrap" {...settings}>
                    <div className="sliderItemWrap">
                        <h3>1</h3>
                    </div>
                    <div className="sliderItemWrap">
                        <h3>2</h3>
                    </div>
                    <div className="sliderItemWrap">
                        <h3>3</h3>
                    </div>
                    <div className="sliderItemWrap">
                        <h3>4</h3>
                    </div>
                    <div className="sliderItemWrap">
                        <h3>5</h3>
                    </div>
                    <div className="sliderItemWrap">
                        <h3>6</h3>
                    </div>
                </Slider>
                <BackBtn />
            </Fragment>
        );
    }
}