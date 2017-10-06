export const INCREMENT_DISPLAY_MONTH = 'INCREMENT_DISPLAY_MONTH';
export const DECREMENT_DISPLAY_MONTH = 'DECREMENT_DISPLAY_MONTH';
export const INCREMENT_DISPLAY_YEAR = 'INCREMENT_DISPLAY_YEAR';
export const DECREMENT_DISPLAY_YEAR = 'DECREMENT_DISPLAY_YEAR';

function incrementDisplayMonth() {
  type: INCREMENT_DISPLAY_MONTH
}
function decrementDisplayMonth() {
  type: DECREMENT_DISPLAY_MONTH
}
function incrementDisplayYear() {
  type: INCREMENT_DISPLAY_YEAR
}
function decrementDisplayYear() {
  type: DECREMENT_DISPLAY_YEAR
}