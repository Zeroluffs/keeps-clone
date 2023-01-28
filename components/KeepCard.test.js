import {getByTestId, render, screen} from '@testing-library/react'
import {KeepCard} from "./KeepCard"

describe('Home', () => {
    it('renders an empty keep card',
        () => {
            render(<KeepCard title="" description=""/>)
            expect(screen.getByRole('heading')).toHaveTextContent('Empty Note')

        })
    it('renders a keep card with one parameter',
        () => {
            render(<KeepCard title="Hello World!" description=""/>)
            expect(screen.getByRole('heading')).toHaveTextContent('Hello World!');
        })
    it('renders a keep card with two parameters',
        () => {
            render(<KeepCard title="Hello World!" description="something something"/>)
            expect(screen.getByRole('heading')).toHaveTextContent('Hello World!');
            expect(screen.getByText('something something')).toBeInTheDocument();
        })
})