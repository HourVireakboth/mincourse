import { ErrorMessage } from "formik";
import React from "react";
import Select from "react-select";

export const CustomMultipleSelect = ({
  id,
  label = "",
  data = [],
  placeholder = "Please Select Your Category",
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, values }, // form functions
  ...props
}) => {
  const helperData = data.map((select) => {
    return {
      value: select,
      label: select,
    };
  });
  console.log(id);

  return (
    <>
      <div className=" flex flex-col mx-5">
        <label> {label} </label>
        <Select
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          closeMenuOnSelect={false}
          name={field.name}
          isMulti
          options={
            // !id
            //   ?
            [
              "Web development",
              "Mobile development",
              "UX and UI Design",
              "Graghic Design",
              "Computer Network",
              "IT Support",
              "Other",
            ].map((tag) => ({ value: tag, label: tag }))
            //   : data.map((tag) => ({ value: tag, label: tag }))
          }
          onChange={(data) => {
            console.log(data?.map((d) => d.value));
            setFieldValue(
              field.name,
              data?.map((d) => d.value)
            );
          }}
          value={
            values[field.name]
              ? helperData.filter((option) =>
                  values[field.name].includes(option.value)
                )
              : []
          }
          onBlur={field.onBlur}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : "blue",
            }),
          }}
        />
        <ErrorMessage
          name={field.name}
          className="text-red-500"
          component={"div"}
        />
      </div>
    </>
  );
};
