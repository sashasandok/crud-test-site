// react
import React from 'react'
import PropTypes from 'prop-types'
// components
import Backdrop from '../Backdrop/Backdrop'
// styles
import './Modal.css'

const modal = (props) => {
  return (
    <div className="modal-wrapper">
      <Backdrop show={props.show} closed={props.closed} />
      <div
        className="modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

modal.propTypes = {
  show: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default modal
