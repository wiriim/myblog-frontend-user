import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Post from './components/Post.jsx';
import Main from './components/Main.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        index: true, element: <Main />
      },
      {
        path: '/post/:postId',
        element: <Post />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
