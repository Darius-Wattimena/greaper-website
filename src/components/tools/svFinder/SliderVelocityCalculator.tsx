import React, { useEffect, useState } from 'react'
import SliderVelocityForm from './SliderVelocityForm'
import { Difficulty } from '../../../Types'

interface SliderVelocityCalculatorProps {
  bpm: number
}

export default function SliderVelocityCalculator({ bpm }: SliderVelocityCalculatorProps) {
  const [result, setResult] = useState<SliderVelocityResult[]>([])
  const [ascendance, setAscendance] = useState<boolean>(false)

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
        <SliderVelocityForm ascendance={ascendance} setAscendance={setAscendance} />
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
