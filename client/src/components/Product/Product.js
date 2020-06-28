import React, { useState } from 'react'
// redux
import { updateProduct, deleteProduct } from '../../redux/actions/product'
import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import './Product.css'

const Product = ({ id, title, avatar, description, coast }) => {
  const dispatch = useDispatch()

  const [isEditable, setIsEditable] = useState(false)
  // edit values
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newCoast, setNewCoast] = useState('')
  const [newAvatar, setNewAvatar] = useState('')

  const openEditComponent = () => {
    setIsEditable(true)
  }

  const onCancelEdit = () => {
    setIsEditable(false)
  }

  const onTitleChange = (evt) => {
    setNewTitle(evt.target.value)
  }

  const onDescriptionChange = (evt) => {
    setNewDescription(evt.target.value)
  }

  const onCoastChange = (evt) => {
    setNewCoast(evt.target.value)
  }

  const onAvatarChange = (evt) => {
    setNewAvatar(evt.target.value)
  }

  const onUpgrate = () => {
    let updatedData = {}

    // title data
    if (newTitle) {
      updatedData.title = newTitle
    } else {
      updatedData.title = title
    }

    // description data
    if (newDescription) {
      updatedData.description = newDescription
    } else {
      updatedData.description = description
    }

    // description data
    if (newCoast) {
      updatedData.coast = newCoast
    } else {
      updatedData.coast = coast
    }

    // avatar data
    if (newAvatar) {
      updatedData.avatar = newAvatar
    } else {
      updatedData.avatar = avatar
    }

    dispatch(updateProduct(id, updatedData))
    setIsEditable(false)
  }

  const onProductDelete = () => {
    dispatch(deleteProduct(id))
    setIsEditable(false)
  }

  return (
    <>
      {isEditable ? (
        <div className="edit-product-card">
          <input type="text" defaultValue={title} onChange={onTitleChange} />
          <input
            type="text"
            defaultValue={description}
            onChange={onDescriptionChange}
          />
          <input type="number" defaultValue={coast} onChange={onCoastChange} />
          <input type="text" defaultValue={avatar} onChange={onAvatarChange} />
          <Button
            name="upgrate"
            type="accept"
            width="90%"
            height="30px"
            onButtonClick={onUpgrate}
          />
          <Button
            name="delete"
            type="danger"
            width="90%"
            height="30px"
            onButtonClick={onProductDelete}
          />
          <Button
            name="cancel"
            type="danger"
            width="90%"
            height="30px"
            onButtonClick={onCancelEdit}
          />
        </div>
      ) : (
        <div className="product-card">
          <img src={avatar} alt={`${title} logo`} className="product-image" />
          <h3>{title}</h3>
          <span>{coast}$</span>
          <div>{description}</div>
          <Button
            name="edit"
            type="standart"
            width="90%"
            height="30px"
            onButtonClick={openEditComponent}
          />
        </div>
      )}
    </>
  )
}

export default Product
