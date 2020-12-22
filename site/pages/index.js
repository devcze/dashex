import Layout from "../components/layout"
import React from 'react';
import fetch from 'isomorphic-unfetch'
import Title from '../components/page-title'
import Blocks from '../components/blocks'
import log from "../lib/log";
import load from "../lib/load";


export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    static async getInitialProps({query}) {
        log.debug("query:" + JSON.stringify(query));

        return {data: await load('/')}
    }


    render() {

        if (this.props.data === null) {
            return (<div> No data from server </div>)
        }


        return (<Layout>


                <Blocks data={this.props.data}/>

        </Layout>)
    }
}