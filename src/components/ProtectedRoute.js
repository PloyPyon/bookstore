import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // สมมติว่าเราใช้ Context API

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;