import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type Props = {
  label: string;
  value: string;
  isSelected: boolean;
  onSelect: (key: string) => void;
  icons: {
    selected: StaticImageData;
    notSelected: StaticImageData;
  };
};

export const UseCaseListItem = (props: Props) => {
  const { label, isSelected, icons, onSelect, value } = props;

  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-4 py-3 px-6 border border-[#F5D64E] h-24 bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]",
        isSelected ? "bg-[#F5D64E]" : ""
      )}
      onClick={() => onSelect(value)}
    >
      <Image
        src={isSelected ? icons.selected : icons.notSelected}
        alt={label}
      />
      <span
        className={cn(
          "text-[20px] font-regular",
          isSelected ? "text-black" : "text-white"
        )}
      >
        {label}
      </span>
    </div>
  );
};
