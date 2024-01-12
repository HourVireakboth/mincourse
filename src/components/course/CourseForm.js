import React, { useDebugValue, useEffect } from "react";
import { TextAreaInput, TextInput, SelectInput } from "../TextInput";
import ChapterDynamicForm from "../chapter/ChapterDynamicForm";
import { useState } from "react";
import { Button } from "../Button";
import { uuidv4 } from "@/util";

export default function CourseForm({
  categoryData,
  onAdd,
  isEdit,
  onEditCourse,
}) {


  const [form, setForm] = useState({
    name: "",
    summarize: "",
    category_id: "",
    chapters: [
      {
        id: uuidv4(),
        name: "",
        summarize: "",
        lessons: [
          {
            id: uuidv4(),
            name: "",
            content: "",
          },
        ],
      },
    ],
  });

  useEffect(() => {
    if (isEdit) {
      console.log(true);
      setForm(onEditCourse);
      return;
    }
    setForm({
      name: "",
      summarize: "",
      category_id: "",
      chapters: [
        {
          id: uuidv4(),
          name: "",
          summarize: "",
          lessons: [
            {
              id: uuidv4(),
              name: "",
              content: "",
            },
          ],
        },
      ],
    });
  }, [isEdit]);

  const onHandleAddChapter = () => {
    const newChapter = {
      id: uuidv4(),
      name: "",
      summarize: "",
      lessons: [
        {
          id: uuidv4(),
          name: "",
          content: "",
        },
      ],
    };
    setForm((prevForm) => ({
      ...prevForm,
      chapters: [...prevForm.chapters, newChapter],
    }));
  };

  const onhandleAddLesson = (chapterIndex) => {
    const newLesson = {
      id: uuidv4(),
      name: "",
      content: "",
    };
    setForm((prev) => {
      const updatedChapters = prev.chapters.map((chapter, index) => {
        if (chapterIndex === index) {
          return { ...chapter, lessons: [...chapter.lessons, newLesson] };
        }
        return chapter;
      });

      return { ...prev, chapters: updatedChapters };
    });
  };

  const handleCourseFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleChapterFormChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    const data = form?.chapters;
    data[index][name] = value;
    setForm((pre) => {
      return {
        ...pre,
        chapters: data,
      };
    });
  };

  const handleLessonFormChange = (e, chapterIndex, lessonIndex) => {
    const name = e.target.name;
    const value = e.target.value;

    const data = { ...form };
    data.chapters[chapterIndex].lessons[lessonIndex][name] = value;
    setForm(data);
  };

  const removeChapter = (index) => {
    let chapterLists = form.chapters;
    chapterLists.splice(index, 1);
    setForm({ ...form, chapters: [...chapterLists] });
  };

  const removeLesson = (chapterIndex, lessonIndex) => {
    let lessonLists = form.chapters[chapterIndex].lessons;
    lessonLists.splice(lessonIndex, 1);

    let chapterList = form.chapters.map((chapter, index) => {
      if (chapterIndex === index) {
        return { ...chapter, lessons: [...lessonLists] };
      }
      return chapter;
    });

    setForm({ ...form, chapters: [...chapterList] });
  };

  const onClickSaveCourse = () => {
    console.log(form.id);
    console.log(isEdit);
    const data = {
      ...form,
      id: isEdit ? form.id : uuidv4(),
    };

    onAdd(data);
    setForm({
      name: "",
      summarize: "",
      category_id: "",
      chapters: [
        {
          id: uuidv4(),
          name: "",
          summarize: "",
          lessons: [
            {
              id: uuidv4(),
              name: "",
              content: "",
            },
          ],
        },
      ],
    });
  };

  return (
    <div className="w-full">
      <h3 className="text-left font-bold font-sans ">New Course</h3>
      <div>
        <TextInput
          label="Name"
          name="name"
          value={form.name}
          onChange={(e) => handleCourseFormChange(e)}
        />
        <SelectInput
          label="Category"
          onChange={(e) => handleCourseFormChange(e)}
          name="category_id"
          placeholder="Please Select a Category "
          value={form.category_id}
          options={categoryData}
        />
        <TextAreaInput
          label="Summarize"
          name="summarize"
          onChange={(e) => handleCourseFormChange(e)}
          value={form.summarize}
        />
      </div>
      <div className="mt-10">
        <div>
          <div className="flex  justify-between m-5">
            <h1 className="text-left font-bold font-mono ">Chapter</h1>
            <Button onClick={() => onHandleAddChapter()} label="Add Chapter" />
          </div>
          <div>
            {form.chapters?.map((chapterForm, index) => (
              <ChapterDynamicForm
                isEdit={isEdit}
                key={index}
                value={chapterForm}
                chapterIndex={index}
                form={chapterForm.lessons}
                handleChapterFormChange={handleChapterFormChange}
                handleLessonFormChange={handleLessonFormChange}
                onhandleAddLesson={onhandleAddLesson}
                removeChapter={removeChapter}
                removeLesson={removeLesson}
              />
            ))}
          </div>
          <div className="my-4 items-center justify-center flex gap-5">
            <Button label="Save" onClick={onClickSaveCourse}>
              Save
            </Button>
            <Button label="Reset"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
