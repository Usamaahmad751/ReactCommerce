import React, { Component } from 'react';
const SliderArrows = () => {
    return (
        <React.Fragment>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </React.Fragment>
    );
}

export default SliderArrows;