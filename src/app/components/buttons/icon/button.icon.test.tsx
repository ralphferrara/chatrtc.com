import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from './button.icon';

// Add the required icon to the library
library.add(faCoffee);

describe('ButtonIcon', () => {
      it('renders without crashing', () => {
            render(<ButtonIcon icon={faCoffee} title="Coffee" />);
      });

      it('renders the correct icon', () => {
            const { getByTestId } = render(<ButtonIcon testId="button-icon" icon={faCoffee} title="Coffee" />);
            const iconElement = getByTestId('button-icon');
            expect(iconElement).toBeInTheDocument();
      });

      it('calls onClick when clicked', () => {
            const onClickMock = jest.fn();
            const { getByTestId } = render(<ButtonIcon testId="button-icon" icon={faCoffee} title="Coffee" onClick={onClickMock} />);
            const iconElement = getByTestId('button-icon');
            fireEvent.click(iconElement);
            expect(onClickMock).toHaveBeenCalled();
      });
});
 