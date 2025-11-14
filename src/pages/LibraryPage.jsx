import { useState, useEffect } from "react";

export default function LibraryPage() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("libraryBooks");
    if (stored) setBooks(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("libraryBooks", JSON.stringify(books));
  }, [books]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    const ext = file.name.split(".").pop().toLowerCase();

    if (ext === "pdf") {
      reader.onload = () => {
        const newBook = {
          id: Date.now(),
          name: file.name,
          type: "pdf",
          content: reader.result,
        };
        setBooks((prev) => [...prev, newBook]);
      };
      reader.readAsDataURL(file);
    } else {
      reader.onload = () => {
        const newBook = {
          id: Date.now(),
          name: file.name,
          type: "text",
          content: reader.result,
        };
        setBooks((prev) => [...prev, newBook]);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 m-10">
      <h3 className="text-lg font-semibold mb-4">📚 Library</h3>

      {/* Upload */}
      <div className="mb-6">
        <input
          type="file"
          accept=".pdf,.txt,.doc,.docx"
          onChange={handleUpload}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:bg-white file:text-gray-700 hover:file:bg-gray-100"
        />
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {books.map((book) => (
          <button
            key={book.id}
            onClick={() => setSelectedBook(book)}
            className="p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 transition text-left"
          >
            <h4 className="font-semibold text-gray-800">{book.name}</h4>
            <p className="text-sm text-gray-500">Click to read</p>
          </button>
        ))}
      </div>

      {/* Reader */}
      {selectedBook && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h4 className="font-semibold text-gray-800 mb-2">
            {selectedBook.name}
          </h4>
          {selectedBook.type === "pdf" ? (
            <iframe
              src={selectedBook.content}
              title="PDF Reader"
              className="w-full h-[500px] border rounded-lg"
            />
          ) : (
            <pre className="text-sm text-gray-700 whitespace-pre-wrap max-h-[400px] overflow-y-auto">
              {selectedBook.content}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
