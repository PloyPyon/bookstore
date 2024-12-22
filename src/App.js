import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './components/LoginPage';
import BookListPage from './components/BookListPage';
import AddBookPage from './components/AddBookPage';
import EditBookPage from './components/EditBookPage';

function App() {
  return (
    // เพิ่ม basename="/bookstore"
    <BrowserRouter basename="/bookstore">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route index element={<BookListPage />} />
          <Route
            path="add"
            element={
              <ProtectedRoute>
                <AddBookPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoute>
                <EditBookPage />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* กำหนด route สำรอง */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;