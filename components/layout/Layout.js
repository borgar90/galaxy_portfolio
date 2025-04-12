// components/layout/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  z-index: 1;
  padding-top: 0rem;
  padding-bottom: 0rem;
  margin: 0; 
  background: none; /* hardkodet for kraftigere glow */
`;

const Layout = ({ children }) => {
  return (
    <div className="bg-black  w-[100vw] overflow-hidden">
      <Header />
        <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
