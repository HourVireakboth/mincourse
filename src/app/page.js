"use client";
import CategoriesManagement from "@/components/category/CategoriesManagement";
import TableCourse from "@/components/course/TableCourse";
import CourseForm from "@/components/course/CourseForm";
import { useState, useContext, useMemo } from "react";
import { CategoryContext } from "@/store/store_context";

import { uuidv4 } from "@/util";
export default function Home() {
  const { category_items } = useContext(CategoryContext);

  // const [categorys, setCategorys] = useState([
  //   {
  //     id: "12835ce6-163e-402b-b500-5651fd4d8091",
  //     name: "Mobile App",
  //     code: "111",
  //   },
  //   {
  //     id: "3a7f8b92-75e1-4c6d-a41e-9f93f62a72bc",
  //     name: "Web development",
  //     code: "222",
  //   },
  //   {
  //     id: "87dce4c1-2bfc-4a6e-9e68-1f1e5c4b9d20",
  //     name: "Computer Network",
  //     code: "333",
  //   },
  //   {
  //     id: "c43d9b55-9f61-4967-bd06-83217a841d14",
  //     name: "IT Support",
  //     code: "444",
  //   },
  //   {
  //     id: "f95c8277-2683-4971-a564-8e1453ab26a5",
  //     name: "Design",
  //     code: "555",
  //   },
  // ]);

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "The Baddy Course",
      category_id: "12835ce6-163e-402b-b500-5651fd4d8091",
      summary: "This is the best course",

      tags: [
        "Web development",
        "Mobile development",
        "Computer Network",
        "IT Support",
        "Other",
      ],
      chapters: [
        {
          id: 1,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
        {
          id: 2,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",

          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
        {
          id: 3,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "The Awesome Course",
      category_id: "3a7f8b92-75e1-4c6d-a41e-9f93f62a72bc",
      summary: "An amazing course for learners",
      tags: [
        "Web development",
        "Mobile development",
        "Graghic Design ",
        "IT Support",
      ],
      chapters: [
        {
          id: 2,
          name: "The Exciting Chapter",
          summary: "Get ready for an exciting journey",
          lessons: [
            {
              id: 2,
              name: "The Exciting Lesson",
              summary: "Discover new concepts and ideas",
            },
            {
              id: 3,
              name: "The Exciting Lesson",
              summary: "Discover new concepts and ideas",
            },
          ],
        },
        {
          id: 1,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "The Coding Course",
      tags: ["Web development", "UX and UI Design ", "Graghic Design "],
      category_id: "c43d9b55-9f61-4967-bd06-83217a841d14",
      summary: "Unlock the world of coding",
      chapters: [
        {
          id: 3,
          name: "The Programming Chapter",
          summary: "Master the art of programming",
          lessons: [
            {
              id: 3,
              name: "The Coding Lesson",
              summary: "Hands-on coding experience",
            },
            {
              id: 4,
              name: "The Coding Lesson",
              summary: "Hands-on coding experience",
            },
          ],
        },
      ],
    },
  ]);
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
          data={category_items}
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
          categoryData={category_items}
          onAdd={onAddCourse}
          onEditCourse={isEditCourse}
          isEdit={isEdit}
        />
      </div>
    </div>
  );
}
