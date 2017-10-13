import React from 'react';
import renderer from 'react-test-renderer';
// import events from '../../../../../../../../.././services/mock/generatedMockEvents3'
import store from '../../../../../../../../.././store';
const events = Object.values(store.getState().layout.representation.data.events.byId);
import MonthDayCell from './MonthDayCell.js';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
it('MonthDayCell redners properly', () => {
  const tree = renderer.create(
    <Provider store={store} >
      <StaticRouter context={{}} >
        <MonthDayCell displayMonth={2} displayYear={2016} displayEventModa={() => { }}
          events={events}
        />
      </StaticRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// const wrapper = shallow(<MonthDayCell />);

// // import { MonthDayCell } from './MonthDayCell.js';
// import { shallow } from 'react-test-renderer';
// import ReactTestRenderer from 'react-test-renderer';

// const wrapper = ReactTestRenderer.create(
//   <Provider store={store}>
//     <MonthDayCell />
//   </Provider>
// );
// const wrapper = ReactTestRenderer.create(<MonthDayCell />);

// import ReactDOM from 'react-dom';
// const wrapper = ReactDOM.render(<MonthDayCell />);
// const wrapper = shallow(<MonthDayCell />);

// const wrapper = jest.mock('./MonthDayCell', () => () => <div />);
// const wrapper = jest.genMockFromModule('./MonthDayCell', () => () => <div />);
// const something = wrapper.default.WrappedComponent.getMockImplementation;

// console.log(wrapper.default.WrappedComponent.getMockImplementation);
// test('Cell color should be default if there is a day in it', () => {
//   expect(cellColor(1)).toBe(undefined);
// });

// test('Cell color should be gray if there is NO day in that cell', () => {
//   expect(cellColor(undefined)).toBe("grey");
// });

// test('Cell color should be gray if there is NO day in that cell', () => {
//   expect(cellColor(-1)).toBe("grey");
// });

// test('Cell color should be gray if there is NO day in that cell', () => {
//   expect(cellColor("asd")).toBe("grey");
// });

// test('Cell should have no classes if it has a day in it', () => {
//   expect(cellClasses(1)).toBe(undefined);
// });

// test('Cell classes should be appropriate if it DOES NOT have a day in it', () => {
//   expect(cellClasses(undefined)).toBe("no-day shadow");
// });

// test('Cell classes should be appropriate if it DOES NOT have a day in it', () => {
//   expect(cellClasses(-1)).toBe("no-day shadow");
// });

// test('Cell classes should be appropriate if it DOES NOT have a day in it', () => {
//   expect(cellClasses("asd")).toBe("no-day shadow");
// });