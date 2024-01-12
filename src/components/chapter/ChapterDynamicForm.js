import React from "react";
import { TextInput, TextAreaInput } from "../TextInput";
import LessonDynamic from "../lesson/LessonDynamic";
import { Button } from "../Button";

export default function ChapterDynamicForm({
  chapterIndex,
  form,
  value,
  onhandleAddLesson,
  handleLessonFormChange,
  handleChapterFormChange,
  removeLesson,
  removeChapter,
}) {

  return (
    <div className=" mb-10 border-2 border-sky-500 p-10  ">
      <div className="flex justify-between">
        <h1 className="text-left font-bold font-mono mb-10 ">
          Chapter {chapterIndex + 1}{" "}
        </h1>
        <Button
          key={chapterIndex}
          label="Remove Chapter"
          onClick={() => removeChapter(chapterIndex)}
        />
      </div>

      <TextInput
        label="Name"
        name="name"
        value={value.name}
        onChange={(e) => handleChapterFormChange(e, chapterIndex)}
      />
      <TextAreaInput
        label="Summarize"
        name="summarize"
        value={value.summarize}
        onChange={(e) => handleChapterFormChange(e, chapterIndex)}
      />
      <div className="flex  justify-between m-5">
        <h1 className="text-left font-bold font-mono ">lesson</h1>
        <Button
          label="Add Lesson"
          onClick={() => onhandleAddLesson(chapterIndex)}
        />
      </div>
      <div>
        {form.map((lesson, index) => (
          <LessonDynamic
            key={index}
            value={lesson}
            lessonIndex={index}
            handleLessonFormChange={handleLessonFormChange}
            chapterIndex={chapterIndex}
            onhandleAddLesson={onhandleAddLesson}
            removeLesson={removeLesson}
          />
        ))}
      </div>
    </div>
  );
}
