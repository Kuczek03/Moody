import { useState, useEffect } from 'react';
import { Droplets, Smile, Thermometer, Sparkles, Brain, ChevronRight, Activity, Loader } from 'lucide-react';

const Tracking = () => {
  // Stan pobierany z serwera (endpointu)
  const [userData, setUserData] = useState({ phase: null, trackedDiseases: [] });
  const [isLoading, setIsLoading] = useState(true);

  // Zakładki formularza
  const [activeTab, setActiveTab] = useState('general');

  // Pełny stan formularza dla wszystkich faz i chorób
  const [formData, setFormData] = useState({
    // OGÓLNE
    mood: 3, irritability: 1, anxiety: 1, sadness: 1, moodSwings: 1,
    energy: 3, concentration: 3, selfEsteem: 3,
    sleepHours: 8, sleepQuality: 3, stress: 0, physicalActivity: 0,
    appetite: 'Normalny', fastFood: false, alcohol: 0,
    meds: false, medsName: '', functioningImpact: 0,
    spottingOutsidePeriod: false, fatigue: 0,
    unusualDischarge: false, itching: false,

    // MENSTRUACJA
    flow: 0, clots: false, padChangeFreq: 'Co 3-4h', leaking: false,
    cramps: 0, painLocation: 'Podbrzusze', painType: 'Skurczowy',
    medsHelp: 'Tak', wakesFromSleep: false,
    nausea: false, vomiting: false, diarrhea: false, constipation: false,
    painOnStool: false, painOnUrinate: false, fainting: false,
    severePainDespiteMeds: false, impairsFunction: false, giSymptomsWorsen: false,

    // FOLIKULARNA
    skinCondition: 'Brak zmian', mucusFoli: 'Lepki', regeneration: 3,

    // OWULACJA
    ovuPain: 0, unilateralPain: false, mucusOvu: 'Białko jaja',
    social: 3, libido: 3,

    // LUTEALNA
    breastPain: 0, waterRetention: 0, bloating: 0, cravings: 0,
    appetiteIncrease: false, crying: 1,

    // DIAGNOSTYKA - ENDOMETRIOZA
    painDuringSex: 0, chronicPelvicPain: 0, spottingInter: false, radiatingPain: false,

    // DIAGNOSTYKA - TARCZYCA
    feelingCold: 0, feelingHot: 0, palpitations: 0, tremors: 0,
    thyroidConstipation: false, frequentStool: false, drySkin: false,
    hairLoss: 0, sleepiness: 0, insomnia: 0, weightChange: false,

    // DIAGNOSTYKA - HIPERPROLAKTYNEMIA
    irregularPeriods: false, amenorrhea: false, breastDischarge: false,
    vaginalDryness: false, lowLibido: 0, headaches: 0,
    visionIssues: false, acne: false, hirsutism: false
  });

  // Symulacja endpointu (Pobieranie danych o userze)
  useEffect(() => {
    const fetchUserData = async () => {
      // Symulacja opóźnienia sieci
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // ZMIEŃ TE DANE ABY PRZETESTOWAĆ DYNAMIKĘ FORMULARZA
      const mockResponse = {
        currentPhase: 'Menstruacja', // Opcje: Menstruacja, Folikularna, Owulacja, Lutealna
        trackedDiseases: ['Endometrioza', 'Tarczyca'] // Opcje: Endometrioza, Tarczyca, Hiperprolaktynemia (pusta tablica ukryje diagnostykę)
      };
      
      setUserData({
        phase: mockResponse.currentPhase,
        trackedDiseases: mockResponse.trackedDiseases
      });
      setIsLoading(false);
    };

    fetchUserData();
  }, []);

  const updateForm = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Wysłane dane:", formData);
    alert('Zapisano pomyślnie! Sprawdź konsolę, aby zobaczyć payload.');
  };

  // Komponenty pomocnicze
  const Y2kSlider = ({ label, valueKey, min = 1, max = 5, emojis = [] }) => (
    <div className="space-y-3 bg-white p-5 rounded-3xl y2k-border shadow-sm">
      <label className="font-black text-pink-600 block uppercase">{label}</label>
      <div className="flex justify-between md:justify-start md:space-x-4 overflow-x-auto py-4 px-1 -mx-1 scrollbar-hide">
        {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((level) => {
          const isSelected = formData[valueKey] === level;
          return (
            <button
              key={level} type="button" onClick={() => updateForm(valueKey, level)}
              className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full flex items-center justify-center text-xl transition-all y2k-border ${isSelected ? 'bg-pink-500 text-white scale-110 y2k-shadow z-10' : 'bg-pink-50 hover:bg-pink-100 grayscale opacity-70 hover:scale-105'}`}
            >
              {emojis.length > 0 ? emojis[level - min] : level}
            </button>
          );
        })}
      </div>
    </div>
  );

  const Y2kToggle = ({ label, valueKey }) => (
    <label className="flex items-center justify-between p-5 bg-white rounded-3xl cursor-pointer hover:bg-yellow-50 transition-colors y2k-border shadow-sm">
      <span className="font-black text-purple-600 uppercase pr-4">{label}</span>
      <input 
        type="checkbox" checked={!!formData[valueKey]} onChange={(e) => updateForm(valueKey, e.target.checked)}
        className="w-8 h-8 text-pink-500 border-4 border-pink-300 rounded focus:ring-0 accent-pink-500 shrink-0 cursor-pointer" 
      />
    </label>
  );

  const Y2kSelect = ({ label, valueKey, options }) => (
    <div className="bg-white p-5 rounded-3xl y2k-border shadow-sm">
      <label className="font-black text-pink-600 block uppercase mb-3">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button 
            key={opt} type="button" onClick={() => updateForm(valueKey, opt)}
            className={`px-4 py-2 rounded-xl font-black text-xs md:text-sm uppercase transition-transform y2k-border ${formData[valueKey] === opt ? 'bg-orange-400 text-white -translate-y-1 y2k-shadow' : 'bg-orange-50 text-orange-600 hover:bg-orange-100'}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader className="animate-spin text-pink-500" size={48} />
        <p className="font-black text-pink-500 uppercase animate-pulse">Synchronizacja danych...</p>
      </div>
    );
  }

  const hasDiagnostics = userData.trackedDiseases.length > 0;

  return (
    <div className="space-y-6 animate-fade-in relative pb-24 max-w-2xl mx-auto">
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

      <form onSubmit={handleSave} className="space-y-6 relative z-10">
        
        {/* Nawigacja */}
        <div className="flex space-x-3 overflow-x-auto py-4 px-2 -mx-2 scrollbar-hide">
          <button 
            type="button" onClick={() => setActiveTab('general')}
            className={`px-5 py-3 rounded-full font-black text-sm uppercase whitespace-nowrap transition-all y2k-border flex items-center ${activeTab === 'general' ? 'bg-pink-500 text-white y2k-shadow -translate-y-1' : 'bg-white text-pink-500 hover:bg-pink-50'}`}
          >
            <Smile className="mr-2" size={20} /> Ogólne
          </button>
          
          {userData.phase && (
            <button 
              type="button" onClick={() => setActiveTab('phase')}
              className={`px-5 py-3 rounded-full font-black text-sm uppercase whitespace-nowrap transition-all y2k-border flex items-center ${activeTab === 'phase' ? 'bg-blue-500 text-white y2k-shadow -translate-y-1' : 'bg-white text-blue-500 hover:bg-blue-50'}`}
            >
              <Droplets className="mr-2" size={20} /> {userData.phase}
            </button>
          )}

          {hasDiagnostics && (
            <button 
              type="button" onClick={() => setActiveTab('deep')}
              className={`px-5 py-3 rounded-full font-black text-sm uppercase whitespace-nowrap transition-all y2k-border flex items-center ${activeTab === 'deep' ? 'bg-red-500 text-white y2k-shadow -translate-y-1' : 'bg-white text-red-500 hover:bg-red-50'}`}
            >
              <Activity className="mr-2" size={20} /> Diagnostyka
            </button>
          )}
        </div>

        <div className="y2k-card min-h-[400px]">
          
          {/* ================= TAB: OGÓLNE ================= */}
          {activeTab === 'general' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-black text-pink-600 uppercase border-b-4 border-pink-200 pb-2">Przy wszystkich fazach</h3>
              
              <Y2kSlider label="Nastrój ogólny" valueKey="mood" emojis={['😫', '😕', '😐', '🙂', '😁']} />
              <Y2kSlider label="Drażliwość" valueKey="irritability" />
              <Y2kSlider label="Niepokój / Napięcie" valueKey="anxiety" />
              <Y2kSlider label="Smutek / Przygnębienie" valueKey="sadness" />
              <Y2kSlider label="Wahania nastroju" valueKey="moodSwings" />
              <Y2kSlider label="Energia" valueKey="energy" emojis={['🪫', '🔋', '🔌', '⚡', '🚀']} />
              <Y2kSlider label="Koncentracja" valueKey="concentration" />
              <Y2kSlider label="Samoocena" valueKey="selfEsteem" />
              
              <div className="bg-white p-5 rounded-3xl y2k-border shadow-sm">
                <label className="font-black text-pink-600 block uppercase mb-3">Sen (Godziny)</label>
                <input type="number" value={formData.sleepHours} onChange={(e) => updateForm('sleepHours', e.target.value)} className="w-24 p-3 rounded-xl border-4 border-pink-200 font-bold text-center outline-none focus:border-pink-500" />
              </div>

              <Y2kSlider label="Jakość snu" valueKey="sleepQuality" />
              <Y2kSlider label="Stres" valueKey="stress" min={0} max={5} emojis={['😌', '🤏', '😬', '😰', '🤯', '🌋']} />
              <Y2kSlider label="Aktywność fizyczna" valueKey="physicalActivity" min={0} max={5} />
              
              <Y2kSelect label="Apetyt" valueKey="appetite" options={['Mniejszy', 'Normalny', 'Większy']} />

              
              <Y2kToggle label="Fast food" valueKey="fastFood" />
              <Y2kToggle label="Czy brałaś leki?" valueKey="meds" />
              {formData.meds && (
                <input type="text" placeholder="Jakie leki?" value={formData.medsName} onChange={(e) => updateForm('medsName', e.target.value)} className="w-full p-4 rounded-2xl y2k-border bg-pink-50 font-bold outline-none focus:ring-4 ring-pink-300" />
              )}

              <Y2kSlider label="Wpływ objawów na życie" valueKey="functioningImpact" min={0} max={5} />
              <Y2kSlider label="Zmęczenie / Osłabienie" valueKey="fatigue" min={0} max={5} />
              <Y2kToggle label="Plamienie poza miesiączką" valueKey="spottingOutsidePeriod" />
              <Y2kToggle label="Nietypowa wydzielina" valueKey="unusualDischarge" />
              <Y2kToggle label="Świąd / Pieczenie" valueKey="itching" />
            </div>
          )}

          {/* ================= TAB: FAZA CYKLU ================= */}
          {activeTab === 'phase' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-black text-blue-600 uppercase border-b-4 border-blue-200 pb-2">Objawy: {userData.phase}</h3>
              
              {userData.phase === 'Menstruacja' && (
                <>
                  <Y2kSlider label="Obfitość krwawienia" valueKey="flow" min={0} max={5} emojis={['Brak', '🩸', '🩸🩸', '🩸🩸🩸', '🌊', '🌊🌊']} />
                  <Y2kToggle label="Skrzepy" valueKey="clots" />
                  <Y2kSelect label="Częstość zmiany podpaski/tamponu" valueKey="padChangeFreq" options={['Co 1-2h', 'Co 3-4h', 'Co 5-6h', 'Rzadziej']} />
                  <Y2kToggle label="Przeciekanie / Zalewanie" valueKey="leaking" />
                  <Y2kSlider label="Ból miesiączkowy" valueKey="cramps" min={0} max={5} />
                  <Y2kSelect label="Lokalizacja bólu" valueKey="painLocation" options={['Podbrzusze', 'Plecy', 'Głowa', 'Miednica', 'Nogi']} />
                  <Y2kSelect label="Rodzaj bólu" valueKey="painType" options={['Skurczowy', 'Tępy', 'Kłujący', 'Promieniujący']} />
                  <Y2kSelect label="Czy leki pomagają?" valueKey="medsHelp" options={['Tak', 'Częściowo', 'Nie']} />
                  <Y2kToggle label="Ból wybudza ze snu" valueKey="wakesFromSleep" />
                  <Y2kToggle label="Nudności" valueKey="nausea" />
                  <Y2kToggle label="Wymioty" valueKey="vomiting" />
                  <Y2kToggle label="Biegunka" valueKey="diarrhea" />
                  <Y2kToggle label="Zaparcia" valueKey="constipation" />
                  <Y2kToggle label="Ból przy wypróżnianiu" valueKey="painOnStool" />
                  <Y2kToggle label="Ból przy oddawaniu moczu" valueKey="painOnUrinate" />
                  <Y2kToggle label="Omdlenia" valueKey="fainting" />
                  <Y2kToggle label="Bardzo silny ból mimo leków" valueKey="severePainDespiteMeds" />
                  <Y2kToggle label="Miesiączka utrudnia funkcjonowanie" valueKey="impairsFunction" />
                  <Y2kToggle label="Objawy jelitowe nasilają się" valueKey="giSymptomsWorsen" />
                </>
              )}

              {userData.phase === 'Folikularna' && (
                <>
                  <Y2kSelect label="Stan cery" valueKey="skinCondition" options={['Poprawa', 'Bez zmian', 'Pogorszenie']} />
                  <Y2kSelect label="Śluz" valueKey="mucusFoli" options={['Lepki', 'Kremowy', 'Wodnisty', 'Białko jaja']} />
                  <Y2kSlider label="Poczucie regeneracji po miesiączce" valueKey="regeneration" emojis={['📉', '🌱', '🌿', '🌳', '✨']} />
                </>
              )}

              {userData.phase === 'Owulacja' && (
                <>
                  <Y2kSlider label="Ból owulacyjny" valueKey="ovuPain" min={0} max={5} emojis={['Brak', '🤏', '😣', '😖', '😫', '🚑']} />
                  <Y2kToggle label="Ból jednostronny" valueKey="unilateralPain" />
                  <Y2kSelect label="Śluz" valueKey="mucusOvu" options={['Wodnisty', 'Białko jaja', 'Inny']} />
                  <Y2kSlider label="Socjalizacja" valueKey="social" emojis={['Odludek', 'Cicho', 'Zwykła', 'Gaduła', 'Party!']} />
                  <Y2kSlider label="Libido" valueKey="libido" emojis={['🧊', '💧', '🔥', '🔥🔥', '🌶️']} />
                </>
              )}

              {userData.phase === 'Lutealna' && (
                <>
                  <Y2kSlider label="Tkliwość piersi" valueKey="breastPain" min={0} max={5} />
                  <Y2kSlider label="Retencja wody / Obrzęki" valueKey="waterRetention" min={0} max={5} />
                  <Y2kSlider label="Wzdęcia" valueKey="bloating" min={0} max={5} />
                  <Y2kSlider label="Zachcianki" valueKey="cravings" min={0} max={5} />
                  <Y2kToggle label="Większy apetyt" valueKey="appetiteIncrease" />
                  <Y2kSlider label="Płaczliwość" valueKey="crying" emojis={['Brak', '🥺', '😢', '😭', '🌊']} />
                </>
              )}
            </div>
          )}

          {/* ================= TAB: DIAGNOSTYKA ================= */}
          {activeTab === 'deep' && hasDiagnostics && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-red-50 p-5 rounded-3xl y2k-border border-red-300 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                <Brain className="text-red-500 shrink-0 mt-1" size={40} strokeWidth={3} />
                <div>
                  <h3 className="text-xl font-black text-red-600 uppercase mb-2">Głębsza Obserwacja 🚨</h3>
                  <p className="text-sm font-bold text-red-800 leading-relaxed">
                    Wykrywamy wzorce pod kątem Twoich zaleceń. Te pytania pojawiają się na podstawie wywiadu z lekarzem.
                  </p>
                </div>
              </div>

              {userData.trackedDiseases.includes('Endometrioza') && (
                <div className="space-y-5 bg-purple-50 p-5 rounded-3xl y2k-border">
                  <h4 className="font-black text-purple-700 uppercase bg-white inline-block px-4 py-2 rounded-xl y2k-border shadow-sm transform -rotate-1">Endometrioza</h4>
                  <Y2kSlider label="Ból podczas/po stosunku" valueKey="painDuringSex" min={0} max={5} />
                  <Y2kSlider label="Przewlekły ból miednicy (poza okresem)" valueKey="chronicPelvicPain" min={0} max={5} />
                  <Y2kToggle label="Plamienia międzymiesiączkowe" valueKey="spottingInter" />
                  <Y2kToggle label="Ból promieniujący do pleców/nóg" valueKey="radiatingPain" />
                </div>
              )}

              {userData.trackedDiseases.includes('Tarczyca') && (
                <div className="space-y-5 bg-pink-50 p-5 rounded-3xl y2k-border">
                  <h4 className="font-black text-pink-700 uppercase bg-white inline-block px-4 py-2 rounded-xl y2k-border shadow-sm transform rotate-1">Tarczyca</h4>
                  <Y2kSlider label="Uczucie zimna" valueKey="feelingCold" min={0} max={5} />
                  <Y2kSlider label="Uczucie gorąca / Pocenie" valueKey="feelingHot" min={0} max={5} />
                  <Y2kSlider label="Kołatanie serca" valueKey="palpitations" min={0} max={5} />
                  <Y2kSlider label="Drżenie rąk" valueKey="tremors" min={0} max={5} />
                  <Y2kToggle label="Zaparcia" valueKey="thyroidConstipation" />
                  <Y2kToggle label="Częste wypróżnienia/biegunka" valueKey="frequentStool" />
                  <Y2kToggle label="Sucha skóra" valueKey="drySkin" />
                  <Y2kSlider label="Wypadanie włosów" valueKey="hairLoss" min={0} max={5} />
                  <Y2kSlider label="Senność / Spowolnienie" valueKey="sleepiness" min={0} max={5} />
                  <Y2kSlider label="Bezsenność" valueKey="insomnia" min={0} max={5} />
                  <Y2kToggle label="Zmiana masy ciała" valueKey="weightChange" />
                </div>
              )}

              {userData.trackedDiseases.includes('Hiperprolaktynemia') && (
                <div className="space-y-5 bg-blue-50 p-5 rounded-3xl y2k-border">
                  <h4 className="font-black text-blue-700 uppercase bg-white inline-block px-4 py-2 rounded-xl y2k-border shadow-sm transform -rotate-1">Hiperprolaktynemia</h4>
                  <Y2kToggle label="Nieregularne miesiączki" valueKey="irregularPeriods" />
                  <Y2kToggle label="Brak miesiączki" valueKey="amenorrhea" />
                  <Y2kToggle label="Wydzielina z piersi" valueKey="breastDischarge" />
                  <Y2kToggle label="Suchość pochwy" valueKey="vaginalDryness" />
                  <Y2kSlider label="Spadek libido" valueKey="lowLibido" min={0} max={5} />
                  <Y2kSlider label="Bóle głowy" valueKey="headaches" min={0} max={5} />
                  <Y2kToggle label="Zaburzenia widzenia" valueKey="visionIssues" />
                  <Y2kToggle label="Trądzik" valueKey="acne" />
                  <Y2kToggle label="Nadmierne owłosienie" valueKey="hirsutism" />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Zapisz */}
        <div className="mt-8 pt-4 pb-8">
          <button type="submit" className="y2k-button w-full text-xl tracking-widest uppercase flex items-center justify-center bg-green-400 !border-[#16a34a] !shadow-[4px_4px_0_0_#16a34a] hover:!shadow-[6px_6px_0_0_#16a34a] p-5">
            Zapisz Dzień ✨ <ChevronRight className="ml-2" size={28} strokeWidth={4} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tracking;