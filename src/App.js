import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './commons/routes';
import { GlobalStyle, MainWrapper } from './assets/styled';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';



function App() {
  return (
    <HashRouter>
      <div className="mainContent">
        <div style={{ display: 'flex' }}>
        <Footer />
            <Sidebar />
          <MainWrapper sidebarStatu={true}>
            <Routes />
            
          </MainWrapper>
        </div>
      </div>
      <GlobalStyle />
    </HashRouter>
  );
}

export default App;
