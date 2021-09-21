import React from 'react'
import NumberInput from '../../form/NumberInput'
import SnappingInput from '../../form/SnappingInput'

interface SliderVelocityFormProps {
  bpm: number
  setBpm: React.Dispatch<React.SetStateAction<number>>
  customNumerator: number
  setCustomNumerator: React.Dispatch<React.SetStateAction<number>>
  customDenominator: number
  setCustomDenominator: React.Dispatch<React.SetStateAction<number>>
}

export default function SnappingSpecifierForm({
  bpm,
  setBpm,
  customNumerator,
  setCustomNumerator,
  customDenominator,
  setCustomDenominator
}: SliderVelocityFormProps) {
  return (
    <div className="row">
      <div className="col-12 note-col">
        <p className="note">
          <strong className="fake-bold">This does not take unsnapped objects into account.</strong>{' '}
          For example, at 240 BPM a 1/2 dash is exactly 125 ms. When one of the two objects is
          unsnapped for 1 ms the time between the two objects may be 124 ms instead (which is
          unrankable).
        </p>
      </div>
      <NumberInput
        id="bpm"
        label="BPM (between 1 and 600)"
        initialValue={bpm.toString()}
        numberSetter={setBpm}
        min={1}
        max={600}
      />
      {/* TODO FIX UI */}
      <SnappingInput
        id="bpm"
        label="Custom snapping"
        initialNumeratorValue={customNumerator.toString()}
        numeratorSetter={setCustomNumerator}
        initialDenominatorValue={customDenominator.toString()}
        denominatorSetter={setCustomDenominator}
      />
    </div>
  )
}
