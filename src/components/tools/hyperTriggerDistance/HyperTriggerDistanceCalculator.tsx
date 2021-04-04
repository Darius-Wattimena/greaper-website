import React, { useEffect, useState } from 'react'
import HyperTriggerDistanceForm from './HyperTriggerDistanceForm'

export default function HyperTriggerDistanceCalculator() {
  const [circleSize, setCircleSize] = useState(4.0)
  const [bpm, setBpm] = useState(180.0)
  const [sliderVelocity, setSliderVelocity] = useState(1.0)
  const [result, setResult] = useState<SnappingResult[]>([])

  useEffect(() => {
    const snaps = calculateSnaps()
    setResult(calculateTriggerDistances(snaps))
  }, [circleSize, bpm, sliderVelocity])

  function calculateSnaps(): MillisecondSnappingReference {
    const oneMeasureMs = 60000 / bpm

    return {
      whiteTick: oneMeasureMs, // 1/1 snapping
      redTick: oneMeasureMs / 2, // 1/2 snapping
      purpleTick: oneMeasureMs / 3, // 1/3 snapping
      blueTick: oneMeasureMs / 4, // 1/4 snapping
      darkPurpleTick: oneMeasureMs / 6, // 1/6 snapping
      yellowTick: oneMeasureMs / 8, // 1/8 snapping
      oneFive: oneMeasureMs / 5, // 1/5 snapping
      oneSeven: oneMeasureMs / 7, // 1/7 snapping
      oneNine: oneMeasureMs / 9, // 1/9 snapping
      oneTwelve: oneMeasureMs / 12, // 1/12 snapping
      oneSixteen: oneMeasureMs / 16, // 1/16 snapping
    }
  }

  function getTriggerDistance(ms: number, dashRange: number): number {
    const timeToNext = ms - 1000 / 60 / 4
    return timeToNext + dashRange
  }

  function getSnappingResult(snapping: Snapping, snap: number, dashRange: number, xDistanceMultiplier: number): SnappingResult {
    const tickDistance = getTriggerDistance(snap, dashRange)
    const calculatedXDistance = tickDistance / (sliderVelocity * 100) * xDistanceMultiplier
    let osuRoundedXDistance;

    if (snap < 50) {
      osuRoundedXDistance = calculatedXDistance * 1.02;
    } else if (snap < 100) {
      osuRoundedXDistance = calculatedXDistance * 1.01;
    } else if (snap < 200) {
      osuRoundedXDistance = calculatedXDistance * 1.005;
    } else {
      osuRoundedXDistance = calculatedXDistance;
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
      getSnappingResult(Snapping.ONE_SIXTEEN, snaps.oneSixteen, dashRange, 16)
    ]
  }

  return (
    <div className="row">
      <div className="col-6">
        <HyperTriggerDistanceForm
          bpm={bpm}
          setBpm={setBpm}
          circleSize={circleSize}
          setCircleSize={setCircleSize}
          sliderVelocity={sliderVelocity}
          setSliderVelocity={setSliderVelocity}
        />
      </div>
      <div className="col-6">
        <div className="row">
          <table className="col-12">
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
                    <td>{value.snapping}</td>
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
    </div>
  )
}

interface MillisecondSnappingReference {
  whiteTick: number
  redTick: number
  purpleTick: number
  blueTick: number
  darkPurpleTick: number
  yellowTick: number
  oneFive: number
  oneSeven: number
  oneNine: number
  oneTwelve: number
  oneSixteen: number
}

interface SnappingResult {
  snapping: Snapping
  msSnapping: number
  xDistance: number
  distanceNeed: number
}

enum Snapping {
  WHITE_TICK = '1/1',
  RED_TICK = '1/2',
  PURPLE_TICK = '1/3',
  BLUE_TICK = '1/4',
  DARK_PURPLE_TICK = '1/6',
  YELLOW_TICK = '1/8',
  ONE_FIVE = "1/5",
  ONE_SEVEN = "1/7",
  ONE_NINE = "1/9",
  ONE_TWELVE = "1/12",
  ONE_SIXTEEN = "1/16"
}
