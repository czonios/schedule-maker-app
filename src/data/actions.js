export const TOGGLE_GRID_OR_CARD_DISPLAY = 'TOGGLE_GRID_OR_CARD_DISPLAY';
export const DISPLAY_EVENT_MODAL = 'DISPLAY_EVENT_MODAL';
export const DISMISS_EVENT_MODAL = 'DISMISS_DISPLAY_MODAL';

export function toggleGridOrCardDisplay() {
  return {
    type: TOGGLE_GRID_OR_CARD_DISPLAY
  }
}
export function displayEventModal(payload) {
  return {
    type: DISPLAY_EVENT_MODAL,
    // payload
  }
}
export function dismissEventModal(payload) {
  return {
    type: DISMISS_EVENT_MODAL,
    payload
  }
}