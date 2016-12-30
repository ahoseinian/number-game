export const CHANGE_CURRENT_DISPLAY = 'CHANGE_CURRENT_DISPLAY'
export function changeCurrentDisplay(to) {
  return {type: CHANGE_CURRENT_DISPLAY, to}
}

export const CHANGE_CALCULATION_MODEL = 'CHANGE_CALCULATION_MODEL'
export function changeCalculationModel(to) {
  return {type: CHANGE_CALCULATION_MODEL, to}
}
