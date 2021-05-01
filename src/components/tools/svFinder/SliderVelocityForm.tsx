import React from 'react'
import NumberInput from '../../form/NumberInput'

interface SliderVelocityFormProps {
  bpm: number
  setBpm: React.Dispatch<React.SetStateAction<number>>
}

export default function SliderVelocityForm({ bpm, setBpm }: SliderVelocityFormProps) {
  return (
    <div className="row">
      <div className="col-12 note-col">
        <p className="note">
          <strong className="fake-bold">
            While the given result is provided as the "Ideal SV" please keep in mind to test
            yourself as well.
          </strong>{' '}
          The calculated SVs are based of the catchers speed combined with my personal preference.
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
    </div>
  )
}
