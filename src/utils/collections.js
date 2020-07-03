export const updateCollection = (items, item) => {
  const clone = items.map((i) => {
    if (i.id === item.id) {
      return item
    }
    return i
  })
  return clone
}

export const addItem = (sourceItems, newItem) => {
  return [...sourceItems, newItem]
}

export const deleteFromCollection = (items, id) => {
  return items.filter((i) => i.id !== id)
}
