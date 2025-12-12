import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MenuSection({ title, items }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-6">
      {/* Section Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-3 px-2 bg-gray-100 rounded-md"
      >
        <h2 className="text-lg font-bold">{title}</h2>
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Items */}
      {open && (
        <div className="mt-3 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border"
            >
              <img
                src={item.image}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-primary font-bold mt-1">₦{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
