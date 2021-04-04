import React, { useEffect, useState } from 'react'
import SliderVelocityForm from './SliderVelocityForm'

export default function SliderVelocityCalculator() {
  const [bpm, setBpm] = useState(180.0)
  const [result, setResult] = useState<SliderVelocityResult[]>([])

  useEffect(() => {
    setResult(calculateIdealSliderVelocity())
  }, [bpm])

  function calculateIdealSliderVelocity(): SliderVelocityResult[] {
    const rainSV = 320 / bpm

    return [
      { diff: Difficulty.CUP, sv: rainSV * 0.7 },
      { diff: Difficulty.SALAD, sv: rainSV * 0.8 },
      { diff: Difficulty.PLATTER, sv: rainSV * 0.9 },
      { diff: Difficulty.RAIN, sv: rainSV },
      { diff: Difficulty.OVERDOSE, sv: rainSV * 1.1 },
      { diff: Difficulty.DELUGE, sv: rainSV * 1.2 }
    ]
  }

  return (
    <div className="row">
      <div className="col-6">
        <SliderVelocityForm bpm={bpm} setBpm={setBpm} />
      </div>
      <div className="col-6">
        <div className="row">
          <table className="col-12">
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
    </div>
  )
}

interface SliderVelocityResult {
  diff: Difficulty
  sv: number
}

enum Difficulty {
  CUP = 'Cup',
  SALAD = 'Salad',
  PLATTER = 'Platter',
  RAIN = 'Rain',
  OVERDOSE = 'Overdose',
  DELUGE = 'Deluge'
}
