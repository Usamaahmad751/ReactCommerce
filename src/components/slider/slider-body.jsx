import React, { Component } from 'react';
const SliderBody = ({slider}) => {
    return ( 
<React.Fragment>
<div class="carousel-inner">
                    {
                        slider.map(image => {
                            return (
                                <div class={ image.slideNo ==1? "carousel-item active" : "carousel-item"} >
                                    <img src={process.env.PUBLIC_URL + `/images/${image.slideImage}`} alt={image.imageAlt} />
                                </div>
                            )

                        })
                    }

                </div>
</React.Fragment>

     );
}
 
export default SliderBody;