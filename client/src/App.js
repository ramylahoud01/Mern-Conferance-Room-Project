import {createBrowserRouter,RouterProvider} from "react-router-dom"
import HomePage from './Components/Home/HomePage'; 
import Error from "./Components/Error/Error";
function App() {
  const router =createBrowserRouter([
    {path:"/",element:<HomePage />,errorElement:<Error />,
    loader:async ()=>{
      const response = await fetch('http://localhost:3001/views')
      const interviewData = await response.json();
      return interviewData.interviews
    }}
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
