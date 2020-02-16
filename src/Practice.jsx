import React, { Component } from 'react';
class Practice extends Component {
    state = {  }
    render() {
        for (let i=24; i>0; i--) {
            setTimeout( function timer(){
             document.getElementById("timer").innerHTML = i;
            }, i*3000 );
        }
        return ( <div id="timer">2060</div> );
    }
}
 
export default Practice;