import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from '../../../@next/components/atoms/Input/Input';

describe('Input component', () => {
  const mockProps = {
    label: 'Username',
    outerClassName: 'my-6',
    // ... other props
  };

  it('renders label correctly', () => {
    render(<Input {...mockProps} />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });



  it('passes additional props', () => {
    render(<Input {...mockProps} placeholder="Enter your username" disabled />);
    expect(screen.getByPlaceholderText('Enter your username')).toBeDisabled();
  });

});