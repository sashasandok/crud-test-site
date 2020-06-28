// react
import React from 'react'
import PropTypes from 'prop-types'
// styles
import './Backdrop.css'

const backdrop = (props) =>
  props.show ? <div className="backdrop" onClick={props.closed} /> : null

backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
}

export default backdrop
