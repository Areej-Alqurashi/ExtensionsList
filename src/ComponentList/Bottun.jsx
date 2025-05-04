export default function Bottun({
    name,
    
    fontSize = "text-base",
    fontWeight = "font-normal"
  }) {
    return (
      <button
        className={"!bg-whit-800 dark:!bg-gray-800 !text-black dark:!text-white ${size} ${fontSize} ${fontWeight} !rounded-3xl shrink-0 focus:outline-none border !border-red-700 dark:!border-white !px-5 py-7"}
      >
        {name}
      </button>
    );
  }
  