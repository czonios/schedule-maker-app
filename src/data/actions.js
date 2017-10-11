export const TOGGLE_GRID_OR_CARD_DISPLAY = 'TOGGLE_GRID_OR_CARD_DISPLAY';
export const DISPLAY_EVENT_MODAL = 'DISPLAY_EVENT_MODAL';
export const DISMISS_EVENT_MODAL = 'DISMISS_DISPLAY_MODAL';
export const SUBMIT_EDITED_EVENT = 'SUMBIT_EDITED_EVENT';

export function toggleGridOrCardDisplay() {
  return {
    type: TOGGLE_GRID_OR_CARD_DISPLAY
  }
}
export function displayEventModal(eventTarget, data) {
  // console.log('received event and day at displayEventModal action creator', event, data)
  return {
    type: DISPLAY_EVENT_MODAL,
    payload: { eventTarget, data }
  }
}
export function dismissEventModal(payload) {
  return {
    type: DISMISS_EVENT_MODAL,
    payload
  }
}
export function submitEditedEvent(payload) {
  return {
    type: SUBMIT_EDITED_EVENT,
    payload
  }
}