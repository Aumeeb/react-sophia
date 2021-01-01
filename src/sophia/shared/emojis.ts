/**https://www.alt-codes.net/triangle-symbols */
export const EMJS = {
  run: '▶️',
  expend: '🔎',
}
export const SYMBOLS = {
  rightPointingTriangle: '▶',
  downPointingTriangle: '▼',
}
export type IconSourceType = 'emoji' | 'png'
type C = {
  readonly nav: string
  readonly name: string
  readonly type: IconSourceType
}
export const MENU_ROUTER = [
  {nav: '📜', name: 'stateReview', type: 'emoji'},
  {nav: '🗑️', name: 'Wastebasket', type: 'emoji'},
  {nav: 'github', name: 'github', type: 'png'},
] as const
