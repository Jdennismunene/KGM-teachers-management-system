import { ChevronRight, Users } from "lucide-react";

interface ClassItem {
  id: number;
  title: string;
  age: string;
  room: string;
  students: number;
  present: number;
  percent: number;
  lesson: string;
  color: string;
}

const classes: ClassItem[] = [
  {
    id: 1,
    title: "Junior Class",
    age: "Ages 6-9",
    room: "Room 2",
    students: 28,
    present: 22,
    percent: 79,
    lesson: "God's Creation",
    color: "bg-purple-500",
  },
  {
    id: 2,
    title: "Primary Class",
    age: "Ages 10-12",
    room: "Room 3",
    students: 30,
    present: 25,
    percent: 83,
    lesson: "Noah's Ark",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Teen Class",
    age: "Ages 13-17",
    room: "Room 1",
    students: 29,
    present: 19,
    percent: 66,
    lesson: "Walking in Faith",
    color: "bg-indigo-500",
  },
];

export default function MyClassesOverview() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          My Classes Overview
        </h2>

        <button className="text-sm text-indigo-600 hover:underline">
          View all classes →
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${cls.color}`}
              >
                <Users size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {cls.title}{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    ({cls.age})
                  </span>
                </h3>
                <p className="text-sm text-gray-500">{cls.room}</p>
              </div>
            </div>

            {/* Middle stats */}
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-gray-400">Students</p>
                <p className="font-semibold">{cls.students}</p>
              </div>

              <div>
                <p className="text-gray-400">Present Today</p>
                <p className="font-semibold text-green-600">
                  {cls.present} ({cls.percent}%)
                </p>
              </div>

              <div>
                <p className="text-gray-400">Next Lesson</p>
                <p className="font-semibold">{cls.lesson}</p>
              </div>
            </div>

            {/* Right icon */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition self-end md:self-auto">
              <ChevronRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}