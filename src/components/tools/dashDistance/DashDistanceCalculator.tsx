import React, { useEffect, useState } from 'react'
import { MillisecondSnappingReference, Snapping } from '../../../Types'
import { calculateSnaps } from '../../../utils/MilliSecondsUtil'

interface DashDistanceCalculatorProps {
  bpm: number
  circleSize: number
  sliderVelocity: number
  sliderVelocityMultiplier: number
  customNumerator: number
  customDenominator: number
}

export default function DashDistanceCalculator({
  bpm,
  circleSize,
  sliderVelocity,
  sliderVelocityMultiplier,
  customNumerator,
  customDenominator
}: DashDistanceCalculatorProps) {
  const [result, setResult] = useState<SnappingDashResult[]>([])

  useEffect(() => {
    function getDashDistance(ms: number, dashRange: number): number {
      const timeToNext = ms - 1000 / 60 / 4
      return timeToNext + dashRange
    }

    function getSnappingResult(
      snapping: Snapping,
      snap: number,
      walkRange: number,
      xDistanceMultiplier: number
    ): SnappingDashResult {
      const dashDistance = getDashDistance(snap, walkRange)
      const minDistance = dashDistance * 0.7
      const maxDistance = dashDistance
      const calculatedMinXDistance =
        (minDistance / (sliderVelocity * sliderVelocityMultiplier * 100)) * xDistanceMultiplier
      const calculatedMaxXDistance =
        (maxDistance / (sliderVelocity * sliderVelocityMultiplier * 100)) * xDistanceMultiplier
      let osuRoundedMinXDistance
      let osuRoundedMaxXDistance

      if (snap < 50) {
        osuRoundedMinXDistance = calculatedMinXDistance * 1.02
        osuRoundedMaxXDistance = calculatedMaxXDistance * 1.02
      } else if (snap < 100) {
        osuRoundedMinXDistance = calculatedMinXDistance * 1.01
        osuRoundedMaxXDistance = calculatedMaxXDistance * 1.01
      } else if (snap < 200) {
        osuRoundedMinXDistance = calculatedMinXDistance * 1.005
        osuRoundedMaxXDistance = calculatedMaxXDistance * 1.005
      } else {
        osuRoundedMinXDistance = calculatedMinXDistance
        osuRoundedMaxXDistance = calculatedMaxXDistance
      }

      return {
        snapping,
        msSnapping: snap,
        minDistance: minDistance,
        maxDistance: maxDistance,
        minXDistance: osuRoundedMinXDistance,
        maxXDistance: osuRoundedMaxXDistance
      }
    }

    function calculateTriggerDistances(snaps: MillisecondSnappingReference): SnappingDashResult[] {
      const catchDifficulty = (circleSize - 5.0) / 5.0
      const fruitWidth = (64.0 * (1.0 - 0.699999988079071 * catchDifficulty)) / 128.0
      const catcherWidth = 305.0 * fruitWidth * 0.7
      const walkRange = catcherWidth / 4.0

      return [
        getSnappingResult(Snapping.WHITE_TICK, snaps.whiteTick, walkRange, 1),
        getSnappingResult(Snapping.RED_TICK, snaps.redTick, walkRange, 2),
        getSnappingResult(Snapping.PURPLE_TICK, snaps.purpleTick, walkRange, 3),
        getSnappingResult(Snapping.BLUE_TICK, snaps.blueTick, walkRange, 4),
        getSnappingResult(Snapping.ONE_FIVE, snaps.oneFive, walkRange, 5),
        getSnappingResult(Snapping.DARK_PURPLE_TICK, snaps.darkPurpleTick, walkRange, 6),
        getSnappingResult(Snapping.ONE_SEVEN, snaps.oneSeven, walkRange, 7),
        getSnappingResult(Snapping.YELLOW_TICK, snaps.yellowTick, walkRange, 8),
        getSnappingResult(Snapping.ONE_NINE, snaps.oneNine, walkRange, 9),
        getSnappingResult(Snapping.ONE_TWELVE, snaps.oneTwelve, walkRange, 12),
        getSnappingResult(Snapping.ONE_SIXTEEN, snaps.oneSixteen, walkRange, 16),
        getSnappingResult(
          Snapping.CUSTOM,
          snaps.custom,
          walkRange,
          customDenominator / customNumerator
        )
      ]
    }

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

  const customSnapping = customNumerator.toString().concat('/').concat(customDenominator.toString())

  return (
    <div className="row">
      <div className="col-6">
        <div className="note-col">
          <p className="note">
            <strong className="fake-bold">All values are estimates.</strong> Calculating the dash
            distance isn't really possible as it all depends where you currently are when catching
            the previous fruit.
          </p>
        </div>
      </div>
      <div className="col-12">
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>Snap</th>
              <th rowSpan={2}>Milliseconds</th>
              <th colSpan={2}>Distance Range</th>
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
                  <td>
                    {Math.floor(value.minDistance)} - {Math.floor(value.maxDistance)}
                  </td>
                  <td>
                    {Math.ceil(value.minXDistance * 100) / 100} -{' '}
                    {Math.ceil(value.maxXDistance * 100) / 100}
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

interface SnappingDashResult {
  snapping: Snapping
  msSnapping: number
  minDistance: number
  maxDistance: number
  minXDistance: number
  maxXDistance: number
}
