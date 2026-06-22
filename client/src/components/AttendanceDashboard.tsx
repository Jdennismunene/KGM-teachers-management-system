import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import {
  FaUserCheck,
  FaBook,
  FaUpload,
  FaEnvelope,
  FaCalendarPlus,
  FaChartBar,
} from "react-icons/fa";

const attendanceData = [
  { name: "Present", value: 76, color: "#22c55e", count: 476 },
  { name: "Absent", value: 19, color: "#8b5cf6", count: 120 },
  { name: "Excused", value: 5, color: "#d1d5db", count: 30 },
];

const actions = [
  {
    label: "Take Attendance",
    icon: <FaUserCheck />,
  },
  {
    label: "Add Lesson",
    icon: <FaBook />,
  },
  {
    label: "Upload Resource",
    icon: <FaUpload />,
  },
  {
    label: "Send Message",
    icon: <FaEnvelope />,
  },
  {
    label: "Add Event",
    icon: <FaCalendarPlus />,
  },
  {
    label: "View Reports",
    icon: <FaChartBar />,
  },
];

export default function AttendanceDashboard() {
  const overallAttendance =
    attendanceData.find((item) => item.name === "Present")?.value ?? 0;

  return (
    <div className="space-y-6">
      {/* Attendance Summary */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Attendance Summary
          </h2>
          <p className="text-sm text-gray-500">
            This Month's Attendance Overview
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Chart */}
          <div className="relative w-full max-w-[240px] aspect-square mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={attendanceData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius="65%"
                  outerRadius="85%"
                  paddingAngle={3}
                  stroke="none"
                >
                  {attendanceData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">
                {overallAttendance}%
              </span>
              <span className="text-sm text-gray-500">Overall</span>
            </div>
          </div>

          {/* Legend */}
          <div className="w-full space-y-4">
            {attendanceData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {item.name}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  {item.count} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
          <p className="text-sm text-gray-500">Frequently used teacher tools</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {actions.map((action) => (
            <button
              key={action.label}
              className="
                flex flex-col items-center justify-center
                gap-3 p-4 rounded-xl
                border border-gray-100
                bg-gray-50
                hover:bg-white
                hover:shadow-md
                transition-all duration-200
              "
            >
              <div className="text-xl text-indigo-600">{action.icon}</div>

              <span className="text-xs sm:text-sm text-center font-medium text-gray-700">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
