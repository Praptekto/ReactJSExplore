import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {Page} from './alertcode';
class App extends React.Component {
  render() {
    return (
      <div>
        <Page/>
        <Header />
        <Main />
        <Footer />
        
      </div>
    );
  }
}

export default App;