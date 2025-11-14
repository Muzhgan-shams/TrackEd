import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";

const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

export default function DailyAttendance({ classes }) {
  const [selectedClass, setSelectedClass] = useState(classes[0]?.id || "");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [attendance, setAttendance] = useState({});

  const currentClass = classes.find((c) => c.id === selectedClass);
  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  const toggleAttendance = (studentId, day) => {
    const key = `${selectedYear}-${selectedMonth + 1}-${day}`;
    setAttendance((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [key]: !prev[studentId]?.[key],
      },
    }));
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 mt-2">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FaUserGraduate className="text-[#6a7cff] w-5 h-5" />
        Daily Attendance
      </h3>

      {/* Class Selector */}
      <div className="mb-4 flex gap-4 flex-wrap">
        {classes.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedClass(c.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
              selectedClass === c.id
                ? "bg-[#6a7cff] text-white"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Month Header */}
      <div className="mb-4 text-sm font-medium text-gray-700">
        {new Date(selectedYear, selectedMonth).toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </div>

      {/* Attendance Table */}
      <div className="overflow-auto">
        <table className="min-w-full text-sm border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-2 text-left">Student</th>
              {[...Array(daysInMonth)].map((_, i) => (
                <th key={i} className="p-2 text-center">
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentClass?.students.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-2 flex items-center gap-2">
                  <img
                    src={s?.avatar}
                    alt={s.name}
                    className="w-8 h-8 rounded-full object-cover border"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{s.name}</div>
                    <div className="text-xs text-gray-500">{s.roll}</div>
                  </div>
                </td>
                {[...Array(daysInMonth)].map((_, i) => {
                  const dayKey = `${selectedYear}-${selectedMonth + 1}-${
                    i + 1
                  }`;
                  const isPresent = attendance[s.id]?.[dayKey];
                  return (
                    <td key={i} className="p-1 text-center">
                      <button
                        onClick={() => toggleAttendance(s.id, i + 1)}
                        className={`w-6 h-6 rounded-full text-xs font-medium transition ${
                          isPresent
                            ? "bg-[#6a7cff] text-white"
                            : "bg-white border border-gray-300 text-gray-600"
                        }`}
                      >
                        {isPresent ? "P" : "A"}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
