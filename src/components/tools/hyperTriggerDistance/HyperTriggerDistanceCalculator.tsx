import React, { useEffect, useState } from 'react'
import HyperTriggerDistanceForm from './HyperTriggerDistanceForm'

export default function HyperTriggerDistanceCalculator() {
  const [circleSize, setCircleSize] = useState(4.0)
  const [bpm, setBpm] = useState(180)
  const [result, setResult] = useState<SnappingResult[]>([])

  useEffect(() => {
    const snaps = calculateSnaps()
    setResult(calculateTriggerDistances(snaps))
  }, [circleSize, bpm])

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
    return Math.ceil(timeToNext + dashRange)
  }

  function calculateTriggerDistances(snaps: MillisecondSnappingReference): SnappingResult[] {
    const catchDifficulty = (circleSize - 5.0) / 5.0
    const fruitWidth = (64.0 * (1.0 - 0.699999988079071 * catchDifficulty)) / 128.0
    const catcherWidth = 305.0 * fruitWidth * 0.7
    const dashRange = catcherWidth / 2.0

    return [
      {
        snapping: Snapping.WHITE_TICK,
        msSnapping: snaps.whiteTick,
        distanceNeed: getTriggerDistance(snaps.whiteTick, dashRange)
      },
      {
        snapping: Snapping.RED_TICK,
        msSnapping: snaps.redTick,
        distanceNeed: getTriggerDistance(snaps.redTick, dashRange)
      },
      {
        snapping: Snapping.PURPLE_TICK,
        msSnapping: snaps.purpleTick,
        distanceNeed: getTriggerDistance(snaps.purpleTick, dashRange)
      },
      {
        snapping: Snapping.BLUE_TICK,
        msSnapping: snaps.blueTick,
        distanceNeed: getTriggerDistance(snaps.blueTick, dashRange)
      },
      {
        snapping: Snapping.DARK_PURPLE_TICK,
        msSnapping: snaps.darkPurpleTick,
        distanceNeed: getTriggerDistance(snaps.darkPurpleTick, dashRange)
      },
      {
        snapping: Snapping.YELLOW_TICK,
        msSnapping: snaps.yellowTick,
        distanceNeed: getTriggerDistance(snaps.yellowTick, dashRange)
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
        />
      </div>
      <div className="col-6">
        <div className="row">
          <table className="col-12">
            <thead>
            <tr>
              <th>Snap</th>
              <th>Milliseconds (rounded)</th>
              <th>Trigger distance (in osu pixels)</th>
            </tr>
            </thead>
            <tbody>
            {result.map((value, index) => {
              const key = `result-${index}`
              return (
                <tr key={key}>
                  <td>{value.snapping}</td>
                  <td>{Math.round(value.msSnapping)}</td>
                  <td>{value.distanceNeed}</td>
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
