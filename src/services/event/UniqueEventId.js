// For use in creating new events. Would be better replace with a UUID
// or the unique object id from posting a new event to the backend
import store from '../.././store';

export function generateUniqueId() { // Should I pass in the store explicityly to make testing/mocking easier?
  const existingIds = store.getState().layout.representation.data.events.allIds;
  let provisId = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1000) + 1000);
  while (existingIds.indexOf(provisId) > -1) {
    //Generate new random numbers until a unique one is created
    provisId = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1000) + 1000);
  }
  return provisId;
}