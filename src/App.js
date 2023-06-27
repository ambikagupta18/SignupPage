
import './App.css';
import SignupPage from './SignupPage';
import { BrowserRouter, Route, 
  // Switch 
} from 'react-router-dom';
import SuccessPage from './SuccessPage';

function App() {
  return <BrowserRouter>
           <Route
             path="/succespage"
           ><SuccessPage /></Route>
           <Route
             exact path="/"
           ><SignupPage/></Route>
         </BrowserRouter>



  // <div><Switch>
  //       <Route
  //         path="/succespage"
  //       ><SuccessPage /></Route>
  //       <Route
  //         exact path="/"
  //       ><SignupPage/></Route></Switch>
  //       </div>
}

export default App;


// function App() {
//   return <BrowserRouter>
//         <Route
//           path="/succespage"
//         ><SuccessPage /></Route>
//         <Route
//           exact path="/"
//         ><SignupPage/></Route>
//   </BrowserRouter>
// }




