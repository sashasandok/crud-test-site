import React, { useState } from 'react'
// redux
import { updateProduct, deleteProduct } from '../../redux/actions/product'
import { useDispatch, connect } from 'react-redux'
// redux form
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { renderInput, renderTextArea } from '../../sharedComponents/Input/Input'
import Button from '../Button/Button'
import './Product.css'

const validate = (values) => {
  const errors = {}
  return errors
}

let Product = ({
  id,
  title,
  avatar,
  description,
  coast,
  handleSubmit,
  reset,
  products,
}) => {
  const dispatch = useDispatch()

  const [isEditable, setIsEditable] = useState(false)

  const openEditComponent = () => {
    setIsEditable(true)
  }

  const onCancelEdit = () => {
    setIsEditable(false)
    reset()
  }

  const onProductDelete = () => {
    dispatch(deleteProduct(id))
    setIsEditable(false)
  }

  const submit = (values) => {
    const titles = products.map((i) => i.title)
    console.log(titles)
    console.log(values.title)
    if (titles.includes(values.title)) {
      throw new SubmissionError({
        title: 'Title already exists',
      })
    } else {
      dispatch(updateProduct(id, values))
      setIsEditable(false)
    }
  }

  return (
    <>
      {isEditable ? (
        <form onSubmit={handleSubmit(submit)} className="edit-product-card">
          <div className="edit-product-card-content">
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
          </div>
          <div>
            <Button name="upgrate" type="accept" width="90%" height="30px" />
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
        </form>
      ) : (
        <div className="product-card">
          <div className="product-card-content">
            <div className="image-wrapper">
              <img
                src={avatar}
                alt={`${title} logo`}
                className="product-image"
              />
            </div>
            <h3>{title}</h3>
            <p>{coast}$</p>
            <p>{description}</p>
          </div>
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

const mapStateToProps = (state, props) => {
  return {
    initialValues: {
      title: props.title,
      description: props.description,
      coast: props.coast,
      avatar: props.avatar,
    },
  }
}

Product = reduxForm({
  form: 'updateProductForm',
  validate,
  enableReinitialize: true,
})(Product)

export default connect(mapStateToProps)(Product)
