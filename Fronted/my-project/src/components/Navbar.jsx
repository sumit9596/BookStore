import React from 'react'
import { useEffect, useState } from 'react'
import Login from './Login';
import { useAuth } from '../context/AuthProvider';
import { useTheme } from '../context/ThemeProvider';
import Logout from './Logout';
import { Link } from 'react-router-dom';

function Navbar() {

    const [authUser, setAuthUser] = useAuth()
    const { theme, toggleTheme } = useTheme()

    const [sticky, setSticky] = React.useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navItems = (
        <>
            <li><Link to='/' className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link to='/course' className="hover:text-blue-500 transition">Books</Link></li>
            <li><Link to='/contact' className="hover:text-blue-500 transition">Contact</Link></li>
            <li><Link to='/about' className="hover:text-blue-500 transition">About</Link></li>
        </>
    )

    return (
        <>
            <nav className={`h-20 shadow-sm fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${sticky ? 'bg-gray-800 shadow-md text-white' : 'bg-white text-gray-800'}`}>
                <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
                        BookStore
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 items-center list-none">
                        {navItems}
                    </ul>

                    {/* Right side buttons */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                            title="Toggle theme"
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>

                        {/* Auth Buttons */}
                        {authUser ? (
                            <Logout />
                        ) : (
                            <Login />
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2"
                            title="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow-lg border-t">
                        <ul className="flex flex-col gap-2 p-4 list-none">
                            {navItems}
                        </ul>
                    </div>
                )}
            </nav>
            <div className="h-20"></div>
        </>
    )
}

export default Navbar