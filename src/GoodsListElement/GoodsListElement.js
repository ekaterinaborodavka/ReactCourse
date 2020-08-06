import React, { Component } from 'react'
import './GoodsListElement.css'
import CategoryGoods from '../CategoryGoods/CategoryGoods'
import { categories } from '../Mocks/CategotyGoods'
import PropTypes from 'prop-types'

export default class GoodsListElement extends Component {
    state = {
        title: '',
        weight: '',
        description: '',
        category: 'Any product',
        active: '',
        edit: false
    }

    onDelete = (e) => {
        this.props.onDelete(this.props.good.id)
    }

    onToggle = (e) => {
        this.props.onToggle(this.props.good.id)
    }

    onInputChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    onEdit = (e) => {
        e.stopPropagation()
        const {good: {title, weight, description, category, active} } = this.props;
        this.setState({
          title,
          weight,
          description,
          category,
          active,
          edit: true
        })
      }

    onSave = () => {
        const { title, weight, description, category, active } = this.state
        const { good: {id}, onSave } = this.props
        this.setState({
            edit: false
        })
        onSave(id, { title, weight, description, category, active })
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
                <div className="GoodsListElement_Column">{
                    this.state.edit ? <input type="text"
                                        defaultValue={ title }
                                        name="title"
                                        onChange={ this.onInputChange }/> : title }
                </div>
                <div className="GoodsListElement_Column">{
                    this.state.edit ? <input type="number"
                                        defaultValue={ weight }
                                        name="weight"
                                        onChange={ this.onInputChange }/> : weight }
                </div>
                <div className="GoodsListElement_Column">{
                    this.state.edit ? <CategoryGoods categories={ categories }
                                        defaultValue={ category }
                                        onChange={ this.onInputChange }/> : category}
                </div>
                <div className="GoodsListElement_Column GoodsListElement_ColumnDescription">{
                    this.state.edit ? <input type="text"
                                        defaultValue={ description }
                                        name="description"
                                        onChange={ this.onInputChange }/> : description}
                </div>
                <div className="GoodsListElement_Column GoodsListElement_Button">
                {
                    ( !this.state.edit && <button onClick={this.onEdit}>Edit</button>
                    ) || <button onClick={this.onSave}>Save</button>
                }
                    <button onClick={this.onDelete}>Delete</button>
                </div>
            </div>
        )
    }
}

GoodsListElement.propTypes = {
    categories: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
    onSave: PropTypes.func,
    good: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        weight: PropTypes.string,
        description: PropTypes.string,
        active: PropTypes.bool,
        category: PropTypes.string
    })
}