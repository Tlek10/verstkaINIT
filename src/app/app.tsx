import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from "@/app/about/aboutPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/about" component={<AboutPage/>} />
                {/* другие маршруты */}
            </Routes>
        </Router>
    );
}

export default App;
