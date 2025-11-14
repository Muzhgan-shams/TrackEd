import { useState, useEffect } from "react";

export default function Subject() {
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("subjectList");
    if (stored) setSubjects(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("subjectList", JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = () => {
    if (!subjectName) return;
    setSubjects((prev) => [...prev, { id: Date.now(), name: subjectName }]);
    setSubjectName("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-10">
      <h3 className="text-lg font-semibold mb-4">📚 Subjects</h3>

      {/* Add Subject */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Subject name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-64"
        />
        <button
          onClick={addSubject}
          className="bg-[#6a7cff] text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Add Subject
        </button>
      </div>

      {/* Subject List */}
      <ul className="space-y-2">
        {subjects.map((s) => (
          <li
            key={s.id}
            className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-gray-800 font-medium"
          >
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
