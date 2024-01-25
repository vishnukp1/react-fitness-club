import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reason from './components/Reason/Reason';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs />
         <Reason />
         <Plans/>
         <Testimonials />
    </div>
  );
}

export default App;