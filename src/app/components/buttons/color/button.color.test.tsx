import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonColor from './button.color';

describe('ButtonColor', () => {
      it('renders with initial color', () => {
            const { getByTestId } = render(<ButtonColor testId="button-color" initialColor="#ffffff" />);
            const button = getByTestId('button-color');
            expect(button.querySelector('span')).toHaveStyle('color: #ffffff;');
      });

      it('calls onColorChange when color is changed', () => {
            const mockOnColorChange = jest.fn();
            const { getByTestId } = render(<ButtonColor testId="button-color" onColorChange={mockOnColorChange} />);
            const button = getByTestId('button-color');
            const input = button.querySelector('input') as HTMLInputElement;
            fireEvent.change(input, { target: { value: '#ff0000' } });
            expect(mockOnColorChange).toHaveBeenCalled(); 
      });
});
