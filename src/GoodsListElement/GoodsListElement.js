import React, { Component } from 'react'
import './GoodsListElement.css'

export default class GoodsListElement extends Component {
    onDelete = (e) => {
        this.props.onDelete(this.props.good.id)
    }

    onToggle = (e) => {
        this.props.onToggle(this.props.good.id)
    }

    render() {
        const { title, weight, description, category} = this.props.good
        return (
            <div className="GoodsListElement">
                <div className="GoodsListElement_Column GoodsListElement_Checkbox">
                    <input 
                            type='checkbox'
                            onChange={() => this.onToggle()}/>
                </div>
                <div className="GoodsListElement_Column">{title}</div>
                <div className="GoodsListElement_Column">{weight}</div>
                <div className="GoodsListElement_Column">{category}</div>
                <div className="GoodsListElement_Column GoodsListElement_ColumnDescription">{description}</div>
                <div className="GoodsListElement_Column GoodsListElement_Button">
                    <button onClick={this.onDelete}>Delete</button>
                    <button>Save</button>
                </div>
            </div>
        )
    }
}
