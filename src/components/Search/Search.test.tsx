import { render, screen } from '@testing-library/react'
import Search from './Search'
import userEvent from '@testing-library/user-event'

// https://www.youtube.com/watch?v=sjdMBJ72M4s

const onChange = jest.fn()

describe('Search component', () => {
    it('renders Search component', () => {
        render(
            <Search value='' onChange={onChange}>
                Find
            </Search>
        )
        expect(screen.getByText(/find/i)).toBeInTheDocument()
    })

    it('renders without children', () => {
        render(
            <Search value='' onChange={onChange} />
        )

        expect(screen.getByText(/search/i)).toBeInTheDocument()
    })

    it('renders without placeholder', () => {
        render(
            <Search value='' onChange={onChange} />
        )

        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument()
    })
    it('custom placeholder works correctly', () => {
        render(
            <Search value='' onChange={onChange} placeholder='find post' />
        )
        expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument()
    })

    it('onChange works', () => {
        render(
            <Search value='' onChange={onChange}>
                Find
            </Search>
        )
        userEvent.type(screen.getByRole('textbox'), 'React')
        expect(onChange).toHaveBeenCalledTimes(5) // React has 5 letters
    })

    it('dynamic style change works', () => {
        render(
            <Search value='abc' onChange={onChange} />
        )
        expect(screen.getByRole('textbox')).toHaveClass('input');
        expect(screen.getByRole('textbox')).toHaveClass('filled')
        expect(screen.getByText('search')).toHaveClass('label')
    })

    it('Search snapshot', () => {
        const search = render(
            <Search value='' onChange={onChange}>
                Find
            </Search>
        )
        expect(search).toMatchSnapshot()
    })
})