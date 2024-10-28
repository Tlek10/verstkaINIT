import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from "@/app/about/page";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/about" component={<Page/>} />
                {/* другие маршруты */}
            </Routes>
        </Router>
    );
}

export default App;
