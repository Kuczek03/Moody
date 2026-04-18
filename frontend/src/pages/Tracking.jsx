import { useState } from 'react';
import { Check, Droplets, Smile, Thermometer, Sparkles } from 'lucide-react';

const Tracking = () => {
  const [mood, setMood] = useState(3);
  const [flow, setFlow] = useState('');

  const symptomsList = ['Ból głowy', 'Skurcze', 'Zmęczenie', 'Trądzik', 'Tkliwość piersi', 'Wzdęcia'];
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Tutaj normalnie poszłoby żądanie do API
    alert('Zapisano pomyślnie!');
  };

  return (
    <div className="space-y-6 animate-fade-in relative">
      <Sparkles className="absolute top-0 right-10 text-pink-300 animate-pulse" size={32} />
      <div className="flex items-center space-x-4 mb-8 bg-white p-4 rounded-3xl y2k-border inline-flex transform -rotate-2">
        <div className="p-3 bg-yellow-300 text-pink-600 rounded-full y2k-border">
          <Thermometer size={32} strokeWidth={3} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-pink-600 drop-shadow-sm uppercase">Śledzenie Cyklu</h2>
          <p className="text-pink-500 font-bold text-sm">Zapisz swoje dzisiejsze objawy i samopoczucie 💖</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-8 y2k-card relative z-10 before:absolute before:inset-0 before:-z-10 before:bg-white before:rounded-3xl">

        {/* Nastrój */}
        <div className="space-y-4">
          <h3 className="text-xl font-black flex items-center text-pink-600 bg-yellow-300 inline-flex px-4 py-2 rounded-xl y2k-border transform rotate-1">
            <Smile className="mr-2 text-pink-600" size={24} strokeWidth={3} /> Jak się dziś czujesz?
          </h3>
          <div className="flex justify-between md:justify-start md:space-x-6 pt-2">
            {[1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setMood(level)}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all y2k-border ${mood === level ? 'bg-pink-500 text-white scale-125 y2k-shadow z-10' : 'bg-pink-100 hover:bg-pink-200 grayscale opacity-70 hover:scale-110'}`}
              >
                {['😫', '😕', '😐', '🙂', '😁'][level - 1]}
              </button>
            ))}
          </div>
        </div>

        {/* Krwawienie */}
        <div className="space-y-4 pt-4 border-t-4 border-pink-100 border-dashed">
          <h3 className="text-xl font-black flex items-center text-red-500">
            <Droplets className="mr-2 text-red-500" size={24} strokeWidth={3} /> Krwawienie
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Brak', 'Lekkie', 'Średnie', 'Mocne'].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setFlow(level)}
                className={`py-3 rounded-2xl text-sm font-black transition-all y2k-border ${flow === level ? 'bg-red-400 text-white y2k-shadow scale-105' : 'bg-red-50 text-red-400 hover:bg-red-100'}`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Objawy */}
        <div className="space-y-4 pt-4 border-t-4 border-pink-100 border-dashed">
          <h3 className="text-xl font-black text-purple-500">Objawy 🌸</h3>
          <div className="flex flex-wrap gap-3">
            {symptomsList.map((symptom) => {
              const isSelected = selectedSymptoms.includes(symptom);
              return (
                <button
                  key={symptom}
                  type="button"
                  onClick={() => toggleSymptom(symptom)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center y2k-border ${isSelected ? 'bg-purple-400 text-white y2k-shadow -translate-y-1' : 'bg-purple-50 text-purple-500 hover:bg-purple-100'}`}
                >
                  {isSelected && <Check size={16} className="mr-1.5" strokeWidth={3} />}
                  {symptom}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notatki */}
        <div className="space-y-4 pt-4 border-t-4 border-pink-100 border-dashed">
          <h3 className="text-xl font-black text-blue-500">Notatki 📝</h3>
          <textarea
            className="w-full bg-blue-50 y2k-border rounded-2xl p-4 focus:ring-4 focus:ring-pink-300 focus:outline-none transition-all resize-none h-32 font-medium text-gray-700 shadow-inner"
            placeholder="Dodaj dodatkowe informacje o dzisiejszym dniu, pamiętniczku..."
          ></textarea>
        </div>

        <div className="pt-4 text-center">
          <button
            type="submit"
            className="y2k-button w-full md:w-auto md:px-12 text-xl tracking-wide uppercase"
          >
            Zapisz wpis ✨
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tracking;
