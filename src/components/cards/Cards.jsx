export default function Cards({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between"
        >
          <div>
            <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
            <p className="text-2xl font-semibold mt-2 text-gray-800">
              {item.value}
            </p>
          </div>

          <div
            className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg`}
          >
            {item.value[0]}
          </div>
        </div>
      ))}
    </div>
  );
}
