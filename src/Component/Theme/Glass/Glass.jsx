import React, { Component } from 'react'
import glassList from './../../../Data/dataGlasses.json'
import style from './../style.module.css';
export default class Glass extends Component {

    renderGlassList() {
        return glassList.map((ele) => {
            return (
                <div className={`col-2 my-2 ${style.glass_item}`}>
                    <img onClick={() => {
                        this.props.selectGlass(ele)
                    }} className='img-fluid' src={`./glassesImage/g${ele.id}.jpg`} alt="" srcset="" />
                </div>
            )
        })
    }

    render() {
        return (
            <div className='bg-white'>
                <div className='row d-flex align-items-center'>
                    {this.renderGlassList()}
                </div>
            </div>
        )
    }
}
