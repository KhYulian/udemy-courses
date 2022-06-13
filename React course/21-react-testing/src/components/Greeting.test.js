import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Hello World!" as text', () => {
    render(<Greeting/>);

    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "It\'s good to see you :)" if the button is not clicked', () => {
    render(<Greeting/>);

    const notChangedParagraphElement = screen.getByText('It\'s good to see you :)');
    expect(notChangedParagraphElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    render(<Greeting/>);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outputElement = screen.getByText('Changed!');

    expect(outputElement).toBeInTheDocument();
  });

  test('removes paragraph when the button was clicked', () => {
    render(<Greeting/>);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const paragraphToDelete = screen.queryByText('It\'s good to see you :)');

    // expect(paragraphToDelete).toBe(null);
    expect(paragraphToDelete).not.toBeInTheDocument();
  });
});



