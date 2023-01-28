import {getByTestId, render, screen} from '@testing-library/react'
import Home from "../pages";

describe('Home', () => {
    it('renders a heading',
        () => {
            render(<Home/>)
            expect(screen.getByRole('heading')).toHaveTextContent('Hello')
        })
})