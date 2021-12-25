import React, { useEffect, useState } from 'react'
import { Difficulty, SnapType } from '../../../Types'
import { calculateCustomSnap, GetSnapType } from '../../../utils/MilliSecondsUtil'
import '../snappingSpecifier/SnappingSpecifier.scss'
import CustomSnapCheckerForm from './CustomSnapCheckerForm'

interface SnappingSpecifierProps {
  bpm: number
}

export default function CustomSnapChecker({ bpm }: SnappingSpecifierProps) {
  const [customNumerator, setCustomNumerator] = useState(3)
  const [customDenominator, setCustomDenominator] = useState(4)
  const [result, setResult] = useState<SnappingResult[]>([])

  useEffect(() => {
    const snap = calculateCustomSnap(bpm, customNumerator, customDenominator)
    setResult(specifySnappingCategories(snap))
  }, [bpm, customNumerator, customDenominator])

  function specifySnappingCategories(snap: number): SnappingResult[] {
    return [
      {
        diff: Difficulty.CUP,
        dashSnaps: [GetSnapType(Difficulty.CUP, snap, false)],
        hyperdashSnaps: [GetSnapType(Difficulty.CUP, snap, true)]
      },
      {
        diff: Difficulty.SALAD,
        dashSnaps: [GetSnapType(Difficulty.SALAD, snap, false)],
        hyperdashSnaps: [GetSnapType(Difficulty.SALAD, snap, true)]
      },
      {
        diff: Difficulty.PLATTER,
        dashSnaps: [GetSnapType(Difficulty.PLATTER, snap, false)],
        hyperdashSnaps: [GetSnapType(Difficulty.PLATTER, snap, true)]
      },
      {
        diff: Difficulty.RAIN,
        dashSnaps: [GetSnapType(Difficulty.RAIN, snap, false)],
        hyperdashSnaps: [GetSnapType(Difficulty.RAIN, snap, true)]
      },
      {
        diff: Difficulty.OVERDOSE,
        dashSnaps: [GetSnapType(Difficulty.OVERDOSE, snap, false)],
        hyperdashSnaps: [GetSnapType(Difficulty.OVERDOSE, snap, true)]
      }
    ]
  }

  function getClassNameBasedOfSnapType(snapType: SnapType): string {
    if (snapType === SnapType.DISALLOWED) {
      return 'snap-type__disallowed'
    }
    if (snapType === SnapType.HIGHER_SNAPPED) {
      return 'snap-type__higher-snapped'
    }
    if (snapType === SnapType.BASIC_SNAPPED) {
      return 'snap-type__basic-snapped'
    }
    return ''
  }

  const snappingHeader = customNumerator.toString().concat('/').concat(customDenominator.toString())

  return (
    <div className="row">
      <div className="col-6">
        <CustomSnapCheckerForm
          customNumerator={customNumerator}
          setCustomNumerator={setCustomNumerator}
          customDenominator={customDenominator}
          setCustomDenominator={setCustomDenominator}
        />
      </div>
      <div className="col-6">
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>Difficulty</th>
              <th>Dash Snaps</th>
              <th>Hyperdash Snaps</th>
            </tr>
            <tr>
              <th>{snappingHeader}</th>
              <th>{snappingHeader}</th>
            </tr>
          </thead>
          <tbody>
            {result.map((value, index) => {
              const key = `result-${index}`
              return (
                <tr key={key}>
                  <th>{value.diff}</th>
                  <td className={getClassNameBasedOfSnapType(value.dashSnaps[0])}>
                    {value.dashSnaps[0]}
                  </td>
                  <td className={getClassNameBasedOfSnapType(value.hyperdashSnaps[0])}>
                    {value.hyperdashSnaps[0]}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface SnappingResult {
  diff: Difficulty
  dashSnaps: SnapType[]
  hyperdashSnaps: SnapType[]
}
