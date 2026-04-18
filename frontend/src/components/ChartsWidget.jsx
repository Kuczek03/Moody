import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1', mood: 3, energy: 4 },
  { name: '2', mood: 4, energy: 5 },
  { name: '3', mood: 5, energy: 5 },
  { name: '4', mood: 4, energy: 3 },
  { name: '5', mood: 2, energy: 2 },
  { name: '6', mood: 3, energy: 4 },
  { name: '7', mood: 4, energy: 5 },
];

const ChartsWidget = () => {
  return (
    <div className="y2k-card overflow-hidden">
      <h3 className="text-xl font-black mb-6 text-pink-600 uppercase tracking-widest">Twoje samopoczucie (7 dni) 📈</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#fbcfe8" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#db2777', fontSize: 14, fontWeight: 'bold'}} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#db2777', fontSize: 14, fontWeight: 'bold'}} />
            <Tooltip 
              contentStyle={{ borderRadius: '16px', border: '3px solid #db2777', boxShadow: '4px 4px 0px 0px #db2777', backgroundColor: '#fff', fontWeight: 'bold' }}
            />
            <Line type="monotone" dataKey="mood" stroke="#ec4899" strokeWidth={5} dot={{r: 6, strokeWidth: 3, fill: '#fdf2f8'}} activeDot={{r: 8}} name="Nastrój" />
            <Line type="monotone" dataKey="energy" stroke="#a855f7" strokeWidth={5} dot={{r: 6, strokeWidth: 3, fill: '#faf5ff'}} activeDot={{r: 8}} name="Energia" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsWidget;
