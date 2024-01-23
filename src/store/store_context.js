"use client";
import { createContext, useReducer } from "react";
import { uuidv4 } from "@/util";

export const MincourseContext = createContext({
  items: [],
  course_items: [],
  addItemToCategory: () => {},
  editItemCategory: () => {},
  deleteItemCategory: () => {},
  addItemToCourse: () => {},
  editItemCourse: () => {},
});

const categoryReducer = (state, action) => {
  if (action.type === "ADD_CATEGORY") {
    const id = uuidv4();
    const categorylist = [...state.items];
    categorylist.push({
      ...action.payload,
      id: id,
    });
    console.log(categorylist);
    return {
      ...state,
      items: categorylist,
    };
  }

  if (action.type === "EDIT_CATEGORY") {
    console.log(action.payload.id);
    const categorylist = [...state.items];
    const newCategorylist = categorylist.map((item) => {
      if (item.id === action.payload.id) {
        item = action.payload;
      }
      return item;
      //   item.id === action.payload.id ? { ...item, ...action.payload } : item
    });
    console.log(categorylist);
    return {
      ...state,
      items: newCategorylist,
    };
  }

  if (action.type === "DELETE_CATEGORY") {
    const categorylist = [...state.items];
    const newCategorylist = categorylist.filter(
      (item) => item.id !== action.payload
    );
    return {
      ...state,
      items: newCategorylist,
    };
  }
  return state;
};
const courseReducer = (state, action) => {
  if (action.type === "ADD_COURES") {
    const courselist = [...state.course_items];
    courselist.push({ ...action.payload });

    return {
      ...state,
      course_items: courselist,
    };
  }

  if (action.type === "EDIT_COURES") {
    console.log(action.payload.id);

    const courselist = [...state.course_items];
    if (action.payload.isEdit) {
      courselist.find((course) => course.id === action.payload.id);
    }

    return {
      ...state,
      course_items: courselist,
    };
  }

  return state;
};

export const MincourseContextProvider = ({ children }) => {
  const [categoryState, CategoryDispatch] = useReducer(categoryReducer, {
    items: [
      {
        id: "12835ce6-163e-402b-b500-5651fd4d8091",
        name: "Mobile App",
        code: "111",
      },
      {
        id: "3a7f8b92-75e1-4c6d-a41e-9f93f62a72bc",
        name: "Web development",
        code: "222",
      },
      {
        id: "87dce4c1-2bfc-4a6e-9e68-1f1e5c4b9d20",
        name: "Computer Network",
        code: "333",
      },
      {
        id: "c43d9b55-9f61-4967-bd06-83217a841d14",
        name: "IT Support",
        code: "444",
      },
      {
        id: "f95c8277-2683-4971-a564-8e1453ab26a5",
        name: "Design",
        code: "555",
      },
    ],
  });

  const [courseState, CourseDispatch] = useReducer(courseReducer, {
    course_items: [
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
    ],
  });

  const onSaveCateorys = (param) => {
    CategoryDispatch({
      type: "ADD_CATEGORY",
      payload: param,
    });
  };

  const onEditCategory = (param) => {
    CategoryDispatch({
      type: "EDIT_CATEGORY",
      payload: param,
    });
  };

  const onDeteleCategory = (id) => {
    CategoryDispatch({
      type: "DELETE_CATEGORY",
      payload: id,
    });
  };

  const onAddCourse = (param) => {
    CourseDispatch({
      type: "ADD_COURES",
      payload: param,
    });
  };

  const onEditCourse = (id, isEdit) => {
    console.log(id);
    console.log(isEdit);
    CourseDispatch({
      type: "EDIT_COURES",
      payload: {
        id,
        isEdit,
      },
    });
  };

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

  const ctxValue = {
    items: categoryState.items,
    course_items: courseState.course_items,
    addItemToCategory: onSaveCateorys,
    editItemCategory: onEditCategory,
    deleteItemCategory: onDeteleCategory,
    addItemToCourse: onAddCourse,
    editItemCourse: onEditCourse,
    
  };

  console.log(ctxValue.items);
  return (
    <MincourseContext.Provider value={ctxValue}>
      {children}
    </MincourseContext.Provider>
  );
};
