import Head from 'next/head'
import "../style.scss"
import React from 'react'
import Router from 'next/router';
import styled from 'styled-components';

/**
 * Data structure
 *
 * cache.b[index]
 * "books": []
 *   {"name": "Genesis", "chapters": [] }
 *     {"chapter": 1, "name": "Genesis 1", "verses": []}
 *       {"verse": 1, "chapter": 1, "name": "Genesis 1:1", "text": "Na pocatku..."}
 */

const Input = styled.input`
  width: 100%;
  background-color: ${props => props.theme.inputBackgroundColor};
  padding: 12px 20px;
  border: 1px solid #18a5b7ff;
  border-radius: 15px;
  
  &:focus {
  outline: none;
}
`


export default class extends React.Component {


    constructor(props) {
        super(props);
        this.state = { value: ''}
    }

    static async getInitialProps (ctx) {
        const [ err, course ] = await poss(loadCourse(ctx.query.course))
        if (err) return redirect(ctx, '/')
        return course
    }


    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({value: ""})
        Router.push({pathname: '/search', query: {str: this.state.value}});
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }


    render() {
        return (
            <form ref='form' className="form" onSubmit={this.handleSubmit}>
                <Input  type="text"
                        placeholder="Place address, block hash or transaction here"
                        className="search" value={this.state.value} onChange={this.handleChange}></Input>
            </form>
        );
    }
}