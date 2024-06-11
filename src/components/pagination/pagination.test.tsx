import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import Pagination from './Pagination';

test('Renders text', async () => {
    user.setup()
    const onPageChange = jest.fn();
    render(<Pagination onPageChange={onPageChange} pageCount={5} selectedBreed={{ id: '', name: '', description: '' }} />);
    const firstButton = screen.getByRole('button', { name: "First" });
    const previousButton = screen.getByRole('button', { name: "Previous" });
    const nextButton = screen.getByRole('button', { name: "Next" });
    const lastButton = screen.getByRole('button', { name: "Last" });

    await user.click(firstButton);
    await user.click(previousButton);  // Initial value of page = 0. Hence, onPageChange function will be executed for this button initially.
    await user.click(nextButton);
    await user.click(lastButton);

    expect(onPageChange).toHaveBeenCalledTimes(3);

})


