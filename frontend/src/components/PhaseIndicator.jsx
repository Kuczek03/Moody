const PhaseIndicator = () => {
  const currentPhase = 'Folikularna'; // Przykładowa faza
  const dayOfCycle = 8;
  
  const phases = [
    { name: 'Menstruacja', color: 'bg-red-400', days: '1-5', width: '20%' },
    { name: 'Folikularna', color: 'bg-pink-400', days: '6-13', width: '30%' },
    { name: 'Owulacja', color: 'bg-purple-400', days: '14-16', width: '10%' },
    { name: 'Lutealna', color: 'bg-blue-400', days: '17-28', width: '40%' },
  ];

  return (
    <div className="y2k-card flex flex-col justify-center">
      <div className="mb-4 flex justify-between items-end">
        <div>
          <h3 className="text-sm text-pink-500 font-black uppercase tracking-widest mb-1">Twój Cykl 🔄</h3>
          <p className="text-4xl font-black text-gray-800 drop-shadow-sm">Dzień {dayOfCycle}</p>
        </div>
        <div className="text-right">
          <span className="inline-block px-4 py-2 rounded-xl bg-yellow-300 text-pink-700 text-sm font-black y2k-border shadow-[2px_2px_0_0_#db2777] transform rotate-2">
            Faza {currentPhase}
          </span>
        </div>
      </div>
      
      {/* Pasek postępu */}
      <div className="relative h-6 rounded-full overflow-hidden flex w-full mb-3 bg-gray-100 y2k-border">
        {phases.map((phase, index) => (
          <div 
            key={index}
            className={`h-full border-r-2 border-pink-600 ${phase.color} transition-all duration-500 opacity-80 ${currentPhase === phase.name ? 'opacity-100 brightness-110' : ''}`}
            style={{ width: phase.width }}
            title={`${phase.name} (${phase.days} dni)`}
          />
        ))}
        {/* Wskaźnik obecnego dnia */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white z-10"
          style={{ left: '32%' }} // Przykładowa pozycja w oparciu o dzień
        >
          <div className="absolute -top-1.5 -ml-2.5 w-6 h-6 rounded-full border-4 border-pink-600 bg-yellow-300 shadow-md transform -rotate-12"></div>
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 font-black uppercase">
        <span>Dzień 1</span>
        <span>Dzień 28</span>
      </div>
    </div>
  );
};

export default PhaseIndicator;
