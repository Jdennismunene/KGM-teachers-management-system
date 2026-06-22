import { Megaphone } from "lucide-react";

interface Announcement {
  title: string;
  description: string;
  time: string;
}

const announcements: Announcement[] = [
  {
    title: "New Curriculum Available",
    description: "Check the resources section for the new Quarter 2 curriculum.",
    time: "2h ago",
  },
  {
    title: "Teachers Training",
    description: "There will be a training session on May 27th, 2024.",
    time: "1d ago",
  },
];

export default function AnnouncementsCard() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white shadow-lg border border-gray-100 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
          <Megaphone size={18} />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Announcements
        </h2>
      </div>

      {/* List */}
      <div className="space-y-4">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="flex justify-between gap-3 border-b border-gray-100 pb-3 last:border-none"
          >
            {/* Left side */}
            <div className="flex gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 flex-shrink-0" />

              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Right side */}
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {item.time}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition flex items-center justify-center gap-1 mx-auto">
          View all announcements <span>→</span>
        </button>
      </div>
    </div>
  );
}