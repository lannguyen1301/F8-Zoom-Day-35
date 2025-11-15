import { BrowserRouter as Router, Routes, Route} from 'react-router'; // 

// pages
import Home from '../../pages/Home';
// import Comments from '../../pages/Comments';
import Counter from '../../pages/Counter';
import Products from '../../pages/Products';
import Profile from '../../pages/Profile';
import Todo from '../../pages/Todo';
import Weather from '../../pages/Weather';

// Layouts
import Navigation from '../layouts/Navigation';

function AppRoutes() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/comments' element={<Comments />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/products' element={<Products />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/todo' element={<Todo />} />
                <Route path='/weather' element={<Weather />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;