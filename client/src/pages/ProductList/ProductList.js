import React, { useState } from 'react'
import './ProductList.css'
// redux
import { useSelector } from 'react-redux'
import { getProducts, createProduct } from '../../redux/actions/product'
import { useFetch } from '../../customHooks/useFetch'
import { useDispatch } from 'react-redux'
// redux form
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { renderInput, renderTextArea } from '../../sharedComponents/Input/Input'
// components
import Product from '../../components/Product/Product'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'

const validate = (values) => {
  const errors = {}
  return errors
}

const ProductList = (props) => {
  const { handleSubmit, reset } = props

  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useFetch(getProducts)
  const products = useSelector((state) => state.product.products)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    reset()
  }

  const submit = (values) => {
    const titles = products.map((i) => i.title)
    if (titles.includes(values.title)) {
      throw new SubmissionError({
        title: 'Hot-Dog already exists',
      })
    } else {
      dispatch(createProduct(values))
      closeModal()
    }
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
            products={products}
          />
        )
      })}

      <Modal show={isModalOpen} closed={closeModal}>
        <h2>Add New Hot-Dog</h2>
        <form onSubmit={handleSubmit(submit)}>
          <Field
            name="title"
            type="text"
            component={renderInput}
            label="title"
          />
          <Field
            name="description"
            type="text"
            component={renderInput}
            label="description"
          />
          <Field
            name="coast"
            type="number"
            component={renderInput}
            label="coast"
          />
          <Field
            name="avatar"
            type="text"
            component={renderTextArea}
            label="avatar"
          />
          <div>
            <Button
              name="no, thanks"
              type="standart"
              width="100px"
              height="30px"
              onButtonClick={closeModal}
            />
            <Button name="add" type="standart" width="100px" height="30px" />
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default reduxForm({
  form: 'createProductForm',
  validate,
})(ProductList)
