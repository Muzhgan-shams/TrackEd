import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function BackToDashboardButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/dashboard")}
      className="inline-flex items-center gap-2 text-sm font-medium text-[#6a7cff] hover:underline mt-6"
    >
      <FaArrowAltCircleLeft size={16} />
      Back to Dashboard
    </button>
  );
}
