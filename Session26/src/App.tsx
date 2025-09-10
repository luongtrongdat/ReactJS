
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/router';

export default function App() {
 
  return (
    <div>
      <h1>REACT ROUTER DOM</h1>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}