import React from 'react'
import NumberInput from '../../form/NumberInput'

interface SliderVelocityFormProps {
  bpm: number
  setBpm: React.Dispatch<React.SetStateAction<number>>
}

export default function SnappingSpecifierForm({ bpm, setBpm }: SliderVelocityFormProps) {
  return (
    <form className="row">
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
        initialValue={bpm.toString()}
        label="BPM (between 1 and 600)"
        numberSetter={setBpm}
        min={1}
        max={600}
      />
    </form>
  )
}
