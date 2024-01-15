import React from "react";
import { CustomInput } from "../CustomInput";
import { CustomTextAreaInput } from "../CustomTextAreaInput";
import LessonDynamic from "../lesson/LessonDynamic";
import { FieldArray } from "formik";
import { Button } from "../Button";
import { Field } from "formik";
import { uuidv4 } from "@/util";

export default function ChapterDynamicForm(props) {
  return (
    <div className=" mb-10 border-2 border-sky-500 p-10  ">
      <div className="flex justify-between">
        <h1 className="text-left font-bold font-mono mb-10 ">
          Chapter {props.chapterIndex + 1}{" "}
        </h1>
        <Button
          key={props.chapterIndex}
          label="Remove Chapter"
          onClick={() => {
            if (props?.values.chapters.length === 1) {
              alert("You cannot delete the last Chapter!");
              return;
            }
            props.remove(props.index);
          }}
        />
      </div>
      <Field
        label="Chapter"
        value={props?.data?.name}
        name={`chapters.${props.chapterIndex}.name`}
        placeholder="Chapter Name"
        component={CustomInput}
      />

      <Field
        name={`chapters.${props.chapterIndex}.summary`}
        label="Summary Your Course"
        value={props?.data?.summary}
        component={CustomTextAreaInput}
        placeholder="ChapterSummary Description"
      />

      <FieldArray name={`chapters.${props.chapterIndex}.lessons`}>
        {({ push, remove }) => {
          return (
            <div>
              <div className="flex  justify-between m-5">
                <h1 className="text-left font-bold font-mono ">lesson</h1>
                <Button
                  label="Add Lesson"
                  onClick={() => {
                    push({
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
                    });
                  }}
                />
              </div>
              {props?.values?.chapters[props.chapterIndex]?.lessons?.map(
                (lesson, lessonindex) => {
                  return (
                    <div>
                      <LessonDynamic
                        remove={remove}
                        push={push}
                        key={lessonindex}
                        chapterIndex={props.chapterIndex}
                        index={lessonindex}
                        data={lesson}
                        values={props?.values}
                      />
                    </div>
                  );
                }
              )}
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
}
