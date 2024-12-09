
import Hero from './components/Hero';
import BrowseRange from './components/Browserange'
import OurProducts from './components/OurProducts';
import Room from './components/Rooms'
import Furniture from './components/Furniture';



const Home = () => {
  return (
    <div>
  
      <Hero />
      <br></br>
      <BrowseRange />
      <br></br>
      <OurProducts/>
   
      <Room/>
      <br></br>
      <Furniture/>
    </div>
  );
};

export default Home;
