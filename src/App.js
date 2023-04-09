
import HomePage from './pages/Home/HomePage';

import Banner from './pages/Banners/Banner';
import About from './pages/About/About';
import Members from './pages/Members/Members';
import Contact from './pages/Contact/Contact';
import Banner2 from './pages/Banners/Banner2';

import SideBarCustom from './layout/SideBar/SideBarCustom';

function App() {
   


  return (
    <div className="App">
    
   <SideBarCustom></SideBarCustom>
 
 <HomePage></HomePage>
 <Banner></Banner>
 <About></About>
 <Banner2></Banner2>
 <Members></Members>
 <Contact></Contact>
    </div>
  );
}

export default App;
