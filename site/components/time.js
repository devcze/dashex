import React from 'react';
import styled from 'styled-components';


const BtnTime = styled.div`
  background-color:  ${props => props.theme.btnTimeBackgroundColor};
  color: white;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  border-radius: 5px; 
`


export default class Time extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<BtnTime className="btn">{this.tsToTime(this.props.ts)}</BtnTime>)
    }


    tsToTime(ts) {

        const date = new Date(ts * 1000);

        var aaaa = date.getFullYear();
        var gg = date.getDate();
        var mm = (date.getMonth() + 1);

        if (gg < 10)
            gg = "0" + gg;

        if (mm < 10)
            mm = "0" + mm;

        var cur_day = aaaa + "-" + mm + "-" + gg;

        var hours = date.getHours()
        var minutes = date.getMinutes()
        var seconds = date.getSeconds();

        if (hours < 10)
            hours = "0" + hours;

        if (minutes < 10)
            minutes = "0" + minutes;

        if (seconds < 10)
            seconds = "0" + seconds;

        return cur_day + " " + hours + ":" + minutes + ":" + seconds;

    }


}
