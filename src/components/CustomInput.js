import { ErrorMessage } from "formik";

export const CustomInput = (props) => {
  const {
    label = "",
    field,
    form: { touched, errors },
    ...restProps
  } = props;
  return (
    <div className="flex flex-col mx-5">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
        {label}
      </label>
      <input
        type="text"
        {...field}
        {...restProps}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <ErrorMessage
        name={field.name}
        className="text-red-500"
        component={"div"}
      />
    </div>
  );
};
