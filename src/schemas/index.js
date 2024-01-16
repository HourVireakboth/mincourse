import * as Yup from "yup";

export const CategorySchemas = Yup.object().shape({
  name: Yup.string()
    .min(3, "Category must be at least 3 characters long")
    .required("Required"),
  code: Yup.string()
    .min(3, "code must be at least 3 characters long")
    .required("Required"),
});

export const CourseSchemas = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 character ")
    .required(" Course Name is Required *"),
  summary: Yup.string()
    .min(3, "summary must be at least 3 character ")
    .required(" Course Summary is Required *"),
  tags: Yup.array()
    .of(Yup.string())
    .min(3, "Please Select Tag More then 2")
    .required("This is required"),
  category_id: Yup.string().required(" Course Category is Required *"),
  chapters: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required(" Chapters Name is Required *"),
      summary: Yup.string().required("Chapters  Summary is Required *"),
      lessons: Yup.array().of(
        Yup.object().shape({
          name: Yup.string().required(" Lesson Name is Required *"),
          summary: Yup.string().required("Lesson Summary is Required *"),
        })
      ),
    })
  ),
});
