import { useState, useEffect } from "react";

export default function Setting() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("userSettings");
    if (stored) {
      const parsed = JSON.parse(stored);
      setDarkMode(parsed.darkMode);
      setNotifications(parsed.notifications);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "userSettings",
      JSON.stringify({ darkMode, notifications })
    );
  }, [darkMode, notifications]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-10 max-w-xl">
      <h3 className="text-lg font-semibold mb-4">⚙️ Settings</h3>

      <div className="space-y-4">
        <label className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="toggle toggle-sm"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="toggle toggle-sm"
          />
        </label>
      </div>
    </div>
  );
}
