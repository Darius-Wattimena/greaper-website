import React, { useState } from 'react'
import { isInteger } from '../../utils/FormUtil'

interface SnappingInputProps {
  id: string
  label: string
  initialNumeratorValue: string
  numeratorSetter: React.Dispatch<React.SetStateAction<number>>
  initialDenominatorValue: string
  denominatorSetter: React.Dispatch<React.SetStateAction<number>>
}

export default function SnappingInput({
  id,
  label,
  initialNumeratorValue,
  numeratorSetter,
  initialDenominatorValue,
  denominatorSetter
}: SnappingInputProps) {
  const [numeratorHasInvalidInput, setNumeratorHasInvalidInput] = useState(false)
  const [denominatorHasInvalidInput, setDenominatorHasInvalidInput] = useState(false)
  const [numeratorFormValue, setNumeratorFormValue] = useState(initialNumeratorValue)
  const [denominatorFormValue, setDenominatorFormValue] = useState(initialDenominatorValue)

  function onNumeratorChange(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value
    const parsedInput = Number(input)

    setNumeratorFormValue(input)

    if (isInteger(input)) {
      if (numeratorHasInvalidInput) {
        setNumeratorHasInvalidInput(false)
      }

      numeratorSetter(parsedInput)
    } else {
      setNumeratorHasInvalidInput(true)
    }
  }

  // slightly violated DRY here, but i dont know a better way to do this in ts, so pls refactor if u know a better way
  function onDenominatorChange(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value
    const parsedInput = Number(input)

    setDenominatorFormValue(input)

    if (isInteger(input)) {
      if (denominatorHasInvalidInput) {
        setDenominatorHasInvalidInput(false)
      }

      denominatorSetter(parsedInput)
    } else {
      setDenominatorHasInvalidInput(true)
    }
  }

  return (
    <div className="input-field snap-input">
      <label htmlFor={id} className="col-12 no-margin">
        <div className="col-12">{label}</div>
      </label>
      <div className="snap-input__container no-spacing">
        <input
          id={id}
          type="text"
          value={numeratorFormValue}
          className={numeratorHasInvalidInput ? 'form-input__error' : ''}
          onChange={event => {
            onNumeratorChange(event)
          }}
        />
        <div className="snap-input__divider">
          /
        </div>
        <input
          id={id + '-denominator'}
          type="text"
          value={denominatorFormValue}
          className={denominatorHasInvalidInput ? 'form-input__error' : ''}
          onChange={event => {
            onDenominatorChange(event)
          }}
        />
      </div>
    </div>
  )
}
