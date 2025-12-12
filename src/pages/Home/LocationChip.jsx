import { MapPin } from "lucide-react";

export default function LocationChip() {
  return (
    <>
      <div className="flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-2 w-fit border border-gray-200">
        <MapPin size={18} className="text-primary" />

        <div className="flex flex-col leading-tight">
          <span className="text-[10px] text-gray-500 font-medium">
            Delivering to
          </span>

          <span className="text-sm font-semibold text-gray-800">
            GRA Phase 2, Port Harcourt
          </span>
        </div>
      </div>

    </>
  );
}
