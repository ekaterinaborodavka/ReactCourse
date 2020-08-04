import React, { Component } from 'react'

import './App.css'

import GoodsList from '../GoodsList/GoodsList'
import { goods } from '../Mocks/GoodsMock'
import GoodsListForm from '../GoodsListForm/GoodsListForm'
import { addNewItem, removeElementById, getTotal, toggleCheckbox, getSubTotal, removeSelected} from '../Utils/goodsUtils'
import Total from '../Total/Total'

export default class App extends Component {
  state = {
    goods,
    total: getTotal(goods),
    subTotal: 0
  }

  recalculateTotal = () => {
    this.setState((state) => ({
      total: getTotal(state.goods),
      subTotal: getSubTotal(state.goods, state.subTotalArr)
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
      total: getTotal(newArray)
    })
  }

  onDeleteSelected = () => {
    const newArray = removeSelected(this.state.goods)
    this.setState({
      goods: newArray,
      total: getTotal(newArray)
    })
  }

  onToggle = (id) => {
    const newArray = toggleCheckbox(id, this.state.goods)
    console.log(newArray)
    this.setState({
      goods: newArray,
      subTotal: getSubTotal(this.state.goods),
      goods
    })
  }


  render() {
    const { total, goods, subTotal } = this.state
    return (
      <div className="Container">
        <div className="Title">Fridge</div>
        <GoodsList goods={goods} onDelete={this.onDelete} onToggle={this.onToggle} />
        <Total total={total} subTotal={subTotal} />
        <GoodsListForm onAdd={this.onAdd} />
        <button className="Button_DelSelected" onClick={this.onDeleteSelected} >Delete Selected</button>
      </div>
    )
  }
}
