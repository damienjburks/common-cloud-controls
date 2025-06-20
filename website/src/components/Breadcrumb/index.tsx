import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";

const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-500 mb-4 mx-32 py-5">
      <Link to="/" className="px-3 hover:bg-gray-200 rounded-full hover:no-underline">
        Home
      </Link>
      {pathParts.map((part, index) => {
        const to = "/" + pathParts.slice(0, index + 1).join("/");
        const isLastPart = index === pathParts.length - 1;
        return (
          <span key={to}>
            {" > "}
            <Link to={isLastPart ? "" : to} className={`px-3 rounded-full hover:no-underline ${isLastPart ? "bg-gray-200" : "hover:bg-gray-200"}`}>
              {format(part)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;

const format = (part: string): string => {
  if (part === "ccc") {
    return "Common Cloud Controls";
  }

  return part;
}
