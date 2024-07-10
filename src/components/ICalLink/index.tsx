import Link from "@docusaurus/Link";
import clsx from "clsx";

type ICalLinkProps = {
  className?: string;
  date: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

const ICalLink = (props: ICalLinkProps) => {
  const createGoogleCalendarLink = () => {
    const startDate = new Date(props.date)
      .toISOString()
      .replace(/-|:|\.\d+/g, "");

    const endDate = new Date(props.date)
      .toISOString()
      .replace(/-|:|\.\d+/g, "");
      
    const descriptionEncoded = encodeURIComponent(props.description || "");
    const titleEncoded = encodeURIComponent(props.title);

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${titleEncoded}&dates=${startDate}/${endDate}&details=${descriptionEncoded}`;
  };

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const link = createGoogleCalendarLink();
    window.open(link, "_blank");
  };

  return (
    <Link
      href="#"
      onClick={handleClick}
      className={clsx(
        "font-bold",
        "inline-flex",
        "gap-2",
        "items-center",
        "hover:no-underline",
        props.className
      )}
    >
      📅 {props.children} 📅
    </Link>
  );
};

export default ICalLink;
