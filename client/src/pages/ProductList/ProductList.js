import React, { useState } from 'react'
import './ProductList.css'
// redux
import { useSelector } from 'react-redux'
import { getProducts, createProduct } from '../../redux/actions/product'
import { useFetch } from '../../customHooks/useFetch'
import { useDispatch } from 'react-redux'
// components
import Product from '../../components/Product/Product'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'

const ProductList = () => {
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newCoast, setNewCoast] = useState('')
  const [newAvatar, setNewAvatar] = useState('')

  useFetch(getProducts)
  const products = useSelector((state) => state.product.products)
  console.log('PROD', products)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setNewTitle('')
    setNewDescription('')
    setNewCoast('')
    setNewAvatar('')
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

  const onCreateProduct = (evt) => {
    evt.preventDefault()

    const createData = {
      title: newTitle,
      description: newDescription,
      avatar: newAvatar,
      coast: newCoast,
    }

    dispatch(createProduct(createData))
    closeModal()
  }

  return (
    <div className="product-list">
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '20px',
        }}
      >
        <Button
          name="create product"
          type="accept"
          width="150px"
          height="30px"
          onButtonClick={openModal}
        />
      </div>
      {products.map((product, i) => {
        return (
          <Product
            key={i}
            id={product.id}
            title={product.title}
            avatar={product.avatar}
            description={product.description}
            coast={product.coast}
            createdAt={product.createdAt}
            updatedAt={product.updatedAt}
          />
        )
      })}

      <Modal show={isModalOpen} closed={closeModal}>
        <h2>Add New Event</h2>
        <div className="create-block">
          <label>title</label>
          <input type="text" value={newTitle} onChange={onTitleChange} />
          <label>description</label>
          <input
            type="text"
            value={newDescription}
            onChange={onDescriptionChange}
          />
          <label>coast</label>
          <input type="number" value={newCoast} onChange={onCoastChange} />
          <label>avatar</label>
          <textarea type="text" value={newAvatar} onChange={onAvatarChange} />
          <Button
            name="save"
            type="accept"
            width="100px"
            height="30px"
            onButtonClick={(evt) => onCreateProduct(evt)}
          />
        </div>
      </Modal>
    </div>
  )
}

export default ProductList
