import React from 'react'
import CheckboxInput from '../../form/CheckboxInput'
import SnappingInput from '../../form/SnappingInput'

interface SnappingSpecifierFormProps {
  customNumerator: number
  setCustomNumerator: React.Dispatch<React.SetStateAction<number>>
  customDenominator: number
  setCustomDenominator: React.Dispatch<React.SetStateAction<number>>
}

export default function SnappingSpecifierForm({
  customNumerator,
  setCustomNumerator,
  customDenominator,
  setCustomDenominator
}: SnappingSpecifierFormProps) {
  return (
    <>
      <div className="tools-settings-header">Tool Settings</div>
      <div className="tools-settings">
        <div className="row">
          <div className="col-12">
            <SnappingInput
              id="custom-snap"
              label="Custom snapping"
              initialNumeratorValue={customNumerator.toString()}
              numeratorSetter={setCustomNumerator}
              initialDenominatorValue={customDenominator.toString()}
              denominatorSetter={setCustomDenominator}
            />
          </div>
        </div>
      </div>
    </>
  )
}
