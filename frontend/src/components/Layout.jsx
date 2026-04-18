import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Activity, Users, PlusCircle, Heart, Sparkles } from 'lucide-react';

const Layout = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <Home size={28} />, label: 'Dashboard' },
    { path: '/tracking', icon: <PlusCircle size={28} />, label: 'Śledzenie' },
    { path: '/medical', icon: <Activity size={28} />, label: 'Badania' },
    { path: '/education', icon: <BookOpen size={28} />, label: 'Edukacja' },
    { path: '/wellness', icon: <Heart size={28} />, label: 'Wellness' },
    { path: '/network', icon: <Users size={28} />, label: 'Bliscy' },
  ];

  return (
    <div className="flex flex-col h-screen bg-pink-50 text-gray-900 font-sans selection:bg-pink-300">
      {/* Górne menu */}
      <header className="bg-pink-400 y2k-border y2k-shadow mx-4 mt-4 px-6 py-3 flex items-center justify-between z-10 rounded-full relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-20 transform translate-x-4 -translate-y-4">
          <Sparkles size={80} className="text-yellow-300" />
        </div>
        <h1 className="text-3xl font-black text-white tracking-widest drop-shadow-md z-10 flex items-center">
          MOODY <Sparkles size={20} className="ml-2 text-yellow-300" />
        </h1>
        <div className="hidden md:flex space-x-6 z-10 bg-white/90 px-6 py-2 rounded-full y2k-border">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`font-bold transition-all hover:text-pink-500 hover:scale-110 flex items-center gap-1 ${location.pathname === item.path ? 'text-pink-600 drop-shadow-sm' : 'text-gray-600'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center text-pink-600 font-black y2k-border md:hidden z-10">
          M
        </div>
      </header>

      {/* Główna zawartość */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-40 md:pb-16 bg-transparent">
        <div className="max-w-5xl mx-auto h-full">
          <Outlet />
        </div>
      </main>

      {/* Dolny pasek nawigacji (tylko na urządzeniach mobilnych) */}
      <nav className="md:hidden bg-pink-100 y2k-border fixed bottom-4 left-4 right-4 rounded-3xl z-10 pb-safe shadow-[0_-4px_0_0_#db2777]">
        <div className="flex justify-around items-center h-20 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-transform ${isActive ? 'text-pink-600 scale-110 -translate-y-2' : 'text-pink-400 hover:text-pink-600'}`}
              >
                <div className={`${isActive ? 'bg-yellow-300 p-2 rounded-full y2k-border' : ''}`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] font-black ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`}>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;