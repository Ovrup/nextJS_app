// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from './src/mocks/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())