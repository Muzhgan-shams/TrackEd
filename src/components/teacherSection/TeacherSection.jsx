export default function TeacherSection({ teachers }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-10">
      <h3 className="text-lg font-semibold mb-4">Teachers</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src={teacher.avatar}
              alt={teacher.name}
              className="w-14 h-14 rounded-full object-cover border border-gray-200"
            />

            <div>
              <h4 className="font-semibold text-gray-800">{teacher.name}</h4>
              <p className="text-sm text-gray-500">{teacher.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
