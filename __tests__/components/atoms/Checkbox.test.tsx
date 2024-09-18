import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Checkbox from './../../../@next/components/atoms/Checkbox/Checkbox';

describe('Checkbox component', () => {
  const mockProps = {
    title: 'Agree to terms',
    outerClassName: 'custom-checkbox',
    textClassName: 'small-text'
    // ... other props
  };

  it('renders label correctly', () => {
    render(<Checkbox {...mockProps} />);
    expect(screen.getByText('Agree to terms')).toBeInTheDocument();
  });


  it('applies textClassName', () => {
    render(<Checkbox {...mockProps} textClassName="blue-text" />);
    expect(screen.getByText('Agree to terms')).toHaveClass('blue-text');
  });
});
