import { render, screen } from '@testing-library/react';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';


test('renders learn react link', () => {
    render(<Provider store={store}><App /></Provider>);
    const linkElement = screen.getByText(/eCommerce Site/i);
    expect(linkElement).toBeInTheDocument();
});

describe('Header component', () => {
    test('Header should render', () => {
        render(<Provider store={store}><App /></Provider>);
        const userComp = screen.getByTestId('header-component');
        expect(userComp).toBeInTheDocument();
    });
});
