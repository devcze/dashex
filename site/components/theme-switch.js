import React from 'react';
import themes from '../lib/themes'
import store from '../lib/store'


export default class AddressLink extends React.Component {

    constructor(props) {
        super(props);
    }

    switchTheme = () => {
        if (store.theme === themes.dark)
            store.theme = themes.light;
        else
            store.theme = themes.dark;

        this.props.layout.forceUpdate();
    }

    render() {
        let iconId = "fa-moon-o";
        if (store.theme === themes.dark) {
            iconId ="fa-sun-o"
        }

        return (<span className="btn btn-primary" onClick={this.switchTheme}>
            <i className={"fa " + iconId} aria-hidden="true"></i>
        </span>)
    }
}