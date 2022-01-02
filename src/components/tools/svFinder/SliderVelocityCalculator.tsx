import React, { useEffect, useState } from 'react'
import SliderVelocityForm from './SliderVelocityForm'
import { Difficulty } from '../../../Types'

interface SliderVelocityCalculatorProps {
  bpm: number
  ascendance: boolean
}

export default function SliderVelocityCalculator({
  bpm,
  ascendance
}: SliderVelocityCalculatorProps) {
  const [result, setResult] = useState<SliderVelocityResult[]>([])

  useEffect(() => {
    setResult(calculateIdealSliderVelocity())
  }, [bpm, ascendance])

  function calculateIdealSliderVelocity(): SliderVelocityResult[] {
    let rainSV

    if (ascendance) {
      rainSV = 330 / bpm
    } else {
      rainSV = 300 / bpm
    }

    return [
      { diff: Difficulty.CUP, sv: rainSV * 0.72 },
      { diff: Difficulty.SALAD, sv: rainSV * 0.78 },
      { diff: Difficulty.PLATTER, sv: rainSV * 0.85 },
      { diff: Difficulty.RAIN, sv: rainSV },
      { diff: Difficulty.OVERDOSE, sv: rainSV * 1.1 },
      { diff: Difficulty.DELUGE, sv: rainSV * 1.2 }
    ]
  }

  return (
    <div className="row">
      <div className="col-6">
        <div className="note-col">
          <p className="note">
            <strong className="fake-bold">
              While the given result is provided as the "Ideal SV" please keep in mind to test
              yourself as well.
            </strong>{' '}
            The calculated SVs are based of the catchers speed combined with my personal preference.
          </p>
        </div>
      </div>
      <div className="col-6">
        <table>
          <thead>
            <tr>
              <th>Difficulty</th>
              <th>Ideal Base SV</th>
            </tr>
          </thead>
          <tbody>
            {result.map((value, index) => {
              const key = `result-${index}`
              return (
                <tr key={key}>
                  <th>{value.diff}</th>
                  <td>{Math.ceil(value.sv * 100) / 100}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface SliderVelocityResult {
  diff: Difficulty
  sv: number
}
