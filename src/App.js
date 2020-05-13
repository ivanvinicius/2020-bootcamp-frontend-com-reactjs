import React from 'react';

import Header from './components/Header';

export default function App() {  
  return (
    /** Quando existe mais de um componente é necessário fazer um fragment <></> */
    <>
      <Header />
      <Header />
    </>
  );
}
