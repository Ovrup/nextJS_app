import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import DropDown from './dropDown';

const BREEDS = [{
    id: "1",
    name: "Affenpinscher",
},
{
    id: "2",
    name: "Afghan Hound",
},]

describe('Breeds dropdown', () => {
    const onSelect = jest.fn();
    const setSelectedBreed = jest.fn()
    test('renders breeds list correctly', async () => {
        render(<DropDown onSelect={onSelect} breeds={BREEDS} selectedBreed={BREEDS[0]} setSelectedBreed={setSelectedBreed} />)
        const breeds = await screen.findAllByTestId('breed');
        expect(breeds).toHaveLength(BREEDS.length)
    })
})