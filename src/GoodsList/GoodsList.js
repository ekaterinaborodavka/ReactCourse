import React, { Component } from 'react'
import GoodsListElement from '../GoodsListElement/GoodsListElement'
import PropTypes from 'prop-types'

export default class GoodsList extends Component {
    onDelete = (id) => {
        this.props.onDelete(id)
    }

    onToggle = (id) => {
        this.props.onToggle(id)
    }

    
    render() {
        const { goods, categories } = this.props
        return (
            <div>
                {Array.isArray(goods) && goods.map( (good) => {
                return (
                    <GoodsListElement 
                        good={good} 
                        key={good.id}
                        categories={ categories }
                        onDelete={this.onDelete}
                        onToggle={this.onToggle}
                        onSave={this.props.onEditElement}
                    />
                )
                })}
            </div>
        )
    }
}

GoodsList.defaultProps = {
    goods: []
}

GoodsList.propTypes = {
    goods: PropTypes.array,
    categories: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
    onSave: PropTypes.func
}