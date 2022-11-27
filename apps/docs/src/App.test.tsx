import { render, screen } from '@testing-library/react';
import App from './App';
describe('docs', () => {
  it('should render app', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
