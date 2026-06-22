import { FaArrowRight, FaBell, FaMoon } from "react-icons/fa6";
import { useApp } from "../context/AppContext";
import { assets } from "../assets/assets";
import { MdMoreVert } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { BookOpen, Calendar, CardSim } from "lucide-react";
import ScheduleCard from "../components/ScheduleCard";
import UpcomingEvents from "../components/EventsCard";
import AnnouncementsCard from "../components/AnnouncementCard";
import AttendanceDashboard from "../components/AttendanceDashboard";
import MyClassesOverview from "../components/ClassOverView";

function Home() {
  const { isOpen } = useApp();

  const statsCards = [
    {
      title: "My Classes",
      value: "3",
      icon: <BsPeople size={24} color="white" />,
      bg: "bg-purple-500",
      footer: (
        <button className="flex items-center gap-2 text-purple-500 mt-3 cursor-pointer">
          <span className="text-sm">View all classes</span>
          <FaArrowRight size={12} />
        </button>
      ),
    },
    {
      title: "Total Students",
      value: "87",
      icon: <BsPeople size={24} color="white" />,
      bg: "bg-green-500",
      footer: <p className="text-sm text-gray-400 mt-3">Across all classes</p>,
    },
    {
      title: "Attendance Today",
      value: "76%",
      icon: <Calendar size={24} color="white" />,
      bg: "bg-blue-500",
      footer: <p className="text-sm text-gray-400 mt-3">66 / 87 Present</p>,
    },
    {
      title: "Lessons Planned",
      value: "4",
      icon: <BookOpen size={24} color="white" />,
      bg: "bg-orange-500",
      footer: <p className="text-sm text-gray-400 mt-3">This Month</p>,
    },
    {
      title: "Pending Tasks",
      value: "5",
      icon: <CardSim size={24} color="white" />,
      bg: "bg-pink-600",
      footer: (
        <button className="flex items-center gap-2 text-pink-600 mt-3 cursor-pointer">
          <span className="text-sm">View Tasks</span>
          <FaArrowRight size={12} />
        </button>
      ),
    },
  ];

  return (
    <section className="px-4 md:px-6 lg:px-8 pb-8">
      {/* Header */}
      {/* Header */}
      <div
        className={`
    fixed top-2 right-2 z-40

    bg-white
    border border-gray-200
    shadow-md
    rounded-xl

    px-4 py-4

    transition-all duration-300

    left-22

    ${isOpen ? "lg:left-66" : "lg:left-22"}
  `}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left Side */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
              Good Morning, Teacher Grace!
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Welcome back to your dashboard. Let's make this Sunday School
              impactful!
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Notification */}
            <button className="p-2 rounded-lg hover:bg-gray-100 transition">
              <FaBell size={18} />
            </button>

            {/* Theme */}
            <button className="p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              <FaMoon size={18} />
            </button>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>

            {/* User Profile */}
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-xl">
              <img
                src={assets.user_img}
                alt="Teacher Grace"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-sm font-semibold text-gray-800">
                Teacher Grace
              </p>
            </div>

            {/* More Options */}
            <button className="p-2 rounded-lg hover:bg-gray-100 transition">
              <MdMoreVert size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-53 sm:mt-44 lg:mt-28">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className="
              h-full
              bg-white
              rounded-xl
              shadow-md
              hover:shadow-xl
              hover:scale-105
              transition-all duration-300
              p-4
              flex items-start gap-4
            "
          >
            <div className={`${card.bg} p-4 rounded-full`}>{card.icon}</div>

            <div className="flex-1">
              <h3 className="text-sm text-gray-600">{card.title}</h3>

              <p className="text-2xl font-bold mt-1">{card.value}</p>

              {card.footer}
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScheduleCard />
            <UpcomingEvents />
          </div>

          {/* Directly Below */}
          <MyClassesOverview />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <AnnouncementsCard />
          <AttendanceDashboard />
        </div>
      </div>
    </section>
  );
}

export default Home;
