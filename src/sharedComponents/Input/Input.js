import React from 'react'

export const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="field-wrapper">
      <label>{label}</label>
      <div className="input-wrapper">
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span style={{ color: 'red' }}>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
}

export const renderTextArea = ({
  input,
  label,
  meta: { touched, error, warning },
}) => (
  <div className="field-wrapper">
    <label>{label}</label>
    <div className="input-wrapper">
      <textarea {...input} placeholder={label} rows="10" cols="40" />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)
