import React from 'react';
import Atom from '../components/atom'

import styled from 'styled-components';

const Alert = styled.div`
    background-color:  ${props => props.theme.sectionBackground};
    color: ${props => props.theme.textColor};
    border: none; /* Remove borders */
    font-weight: bold;
`


export default class Data extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const array = {};

        if (isString(this.props.data) === true) return (<div className="">{this.props.data}</div>)

        return (
            <div>
                <div>
                    {Object.keys(this.props.data).map((key, i) => {

                            return (
                                <div key={i}>

                                    {

                                        Array.isArray(this.props.data[key]) === true ?

                                            <div
                                                className="row">{this.noret(this.pushGroup(array, key, this.props.data[key]))}
                                            </div>

                                            :

                                            (typeof this.props.data[key] === 'object')

                                                ?

                                                (
                                                    <div>
                                                        <br/>
                                                        <hr/>
                                                        <Alert className="alert alert-primary" role="alert">{key}</Alert>
                                                        <Data key={i} data={this.props.data[key]}/>
                                                        <br/>
                                                    </div>
                                                )

                                                :

                                                <div className="row">
                                                    <div className="col-md-2 col-4">{key}</div>
                                                    <div className="col-md-10 col-8"><Atom
                                                        id={key}>{JSON.stringify(this.props.data[key])}</Atom></div>
                                                </div>

                                    }
                                </div>
                            )
                        }
                    )}
                </div>


                <div>
                    {Object.keys(array).map((group, i) => {

                        return (
                            <div key={i}>

                                <br/>
                                <hr/>
                                <Alert className="alert"><i className="fa fa-list-ul"></i> {group}</Alert>

                                {array[group].map((item, i) => {

                                    if (group === "tx" || group === "txids") {

                                        return (
                                            <div key={i}>
                                                <Atom id="tx">{item}</Atom>
                                            </div>
                                        )
                                    } else if (group === "addresses") {
                                        return (
                                            <div key={i}>
                                                <Atom id="address">{item}</Atom>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <Data key={i} data={item}/>
                                        )
                                    }

                                })}
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        )
    }


    pushGroup(arr, key, data) {
        if (arr[key] === undefined) {
            arr[key] = data;
        }
        //arr[key].push(data)
    }

    noret(ret) {
        return ""
    }
}

function isString(x) {
    return Object.prototype.toString.call(x) === "[object String]"
}

