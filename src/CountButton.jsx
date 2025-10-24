import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButton({ type, setCount }) {
  const handleClick = () => {
    setCount((n) => {
      if (type === "minus") {
        const newCount = n - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = n + 1;
        if (newCount > 4) {
          return 4;
        }
        return newCount;
      }
    });
  };

  return (
    <button className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

export default CountButton;
