import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonToggle from './button.toggle';

describe('ButtonToggle', () => {
      it('should render correctly', () => {
            const onChange = jest.fn();
            const { getByTestId } = render(
                  <ButtonToggle
                        testId="button-toggle"
                        id="toggle"
                        onChange={onChange}
                        value={true}
                  />
            );

            const buttonToggle = getByTestId('button-toggle');
            expect(buttonToggle).toBeInTheDocument();
      });

      it('should call onChange when clicked', () => {
            const onChange = jest.fn();
            const { getByTestId } = render(
                  <ButtonToggle
                        testId="button-toggle"
                        id="toggle"
                        onChange={onChange}
                        value={true}
                  />
            );
            const buttonToggle = getByTestId('button-toggle');
            const input = buttonToggle.querySelector('input') as HTMLInputElement;
            fireEvent.click(input, {  });
            expect(onChange).toHaveBeenCalled();
      });
});
