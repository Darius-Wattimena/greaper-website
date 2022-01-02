import React, { useEffect, useState } from 'react'
import { MillisecondSnappingReference, Snapping } from '../../../Types'
import { calculateSnaps } from '../../../utils/MilliSecondsUtil'

interface HyperTriggerDistanceCalculatorProps {
  bpm: number
  circleSize: number
  sliderVelocity: number
  sliderVelocityMultiplier: number
  customNumerator: number
  customDenominator: number
}

export default function HyperTriggerDistanceCalculator({
  bpm,
  circleSize,
  sliderVelocity,
  sliderVelocityMultiplier,
  customNumerator,
  customDenominator
}: HyperTriggerDistanceCalculatorProps) {
  const [result, setResult] = useState<SnappingResult[]>([])

  useEffect(() => {
    const snaps = calculateSnaps(bpm, customNumerator, customDenominator)
    setResult(calculateTriggerDistances(snaps))
  }, [
    circleSize,
    bpm,
    sliderVelocity,
    sliderVelocityMultiplier,
    customNumerator,
    customDenominator
  ])

  function getTriggerDistance(ms: number, dashRange: number): number {
    const timeToNext = ms - 1000 / 60 / 4
    return timeToNext + dashRange
  }

  function getSnappingResult(
    snapping: Snapping,
    snap: number,
    dashRange: number,
    xDistanceMultiplier: number
  ): SnappingResult {
    const tickDistance = getTriggerDistance(snap, dashRange)
    const calculatedXDistance =
      (tickDistance / (sliderVelocity * sliderVelocityMultiplier * 100)) * xDistanceMultiplier
    let osuRoundedXDistance

    if (snap < 50) {
      osuRoundedXDistance = calculatedXDistance * 1.02
    } else if (snap < 100) {
      osuRoundedXDistance = calculatedXDistance * 1.01
    } else if (snap < 200) {
      osuRoundedXDistance = calculatedXDistance * 1.005
    } else {
      osuRoundedXDistance = calculatedXDistance
    }

    return {
      snapping,
      msSnapping: snap,
      xDistance: osuRoundedXDistance,
      distanceNeed: tickDistance
    }
  }

  function calculateTriggerDistances(snaps: MillisecondSnappingReference): SnappingResult[] {
    const catchDifficulty = (circleSize - 5.0) / 5.0
    const fruitWidth = (64.0 * (1.0 - 0.699999988079071 * catchDifficulty)) / 128.0
    const catcherWidth = 305.0 * fruitWidth * 0.7
    const dashRange = catcherWidth / 2.0

    return [
      getSnappingResult(Snapping.WHITE_TICK, snaps.whiteTick, dashRange, 1),
      getSnappingResult(Snapping.RED_TICK, snaps.redTick, dashRange, 2),
      getSnappingResult(Snapping.PURPLE_TICK, snaps.purpleTick, dashRange, 3),
      getSnappingResult(Snapping.BLUE_TICK, snaps.blueTick, dashRange, 4),
      getSnappingResult(Snapping.ONE_FIVE, snaps.oneFive, dashRange, 5),
      getSnappingResult(Snapping.DARK_PURPLE_TICK, snaps.darkPurpleTick, dashRange, 6),
      getSnappingResult(Snapping.ONE_SEVEN, snaps.oneSeven, dashRange, 7),
      getSnappingResult(Snapping.YELLOW_TICK, snaps.yellowTick, dashRange, 8),
      getSnappingResult(Snapping.ONE_NINE, snaps.oneNine, dashRange, 9),
      getSnappingResult(Snapping.ONE_TWELVE, snaps.oneTwelve, dashRange, 12),
      getSnappingResult(Snapping.ONE_SIXTEEN, snaps.oneSixteen, dashRange, 16),
      getSnappingResult(
        Snapping.CUSTOM,
        snaps.custom,
        dashRange,
        customDenominator / customNumerator
      )
    ]
  }

  const customSnapping = customNumerator.toString().concat('/').concat(customDenominator.toString())

  return (
    <div className="row">
      <div className="col-6">
        <div className="note-col">
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
      </div>
      <div className="col-6">
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>Snap</th>
              <th rowSpan={2}>Milliseconds</th>
              <th colSpan={2}>Trigger distance</th>
            </tr>
            <tr>
              <th>Osu Pixels</th>
              <th>X Distance</th>
            </tr>
          </thead>
          <tbody>
            {result.map((value, index) => {
              const key = `result-${index}`
              return (
                <tr key={key}>
                  <td>{value.snapping === Snapping.CUSTOM ? customSnapping : value.snapping}</td>
                  <td>{Math.round(value.msSnapping)}</td>
                  <td>{Math.floor(value.distanceNeed)}</td>
                  <td>{Math.ceil(value.xDistance * 100) / 100}</td>
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
  snapping: Snapping
  msSnapping: number
  xDistance: number
  distanceNeed: number
}
