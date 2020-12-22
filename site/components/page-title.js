import "../style.scss"
import React from 'react'

export default class extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="h2 pb-5">{this.props.children}</div>
       );
    }
}
