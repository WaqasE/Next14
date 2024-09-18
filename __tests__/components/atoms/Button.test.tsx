import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from '../../../@next/components/atoms/Button/Button';

describe('Button component', () => {
  it('renders text correctly', () => {
    render(<Button title="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  // it('sets font weight from prop', () => {
  //   render(<Button title="Click me" fontWeight="bold" />);
  //   const button = screen.getByText('Click me');
  //   expect(button.getNod).toHaveStyle('font-weight: bold');
  // });

  // it('sets color from prop', () => {
  //   render(<Button title="Click me" color="red" />);
  //   const button = screen.getByText('Click me');
  //   expect(button).toHaveStyle('color: red');
  // });
});
