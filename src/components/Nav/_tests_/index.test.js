import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const menus = [
    { name: 'about me'}
  ]
  const mockCurrentMenu = jest.fn();
  const mockSetCurrentMenu = jest.fn();

afterEach(cleanup);  //to clean all the memory data

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav 
            menus={menus}
            setCurrentMenu={mockSetCurrentMenu}
            currentMenu={mockCurrentMenu}/>);
      });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav   
            menus={menus}
            setCurrentMenu={mockSetCurrentMenu}
            currentMenu={mockCurrentMenu}/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });

    })