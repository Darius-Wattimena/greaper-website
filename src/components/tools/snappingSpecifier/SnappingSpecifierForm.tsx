import React from 'react'

interface SliderVelocityFormProps {
  bpm: number
  setBpm: React.Dispatch<React.SetStateAction<number>>
}

export default function SnappingSpecifierForm({ bpm, setBpm }: SliderVelocityFormProps) {
  return (
    <form className="row">
      <div className="col-12 note-col">
        <p className="note">
          <strong className="fake-bold">This does not take into account unsnapped objects.</strong>{' '}
          For example at 240 bpm a 1/2 dash is exactly 125 ms, when one of the two objects is
          unsnapped for 1 ms it can happen that the time between the two objects is instead 124 ms
          (which is unrankable).
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
    </form>
  )
}
