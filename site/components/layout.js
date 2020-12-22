import "../style.scss"
import React from 'react'
import Head from './head'
import Link from 'next/link'
import Search from './search'
import ThemeSwitcher from '../components/theme-switch'


import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(${props => props.theme.backgroundColorFrom},${props => props.theme.backgroundColorFrom});
  }
`

import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import store from '../lib/store';


const Container = styled.div`
  background-color:  ${props => props.theme.containerBackground};
  color: ${props => props.theme.textColor};
  padding: 20px;
  border-radius: 15px; 

`

const Body = styled.div`
  background-image: linear-gradient(${props => props.theme.backgroundColorFrom},${props => props.theme.backgroundColorFrom}); 
`

export default class Layout extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (

            <ThemeProvider theme={store.theme}>
                <React.Fragment>
                    <GlobalStyle whiteColor />



                <Body>

                <div>
                <Head/>

                <div className="pb-3 pt-3">


                    <Container className="container pt-2 width-100">
                        {/*<div className="container pt-2 width-100 header">*/}
                        <div className="row">
                            <div className="col-md-5">
                                <Link href='/'><a>
                                    <img src="../static/image/dashex-logo.svg" className={"img-fluid max-width: 100%;"}/>
                                </a></Link>
                            </div>
                            <div className="col-md-6 my-auto">
                                <Search/>
                            </div>

                            <div className="col-md-1 my-auto ">
                                <ThemeSwitcher layout={this}/>
                            </div>

                        </div>
                        {/*</div>*/}
                    </Container>

                    <Container className="container width-100  mt-3">
                        {this.props.children}
                    </Container>

                    <Container className="container width-100 mt-3 footer">
                        <div className="text-center">
                            <div className="font-weight-bold">
                                Copyright+ 2019 :: thanks for supporting this site
                            </div>
                            <div>
                                DASH XpoCYeFd1tCwbi8s2uqA76jmLTtFMddmeH
                            </div>
                            <div>
                                BTC 1Q8aCGVgiprQbeevwxsVHUFnRc4zg3LFqK
                            </div>

                        </div>

                    </Container>
                </div>
                </div>

                </Body>

                </React.Fragment>

            </ThemeProvider>
        );
    }
}

