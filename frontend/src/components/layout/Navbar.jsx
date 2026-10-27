import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { authService } from '../../services/auth.service';
import { FaUserCircle, FaBell, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { user, isAuthenticated, clearAuth } = useAuthStore();

  const handleLogout = () => {
    authService.logout();
    clearAuth();
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <h2>🚀 DoubtStack</h2>
        </Link>

        <div className="navbar-menu">
          <Link to="/doubts" className="nav-link">Doubts</Link>
          <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/doubts/create" className="btn btn-primary btn-sm">
                Post Doubt
              </Link>
              <div className="navbar-user">
                <FaBell className="icon-btn" title="Notifications" />
                <Link to={`/profile/${user?.id}`} className="user-avatar">
                  {user?.profilePhoto ? (
                    <img src={user.profilePhoto} alt={user.name} />
                  ) : (
                    <FaUserCircle size={32} />
                  )}
                </Link>
                <button onClick={handleLogout} className="btn btn-secondary btn-sm">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary btn-sm">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
