import {render, screen} from '@testing-library/react';

import Greeting from './Greeting';

test('Renders Hello World as text', () => {
//  Writing tests - three "A"s
//  Arrangement - set up the test data. test conditions and test environment
//  Act - Run logic that should be tested (e.g. execute function)
//  Assert - Compare executions results with expected results

//  Arrangement
  render(<Greeting/>);

//  Act
//  Nothing ...

//  Assert
  const helloWorldElement = screen.getByText('Hello World!');
  expect(helloWorldElement).toBeInTheDocument();
});