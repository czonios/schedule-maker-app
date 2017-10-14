// Based on the demo by Dan Abramov at 
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('events');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('events', serializedState);
  } catch (err) {
    console.log(err);
  }
}