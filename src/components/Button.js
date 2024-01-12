export const Button = ({ label, type = "button", onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-1 text-center me-2 mb-2"
    >
      {label}
    </button>
  );
};
