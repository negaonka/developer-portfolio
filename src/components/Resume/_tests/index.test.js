import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';

afterEach(cleanup);  //to clean all the memory data

describe('Project component', () => {
    // baseline test
    it('renders', () => {
        render(<Resume/>);
      });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Resume/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });

    })

     //text visibility
     describe('texts are visible', () => {
        it('inserts text', () => {
          // Arrange
          const { getByTestId } = render(<Resume/>);
          // Assert
          expect(getByTestId('h1tag')).toHaveTextContent('Resume');

        });
      })