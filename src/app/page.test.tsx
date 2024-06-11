import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import Home from './page';


test('Renders api data', () => {
    render(<Home />);
    const text = screen.getByText(/Test/);
    expect(text).toBeInTheDocument()
})