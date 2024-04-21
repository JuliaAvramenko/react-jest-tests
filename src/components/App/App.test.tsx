import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('renders learn react link', () => {
  it('App renders', () => {
    render(<App />)

    // screen.debug()
    expect(screen.getByRole('list')).toBeInTheDocument()
    // expect(screen.getByText('Find course:')).toBeInTheDocument()
  })
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  it('typing in Searchbox works', () => {
    render(<App />)
    expect(screen.queryByDisplayValue(/React/)).toBeNull()

    userEvent.type(screen.getByRole('textbox'), 'React')
    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument()
  })

  it('search filter is working', async () => {
    // await act(async () => render(<App />));
    render(<App />)

    expect(screen.getByText(/Vue/)).toBeInTheDocument()
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument()

    await act(async () => userEvent.type(screen.getByRole('textbox'), 'Script'));

    expect(screen.queryByText(/Vue/)).toBeNull()
    expect(screen.queryByText(/JavaScript/)).toBeInTheDocument()

  })
});

//get - когда уверены, что что-то есть на странице, query- может как быть, так и отсутствовать на странице , find - асинхронная работа