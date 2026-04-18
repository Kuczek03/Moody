import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, Sparkles, AlertCircle, BookOpen } from 'lucide-react';
import ChartsWidget from '../components/ChartsWidget';
import PhaseIndicator from '../components/PhaseIndicator';

const Dashboard = () => {
  const [selectedOffset, setSelectedOffset] = useState(0);

  // Generowanie dni (od -3 do +3)
  const days = [-3, -2, -1, 0, 1, 2, 3].map(offset => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return {
      offset,
      dayName: date.toLocaleDateString('pl-PL', { weekday: 'short' }),
      dayNumber: date.getDate(),
      isToday: offset === 0
    };
  });

  return (
    <div className="space-y-8 animate-fade-in pb-24">
      <div className="bg-white p-4 rounded-3xl y2k-border inline-block transform -rotate-1">
        <h2 className="text-3xl font-black text-pink-600 uppercase drop-shadow-sm">Twój Dashboard 💖</h2>
        <p className="text-pink-500 font-bold">Witaj w MOODY. Oto twoje dzisiejsze podsumowanie!</p>
      </div>
      
      {/* Sekcja Kalendarza i Dnia */}
      <div className="y2k-card p-0 overflow-hidden bg-pink-50 relative">
        <div className="p-4 bg-pink-400 text-white flex justify-between items-center border-b-4 border-pink-500">
          <h3 className="font-black text-xl flex items-center uppercase tracking-widest"><CalendarIcon className="mr-2" /> Ten Tydzień</h3>
        </div>
        
        {/* Pasek dni */}
        <div className="flex justify-between px-2 py-4 bg-white border-b-4 border-pink-200 overflow-x-auto">
          {days.map(day => (
            <button 
              key={day.offset}
              onClick={() => setSelectedOffset(day.offset)}
              className={`flex flex-col items-center justify-center w-14 h-16 rounded-2xl transition-all y2k-border flex-shrink-0 mx-1 ${selectedOffset === day.offset ? 'bg-yellow-300 y2k-shadow transform -translate-y-1' : 'bg-white hover:bg-pink-100'}`}
            >
              <span className={`text-xs font-bold uppercase ${selectedOffset === day.offset ? 'text-pink-700' : 'text-gray-500'}`}>{day.dayName}</span>
              <span className={`text-xl font-black ${selectedOffset === day.offset ? 'text-pink-700' : 'text-gray-800'}`}>{day.dayNumber}</span>
            </button>
          ))}
        </div>

        {/* Dynamiczna treść dla wybranego dnia */}
        <div className="p-6">
          {selectedOffset < 0 && (
            <div className="bg-white p-5 rounded-2xl y2k-border shadow-inner">
              <h4 className="font-black text-purple-600 text-lg mb-2 uppercase">Twój wpis z tego dnia 📝</h4>
              <p className="font-bold text-gray-600 text-sm mb-3">Zanotowałaś średni poziom energii i ból głowy.</p>
              <div className="flex gap-2">
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-xl text-xs font-black y2k-border">Nastrój: 😐</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-xl text-xs font-black y2k-border">Skurcze</span>
              </div>
            </div>
          )}

          {selectedOffset === 0 && (
            <div className="bg-yellow-300 p-6 rounded-2xl y2k-border y2k-shadow transform rotate-1 text-center relative overflow-hidden">
              <Sparkles className="absolute top-2 right-2 text-pink-400 animate-pulse" />
              <h4 className="font-black text-pink-600 text-2xl mb-2 uppercase">Jak się dziś czujesz?</h4>
              <p className="font-bold text-pink-800 text-sm mb-4">Zanotuj swoje objawy, byśmy mogli lepiej dopasować prognozy!</p>
              <Link to="/tracking" className="inline-block bg-white text-pink-600 font-black px-6 py-3 rounded-full y2k-border y2k-shadow hover:-translate-y-1 transition-transform uppercase">
                Zapisz wpis ✍️
              </Link>
            </div>
          )}

          {selectedOffset > 0 && (
            <div className="bg-blue-100 p-5 rounded-2xl y2k-border y2k-shadow-hover relative transform -rotate-1">
              <AlertCircle className="absolute top-4 right-4 text-blue-400 opacity-50" size={40} />
              <h4 className="font-black text-blue-600 text-lg mb-2 uppercase">Prognoza na ten dzień 🔮</h4>
              <p className="font-bold text-blue-800 text-sm mb-3">Przewidujemy niewielki spadek energii przed miesiączką.</p>
              <div className="bg-white p-3 rounded-xl y2k-border">
                <span className="text-xs font-black text-pink-500 uppercase block mb-1">Nasze zalecenia dla Ciebie:</span>
                <ul className="text-sm font-bold text-gray-700 list-disc pl-5 space-y-1">
                  <li>Przygotuj sobie termofor lub miękki koc.</li>
                  <li>Zaplanuj lżejszy trening (np. joga, krótki spacer).</li>
                  <li>Pamiętaj o odpowiednim nawodnieniu!</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Faza Cyklu - notatka i wskaźnik */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <PhaseIndicator />
        <div className="y2k-card flex flex-col justify-center bg-purple-100 border-purple-400">
          <h3 className="text-xl font-black text-purple-700 uppercase mb-2">Co się teraz dzieje? 🌸</h3>
          <p className="text-sm font-bold text-purple-800 mb-4">
            Jesteś w fazie folikularnej. Poziom estrogenu rośnie, więc możesz czuć przypływ energii i kreatywności! To idealny czas na naukę nowych rzeczy, spotkania z przyjaciółmi i trochę intensywniejszy ruch.
          </p>
          <button className="self-start text-xs font-black uppercase text-purple-600 bg-white px-4 py-2 rounded-xl y2k-border hover:-translate-y-1 transition-transform">
            Więcej o tej fazie &rarr;
          </button>
        </div>
      </div>

      {/* Spersonalizowane Artykuły */}
      <div>
        <h3 className="text-2xl font-black text-pink-600 uppercase mb-4 inline-block bg-white px-4 py-2 rounded-xl y2k-border transform rotate-1">Dla Ciebie na dziś 📚</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/education" className="y2k-card p-0 overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="h-32 bg-pink-200 relative overflow-hidden border-b-4 border-pink-500">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="yoga" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <span className="absolute top-2 left-2 bg-yellow-300 text-pink-700 text-xs font-black px-2 py-1 rounded-lg y2k-border">Ruch</span>
            </div>
            <div className="p-4 bg-pink-50">
              <h4 className="font-black text-pink-700 text-lg leading-tight mb-1">Joga łagodząca napięcie przed okresem</h4>
              <p className="text-xs font-bold text-pink-500 flex items-center"><BookOpen size={14} className="mr-1" /> 5 min czytania</p>
            </div>
          </Link>
          <Link to="/education" className="y2k-card p-0 overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="h-32 bg-purple-200 relative overflow-hidden border-b-4 border-purple-500">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="food" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <span className="absolute top-2 left-2 bg-yellow-300 text-purple-700 text-xs font-black px-2 py-1 rounded-lg y2k-border">Dieta</span>
            </div>
            <div className="p-4 bg-purple-50">
              <h4 className="font-black text-purple-700 text-lg leading-tight mb-1">Co jeść, by poczuć się lżej podczas PMS?</h4>
              <p className="text-xs font-bold text-purple-500 flex items-center"><BookOpen size={14} className="mr-1" /> 3 min czytania</p>
            </div>
          </Link>
        </div>
      </div>

      <ChartsWidget />
    </div>
  );
};

export default Dashboard;