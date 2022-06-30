import React, { Component } from 'react';
import style from './style.module.css';
import Model from './Model/Model';
import Glass from './Glass/Glass';

export default class Home extends Component {
    state = {
        glass: {},
        isRender: false,
    }

    selectGlass = (ele) => {
        this.setState(
            { 
                glass: ele, 
                isRender: true,
            }, () => {console.log(this.state.glass);}
        )
    }

    render() {
        return (
            <div className={`${style.home}`}>
                <div className={`${style.header}`}>
                    <h3 className='text-center bg-dark text-light p-3'>TRY GLASSES APP ONLINE</h3>
                </div>
                <div className='container'>
                    <Model isRender={this.state.isRender} glass = {this.state.glass}></Model>
                </div>
                <div className='container'>
                    <Glass selectGlass={this.selectGlass}></Glass>
                </div>
            </div>
        )
    }
}
