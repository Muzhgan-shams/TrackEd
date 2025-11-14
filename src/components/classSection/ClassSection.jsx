export default function ClassSection() {
  return (
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
  );
}
