import React from 'react'

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
    <div className="checkbox-input">
      <label htmlFor={id}>
        <div className="label-text">{label}</div>
      </label>
      <input
        id={id}
        type="checkbox"
        checked={initialValue}
        onChange={event => {
          booleanSetter(event.target.checked)
        }}
      />
    </div>
  )
}
