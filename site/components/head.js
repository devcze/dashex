import Head from 'next/head'
import "../style.scss"
import React from 'react'

export default class extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Head>
                <title>Dash-Ex</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="description" content="DashEx.cc :: Dash crypto blockchain explorer" />

                <meta name="keywords" content="dash, blockchain, explorer, blocks, hashes, transactions, addresses, balance"/>


                <link rel="stylesheet"
                      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"/>
                <link rel="icon"
                      type="image/png"
                      href="../static/image/dashex-fav.png"/>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                        crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossOrigin="anonymous"></script>


                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                </link>
            </Head>

        );
    }
}