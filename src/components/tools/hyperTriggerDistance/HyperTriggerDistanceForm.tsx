import React from 'react'
import './HyperTriggerDistanceForm.scss'

interface HyperTriggerDistanceFormProps {
  bpm: number
  setBpm: React.Dispatch<React.SetStateAction<number>>
  circleSize: number
  setCircleSize: React.Dispatch<React.SetStateAction<number>>
  sliderVelocity: number
  setSliderVelocity: React.Dispatch<React.SetStateAction<number>>
}

export default function HyperTriggerDistanceForm({
  bpm,
  setBpm,
  circleSize,
  setCircleSize,
  sliderVelocity,
  setSliderVelocity
}: HyperTriggerDistanceFormProps) {
  return (
    <form className="row">
      <div className="col-12 note-col">
        <p className="note">
          <ul>
            <li><strong className="fake-bold">Decimal numbers work for all fields.</strong> For example 4,5 for circle size.</li>
            <li><strong className="fake-bold">Osu Pixels can be 1 pixel off.</strong> The current version of osu stable seems to cast to an integer with hyperdash generation but calculations here are done using ms values, not based of snapping like is done in the editor.</li>
            <li><strong className="fake-bold">X Distance is an estimate.</strong> The current version of osu stable does some strange roundings, the purpose of this value is to give you somewhat of an idea what value to use for your hyperdashes.</li>
          </ul>
        </p>
      </div>
      <label htmlFor="bpm" className="col-12">
        BPM
        <input
          id="bpm"
          type="number"
          value={bpm}
          onChange={event => setBpm(Number(event.target.value))}
          min={1}
        />
      </label>
      <label htmlFor="cs" className="col-12">
        Circle Size
        <input
          id="cs"
          type="number"
          value={circleSize}
          onChange={event => setCircleSize(Number(event.target.value))}
          min={0}
          max={10}
          step={0.1}
        />
      </label>
      <label htmlFor="sv" className="col-12">
        Slider Velocity
        <input
          id="sv"
          type="number"
          value={sliderVelocity}
          onChange={event => setSliderVelocity(Number(event.target.value))}
          min={0.4}
          max={3.6}
          step={0.1}
        />
      </label>
    </form>
  )
}
