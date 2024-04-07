import { DOCTOR_DATA } from "@/lib/home";
import ExpertCard from "../_components/expert-card";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center p-8 gap-8">
      <h2 className="text-4xl font-medium">Our Councellors</h2>
      <div className="grid grid-cols-4 gap-8">
        {DOCTOR_DATA.map((item, index) => (
          <ExpertCard
            key={index}
            name={item.name}
            degree={item.degree}
            specialization={item.specialization}
            image={item.image}
            className="w-[280px] h-[280px] col-span-1"
          />
        ))}
      </div>
    </div>
  );
}
