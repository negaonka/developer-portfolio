import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Portfolio from '..';

afterEach(cleanup);  //to clean all the memory data

describe('Portfolio component', () => {
    // baseline test
    it('renders', () => {
        render(<Portfolio />);
      });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Portfolio />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });

    })