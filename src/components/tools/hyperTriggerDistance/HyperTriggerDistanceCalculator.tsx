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
      yellowTick: oneMeasureMs / 8 // 1/8 snapping
    }
  }

  function getTriggerDistance(ms: number, dashRange: number): number {
    const timeToNext = ms - 1000 / 60 / 4
    return timeToNext + dashRange
  }

  function calculateTriggerDistances(snaps: MillisecondSnappingReference): SnappingResult[] {
    const catchDifficulty = (circleSize - 5.0) / 5.0
    const fruitWidth = (64.0 * (1.0 - 0.699999988079071 * catchDifficulty)) / 128.0
    const catcherWidth = 305.0 * fruitWidth * 0.7
    const dashRange = catcherWidth / 2.0
    const whiteTickDistance = getTriggerDistance(snaps.whiteTick, dashRange)
    const redTickDistance = getTriggerDistance(snaps.redTick, dashRange)
    const purpleTickDistance = getTriggerDistance(snaps.purpleTick, dashRange)
    const blueTickDistance = getTriggerDistance(snaps.blueTick, dashRange)
    const darkPurpleTickDistance = getTriggerDistance(snaps.darkPurpleTick, dashRange)
    const yellowTickTickDistance = getTriggerDistance(snaps.yellowTick, dashRange)

    return [
      {
        snapping: Snapping.WHITE_TICK,
        msSnapping: snaps.whiteTick,
        xDistance: whiteTickDistance / (sliderVelocity * 100),
        distanceNeed: whiteTickDistance
      },
      {
        snapping: Snapping.RED_TICK,
        msSnapping: snaps.redTick,
        xDistance: redTickDistance / (sliderVelocity * 100) * 2,
        distanceNeed: redTickDistance
      },
      {
        snapping: Snapping.PURPLE_TICK,
        msSnapping: snaps.purpleTick,
        xDistance: purpleTickDistance / (sliderVelocity * 100) * 3,
        distanceNeed: purpleTickDistance
      },
      {
        snapping: Snapping.BLUE_TICK,
        msSnapping: snaps.blueTick,
        xDistance: blueTickDistance / (sliderVelocity * 100) * 4,
        distanceNeed: blueTickDistance
      },
      {
        snapping: Snapping.DARK_PURPLE_TICK,
        msSnapping: snaps.darkPurpleTick,
        xDistance: darkPurpleTickDistance / (sliderVelocity * 100) * 6,
        distanceNeed: darkPurpleTickDistance
      },
      {
        snapping: Snapping.YELLOW_TICK,
        msSnapping: snaps.yellowTick,
        xDistance: yellowTickTickDistance / (sliderVelocity * 100) * 8,
        distanceNeed: yellowTickTickDistance
      }
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
                <th>X Value</th>
              </tr>
            </thead>
            <tbody>
              {result.map((value, index) => {
                const key = `result-${index}`
                return (
                  <tr key={key}>
                    <td>{value.snapping}</td>
                    <td>{Math.round(value.msSnapping)}</td>
                    <td>{Math.ceil(value.distanceNeed)}</td>
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
  YELLOW_TICK = '1/8'
}
