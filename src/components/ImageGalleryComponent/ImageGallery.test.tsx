import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import ImageGallery from './ImageGallery';
import { MOCK_DATA } from 'src/mocks/data';

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    }
}));

describe('Image gallery', () => {
    test('renders images', async () => {
        render(<ImageGallery data={MOCK_DATA} />);

        const images = await screen.findAllByTestId('cat-image');
        expect(images).toHaveLength(MOCK_DATA.length)
    })
})