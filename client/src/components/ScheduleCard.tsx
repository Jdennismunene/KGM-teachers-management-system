import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";

interface ScheduleItem {
  time: string;
  endTime: string;
  className: string;
  lesson: string;
  room: string;
  roomColor: string;
}

const schedule: ScheduleItem[] = [
  {
    time: "8:00 AM",
    endTime: "9:00 AM",
    className: "Junior Class (Ages 6-9)",
    lesson: "God's Creation",
    room: "Room 2",
    roomColor: "bg-purple-100 text-purple-600",
  },
  {
    time: "9:30 AM",
    endTime: "10:30 AM",
    className: "Primary Class (Ages 10-12)",
    lesson: "Noah's Ark",
    room: "Room 3",
    roomColor: "bg-green-100 text-green-600",
  },
  {
    time: "11:00 AM",
    endTime: "12:00 PM",
    className: "Teen Class (Ages 13-17)",
    lesson: "Walking in Faith",
    room: "Room 1",
    roomColor: "bg-blue-100 text-blue-600",
  },
];

export default function ScheduleCard() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-blue-500" />

          <h2 className="font-semibold text-gray-800">
            Today's Schedule
          </h2>
        </div>

        <span className="text-sm text-gray-500">
          May 20, 2024
        </span>
      </div>

      {/* Schedule List */}
      <div>
        {schedule.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col sm:flex-row
              gap-4
              border-b border-gray-100
              px-4 sm:px-6
              py-5
              last:border-none
            "
          >
            {/* Time */}
            <div className="sm:w-24 shrink-0">
              <p className="font-medium text-gray-700 text-sm">
                {item.time}
              </p>

              <p className="text-gray-400 text-sm">
                {item.endTime}
              </p>
            </div>

            {/* Divider Desktop */}
            <div className="hidden sm:block w-px bg-gray-200" />

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-medium text-gray-800 break-words">
                    {item.className}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Lesson: {item.lesson}
                  </p>
                </div>

                <span
                  className={`
                    self-start
                    rounded-full
                    px-3 py-1
                    text-xs font-medium
                    whitespace-nowrap
                    ${item.roomColor}
                  `}
                >
                  {item.room}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 py-4">
        <button className="flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700">
          View full schedule

          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}