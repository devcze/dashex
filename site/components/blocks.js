import React from 'react';
import Time from '../components/time';

import Link from "next/link";
import Confirmations from '../components/confirmations'
import styled from 'styled-components';
import Layout from "../pages";
import Title from '../components/page-title'


const BlocksCSS = styled.div`
  background-color:  ${props => props.theme.containerBackground};
  color: ${props => props.theme.textColor};
  padding: 20px;
  border-radius: 15px; 
`

const Block = styled.div`
  color: ${props => props.theme.textColor};

`

export default class Blocks extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <BlocksCSS>


                <Title>Latest blocks</Title>

                    <div className="row">
                        <div className="col-md-2 font-weight-bold">Height</div>
                        <div className="col-md-2 font-weight-bold">Timestamp</div>
                        <div className="col-md-7 font-weight-bold">Block hash</div>
                        <div className="col-md-1 font-weight-bold">Conf.</div>
                    </div>



                    {this.props.data.map((header, index) =>
                    (
                        <Link href={"/block?hash=" + header.hash}><a>
                            <div className=" row bottom-line line" key={index}>
                                {index < 5 ?
                                    <div className="col-md-2 col-4">
                                        <div className="btn btn-conf-few">{header.height}</div>
                                    </div>
                                    :
                                    <div className="col-md-2 col-4">
                                        <div className="btn btn-conf-lot">{header.height}</div>
                                    </div>
                                }

                                <div className="col-md-2 col-8"><Time ts={header.time}/></div>

                                {/*d-none d-sm-block*/}
                                <div className="col-md-7 col-10">
                                    <Block className="w-100">{header.hash}</Block>
                                </div>

                                <div className="col-md-1 col-2 text-right"><Confirmations
                                    count={header.confirmations}/></div>


                            </div>
                        </a></Link>))}

            </BlocksCSS>

        )
    }
}
