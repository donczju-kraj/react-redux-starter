import clsx from "clsx";

interface ButtonProps {
  caption: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ caption, onClick, className }: ButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={clsx(
        "text-white absolute end-2 bottom-2 bg-blue-700 hover:bg-blue-900 font-medium rounded-2xl text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700",
        className
      )}
    >
      {caption}
    </button>
  );
}
