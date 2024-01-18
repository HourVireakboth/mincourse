import React, { useEffect } from "react";
import { CustomInput } from "../CustomInput";
import { CustomSeleted } from "../CustomSelect";
import { CustomTextAreaInput } from "../CustomTextAreaInput";
import ChapterDynamicForm from "../chapter/ChapterDynamicForm";
import { CourseSchemas } from "@/schemas";
import { CustomMultipleSelect } from "../CustomMutiSelect";
import { useState } from "react";
import { Button } from "../Button";
import { uuidv4 } from "@/util";
import { Formik, Form, Field, FieldArray } from "formik";

export default function CourseForm({
  categoryData,
  onAdd,
  isEdit,
  onEditCourse,
}) {
  const initialValues = {
    name: "",
    category_id: "",
    summary: "",
    tags: [],
    chapters: [
      {
        id: uuidv4(),
        name: "",
        summary: "",
        lessons: [
          {
            id: uuidv4(),
            name: "",
            summary: "",
          },
        ],
      },
    ],
  };

  const onHandleAddChapter = (push) => {
    push({
      id: uuidv4(),
      name: "",
      summary: "",
      lessons: [
        {
          id: uuidv4(),
          name: "",
          content: "",
        },
      ],
    });
  };

  const onClickSaveCourse = (values) => {
    console.log(values);
    console.log(isEdit);
    const data = {
      ...values,
      id: isEdit ? values.id : uuidv4(),
    };
    console.log(data);
    onAdd(data);
  };

  console.log(isEdit);

  return (
    <div className="w-full">
      <Formik
        enableReinitialize={true}
        initialValues={onEditCourse?.id ? onEditCourse : initialValues}
        validationSchema={CourseSchemas}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          onClickSaveCourse(values, actions);
        }}
      >
        {(props) => {
          console.log(props.errors);
          return (
            <Form>
              <h3 className="text-left font-bold font-sans ">New Course</h3>
              <div>
                <Field
                  label="Course"
                  value={props?.values?.name}
                  name="name"
                  placeholder="Course Name"
                  component={CustomInput}
                />
                <Field
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  data={categoryData}
                  label="Select Category"
                  placeholder="Please Select Your Category"
                  name={"category_id"}
                  component={CustomSeleted}
                />
                <Field
                  id={onEditCourse?.id}
                  label="Customize Your Tag"
                  data={props?.values?.tags}
                  name={"tags"}
                  placeholder="Choose a Tag"
                  component={CustomMultipleSelect}
                />
                <Field
                  name="summary"
                  label="Summary Your Course"
                  value={props?.values?.summary}
                  component={CustomTextAreaInput}
                  placeholder="Course Summary Description"
                />
              </div>
              <div className="mt-10">
                <div>
                  <div>
                    <FieldArray name="chapters">
                      {({ push, remove }) => {
                        return (
                          <>
                            <div className="flex  justify-between m-5">
                              <h1 className="text-left font-bold font-mono ">
                                Chapter
                              </h1>
                              <Button
                                onClick={() => onHandleAddChapter(push)}
                                label="Add Chapter"
                              />
                            </div>
                            {props?.values?.chapters.map((chapter, index) => {
                              return (
                                <>
                                  <ChapterDynamicForm
                                    remove={remove}
                                    push={push}
                                    key={index}
                                    chapterIndex={index}
                                    data={chapter}
                                    values={props?.values}
                                  />
                                </>
                              );
                            })}
                          </>
                        );
                      }}
                    </FieldArray>
                  </div>
                  <div className="my-4 items-center justify-center flex gap-5">
                    <Button label="Save" type="submit" />
                    <Button label="Reset"></Button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
