import React, { Component } from 'react'
import '../Total/Total.css'

export default class Total extends Component {
    render() {
        const { total, subTotal } = this.props
        return (
            <div className='Total_Container'>
            <div className='Total'>
                <div>SubTotal:</div>
                <div>{subTotal}</div>
            </div>
            <div className='Total'>
                <div>Total:</div>
                <div>{total}</div>
            </div>
            </div>
        )
    }
}
