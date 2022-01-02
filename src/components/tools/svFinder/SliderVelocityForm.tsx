import React from 'react'
import CheckboxInput from '../../form/CheckboxInput'

interface SliderVelocityFormProps {
  ascendance: boolean
  setAscendance: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SliderVelocityForm({ ascendance, setAscendance }: SliderVelocityFormProps) {
  return (
    <>
      <div className="tools-settings-header">Tool Settings</div>
      <div className="tools-settings">
        <div className="row">
          <div className="col-12">
            <CheckboxInput
              id="ascendance"
              label="Ascendance multiplier"
              initialValue={ascendance}
              booleanSetter={setAscendance}
            />
          </div>
        </div>
      </div>
    </>
  )
}
