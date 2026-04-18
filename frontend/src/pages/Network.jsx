import { Users, Link as LinkIcon, Mail, ShieldAlert, Sparkles } from 'lucide-react';

const Network = () => {
  return (
    <div className="space-y-6 animate-fade-in max-w-2xl mx-auto relative">
      <Sparkles className="absolute -top-4 -left-4 text-yellow-400 animate-bounce" size={48} />
      
      <div className="flex items-center space-x-4 mb-8 bg-white p-4 rounded-3xl y2k-border inline-flex transform rotate-1">
        <div className="p-3 bg-pink-300 text-pink-700 rounded-full y2k-border">
          <Users size={32} strokeWidth={3} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-pink-600 drop-shadow-sm uppercase">Sieć Wsparcia</h2>
          <p className="text-pink-500 font-bold text-sm">Zaproś bliskich do swojego świata! 🤝</p>
        </div>
      </div>

      <div className="y2k-card relative z-10 before:absolute before:inset-0 before:-z-10 before:bg-white before:rounded-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-300 text-pink-600 mb-4 y2k-border y2k-shadow transform -rotate-3 hover:rotate-3 transition-transform">
            <LinkIcon size={40} strokeWidth={3} />
          </div>
          <h3 className="text-2xl font-black text-pink-600 mb-2 uppercase">Połącz swoje konto</h3>
          <p className="text-gray-600 font-bold text-sm max-w-md mx-auto bg-pink-50 p-4 rounded-xl y2k-border">
            Gdy zaprosisz partnera lub przyjaciółkę, będą mogli otrzymywać delikatne powiadomienia o fazie Twojego cyklu, co pomaga w budowaniu lepszej komunikacji i zrozumienia.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Wysłano zaproszenie!'); }}>
          <div className="bg-purple-50 p-6 rounded-2xl y2k-border border-dashed border-4 border-purple-200">
            <label className="block text-lg font-black text-purple-600 mb-2 uppercase">Adres email bliskiej osoby 💌</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={24} className="text-purple-400" strokeWidth={3} />
              </div>
              <input 
                type="email" 
                className="block w-full pl-12 pr-4 py-4 border-4 border-purple-300 rounded-2xl focus:ring-0 focus:border-pink-500 transition-colors font-bold text-gray-700 outline-none" 
                placeholder="twoj.ziomek@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-black text-pink-600 mb-3 uppercase">Co chcesz udostępniać? 👀</label>
            <div className="space-y-3 mt-2">
              <label className="flex items-center p-4 bg-white rounded-2xl cursor-pointer hover:bg-yellow-50 transition-transform hover:-translate-y-1 y2k-border y2k-shadow">
                <input type="checkbox" className="w-6 h-6 text-pink-500 border-4 border-pink-300 rounded focus:ring-0 accent-pink-500" defaultChecked />
                <span className="ml-4 font-black text-gray-700">Aktualna faza cyklu</span>
              </label>
              <label className="flex items-center p-4 bg-white rounded-2xl cursor-pointer hover:bg-yellow-50 transition-transform hover:-translate-y-1 y2k-border y2k-shadow">
                <input type="checkbox" className="w-6 h-6 text-pink-500 border-4 border-pink-300 rounded focus:ring-0 accent-pink-500" defaultChecked />
                <span className="ml-4 font-black text-gray-700">Prognozowany spadek nastroju (PMS)</span>
              </label>
              <label className="flex items-center p-4 bg-white rounded-2xl cursor-pointer hover:bg-yellow-50 transition-transform hover:-translate-y-1 y2k-border y2k-shadow">
                <input type="checkbox" className="w-6 h-6 text-pink-500 border-4 border-pink-300 rounded focus:ring-0 accent-pink-500" />
                <span className="ml-4 font-black text-gray-700">Codzienny nastrój</span>
              </label>
            </div>
          </div>

          <div className="bg-blue-100 p-5 rounded-2xl flex items-start mt-8 y2k-border border-blue-300">
            <ShieldAlert size={28} className="text-blue-500 mr-3 flex-shrink-0" strokeWidth={3} />
            <p className="text-sm font-bold text-blue-800 leading-relaxed">
              Twoja prywatność jest dla nas najważniejsza. Zawsze możesz cofnąć dostęp w dowolnym momencie. Zaproszona osoba będzie widziała tylko wybrane przez Ciebie informacje. 🔒
            </p>
          </div>

          <button 
            type="submit"
            className="y2k-button w-full text-xl tracking-widest uppercase mt-6"
          >
            Wyślij zaproszenie 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Network;
