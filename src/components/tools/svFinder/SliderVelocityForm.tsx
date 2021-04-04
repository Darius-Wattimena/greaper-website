import React from 'react'

interface SliderVelocityFormProps {
  bpm: number
  setBpm: React.Dispatch<React.SetStateAction<number>>
}

export default function SliderVelocityForm({ bpm, setBpm }: SliderVelocityFormProps) {
  return (
    <form className="row">
      <div className="col-12 note-col">
        <p className="note">
          While the given result is provided as the "ideal SV" please keep in mind to test yourself as well. The calculated SVs are based of the catchers speed combined with my personal preference.
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
