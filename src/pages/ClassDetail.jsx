import StudentSection from "../components/studentSection/StudentSection";

export default function ClassDetail() {
  const classes = [
    {
      id: "classA",
      name: "Grade 6 - A",
      students: [
        {
          id: "s1",
          name: "Ayesha Khan",
          roll: "6A-01",
          avatar: "/avatars/ayesha.jpg",
        },
        {
          id: "s2",
          name: "Bilal Ahmed",
          roll: "6A-02",
          avatar: "/avatars/bilal.jpg",
        },
      ],
    },
    {
      id: "classB",
      name: "Grade 6 - B",
      students: [
        {
          id: "s3",
          name: "Sara Malik",
          roll: "6B-01",
          avatar: "/avatars/sara.jpg",
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Any class info  */}
      <h1 className="text-xl font-semibold mb-2 p-10">Students</h1>

      <StudentSection classes={classes} />
    </div>
  );
}
