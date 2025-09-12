import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface LinkData {
  href?: string;
  text?: string;
}

const CommonLink = ({ href = "#", text = "View All" }: LinkData) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 text-primary dark:text-primary hover:text-blue-400 text-sm"
    >
      {text}
      <ChevronRight width={16} height={16} />
    </Link>
  );
};

export default CommonLink;
