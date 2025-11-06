import React from 'react';
import Header from './component/Header';
import Welcome from './component/Welcome';
import Menu from './component/Menu';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header logo="https://tse2.mm.bing.net/th/id/OIP.yRXoH5-Ba5zaEyLlp8sg1gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" />
      <Welcome message="Welcome to  our Hotels" />
      <count/>
      <Menu />
      <Footer />
    </div>
  );
}

export default App;