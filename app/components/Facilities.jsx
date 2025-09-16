


"use client";
import {
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  CloudIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
  TruckIcon,
  BoltIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export default function Facilities() {
  const facilities = [
    {
      icon: <BuildingOffice2Icon className="w-8 h-8 text-purple-600" />,
      title: "Spacious Function Hall",
      description:
        "Large hall with excellent capacity, ideal for weddings, receptions, and all kinds of celebrations.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <CloudIcon className="w-8 h-8 text-sky-600" />,
      title: "Fully Air-Conditioned",
      description:
        "A cool and comfortable environment for your guests all year round.",
      gradient: "from-sky-400 to-cyan-500",
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-pink-600" />,
      title: "Comfortable Seating",
      description:
        "Chairs and tables arranged neatly for gatherings of all sizes.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <PresentationChartBarIcon className="w-8 h-8 text-amber-600" />,
      title: "Stage / Platform",
      description:
        "Elegant stage for weddings, cultural programs, and ceremonies.",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: <TruckIcon className="w-8 h-8 text-indigo-600" />,
      title: "Spacious Parking",
      description:
        "Dedicated parking area with easy access for your guests’ convenience.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <BuildingOfficeIcon className="w-8 h-8 text-green-600" />,
      title: "Restrooms & Wash Areas",
      description:
        "Clean and well-maintained restrooms and wash areas for your guests.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: <BoltIcon className="w-8 h-8 text-yellow-600" />,
      title: "Generator / Power Backup",
      description:
        "Uninterrupted power supply to ensure your event goes smoothly.",
      gradient: "from-yellow-400 to-amber-500",
    },
    {
      icon: <LightBulbIcon className="w-8 h-8 text-red-600" />,
      title: "Basic Lighting & Fans",
      description:
        "Good lighting and fan arrangements included within the hall.",
      gradient: "from-red-400 to-rose-500",
    },
  ];

  return (
    <section
      id="facilities"
      className="relative py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Facilities
          </span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover the features that make our function hall the perfect place
          for your special occasions.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className={`relative group rounded-2xl p-[2px] bg-gradient-to-tr ${facility.gradient} shadow-xl hover:shadow-2xl transition-all duration-500`}
          >
            {/* Inner Card */}
            <div className="h-full w-full bg-white rounded-2xl p-6 flex flex-col items-start justify-start hover:bg-gray-50 transition">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-tr from-gray-100 to-white mb-5 group-hover:scale-110 group-hover:rotate-3 transition">
                {facility.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {facility.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
