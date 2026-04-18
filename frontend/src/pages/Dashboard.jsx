import ChartsWidget from '../components/ChartsWidget';
import PhaseIndicator from '../components/PhaseIndicator';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-3xl y2k-border inline-block transform -rotate-1">
        <h2 className="text-3xl font-black text-pink-600 uppercase drop-shadow-sm">Twój Dashboard 💖</h2>
        <p className="text-pink-500 font-bold">Witaj w MOODY. Oto twoje dzisiejsze podsumowanie!</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PhaseIndicator />
        <ChartsWidget />
      </div>
    </div>
  );
};

export default Dashboard;