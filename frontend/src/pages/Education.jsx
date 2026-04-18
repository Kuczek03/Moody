import { BookOpen, PlayCircle, Clock, Sparkles } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Jak faza lutealna wpływa na twoje samopoczucie?',
    category: 'Cykl menstruacyjny',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'article'
  },
  {
    id: 2,
    title: 'Dieta wspierająca równowagę hormonalną',
    category: 'Odżywianie',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'article'
  },
  {
    id: 3,
    title: 'Joga łagodząca bóle menstruacyjne',
    category: 'Ruch',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'video'
  },
  {
    id: 4,
    title: 'Zrozumieć PMS - mity i fakty',
    category: 'Zdrowie psychiczne',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'article'
  }
];

const Education = () => {
  return (
    <div className="space-y-6 animate-fade-in relative">
      <Sparkles className="absolute -top-4 right-4 text-pink-300 animate-spin-slow" size={40} />
      <div className="flex items-center space-x-4 mb-8 bg-white p-4 rounded-3xl y2k-border inline-flex transform rotate-2">
        <div className="p-3 bg-purple-300 text-purple-800 rounded-full y2k-border">
          <BookOpen size={32} strokeWidth={3} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-purple-600 drop-shadow-sm uppercase">Edukacja</h2>
          <p className="text-purple-500 font-bold text-sm">Dowiedz się więcej o swoim ciele! 💅</p>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-6 space-x-3 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        {['Wszystkie', 'Cykl menstruacyjny', 'Odżywianie', 'Ruch', 'Zdrowie psychiczne'].map((tag, idx) => (
          <button 
            key={idx}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-black transition-all y2k-border ${idx === 0 ? 'bg-purple-500 text-white y2k-shadow -translate-y-1' : 'bg-white text-purple-600 hover:bg-purple-100 hover:-translate-y-0.5'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((item) => (
          <div key={item.id} className="y2k-card p-0 overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform">
            <div className="relative h-48 overflow-hidden border-b-4 border-purple-500">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-yellow-300 px-3 py-1 rounded-xl text-xs font-black text-purple-800 y2k-border shadow-[2px_2px_0_0_#db2777]">
                {item.category}
              </div>
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-pink-500/30 backdrop-blur-sm">
                  <PlayCircle size={64} className="text-white drop-shadow-lg" strokeWidth={2} />
                </div>
              )}
            </div>
            <div className="p-6 bg-purple-50">
              <h3 className="text-xl font-black text-purple-700 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center text-sm font-bold text-purple-400 mt-4 bg-white inline-flex px-3 py-1 rounded-lg y2k-border">
                <Clock size={16} className="mr-1.5" strokeWidth={3} />
                {item.readTime}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
