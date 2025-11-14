export default function HelpPage() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-10 max-w-xl">
      <h3 className="text-lg font-semibold mb-4">❓ Help & Support</h3>

      <ul className="space-y-4 text-gray-700 text-sm">
        <li>
          <strong>How do I reset my password?</strong>
          <br />
          Go to Account → Settings → Security and click “Reset Password”.
        </li>
        <li>
          <strong>How do I contact support?</strong>
          <br />
          Email us at{" "}
          <a
            href="mailto:support@tracked.app"
            className="text-[#6a7cff] underline"
          >
            support@tracked.app
          </a>
        </li>
        <li>
          <strong>Where is my data stored?</strong>
          <br />
          Your data is stored locally in your browser and optionally synced to
          your account.
        </li>
      </ul>
    </div>
  );
}
