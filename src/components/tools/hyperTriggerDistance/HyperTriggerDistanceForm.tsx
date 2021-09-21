import React from 'react'
import NumberInput from '../../form/NumberInput'

interface HyperTriggerDistanceFormProps {
  circleSize: number
  setCircleSize: React.Dispatch<React.SetStateAction<number>>
  sliderVelocity: number
  setSliderVelocity: React.Dispatch<React.SetStateAction<number>>
  sliderVelocityMultiplier: number
  setSliderVelocityMultiplier: React.Dispatch<React.SetStateAction<number>>
}

export default function HyperTriggerDistanceForm({
  circleSize,
  setCircleSize,
  sliderVelocity,
  setSliderVelocity,
  sliderVelocityMultiplier,
  setSliderVelocityMultiplier
}: HyperTriggerDistanceFormProps) {
  return (
    <form className="row">
      <div className="col-12 note-col">
        <p className="note">
          <ul>
            <li>
              <strong className="fake-bold">Decimal numbers work for all fields.</strong> For
              example 4.5 for circle size.
            </li>
            <li>
              <strong className="fake-bold">Osu Pixels can be 1 pixel off.</strong> The current
              version of osu stable seems to cast to an integer with hyperdash generation but
              calculations here are done using ms values, not based of snapping like is done in the
              editor.
            </li>
            <li>
              <strong className="fake-bold">X Distance is an estimate.</strong> The current version
              of osu stable does some strange roundings, the purpose of this value is to give you
              somewhat of an idea what value to use for your hyperdashes.
            </li>
          </ul>
        </p>
      </div>
      <NumberInput
        id="cs"
        label="Circle Size (between 0 and 10)"
        initialValue={circleSize.toString()}
        numberSetter={setCircleSize}
        min={null}
        max={10}
      />
      <NumberInput
        id="sv"
        label="Slider Velocity (between 0.4 and 3.6)"
        initialValue={sliderVelocity.toString()}
        numberSetter={setSliderVelocity}
        min={0.4}
        max={3.6}
      />
      <NumberInput
        id="svm"
        label="Slider Velocity Multiplier (between 0.1 and 4.0)"
        initialValue={sliderVelocityMultiplier.toString()}
        numberSetter={setSliderVelocityMultiplier}
        min={0.1}
        max={4.0}
      />
    </form>
  )
}
