import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Project from '..';

afterEach(cleanup);  //to clean all the memory data

const developer = [{
    image: "developer1",
    application:"https://api.github.com/users/mojombo",
    github:"https://github.com/mojombo",
    name: "Plantonic Game"
    }
  ]

describe('Project component', () => {
    // baseline test
    it('renders', () => {
        render(<Project developer={developer}/>);
      });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Project developer={developer}/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });

    })