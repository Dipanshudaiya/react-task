 import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

function Header() {
  const cart = useCartStore((state) => state.items || []);

  return (
    <header className="bg-gray-200 shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-Black-600">
        PRODUCT STORE 
      </Link>

      <nav className="flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
        <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-indigo-600 font-medium">Register</Link>
        <Link to="/cart" className="text-gray-700 hover:text-indigo-600 font-medium flex items-center gap-1">
          🛒 ({cart.length})
        </Link>
      </nav>
    </header>
  )
}

export default Header;
