import City from './Components/City';
import Ocean from './Components/Ocean';

import Forest from './Components/Forest';
import Hillsnow from './Components/Hillsnow';
import Manali from './Components/Manali';
import Navbar from './Components/Navbar';

import Nightlife from './Components/Nightlife';
import Stargazing from './Components/Stargazing';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer';
import Singapore from './Components/Singapore';
import London from './Components/London';
import Maldives from './Components/Maldives';
import Miami from './Components/Miami';
import Usa from './Components/Usa';
import Home from './Components/Home';

function App() {


  return (

<Router>



<Navbar />



<Routes>


<Route path='/'  element={  <Home />  }>  </Route>

<Route path='/singapore'  element={  <Singapore />  }>  </Route>
<Route path='/london'  element={    <London />}>  </Route>
<Route path='/maldives'  element={    <Maldives />}>  </Route>
<Route path='/miami'  element={    <Miami />}>  </Route>
<Route path='/manali'  element={    <Manali />}>  </Route>
<Route path='/usa'  element={    <Usa />}>  </Route>








<Route path='/stargazing' element={    <Stargazing />}>  </Route>
<Route path='/manali'     element={    <Manali />}>  </Route>
<Route path='/forest'     element={    <Forest />}>  </Route>
<Route path='/hillsnow'   element={    <Hillsnow />}>  </Route>
<Route path='/city'       element={    <City />}>  </Route>
<Route path='/nightlife'  element={    <Nightlife />}>  </Route>
<Route path='/ocean'  element={    <Ocean />}>  </Route>











</Routes>

<Footer />


</ Router>
  );
}

export default App;
