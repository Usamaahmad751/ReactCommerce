import React, { Component } from 'react';
const SliderIndicator = ({slider}) => {
    return (
        <React.Fragment>
            <ul class="carousel-indicators">
                {
                    slider.map(slide => {
                        return (
                            <li data-target="#demo" data-slide-to={slide.slideNo} className={slide.slideNo == 1 ? "active" : ""}></li>)
                    })
                }
            </ul>

        </React.Fragment>
    );
}

export default SliderIndicator;