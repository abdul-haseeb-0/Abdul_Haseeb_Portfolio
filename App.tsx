 import { HashRouter, Route, Routes } from "react-router-dom";
 import Portfolio from "./Portfolio";
 
 function App() {
   return (
     <HashRouter>
       <Routes>
         <Route path="/*" element={<Portfolio />} />
       </Routes>
     </HashRouter>
   );
 }
 
 export default App;