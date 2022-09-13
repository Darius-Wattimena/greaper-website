export type Tool = 'trigger-distance' | 'slider-velocity' | 'snapping' | 'dash-distance'
export function isTool(keyInput: string): keyInput is Tool {
  return ['trigger-distance', 'slider-velocity', 'snapping', 'dash-distance'].includes(keyInput)
}

export enum SnapType {
  NONE = '✓',
  DISALLOWED = 'X',
  BASIC_SNAPPED = 'Basic',
  HIGHER_SNAPPED = 'Higher'
}

export enum Difficulty {
  CUP = 'Cup',
  SALAD = 'Salad',
  PLATTER = 'Platter',
  RAIN = 'Rain',
  OVERDOSE = 'Overdose',
  DELUGE = 'Deluge'
}

export enum Snapping {
  WHITE_TICK = '1/1',
  RED_TICK = '1/2',
  PURPLE_TICK = '1/3',
  BLUE_TICK = '1/4',
  DARK_PURPLE_TICK = '1/6',
  YELLOW_TICK = '1/8',
  ONE_FIVE = '1/5',
  ONE_SEVEN = '1/7',
  ONE_NINE = '1/9',
  ONE_TWELVE = '1/12',
  ONE_SIXTEEN = '1/16',
  CUSTOM = 'CUSTOM'
}

export interface MillisecondSnappingReference {
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
  custom: number
}
