import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderLogin from '../../components/HeaderLogin';

afterEach(cleanup);

describe('Should render components', () => {
  test('<Aside /> component', () => {
    const aside = render(<Aside />);
    expect(aside).toBeTruthy();
    expect(aside).toMatchSnapshot();
  });
  test('<Footer /> component', () => {
    const footer = render(<Footer />);
    expect(footer).toBeTruthy();
    expect(footer).toMatchSnapshot();
  });
  test('<Header /> component', () => {
    const header = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(header).toBeTruthy();
    expect(header).toMatchSnapshot();
  });
  test('<HeaderLogin /> component', () => {
    const headerLogin = render(
      <Router>
        <HeaderLogin />
      </Router>,
    );
    expect(headerLogin).toBeTruthy();
    expect(headerLogin).toMatchSnapshot();
  });
});
