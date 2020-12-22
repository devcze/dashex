import Layout from "../components/layout"
import React from 'react';
import Data from '../components/data'
import log from '../lib/log'
import load from "../lib/load";

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    static async getInitialProps({query}) {
        log.debug("query:" + JSON.stringify(query));

        return {data: await load('/search?str=' + query.str), str: query.str}
    }

    render() {

        if (this.props.data === null) {
            return (<div> No data from server </div>)
        }

        return (<Layout>
            <div className="h4 pt-5 pb-4">Search result for {this.props.str}</div>

            {this.props.data === "" ?
                <div>Cannot receive data from API server</div>
                :
                <Data data={this.props.data}></Data>
            }

        </Layout>)
    }
}