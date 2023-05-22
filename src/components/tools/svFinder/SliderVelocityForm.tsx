import React from 'react'
import CheckboxInput from '../../form/CheckboxInput'
import NumberInput from '../../form/NumberInput'

interface SliderVelocityFormProps {
  ascendance: boolean
  setAscendance: React.Dispatch<React.SetStateAction<boolean>>
  greaper: boolean
  setGreaper: React.Dispatch<React.SetStateAction<boolean>>
  customWalkSpeedMultiplier: number
  setCustomWalkSpeedMultiplier: React.Dispatch<React.SetStateAction<number>>
}

export default function SliderVelocityForm({
  ascendance,
  setAscendance,
  greaper,
  setGreaper,
  customWalkSpeedMultiplier,
  setCustomWalkSpeedMultiplier
}: SliderVelocityFormProps) {
  return (
    <>
      <div className="tools-settings-header">Tool Settings</div>
      <div className="tools-settings">
        <div className="row">
          <div className="col-12 no-margin">
            <NumberInput
              id="customMultiplier"
              label="Custom Multiplier"
              initialValue={customWalkSpeedMultiplier.toString()}
              numberSetter={setCustomWalkSpeedMultiplier}
              min={0}
              max={null}
            />
          </div>
          <div className="col-12 no-margin">
            <CheckboxInput
              id="ascendance"
              label="Ascendance multiplier"
              initialValue={ascendance}
              booleanSetter={setAscendance}
            />
            <CheckboxInput
              id="greaper"
              label="Greaper ceiling"
              initialValue={greaper}
              booleanSetter={setGreaper}
            />
          </div>
        </div>
      </div>
    </>
  )
}
