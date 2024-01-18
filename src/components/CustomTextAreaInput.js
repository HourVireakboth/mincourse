import { ErrorMessage } from "formik";

export const CustomTextAreaInput = (props) => {
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
      <textarea
        {...field}
        {...restProps}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></textarea>
      <ErrorMessage
        name={field.name}
        className="text-red-500"
        component={"div"}
      />
    </div>
  );
};
