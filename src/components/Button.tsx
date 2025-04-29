interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-lg font-medium text-gray-900 group-hover:from-purple-500 group-hover:to-pink-500 focus:ring-4 focus:ring-purple-200 focus:outline-none dark:text-white dark:focus:ring-purple-800"
      >
        <span className="cursor-pointer relative flex items-center gap-2 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Click aqui ❤️
        </span>
      </button>
    </div>
  );
};

export default Button;
