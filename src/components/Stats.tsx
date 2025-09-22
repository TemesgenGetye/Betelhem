import { Award, Video, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { CircularProgress } from "./CircularProgress";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const stats = [
  {
    label: "Projects Completed",
    value: 190,
    icon: Video,
    description: "Successful video projects",
    color: "text-blue-500",
  },
  {
    label: "Years Experience",
    value: 4,
    icon: Clock,
    description: "Professional editing",
    color: "text-green-500",
  },
  {
    label: "Happy Clients",
    value: 27,
    icon: Users,
    description: "Worldwide",
    color: "text-yellow-500",
  },
  {
    label: "Companies Worked With",
    value: 4,
    icon: Award,
    description: "Industry recognition",
    color: "text-purple-500",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="bg-gradient-to-br from-white to-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-16">
          My Journey in Numbers
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatItem({
  stat,
  inView,
}: {
  stat: (typeof stats)[number];
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, stat.value]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CircularProgress
        percentage={(count / stat.value) * 100}
        color={stat.color}
      >
        <div className="text-center">
          <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
          <div className="text-3xl font-bold text-gray-900">{count}</div>
        </div>
      </CircularProgress>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{stat.label}</h3>
      <p className="mt-2 text-sm text-gray-600 text-center">
        {stat.description}
      </p>
    </motion.div>
  );
}
