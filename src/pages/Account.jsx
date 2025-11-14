export default function Account() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest",
    email: "guest@example.com",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-10 max-w-xl">
      <h3 className="text-lg font-semibold mb-4">👤 Account</h3>

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Status:</strong> Logged In
        </p>
      </div>
    </div>
  );
}
