import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '..';

afterEach(cleanup);  //to clean all the memory data

describe('Footer component', () => {
    // baseline test
    it('renders', () => {
        render(<Footer/>);
      });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Footer/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });

    })