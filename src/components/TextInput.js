export const TextInput = ({ type = "text", label, value, name, onChange }) => {
  return (
    <div className="flex flex-col mx-5">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export const TextAreaInput = ({
  label,
  type = "text",
  value,
  name,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col mx-5">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
        {label}
      </label>
      <textarea
        type={type}
        value={value}
        name={name}
        rows="4"
        onChange={onChange}
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export const SelectInput = ({
  label,
  placeholder,
  options = [],
  name,
  value,
  onChange,
}) => {
  return (
    <div className=" flex flex-col mx-5">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
        {label}
      </label>
      <select
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChange}
        name={name}
        value={value}
      >
        <option value={""}>{placeholder}</option>
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
