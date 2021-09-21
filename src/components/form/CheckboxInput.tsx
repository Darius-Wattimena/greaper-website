import React, { useState } from 'react'
import { isNumber } from '../../utils/FormUtil'

interface CheckboxInputProps {
  id: string
  label: string
  initialValue: boolean
  booleanSetter: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CheckboxInput({
  id,
  label,
  initialValue,
  booleanSetter
}: CheckboxInputProps) {
  return (
    <label htmlFor={id} className="checkbox-input">
      <div className="label-text">
        {label}
      </div>
      <input
        id={id}
        type="checkbox"
        checked={initialValue}
        onChange={event => {
          booleanSetter(event.target.checked)
        }}
      />
    </label>
  )
}
