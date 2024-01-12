import React from "react";
import { TextInput, TextAreaInput } from "../TextInput";
import { Button } from "../Button";

export default function LessonDynamic({
  lessonIndex,
  value,
  handleLessonFormChange,
  chapterIndex,
  removeLesson,
}) {
  return (
    <div className=" mb-10 border-2 border-sky-500 p-10  ">
      <div className=" flex justify-between">
        <h1 className="text-left font-bold font-mono mb-10 ">
          Lesson {lessonIndex + 1}{" "}
        </h1>
        <Button
          label="Remove Lesson"
          onClick={() => removeLesson(chapterIndex, lessonIndex)}
        ></Button>
      </div>
      <TextInput
        label="Name"
        name="name"
        value={value.name}
        onChange={(e) => handleLessonFormChange(e, chapterIndex, lessonIndex)}
      />
      <TextAreaInput
        label="Content"
        name="content"
        value={value.content}
        onChange={(e) => handleLessonFormChange(e, chapterIndex, lessonIndex)}
      />
    </div>
  );
}
