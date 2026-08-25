import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ArticleDetail from './pages/ArticleDetail';
import SearchResults from './pages/SearchResults';
import CategoryPage from './pages/CategoryPage'; // NEW IMPORT
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* NEW ROUTE */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;