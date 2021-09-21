import React from 'react'
import NumberInput from '../../form/NumberInput'
import SnappingInput from '../../form/SnappingInput'

interface CustomSnapCheckerFormProps {
  customNumerator: number
  setCustomNumerator: React.Dispatch<React.SetStateAction<number>>
  customDenominator: number
  setCustomDenominator: React.Dispatch<React.SetStateAction<number>>
}

export default function CustomSnapCheckerForm({
  customNumerator,
  setCustomNumerator,
  customDenominator,
  setCustomDenominator
}: CustomSnapCheckerFormProps) {
  return (
    <div className="row">
      <div className="col-12 note-col">
        <p className="note">
          <strong className="fake-bold">
            Easy way to check more advance snapping such as 3/4 or 2/1.
          </strong>
        </p>
      </div>
      <SnappingInput
        id="custom-snap"
        label="Custom snapping"
        initialNumeratorValue={customNumerator.toString()}
        numeratorSetter={setCustomNumerator}
        initialDenominatorValue={customDenominator.toString()}
        denominatorSetter={setCustomDenominator}
      />
    </div>
  )
}
