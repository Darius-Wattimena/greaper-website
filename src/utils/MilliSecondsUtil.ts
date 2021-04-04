import { MillisecondSnappingReference } from '../Types'

export function calculateSnaps(bpm: number): MillisecondSnappingReference {
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
    oneSixteen: oneMeasureMs / 16 // 1/16 snapping
  }
}
