import { useState, useMemo } from "react";
import { FiEdit, FiTrash2, FiPlus, FiSearch } from "react-icons/fi";

export default function Classes() {
  const [classes, setClasses] = useState([
    { id: 1, name: "Mathematics", teacher: "Mr. Adams", students: 25 },
    { id: 2, name: "Science", teacher: "Ms. Taylor", students: 28 },
    { id: 3, name: "English", teacher: "Mr. Clark", students: 22 },
    { id: 4, name: "History", teacher: "Mrs. Reed", students: 30 },
    { id: 5, name: "Physics", teacher: "Dr. Newton", students: 27 },
    { id: 6, name: "Biology", teacher: "Dr. Watson", students: 26 },
    { id: 7, name: "Chemistry", teacher: "Dr. Banner", students: 24 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    id: null,
    name: "",
    teacher: "",
    students: "",
  });
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;

  const filtered = useMemo(() => {
    return classes.filter(
      (cls) =>
        cls.name.toLowerCase().includes(search.toLowerCase()) ||
        cls.teacher.toLowerCase().includes(search.toLowerCase())
    );
  }, [classes, search]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSubmit = () => {
    if (!form.name || !form.teacher || !form.students) return;
    if (form.id) {
      setClasses(
        classes.map((cls) =>
          cls.id === form.id
            ? { ...cls, ...form, students: parseInt(form.students) }
            : cls
        )
      );
    } else {
      const newClass = {
        id: Date.now(),
        ...form,
        students: parseInt(form.students),
      };
      setClasses([...classes, newClass]);
    }
    setForm({ id: null, name: "", teacher: "", students: "" });
    setShowModal(false);
  };

  const handleDelete = (id) =>
    setClasses(classes.filter((cls) => cls.id !== id));
  const handleEdit = (cls) => {
    setForm(cls);
    setShowModal(true);
  };

  return (
    <>
      <div className="p-6 bg-white rounded-xl shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 ">
          <h2 className="text-xl font-semibold text-gray-800">Classes</h2>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white border border-gray-300 px-3 py-2 rounded-lg">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-sm"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-[#6a7cff] text-white px-4 py-2 rounded-lg hover:bg-[#5c6cff] transition"
            >
              <FiPlus />
              Add Class
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="text-left py-3 px-5">Class Name</th>
                <th className="text-left py-3 px-5">Teacher</th>
                <th className="text-left py-3 px-5">Students</th>
                <th className="text-left py-3 px-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((cls) => (
                <tr
                  key={cls.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-5">{cls.name}</td>
                  <td className="py-3 px-5">{cls.teacher}</td>
                  <td className="py-3 px-5">{cls.students}</td>
                  <td className="py-3 px-5 flex gap-3">
                    <button
                      onClick={() => handleEdit(cls)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(cls.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-end p-4 bg-gray-50 border-t border-gray-100 text-sm">
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="px-3 py-1 rounded-md bg-white border border-gray-300 hover:bg-gray-100"
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span className="text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  className="px-3 py-1 rounded-md bg-white border border-gray-300 hover:bg-gray-100"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-96 p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                {form.id ? "Edit Class" : "Add New Class"}
              </h3>
              <input
                type="text"
                placeholder="Class Name"
                className="w-full mb-3 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#6a7cff]"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Teacher Name"
                className="w-full mb-3 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#6a7cff]"
                value={form.teacher}
                onChange={(e) => setForm({ ...form, teacher: e.target.value })}
              />
              <input
                type="number"
                placeholder="Total Students"
                className="w-full mb-4 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#6a7cff]"
                value={form.students}
                onChange={(e) => setForm({ ...form, students: e.target.value })}
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setForm({ id: null, name: "", teacher: "", students: "" });
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded-lg bg-[#6a7cff] text-white hover:bg-[#5c6cff]"
                >
                  {form.id ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
