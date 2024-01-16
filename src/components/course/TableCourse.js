import React from "react";
import { Button } from "../Button";
export default function TableCourse({ data, onDelete, onEditCourses, isEdit }) {
  return (
    <div className="mb-10">
      <div className="mb-5">
        <div className="flex justify-between">
          <h3 className="text-left font-bold font-mono ">Course Management</h3>
          <Button onClick={""} label="Add" type="button" />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Summarize
              </th>
              <th scope="col" className="px-6 py-3">
                Categories
              </th>
              <th scope="col" className="px-6 py-3">
                Tags
              </th>
              <th scope="col" className="px-6 py-3">
                total chapters
              </th>
              <th scope="col" className="px-6 py-3">
                total lessons
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.summary}</td>
                  <td className="px-6 py-4">{item.category_id}</td>
                  <td className="px-6 py-4">{item.tags.length}</td>
                  <td className="px-6 py-4">{item.total_chapters}</td>
                  <td className="px-6 py-4">{item.total_lessons}</td>
                  <td>
                    <button
                      className="text-blue-600 mr-2"
                      onClick={() => {
                        console.log(isEdit);
                        if (!isEdit) {
                          onEditCourses(item.id, true);
                          return;
                        }
                        onEditCourses(item.id, false);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 ml-2"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
