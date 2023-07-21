import Link from "next/link";
import {RiArrowRightSLine} from "react-icons/ri";

const Breadcrumb = ({ links }) => {

  return (
    <nav className="flex">
      {links.map((link, index) => (
        <div key={link.path} className="flex items-center">
          {index > 0 && (
            <RiArrowRightSLine className="text-gray-500 dark:text-gray-200"/>
          )}
            <Link href={link.path} className="text-gray-500 hover:text-blue-600 dark:text-gray-200 dark:hover:text-orange-600">
            {link.label}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
