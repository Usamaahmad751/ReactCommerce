import React, { Component } from 'react';
import SliderBody from './slider-body';
import SliderIndicator from './slider-indicators';
import SliderArrows from './slider-arrows';
const Slider = () => {
    const slider = [
        {
            slideNo: 0,
            slideImage: "slider1.jpg",
            imageAlt: " Los Andgles"
        },
        {
            slideNo: 1,
            slideImage: "slider2.jpg",
            imageAlt: "New York"
        },
        {
            slideNo: 2,
            slideImage: "slider4.jpg",
            imageAlt: " Washignton DC "
        },
    ]
    return (
        <React.Fragment>
            <div id="demo" class="carousel slide" data-ride="carousel">
                <SliderIndicator slider={slider}/>
                <SliderBody slider={slider}/>
                <SliderArrows slider={slider}/>
            </div>
        </React.Fragment>

    );
}

export default Slider;