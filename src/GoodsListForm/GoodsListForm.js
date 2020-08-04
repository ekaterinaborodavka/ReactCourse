import React, { Component } from 'react'
import './GoodsListForm.css'

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
        const { title, weight, description, category } = this.state
        return (
            <div>
                <form 
                    className="GoodsListForm" 
                    onSubmit={this.onFormSubmit}
                >
                    <input 
                        className="GoodsListFormInput" 
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={this.onInputChange}
                    />
                    <input 
                        className="GoodsListFormInput" 
                        placeholder="Weight"
                        name="weight"
                        value={weight}
                        onChange={this.onInputChange}
                    />
                    <input 
                        className="GoodsListFormInput" 
                        placeholder="Description"
                        name="description"
                        value={description}
                        onChange={this.onInputChange}
                    />
                    <select 
                            name="category" 
                            className="GoodsListFormInput"
                            value={category}
                            onChange={this.onInputChange}>
                        <option id='any_product' value="Any product" >Any product</option>
                        <option id='soft_drinks' value="Soft drinks" >Soft drinks</option>
                        <option id='alcohol' value="Alcohol">Alcoholг</option>
                        <option id='fruits' value="Fruits">Fruits</option>
                        <option id='vegetables' value="Vegetables">Vegetables</option>
                        <option id='meat' value="Meat">Meat</option>
                        <option id='dairy' value="Dairy">Dairy</option>
                        <option id='fish' value="Fish">Fisht</option>
                        <option id='bakery' value="Bakery">Bakery</option>
                    </select>
                    <button className="GoodsListFormButton">Add</button>
                </form>
            </div>
        )
    }
}
