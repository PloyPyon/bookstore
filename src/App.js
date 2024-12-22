import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import BookListPage from './components/BookListPage';
import AddBookPage from './components/AddBookPage';
import EditBookPage from './components/EditBookPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<BookListPage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="/edit/:id" element={<EditBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;