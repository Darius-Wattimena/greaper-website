import React, { useEffect, useState } from 'react'
import { Difficulty } from '../../../Types'

interface SliderVelocityCalculatorProps {
  bpm: number
  ascendance: boolean
  greaper: boolean
  customMultiplier: number
}

export default function SliderVelocityCalculator({
  bpm,
  ascendance,
  greaper,
  customMultiplier
}: SliderVelocityCalculatorProps) {
  const [result, setResult] = useState<SliderVelocityResult[]>([])

  useEffect(() => {
    function calculateIdealSliderVelocity(): SliderVelocityResult[] {
      let rainSV = 300 / bpm
      let cupMultiplier = 0.72
      let saladMultiplier = 0.78
      let platterMultiplier = 0.85
      let rainMultiplier = 1.0
      let overdoseMultiplier = 1.1
      let delugeMultiplier = 1.2

      if (ascendance) {
        cupMultiplier = 0.9
        saladMultiplier = 0.975
        platterMultiplier = 1.0625
        rainMultiplier = 1.25
        overdoseMultiplier = 1.375
        delugeMultiplier = 1.5
      }

      return [
        { diff: Difficulty.CUP, sv: rainSV * cupMultiplier, speed: cupMultiplier },
        { diff: Difficulty.SALAD, sv: rainSV * saladMultiplier, speed: saladMultiplier },
        { diff: Difficulty.PLATTER, sv: rainSV * platterMultiplier, speed: platterMultiplier },
        { diff: Difficulty.RAIN, sv: rainSV * rainMultiplier, speed: rainMultiplier },
        { diff: Difficulty.OVERDOSE, sv: rainSV * overdoseMultiplier, speed: overdoseMultiplier },
        { diff: Difficulty.DELUGE, sv: rainSV * delugeMultiplier, speed: delugeMultiplier },
        { diff: Difficulty.CUSTOM, sv: rainSV * customMultiplier, speed: customMultiplier }
      ]
    }

    setResult(calculateIdealSliderVelocity())
  }, [bpm, ascendance, customMultiplier])

  return (
    <div className="row">
      <div className="col-6">
        <div className="note-col">
          <p className="note">
            <strong className="fake-bold">
              While the given result provides the "Base SV", these values are opinionated. Keep in
              mind to test yourself as well.
            </strong>{' '}
            The calculated SVs are based on the catchers walk speed (300 units per second).
            <hr />
            <p>The "Custom Multiplier" can be used to calculate the following:</p>
            <code>(300 / bpm) * custom multiplier</code>
          </p>
        </div>
      </div>
      <div className="col-6">
        <table>
          <thead>
            <tr>
              <th>Difficulty</th>
              <th>Base SV</th>
              <th>Walk Speed Multiplier</th>
            </tr>
          </thead>
          <tbody>
            {result.map((value, index) => {
              const key = `result-${index}`

              let roundedSv = Math.ceil(value.sv * 100) / 100
              if (greaper) {
                roundedSv = Math.ceil(roundedSv * 10) / 10
              }

              return (
                <tr key={key}>
                  <th>{value.diff}</th>
                  <td>{roundedSv}</td>
                  <td>{value.speed}</td>
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
  speed: number
}
