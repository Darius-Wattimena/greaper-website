import React from 'react'
import CheckboxInput from '../../form/CheckboxInput'

interface SliderVelocityFormProps {
  ascendance: boolean
  setAscendance: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SliderVelocityForm({ ascendance, setAscendance }: SliderVelocityFormProps) {
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
      <div className="col-12">
        <CheckboxInput
          id="ascendance"
          label="Ascendance multiplier"
          initialValue={ascendance}
          booleanSetter={setAscendance}
        />
        <p>
          <strong className="fake-bold">
            This multiplier makes your sliders a lot faster resulting in unwalkable sliders when placed horizontally.
          </strong>
        </p>
      </div>
    </div>
  )
}
