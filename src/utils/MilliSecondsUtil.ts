import { Difficulty, MillisecondSnappingReference, SnapType } from '../Types'

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

export function calculateCustomSnap(
  bpm: number,
  customNumerator: number,
  customDenominator: number
): number {
  const oneMeasureMs = 60000 / bpm

  // custom snapping, avoiding division by 0
  return customDenominator === 0 ? 0 : (customNumerator * oneMeasureMs) / customDenominator
}

export function GetSnapType(diff: Difficulty, snap: number, isHyperdash: boolean): SnapType {
  const flooredSnap = Math.floor(snap)

  switch (diff) {
    case Difficulty.CUP:
      return SnapType.DISALLOWED
    case Difficulty.SALAD:
      if (isHyperdash) {
        return SnapType.DISALLOWED
      }
      if (flooredSnap < 125) {
        return SnapType.DISALLOWED
      }
      if (flooredSnap < 250) {
        return SnapType.HIGHER_SNAPPED
      }

      return SnapType.BASIC_SNAPPED
    case Difficulty.PLATTER:
      if (isHyperdash) {
        if (flooredSnap < 125) {
          return SnapType.DISALLOWED
        }
        if (flooredSnap < 250) {
          return SnapType.HIGHER_SNAPPED
        }

        return SnapType.BASIC_SNAPPED
      }

      if (flooredSnap < 62) {
        return SnapType.DISALLOWED
      }
      if (flooredSnap < 125) {
        return SnapType.HIGHER_SNAPPED
      }
      return SnapType.BASIC_SNAPPED
    case Difficulty.RAIN:
      if (flooredSnap < 62) {
        return SnapType.DISALLOWED
      }
      if (flooredSnap < 125) {
        return SnapType.HIGHER_SNAPPED
      }

      return SnapType.BASIC_SNAPPED
    default:
      return SnapType.NONE
  }
}
