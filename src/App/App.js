import React, { Component } from 'react'

import './App.css'

import GoodsList from '../GoodsList/GoodsList'
import { goods } from '../Mocks/GoodsMock'
import GoodsListForm from '../GoodsListForm/GoodsListForm'
import { addNewItem, removeElementById, 
        getTotal, toggleCheckbox, 
        getSubTotal, removeSelected} from '../Utils/goodsUtils'
import Total from '../Total/Total'
import { categories } from '../Mocks/CategotyGoods'

export default class App extends Component {
  state = {
    goods,
    total: getTotal(goods),
    subTotal: 0
  }

  recalculateTotal = () => {
    this.setState((state) => ({
      total: getTotal(state.goods)
    }))
  }

  onAdd = (newElement) => {
    this.setState(({ goods }) => {
      const newArray = addNewItem(newElement, goods)
      return {
        goods: newArray,
        total: getTotal(newArray)
    }})
  }

  onDelete = (id) => {
    const newArray = removeElementById(id, this.state.goods)
    this.setState({
      goods: newArray,
      total: getTotal(newArray),
      subTotal: getSubTotal(newArray)
    })
  }

  onDeleteSelected = () => {
    const newArray = removeSelected(this.state.goods)
    this.setState({
      goods: newArray,
      total: getTotal(newArray),
      subTotal: 0
    })
  }

  onToggle = (id) => {
    const newArray = toggleCheckbox(id, this.state.goods)
    this.setState({
      goods: newArray,
      subTotal: getSubTotal(newArray)
    })
  }

  onEditElement = (id, data = {}) => {
    this.setState(({goods}) => {
        const index = this.state.goods.findIndex((item) => item.id === id)
        const editGoods = [...goods]
        editGoods[index] = {id, ...data}
      return {
        goods: editGoods,
        total: getTotal(editGoods),
        subTotal: getSubTotal(editGoods)
      }
    })
  }

  render() {
    const { total, goods, subTotal } = this.state
    return (
      <div className="Container">
        <div className="Title">Fridge</div>
        <GoodsList 
              goods={goods} 
              onDelete={this.onDelete} 
              onToggle={this.onToggle}
              categories={ categories }
              onEditElement={this.onEditElement} />
        <Total total={total} subTotal={subTotal} />
        <GoodsListForm onAdd={this.onAdd} categories={ categories }/>
        <button className="Button_DelSelected" onClick={this.onDeleteSelected} >Delete Selected</button>
      </div>
    )
  }
}
