import React, { Component } from 'react'
import style from './../style.module.css';
export default class model extends Component {
  renderDecs(){
    if(this.props.isRender){
      return(
        <div className={`${style.desc} w-25 text-left p-1`}>
            <h6 className='text-primary'>{this.props.glass.name}</h6>
            <p className='text-light'>{this.props.glass.desc}</p>
        </div>
      )
    }
    return (
      <div></div>
    )
  }

  render() {
    return (
      <div className={`${style.model} text-center my-5`}>
        <img className='w-25' src="./glassesImage/model.jpg" alt="" />
        <img className={`${style.try_glass}`} src={this.props.glass.url} alt="" srcset="" />
        {
          this.renderDecs()
        }
      </div>
    )
  }
}
