import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  Home,
  UtensilsCrossed,
  Clock,
  Heart
} from 'lucide-react';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = useLocation().pathname;

  // Detect login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("quickcrow-user");
    setIsLoggedIn(!!user);
  }, []);

  // CART logic
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("quickcrow-cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("quickcrow-cart", JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/restaurants', label: 'Restaurant', icon: UtensilsCrossed },
    { href: '/orders', label: 'Orders', icon: Clock },
    { href: '/restaurants', label: 'Favorites', icon: Heart },
  ];

  // Glow animation
  const glowButton = {
    initial: { scale: 1 },
    hover: {
      scale: 1.06,
      boxShadow: "0 0 12px rgba(255, 200, 0, 0.8)",
    },
    tap: { scale: 0.93 }
  };

  return (
    <header className="sticky top-0 z-50 glass backdrop-blur-md">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-2">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="QuickCrow Logo"
              className="h-10 w-10 rounded-xl object-cover shadow-md"
            />
            <span className="hidden font-bold text-xl sm:block">QuickCrow</span>
          </Link>

          {/* Partner Button - Desktop */}
          <motion.div
            variants={glowButton}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="hidden md:flex"
          >
            <Link
              to="/vendor/register"
              className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black shadow-lg hover:bg-yellow-300 transition"
            >
              Become a Partner
            </Link>
          </motion.div>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search restaurants or dishes..."
                className="w-full rounded-full border bg-white py-2.5 pl-12 pr-4 text-sm outline-none
                     focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition",
                  currentPath === link.href
                    ? "bg-yellow-100 text-yellow-700"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE: MOBILE & DESKTOP */}
          <div className="flex items-center gap-2">

            {/* Become Partner - Mobile */}
            <motion.div
              className="flex md:hidden"
              variants={glowButton}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/vendor/register"
                className="rounded-full bg-yellow-400 px-2.5 py-1.5 text-xs font-bold text-black shadow-md hover:bg-yellow-300 transition"
              >
                Partner
              </Link>
            </motion.div>

            {/* Login - Mobile */}
            {!isLoggedIn && (
              <motion.div
                className="flex md:hidden"
                variants={glowButton}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/login"
                  className="rounded-full bg-yellow-400 px-2.5 py-1.5 text-xs font-bold text-black shadow-md hover:bg-yellow-300 transition"
                >
                  Login
                </Link>
              </motion.div>
            )}

            {/* Cart */}
            <motion.div
              variants={glowButton}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <ShoppingBag className="h-5 w-5 text-gray-700" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold text-black shadow"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>
            </motion.div>

            {/* Profile - Desktop Only */}
            {isLoggedIn && (
              <Link
                to="/EditProfile"
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <User className="h-5 w-5 text-gray-700" />
              </Link>
            )}

            {/* Login - Desktop */}
            {!isLoggedIn && (
              <motion.div
                className="hidden sm:flex md:flex"
                variants={glowButton}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/login"
                  className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black shadow-lg hover:bg-yellow-300 transition"
                >
                  Login
                </Link>
              </motion.div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-3 lg:hidden">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search restaurants or dishes..."
              className="w-full rounded-full border bg-white py-2.5 pl-12 pr-4 text-sm outline-none
                       focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-white shadow-md"
          >
            <nav className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition",
                    currentPath === link.href
                      ? "bg-yellow-100 text-yellow-700"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
              ))}

              {/* Mobile Profile only */}
              {isLoggedIn && (
                <Link
                  to="/EditProfile"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
                >
                  <User className="h-5 w-5" />
                  Profile
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
