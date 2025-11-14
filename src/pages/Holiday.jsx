import { useState, useEffect } from "react";
import BackToDashboardButton from "../components/BackToDashboard";

export default function Holiday() {
  const [holidays, setHolidays] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("holidayList");
    if (stored) setHolidays(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("holidayList", JSON.stringify(holidays));
  }, [holidays]);

  const addHoliday = () => {
    if (!name || !date) return;
    setHolidays((prev) => [...prev, { id: Date.now(), name, date }]);
    setName("");
    setDate("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-10">
      <h3 className="text-lg font-semibold mb-4">📅 Holidays</h3>

      {/* Add Holiday */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Holiday name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-48"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-40"
        />
        <button
          onClick={addHoliday}
          className="bg-[#6a7cff] text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Add Holiday
        </button>
      </div>

      {/* Holiday List */}
      <ul className="space-y-2">
        {holidays.map((h) => (
          <li
            key={h.id}
            className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 flex justify-between items-center"
          >
            <span className="text-gray-800 font-medium">{h.name}</span>
            <span className="text-sm text-gray-500">
              {new Date(h.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
      <BackToDashboardButton />
    </div>
  );
}
