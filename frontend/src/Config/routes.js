
import { createBrowserRouter } from 'react-router-dom';
import Register from '../Pages/Register' ;
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import PageNotFound from '../Pages/PageNotFound';
import PageRacine from '../Pages/PageRacine';
import Profile from '../Pages/Profile';
import ChatPage from '../Pages/ChatPage';




const router = createBrowserRouter([
    {
      path: '/',
      element : <PageRacine/>,
      errorElement : <PageNotFound />
    },
    {
      path: '/home',
      element: < Home/>
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: < Register/>
    },
    {
      path: '/profile',
      element: <Profile/>
    },
    {
      path: '/chat',
      element: <ChatPage/>
    },


])

export default router;
