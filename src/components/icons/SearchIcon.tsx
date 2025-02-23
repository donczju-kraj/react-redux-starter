import clsx from "clsx";

export default function SearchIcon({
  className = "text-gray-400 dark:text-gray-200",
}: {
  className?: string;
}) {
  return (
    <svg
      className={clsx("w-4 h-4", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
}
