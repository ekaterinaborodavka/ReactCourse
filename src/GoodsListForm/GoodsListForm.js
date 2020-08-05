import React, { Component } from 'react'
import CategoryGoods from '../CategoryGoods/CategoryGoods'
import './GoodsListForm.css'
import PropTypes from 'prop-types'

export default class GoodsListForm extends Component {

    state = {
        title: '',
        weight: '',
        description: '',
        category: 'Any product'
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state)
        this.setState({
            title: '',
            weight: '',
            description: '',
            category: 'Any product'
        })
    }

    onInputChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        const { title, weight, description} = this.state
        return (
            <div>
                <form 
                    className="GoodsListForm" 
                    onSubmit={this.onFormSubmit}
                >
                    <input type="text"
                        required
                        className="GoodsListFormInput" 
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={this.onInputChange}
                    />
                    <input type="number"
                        className="GoodsListFormInput" 
                        placeholder="Weight"
                        name="weight"
                        value={weight}
                        onChange={this.onInputChange}
                    />
                    <input type="text"
                        className="GoodsListFormInput" 
                        placeholder="Description"
                        name="description"
                        value={description}
                        onChange={this.onInputChange}
                    />
                    <CategoryGoods
                        onChange={ this.onInputChange }
                        categories={ this.props.categories }
                    />
                    <button className="GoodsListFormButton">Add</button>
                </form>
            </div>
        )
    }
}

GoodsListForm.propTypes = {
    categories: PropTypes.array,
    onAdd: PropTypes.func
}