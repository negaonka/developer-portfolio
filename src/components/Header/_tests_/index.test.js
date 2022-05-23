import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..';

const menus = [
    { name: 'about me' }
  ]
  const mockCurrentMenu = jest.fn();
  const mockSetCurrentMenu = jest.fn();

afterEach(cleanup);

describe('Header component', () => {
    // baseline test
    it('renders', () => {
        render(<Header 
            menus={menus}
            setCurrentMenu={mockSetCurrentMenu}
            currentMenu={mockCurrentMenu}/>);
      });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Header   
            menus={menus}
            setCurrentMenu={mockSetCurrentMenu}
            currentMenu={mockCurrentMenu}/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });
    })

    //link visibility
    describe('links are visible', () => {
        it('inserts text into the links', () => {
          // Arrange
          const { getByTestId } = render(<Header   
            menus={menus}
            setCurrentMenu={mockSetCurrentMenu}
            currentMenu={mockCurrentMenu}/>);
          // Assert
          expect(getByTestId('link')).toHaveTextContent('Neha Gaonkar');
        });
      })