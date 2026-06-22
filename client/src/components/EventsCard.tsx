import { ArrowRight, MapPin } from "lucide-react";

interface Event {
  month: string;
  day: string;
  title: string;
  date: string;
  location: string;
}

const events: Event[] = [
  {
    month: "MAY",
    day: "25",
    title: "Teachers' Meeting",
    date: "Saturday, 10:00 AM",
    location: "Main Hall",
  },
  {
    month: "MAY",
    day: "30",
    title: "Sunday School Outreach",
    date: "Thursday, 8:00 AM",
    location: "Community Center",
  },
  {
    month: "JUN",
    day: "02",
    title: "Children's Day Program",
    date: "Sunday, 9:00 AM",
    location: "Main Auditorium",
  },
];

export default function UpcomingEvents() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 sm:px-5 py-4 border-b border-gray-100">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">
          Upcoming Events
        </h2>

        <button className="flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-700">
          View Calendar
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Events */}
      <div className="p-4 sm:p-5 space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="
              flex flex-col sm:flex-row
              gap-3 sm:gap-4
              border-b border-gray-100
              pb-4 last:border-b-0 last:pb-0
            "
          >
            {/* Date Box */}
            <div className="flex sm:flex-col items-center justify-center sm:justify-center gap-2 sm:gap-0
              h-auto sm:h-16 w-full sm:w-16
              rounded-xl bg-violet-50 py-2 sm:py-0
            ">
              <span className="text-xs font-semibold text-violet-600">
                {event.month}
              </span>

              <span className="text-xl sm:text-2xl font-bold text-gray-800">
                {event.day}
              </span>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base break-words">
                {event.title}
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                {event.date}
              </p>

              <div className="mt-1 flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                <MapPin size={14} className="shrink-0" />
                <span className="truncate">{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}