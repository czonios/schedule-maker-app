export const INCREMENT_DISPLAY_MONTH = 'INCREMENT_DISPLAY_MONTH';
export const DECREMENT_DISPLAY_MONTH = 'DECREMENT_DISPLAY_MONTH';
export const INCREMENT_DISPLAY_YEAR = 'INCREMENT_DISPLAY_YEAR';
export const DECREMENT_DISPLAY_YEAR = 'DECREMENT_DISPLAY_YEAR';

export function incrementDisplayMonth() {
  return {
    type: INCREMENT_DISPLAY_MONTH
  }
}
export function decrementDisplayMonth() {
  return {
    type: DECREMENT_DISPLAY_MONTH
  }
}
export function incrementDisplayYear() {
  return {
    type: INCREMENT_DISPLAY_YEAR
  }
}
export function decrementDisplayYear() {
  return {
    type: DECREMENT_DISPLAY_YEAR
  }
}