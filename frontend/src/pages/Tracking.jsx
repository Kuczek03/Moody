import { useState } from 'react';
import { Droplets, Smile, Thermometer, Sparkles, Brain, AlertTriangle, ChevronRight, Activity } from 'lucide-react';

const Tracking = () => {
  // Stan do testowania fazy
  const [currentPhase, setCurrentPhase] = useState('Menstruacja');
  
  // Zakładki formularza
  const [activeTab, setActiveTab] = useState('general'); // general, phase, deep
  const [showDeep, setShowDeep] = useState(false);

  // Stany formularza
  const [formData, setFormData] = useState({
    mood: 3,
    energy: 3,
    sleepHours: 8,
    sleepQuality: 3,
    stress: 0,
    appetite: 'Normalny',
    meds: false,
    medsName: '',
    // Menstruacja
    flow: 0,
    cramps: 0,
    // Dodatkowe objawy
    thyroidCold: 0,
    endoPain: 0
  });

  const updateForm = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Zapisano pomyślnie!');
  };

  // Komponent pomocniczy do suwaków 1-5 w Y2K
  const Y2kSlider = ({ label, valueKey, min = 1, max = 5, emojis = [] }) => (
    <div className="space-y-3 bg-white p-5 rounded-3xl y2k-border shadow-sm">
      <label className="font-black text-pink-600 block uppercase">{label}</label>
      <div className="flex justify-between md:justify-start md:space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((level) => {
          const isSelected = formData[valueKey] === level;
          return (
            <button
              key={level}
              type="button"
              onClick={() => updateForm(valueKey, level)}
              className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-2xl transition-all y2k-border ${isSelected ? 'bg-pink-500 text-white scale-110 y2k-shadow z-10' : 'bg-pink-50 hover:bg-pink-100 grayscale opacity-70 hover:scale-105'}`}
            >
              {emojis[level - min] || level}
            </button>
          );
        })}
      </div>
    </div>
  );

  // Komponent do toggle (Tak/Nie)
  const Y2kToggle = ({ label, valueKey }) => (
    <label className="flex items-center justify-between p-5 bg-white rounded-3xl cursor-pointer hover:bg-yellow-50 transition-colors y2k-border shadow-sm">
      <span className="font-black text-purple-600 uppercase pr-4">{label}</span>
      <input 
        type="checkbox" 
        checked={!!formData[valueKey]} 
        onChange={(e) => updateForm(valueKey, e.target.checked)}
        className="w-8 h-8 text-pink-500 border-4 border-pink-300 rounded focus:ring-0 accent-pink-500 shrink-0" 
      />
    </label>
  );

  return (
    <div className="space-y-6 animate-fade-in relative pb-10 max-w-2xl mx-auto">
      <Sparkles className="absolute top-0 right-10 text-pink-300 animate-pulse" size={32} />
      
      <div className="flex items-center space-x-4 mb-4 bg-white p-4 rounded-3xl y2k-border inline-flex transform -rotate-1">
        <div className="p-3 bg-yellow-300 text-pink-600 rounded-full y2k-border">
          <Thermometer size={32} strokeWidth={3} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-pink-600 drop-shadow-sm uppercase">Twój Dzień</h2>
          <p className="text-pink-500 font-bold text-sm">Zapisz jak się dziś czujesz 💖</p>
        </div>
      </div>

      {/* Wybierak Fazy (Tylko do testów MVP) */}
      <div className="bg-purple-100 p-5 rounded-3xl y2k-border border-dashed border-4 border-purple-300 transform rotate-1 mb-6">
        <label className="block text-purple-700 font-black uppercase text-sm mb-3">🧪 Testowy wybór fazy cyklu:</label>
        <div className="flex flex-wrap gap-2">
          {['Menstruacja', 'Folikularna', 'Owulacja', 'Lutealna'].map(phase => (
            <button 
              key={phase} 
              onClick={() => setCurrentPhase(phase)}
              className={`px-4 py-2 text-sm font-black uppercase rounded-xl y2k-border transition-transform ${currentPhase === phase ? 'bg-purple-500 text-white y2k-shadow -translate-y-1' : 'bg-white text-purple-600 hover:bg-purple-50'}`}
            >
              {phase}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6 relative z-10">
        
        {/* Nawigacja Wizard */}
        <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
          <button 
            type="button" 
            onClick={() => setActiveTab('general')}
            className={`px-5 py-3 rounded-full font-black text-sm uppercase whitespace-nowrap transition-all y2k-border flex items-center ${activeTab === 'general' ? 'bg-pink-500 text-white y2k-shadow -translate-y-1' : 'bg-white text-pink-500 hover:bg-pink-50'}`}
          >
            <Smile className="mr-2" size={20} strokeWidth={3} /> Ogólne
          </button>
          <button 
            type="button" 
            onClick={() => setActiveTab('phase')}
            className={`px-5 py-3 rounded-full font-black text-sm uppercase whitespace-nowrap transition-all y2k-border flex items-center ${activeTab === 'phase' ? 'bg-blue-500 text-white y2k-shadow -translate-y-1' : 'bg-white text-blue-500 hover:bg-blue-50'}`}
          >
            <Droplets className="mr-2" size={20} strokeWidth={3} /> {currentPhase}
          </button>
          {showDeep && (
            <button 
              type="button" 
              onClick={() => setActiveTab('deep')}
              className={`px-5 py-3 rounded-full font-black text-sm uppercase whitespace-nowrap transition-all y2k-border flex items-center ${activeTab === 'deep' ? 'bg-red-500 text-white y2k-shadow -translate-y-1' : 'bg-white text-red-500 hover:bg-red-50'}`}
            >
              <Activity className="mr-2" size={20} strokeWidth={3} /> Diagnostyka
            </button>
          )}
        </div>

        <div className="y2k-card min-h-[400px]">
          {/* TAB: OGÓLNE */}
          {activeTab === 'general' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-black text-pink-600 uppercase border-b-4 border-pink-200 pb-2">Zawsze z Tobą</h3>
              
              <Y2kSlider label="Nastrój ogólny" valueKey="mood" emojis={['😫', '😕', '😐', '🙂', '😁']} />
              <Y2kSlider label="Poziom energii" valueKey="energy" emojis={['🪫', '🔋', '🔌', '⚡', '🚀']} />
              <Y2kSlider label="Poziom stresu" valueKey="stress" min={0} max={5} emojis={['😌', '🤏', '😬', '😰', '🤯', '🌋']} />
              
              <div className="bg-white p-5 rounded-3xl y2k-border shadow-sm">
                <label className="font-black text-pink-600 block uppercase mb-3">Apetyt</label>
                <div className="flex flex-wrap gap-3">
                  {['Mniejszy', 'Normalny', 'Większy'].map(opt => (
                    <button 
                      key={opt} type="button" 
                      onClick={() => updateForm('appetite', opt)}
                      className={`px-5 py-3 rounded-xl font-black text-sm uppercase transition-transform y2k-border ${formData.appetite === opt ? 'bg-orange-400 text-white -translate-y-1 y2k-shadow' : 'bg-orange-50 text-orange-600 hover:bg-orange-100'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <Y2kToggle label="Czy brałaś dziś jakieś leki?" valueKey="meds" />
              {formData.meds && (
                <div className="animate-fade-in bg-pink-50 p-4 rounded-3xl y2k-border">
                  <input 
                    type="text" 
                    placeholder="Jakie leki? (np. Ibuprom, Euthyrox)" 
                    className="w-full p-4 rounded-2xl y2k-border bg-white font-bold outline-none focus:ring-4 ring-pink-300"
                    value={formData.medsName}
                    onChange={(e) => updateForm('medsName', e.target.value)}
                  />
                </div>
              )}
            </div>
          )}

          {/* TAB: FAZA */}
          {activeTab === 'phase' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-black text-blue-600 uppercase border-b-4 border-blue-200 pb-2">Objawy: {currentPhase}</h3>
              
              {currentPhase === 'Menstruacja' && (
                <>
                  <Y2kSlider label="Obfitość krwawienia" valueKey="flow" min={0} max={5} emojis={['Brak', '🩸', '🩸🩸', '🩸🩸🩸', '🌊', '🌊🌊']} />
                  <Y2kSlider label="Ból miesiączkowy" valueKey="cramps" min={0} max={5} emojis={['0', '1', '2', '3', '4', '5']} />
                  <Y2kToggle label="Czy wystąpiły skrzepy?" valueKey="clots" />
                  <Y2kToggle label="Czy wystąpiło przeciekanie?" valueKey="leaking" />
                </>
              )}

              {currentPhase === 'Folikularna' && (
                <>
                  <Y2kSlider label="Regeneracja po miesiączce" valueKey="regeneration" emojis={['📉', '🌱', '🌿', '🌳', '✨']} />
                  <div className="bg-white p-5 rounded-3xl y2k-border shadow-sm">
                    <label className="font-black text-pink-600 block uppercase mb-3">Stan cery</label>
                    <div className="flex gap-3">
                      <button type="button" className="flex-1 py-3 rounded-xl font-black text-sm uppercase transition-transform y2k-border bg-green-100 text-green-700 hover:-translate-y-1 y2k-shadow">Poprawa ✨</button>
                      <button type="button" className="flex-1 py-3 rounded-xl font-black text-sm uppercase transition-transform y2k-border bg-red-100 text-red-700 hover:-translate-y-1 y2k-shadow">Pogorszenie 🥺</button>
                    </div>
                  </div>
                </>
              )}

              {currentPhase === 'Owulacja' && (
                <>
                  <Y2kSlider label="Ból owulacyjny" valueKey="ovuPain" min={0} max={5} emojis={['Brak', '🤏', '😣', '😖', '😫', '🚑']} />
                  <Y2kSlider label="Libido" valueKey="libido" emojis={['🧊', '💧', '🔥', '🔥🔥', '🌶️']} />
                  <Y2kSlider label="Chęć do socjalizacji" valueKey="social" emojis={['Odludek', 'Cicho', 'Zwykła', 'Gaduła', 'Party!']} />
                </>
              )}

              {currentPhase === 'Lutealna' && (
                <>
                  <Y2kSlider label="Tkliwość piersi" valueKey="breastPain" min={0} max={5} />
                  <Y2kSlider label="Wzdęcia" valueKey="bloating" min={0} max={5} />
                  <Y2kSlider label="Zachcianki" valueKey="cravings" min={0} max={5} emojis={['Brak', '🍫', '🍕', '🍟', '🍩', '🍰']} />
                  <Y2kSlider label="Płaczliwość" valueKey="crying" emojis={['Brak', '🥺', '😢', '😭', '🌊']} />
                </>
              )}
            </div>
          )}

          {/* TAB: DIAGNOSTYKA */}
          {activeTab === 'deep' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-red-50 p-5 rounded-3xl y2k-border border-red-300 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                <Brain className="text-red-500 shrink-0 mt-1" size={40} strokeWidth={3} />
                <div>
                  <h3 className="text-xl font-black text-red-600 uppercase mb-2">Głębsza Obserwacja 🚨</h3>
                  <p className="text-sm font-bold text-red-800 leading-relaxed">
                    Te objawy pomagają w szybszym wykrywaniu wzorców dla Twojego ginekologa (np. w kierunku endometriozy czy chorób tarczycy). Wypełniaj je tylko, jeśli odczuwasz niepokój.
                  </p>
                </div>
              </div>

              <div className="space-y-5 bg-pink-50 p-5 rounded-3xl y2k-border">
                <h4 className="font-black text-pink-700 uppercase bg-white inline-block px-4 py-2 rounded-xl y2k-border shadow-sm transform -rotate-1">Tarczyca</h4>
                <Y2kSlider label="Uczucie przejmującego zimna" valueKey="thyroidCold" min={0} max={5} />
                <Y2kToggle label="Nadmierne wypadanie włosów" valueKey="hairLoss" />
                <Y2kToggle label="Bezsenność mimo zmęczenia" valueKey="insomnia" />
              </div>

              <div className="space-y-5 bg-purple-50 p-5 rounded-3xl y2k-border">
                <h4 className="font-black text-purple-700 uppercase bg-white inline-block px-4 py-2 rounded-xl y2k-border shadow-sm transform rotate-1">Endometrioza</h4>
                <Y2kSlider label="Przewlekły ból miednicy (poza okresem)" valueKey="endoPain" min={0} max={5} />
                <Y2kToggle label="Ból promieniujący do nóg/pleców" valueKey="radiatingPain" />
                <Y2kToggle label="Plamienia międzymiesiączkowe" valueKey="spotting" />
              </div>
            </div>
          )}
        </div>

        {/* Przyciski nawigacyjne / Zapisz */}
        <div className="flex flex-col gap-4 mt-8 pt-4">
          {!showDeep && (
            <button 
              type="button" 
              onClick={() => { setShowDeep(true); setActiveTab('deep'); }}
              className="text-red-500 font-black text-sm uppercase flex items-center justify-center bg-red-50 border-2 border-red-200 border-dashed hover:border-red-500 hover:bg-red-100 p-4 rounded-2xl transition-all"
            >
              <AlertTriangle className="mr-2" size={20} strokeWidth={3} /> Chcę zgłosić nietypowe objawy (diagnostyka)
            </button>
          )}
          
          <button
            type="submit"
            className="y2k-button w-full text-xl tracking-widest uppercase flex items-center justify-center bg-green-400 !border-[#16a34a] !shadow-[4px_4px_0_0_#16a34a] hover:!shadow-[6px_6px_0_0_#16a34a] p-5"
          >
            Zapisz Dzień ✨ <ChevronRight className="ml-2" size={28} strokeWidth={4} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tracking;
