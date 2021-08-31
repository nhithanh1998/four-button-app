import { TYPE_ENUM, COLOR_ENUM } from "../../enums";
export const Button = ({ name, type, isActive, handleClick }) => {
  const renderActiveButton = () => {
    if (name === COLOR_ENUM.BLUE) {
      return (
        <button class="rounded-full h-48 w-48 flex items-center justify-center bg-blue-500 text-white">
          {name}
        </button>
      );
    }
    if (name === COLOR_ENUM.GREEN) {
      return (
        <button class="rounded-full h-48 w-48 flex items-center justify-center bg-green-500 text-white">
          {name}
        </button>
      );
    }
    if (name === COLOR_ENUM.YELLOW) {
      return (
        <button class="rounded-full h-48 w-48 flex items-center justify-center bg-yellow-500 text-white">
          {name}
        </button>
      );
    }
  };

  return type === TYPE_ENUM.RECTANGEL ? (
    <button
      class="items-center w-48 h-6 justify-center"
      onClick={() => handleClick()}
    >
      {name}
    </button>
  ) : isActive === false ? (
    <div class="rounded-full h-40 w-40 flex items-center justify-center mb-11">
      <button class="rounded-full h-36 w-36 flex items-center justify-center center border-2 border-black"
      onClick={() => {handleClick(name)}}
      >
        {name}
      </button>
    </div>
  ) : (
    <div class="rounded-full h-40 w-40 flex items-center justify-center mb-11 border-2 border-red-500">
    <button class="rounded-full h-36 w-36 flex items-center justify-center center border-2 border-black"
    onClick={() => {handleClick(name)}}
    >
      {name}
    </button>
  </div>
  );
};
