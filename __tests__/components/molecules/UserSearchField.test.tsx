import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UserSearchField from '../../../@next/components/molecules/UsersSearchField/UsersSearchField';

describe('GroupsSearchField', () => {
  test('renders the search input with the correct placeholder', () => {
    render(<UserSearchField />);
    const inputElement = screen.getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });

  // test('allows user to enter text', () => {
  //   render(<GroupsSearchField />);
  //     const inputElement = screen.getByPlaceholderText('Search');
  //   userEvent.type(inputElement, 'Hello, World!');
  //     expect(inputElement.value).toBe('Hello, World!');
  // });
});
