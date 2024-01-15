"use client";
import CategoriesManagement from "@/components/category/CategoriesManagement";
import TableCourse from "@/components/course/TableCourse";
import CourseForm from "@/components/course/CourseForm";
import { useState, useMemo } from "react";

import { uuidv4 } from "@/util";
export default function Home() {
  const [categorys, setCategorys] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isEditCourse, setIsEditCourse] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const onSaveCateorys = (param) => {
    const id = uuidv4();
    setCategorys((pre) => {
      pre.push({
        ...param,
        id: id,
      });
      return [...pre];
    });
  };

  const onEditCategory = (form) => {
    console.log(form);
    setCategorys((prev) =>
      prev.map((item) => (item.id === form.id ? { ...prev, ...form } : item))
    );
  };

  const onDeleteCategory = (id) => {
    setCategorys((prev) => prev.filter((item) => item.id !== id));
    setCourses((prev) => prev.filter((item) => item.category_id !== id));
  };

  const data = useMemo(() => {
    const result = courses.map((course) => {
      const totalLessons = course.chapters?.reduce(
        (sum, chapter) => sum + chapter.lessons.length,
        0
      );
      return {
        ...course,
        total_chapters: course.chapters?.length,
        total_lessons: totalLessons,
      };
    });

    return result;
  }, [courses]);

  const onAddCourse = (form) => {
    console.log(form.id);
    if (isEdit) {
      setIsEdit((pre) => !pre);
      setIsEditCourse({});
      setCourses((prev) => {
        return prev.map((item) =>
          item.id === form.id ? { ...prev, ...form } : item
        );
      });
      return;
    }
    setCourses(courses.concat(form));
  };

  const onEditCourses = (id, isEdit) => {
    console.log(id);
    if (isEdit) {
      setIsEdit(isEdit);
      setIsEditCourse(courses.find((course) => course.id === id));
      return;
    }
    setIsEditCourse({});
    setIsEdit((pre) => !pre);
    console.log(courses.find((course) => course.id === id));
  };

  const onDeleteCourses = (id) => {
    console.log(id);
    setCourses((pre) => pre.filter((pre) => pre.id !== id));
  };

  return (
    <div className="border-2 border-sky-500 p-100">
      <div className=" max-w-full  bg-sky-500 mb-10">
        <h1 className="text-center font-bold text-4xl text-white">
          Min Course
        </h1>
      </div>
      <div className="m-10">
        <CategoriesManagement
          onSave={onSaveCateorys}
          data={categorys}
          onDetele={onDeleteCategory}
          onEdit={onEditCategory}
        />
        <TableCourse
          data={data}
          onDelete={onDeleteCourses}
          onEditCourses={onEditCourses}
          isEdit={isEdit}
        />
        <CourseForm
          categoryData={categorys}
          onAdd={onAddCourse}
          onEditCourse={isEditCourse}
          isEdit={isEdit}
        />
      </div>
    </div>
  );
}
