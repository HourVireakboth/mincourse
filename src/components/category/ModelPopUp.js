import { Button } from "../Button";
import { CustomInput } from "../CustomInput";
import { CategorySchemas } from "@/schemas";
import { Formik, Form, Field } from "formik";

export const ModalForm = ({ setIsShowModal, onSave, isEditData, onEdit }) => {
  const onClick = (values) => {
    if (isEditData.id) {
      console.log("true");
      onEdit(values);
      setIsShowModal(false);
    } else {
      console.log("true");
      onSave(values);
    }
  };
  
  return (
    <Formik
      initialValues={{
        id: isEditData?.id || "",
        name: isEditData?.name || "",
        code: isEditData?.code || "",
      }}
      validationSchema={CategorySchemas}
      onSubmit={(values, actions) => {
        actions.resetForm();
        onClick(values);
      }}
    >
      {(props) => (
        <Form className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
          <div className="relative p-4  w-max  h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <div className=" items-start">
                <Button
                  label="X"
                  onClick={() => setIsShowModal(false)}
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                ></Button>
              </div>

              <div className=" p-5 w-full">
                <div className="p-5 w-full ">
                  <div className="mb-2 text-3xl text-center font-semibold border-b-2 ">
                    Category Form
                  </div>
                </div>
                <div className="block items-center justify-center w-full ">
                  <Field
                    className=" block "
                    name="name"
                    placeholder="Category Name"
                    component={CustomInput}
                  />
                  <Field
                    className=" block mb-10"
                    name="code"
                    placeholder="Your Code"
                    component={CustomInput}
                  />
                  <div className="mt-10 ml-5">
                    <Button label="Save" type="submit" />
                    <Button label="Reset" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
