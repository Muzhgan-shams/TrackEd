import Cards from "../components/cards/Cards";
import ClassSection from "../components/classSection/ClassSection";
import TeacherSection from "../components/teacherSection/TeacherSection";

export default function Dashboard() {
  const stats = [
    { title: "Total Students", value: "120", color: "bg-[#6a7cff]" },
    { title: "Total Classes", value: "8", color: "bg-[#ffb347]" },
    { title: "Average Attendance", value: "92%", color: "bg-[#3dbb7a]" },
    { title: "Average Grade", value: "B+", color: "bg-[#ff6978]" },
  ];

  const teachers = [
    {
      name: "Maryam",
      subject: "Mathematics",
      avatar: "/",
    },
    {
      name: "Violet",
      subject: "Science",
      avatar: "/",
    },
    {
      name: "Lili",
      subject: "English",
      avatar: "/",
    },
  ];

  return (
    <div className="w-full">
      <Cards stats={stats} />
      <ClassSection />
      <TeacherSection teachers={teachers} />
    </div>
  );
}
