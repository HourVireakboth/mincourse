import React from "react";
import { CustomInput } from "../CustomInput";
import { CustomTextAreaInput } from "../CustomTextAreaInput";
import { Button } from "../Button";
import { Field } from "formik";

export default function LessonDynamic(props) {
  return (
    <div className=" mb-10 border-2 border-sky-500 p-10  ">
      <div className=" flex justify-between">
        <h1 className="text-left font-bold font-mono mb-10 ">
          Lessons {props.index + 1}{" "}
        </h1>
        <Button
          label="Remove Lesson"
          onClick={() => {
            if (
              props?.values?.chapters[props.chapterIndex]?.lessons?.length === 1
            ) {
              alert("You cannot delete the last Lesson!");
              return;
            }
            props.remove(props.index);
          }}
        ></Button>
      </div>
      <Field
        label="Lesson Name"
        name={`chapters.${props.chapterIndex}.lessons.${props.index}.name`}
        value={props.data?.name}
        component={CustomInput}
        placeholder="Enter Lesson Name"
      />
      <Field
        label="Summary Your Course"
        name={`chapters.${props.chapterIndex}.lessons.${props.index}.summary`}
        value={props.data?.summary}
        component={CustomTextAreaInput}
        placeholder="Enter Lesson Summary"
      />
    </div>
  );
}
