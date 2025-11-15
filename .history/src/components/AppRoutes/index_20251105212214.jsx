import { BrowserRouter as Router, Routes, Route} from 'react-router'; // 

// pages
import Comments from '../../pages/Comments';

// Layouts

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

export default AppRoutes