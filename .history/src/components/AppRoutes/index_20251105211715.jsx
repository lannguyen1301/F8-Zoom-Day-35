import { BrowserRouter as Router, Routes, Route} from 'react-router'; // 

// pages
import Comments from '../../pages/Comments';

// Layouts

function AppRoutes() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />}
            </Routes>
        </Router>
    )
}