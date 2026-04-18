import { Heart, Wind, Moon, Coffee, Sparkles } from 'lucide-react';

const Wellness = () => {
  const techniques = [
    {
      id: 1,
      title: 'Oddech 4-7-8',
      description: 'Głęboko zrelaksuj swoje ciało i umysł z techniką oddechową dr. Weila.',
      icon: <Wind size={32} className="text-white" />,
      color: 'bg-blue-400',
      duration: '5 min'
    },
    {
      id: 2,
      title: 'Trening Autogenny',
      description: 'Uwolnij napięcie mięśniowe, skupiając uwagę na różnych częściach ciała.',
      icon: <Moon size={32} className="text-white" />,
      color: 'bg-purple-400',
      duration: '15 min'
    },
    {
      id: 3,
      title: 'Poranna Medytacja',
      description: 'Zacznij dzień od intencji i pozytywnej energii.',
      icon: <Coffee size={32} className="text-white" />,
      color: 'bg-orange-400',
      duration: '10 min'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-24">
      <div className="flex items-center space-x-4 mb-8 bg-white p-4 rounded-3xl y2k-border inline-flex transform rotate-1">
        <div className="p-3 bg-teal-300 text-teal-800 rounded-full y2k-border">
          <Heart size={32} strokeWidth={3} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-teal-600 drop-shadow-sm uppercase">Wellness</h2>
          <p className="text-teal-500 font-bold text-sm">Zadbaj o siebie, zasługujesz na to! ✨</p>
        </div>
      </div>

      <div className="bg-pink-400 y2k-border y2k-shadow rounded-3xl p-6 text-white relative overflow-hidden transform -rotate-1">
        <div className="absolute top-4 right-4 animate-bounce">
            <Sparkles size={40} className="text-yellow-300" />
        </div>
        <div className="relative z-10 w-3/4">
          <h3 className="text-2xl font-black mb-2 uppercase">Polecane na dziś</h3>
          <p className="text-pink-100 mb-6 font-bold">Twój dzisiejszy poziom stresu wydaje się być nieco wyższy. Spróbuj krótkiej sesji oddechowej.</p>
          <button className="y2k-button bg-yellow-300 text-pink-600 hover:bg-yellow-400 uppercase text-sm mb-4">
            Rozpocznij 🚀
          </button>
        </div>
        <Wind size={150} className="absolute right-0 bottom-0 text-white opacity-20 transform translate-x-4 translate-y-4" />
      </div>

      <h3 className="text-2xl font-black text-pink-500 mt-8 mb-4 bg-white inline-block px-4 py-2 rounded-xl y2k-border transform rotate-2">Wszystkie techniki 🌈</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techniques.map((tech) => (
          <div key={tech.id} className="y2k-card p-5 cursor-pointer flex items-center group transition-transform hover:-translate-y-1">
            <div className={`p-4 rounded-2xl ${tech.color} mr-4 y2k-border y2k-shadow group-hover:scale-110 transition-transform`}>
              {tech.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-black text-xl text-gray-800">{tech.title}</h4>
              <p className="text-sm font-bold text-gray-500 mt-1 line-clamp-2">{tech.description}</p>
              <span className="inline-block mt-2 text-xs font-black px-2 py-1 bg-gray-100 rounded-lg y2k-border text-gray-600">
                ⏱ {tech.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wellness;
