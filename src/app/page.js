"use client";
import CategoriesManagement from "@/components/category/CategoriesManagement";
import TableCourse from "@/components/course/TableCourse";
import CourseForm from "@/components/course/CourseForm";
import { useState, useContext, useMemo } from "react";
import { MincourseContext } from "@/store/store_context";
import { MincourseContextProvider } from "@/store/store_context";

import { uuidv4 } from "@/util";
export default function Home() {
  const context = useContext(MincourseContext);
  const [isEditCourse, setIsEditCourse] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const data = useMemo(() => {
    const result = context.course_items.map((course) => {
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
  }, [context]);

  // const onAddCourse = (form) => {
  //   console.log(form.id);
  //   if (isEdit) {
  //     setIsEdit((pre) => !pre);
  //     setIsEditCourse({});
  //     cousres_items.map((item) =>
  //       item.id === form.id ? { ...item, ...form } : item
  //     );
  //     return;
  //   }
  //   console.log(form);
  //   cousres_items.push(form);
  // };

  // const onEditCourses = (id, isEdit) => {
  //   console.log(id);
  //   if (isEdit) {
  //     setIsEdit(isEdit);
  //     setIsEditCourse(cousres_items.find((course) => course.id === id));
  //     return;
  //   }
  //   setIsEditCourse({});
  //   setIsEdit((pre) => !pre);
  //   console.log(courses.find((course) => course.id === id));
  // };

  // const onDeleteCourses = (id) => {
  //   console.log(id);
  //   setCourses((pre) => pre.filter((pre) => pre.id !== id));
  // };
  console.log(context.items);
  return (
    <div className="border-2 border-sky-500 p-100">
      <div className=" max-w-full  bg-sky-500 mb-10">
        <h1 className="text-center font-bold text-4xl text-white">
          Min Course
        </h1>
      </div>
      <div className="m-10">
        <CategoriesManagement
          onSave={context.addItemToCategory}
          data={context.items}
          onDetele={context.deleteItemCategory}
          onEdit={context.editItemCategory}
        />
        <TableCourse
          data={data}
          // onDelete={onDeleteCourses}
          onEditCourses={context.editItemCourse}
          isEdit={isEdit}
        />
        <CourseForm
          categoryData={context.items}
          onAdd={context.addItemToCourse}
          onEditCourse={isEditCourse}
          isEdit={isEdit}
        />
      </div>
    </div>
  );
}
