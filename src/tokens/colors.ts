export const colors = {
  black:     '#0A0A0F',
  darkest:   '#12121A',
  dark:      '#1E1E2E',
  navy:      '#0A091E',
  navyDeep:  '#0D1627',
  navyMid:   '#163569',
  blueSky:   '#8EC5FF',
  blue:      '#2388FF',
  slate:     '#64748B',
  white:     '#FFFFFF',
  muted:     '#ABABB1',
} as const

export type ColorKey = keyof typeof colors
