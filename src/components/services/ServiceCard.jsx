import { motion } from "framer-motion";

export default function ServiceCard({ service, x, y, scale, opacity, zIndex }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="
      absolute
      w-[290px]
      bg-white
      rounded-2xl
      border
      border-sky-200
      shadow-xl
      p-3
      flex
      gap-3
      items-center
      cursor-pointer
      hover:border-sky-500
      
      "
      style={{
        x,
        y,
        scale,
        opacity,
        zIndex,
      }}
      whileHover={{
        scale: scale * 1.05,
        opacity: 1,
        zIndex: 50,
      }}
    >
      <div className="w-20 h-20 rounded-full  overflow-hidden border border-sky-400 flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-right flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <Icon size={16} className="text-sky-600" />
          <h3 className="font-bold text-sm truncate">{service.title}</h3>
        </div>
        <p className="text-xs text-gray-500 leading-6 line-clamp-2">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
