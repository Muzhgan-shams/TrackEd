export default function Dashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "120",
      color: "bg-[#6a7cff]",
    },
    {
      title: "Total Classes",
      value: "8",
      color: "bg-[#ffb347]",
    },
    {
      title: "Average Attendance",
      value: "92%",
      color: "bg-[#3dbb7a]",
    },
    {
      title: "Average Grade",
      value: "B+",
      color: "bg-[#ff6978]",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between"
          >
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                {item.title}
              </h3>
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

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Recent Classes</h3>
        <table className="w-full text-sm text-gray-700">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="text-left py-2">Class Name</th>
              <th className="text-left py-2">Students</th>
              <th className="text-left py-2">Attendance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3">Mathematics</td>
              <td>25</td>
              <td>95%</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3">Science</td>
              <td>28</td>
              <td>90%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3">English</td>
              <td>22</td>
              <td>88%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
