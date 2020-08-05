import React, { Component } from 'react'
import './CategoryGoods.css'
import PropTypes from 'prop-types'


export default class CategoryGoods extends Component {
    render() {
        const { onChange, categories, defaultValue } = this.props
        return (
            <select className='CategoryGoods'
                    name="category"
                    defaultValue={ defaultValue }
                    onChange={ onChange }>
                { categories.map(({ id, name}) => (
                <option key={ id } value={ name }>{name}</option>
                ))} 
            </select>
        )
    }
}

CategoryGoods.propTypes = {
    onChange: PropTypes.func,
    categories: PropTypes.array,
    defaultValue: PropTypes.string
}