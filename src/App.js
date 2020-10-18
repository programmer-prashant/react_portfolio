import React from 'react';
import './App.css';

//Components
import MyNavbar from './components/Navbar/mynavbar.components';
import MyCarousel from './components/Carousel/myCarousel.component'
import TitleMessage from './components/title-message/title-message.component'
import ScrollDown from './components/scroll-down/scroll-down.component'

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel/>
      <TitleMessage/>
      <ScrollDown/>
    </div>
  );
};

export default App;
