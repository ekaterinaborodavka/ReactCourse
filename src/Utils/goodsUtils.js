import {v4 as uuidv4} from 'uuid'

export const newItemFromData = (data) => {
  return {
    id: uuidv4(),
    ...data,
  }
}

export const addNewItem = (data, goods) => {
  return [...goods, newItemFromData(data)]
}

export const removeElementById = (id, goods) => {
  return goods.filter((e) => e.id !== id)
}

export const getTotal = (goods) => {
  return goods.reduce((acc, item) => {
    return acc + parseFloat(item.weight)
  }, 0)
}

export const getSubTotal = (goods) => {
  return goods.filter((e) => e.active).reduce((acc, item) => {
    return acc + parseFloat(item.weight)
  }, 0)
}

export const removeSelected = (goods) => {
  return goods.filter((e) => !e.active)
}

export const toggleCheckbox = (id, goods) => {
  return goods.map((item) => {
    if (item.id === id) {
      return{...item, active: !item.active}
    }
    return item
  })
}

