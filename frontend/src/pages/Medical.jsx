import { Activity, FileText, Download, Plus, Sparkles } from 'lucide-react';

const Medical = () => {
  const labResults = [
    { id: 1, date: '12 Kwi 2026', test: 'Profil Hormonalny', status: 'W normie', document: true },
    { id: 2, date: '05 Mar 2026', test: 'Morfologia z rozmazem', status: 'Wymaga uwagi', document: true },
    { id: 3, date: '20 Sty 2026', test: 'TSH, FT3, FT4', status: 'W normie', document: false },
    { id: 4, date: '10 Gru 2025', test: 'Witamina D3, B12, Żelazo', status: 'W normie', document: true },
  ];

  return (
    <div className="space-y-6 animate-fade-in relative">
      <Sparkles className="absolute -top-6 left-1/2 text-pink-300 animate-pulse" size={48} />
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4 bg-white p-4 rounded-3xl y2k-border inline-flex transform -rotate-1">
          <div className="p-3 bg-red-300 text-red-700 rounded-full y2k-border">
            <Activity size={32} strokeWidth={3} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-red-500 drop-shadow-sm uppercase">Twoje Badania</h2>
            <p className="text-red-400 font-bold text-sm">Historia wyników i dokumentacja 🩺</p>
          </div>
        </div>

        <button className="y2k-button bg-yellow-300 text-pink-600 hover:bg-yellow-400 p-4 rounded-full flex items-center justify-center transform rotate-3">
          <Plus size={32} strokeWidth={4} />
        </button>
      </div>

      <div className="y2k-card p-0 overflow-hidden bg-white">
        <div className="p-6 border-b-4 border-pink-500 bg-pink-100 flex justify-between items-center">
          <h3 className="font-black text-xl text-pink-600 uppercase">Ostatnie wyniki</h3>
          <span className="text-sm font-bold text-pink-500 cursor-pointer hover:text-pink-700 bg-white px-3 py-1 rounded-lg y2k-border">Zobacz wszystko</span>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="w-full text-left border-collapse border-2 border-pink-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-pink-50 text-pink-600 text-sm uppercase tracking-wider font-black border-b-2 border-pink-200">
                <th className="p-4">Data</th>
                <th className="p-4">Badanie</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Akcje</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-pink-100">
              {labResults.map((result) => (
                <tr key={result.id} className="hover:bg-yellow-50 transition-colors group">
                  <td className="p-4 text-sm font-bold text-gray-500 whitespace-nowrap">{result.date}</td>
                  <td className="p-4 font-black text-pink-700 text-lg">{result.test}</td>
                  <td className="p-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black y2k-border ${result.status === 'W normie' ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-800'}`}>
                      {result.status}
                    </span>
                  </td>
                  <td className="p-4 text-right flex justify-end space-x-3">
                    {result.document ? (
                      <>
                        <button className="p-2 text-pink-500 hover:text-white bg-pink-100 hover:bg-pink-500 rounded-xl y2k-border transition-all hover:-translate-y-1" title="Zobacz dokument">
                          <FileText size={20} strokeWidth={3} />
                        </button>
                        <button className="p-2 text-blue-500 hover:text-white bg-blue-100 hover:bg-blue-500 rounded-xl y2k-border transition-all hover:-translate-y-1" title="Pobierz">
                          <Download size={20} strokeWidth={3} />
                        </button>
                      </>
                    ) : (
                      <span className="text-xs text-gray-400 font-bold py-2 bg-gray-100 px-3 rounded-lg">Brak pliku</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-yellow-300 y2k-border y2k-shadow rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between transform rotate-1 mt-8">
        <div className="mb-4 sm:mb-0">
          <h4 className="font-black text-2xl text-pink-600 uppercase">Przypomnienie o badaniach 🚨</h4>
          <p className="font-bold text-pink-800 mt-1">Czas wykonać coroczną cytologię i USG piersi.</p>
        </div>
        <button className="y2k-button whitespace-nowrap">
          Zaplanuj wizytę
        </button>
      </div>
    </div>
  );
};

export default Medical;
