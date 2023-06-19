/** @jsx jsx */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostForm from '../pages/PostForm';

describe('PostForm component', () => {
  test('Submit button triggers form submission', () => {
    render(<PostForm />);

    const titleInput = screen.getByLabelText('Title:');
    const bodyInput = screen.getByLabelText('Body:');
    const idInput = screen.getByLabelText('ID:');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(bodyInput, { target: { value: 'Test Body' } });
    fireEvent.change(idInput, { target: { value: '1' } });

    fireEvent.click(submitButton);

    expect(titleInput.value).toBe('');
    expect(bodyInput.value).toBe('');
    expect(idInput.value).toBe('');
  });
});

//ÇALIŞTIRAMADIM//
