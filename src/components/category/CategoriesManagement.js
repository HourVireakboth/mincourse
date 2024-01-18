import React, { useState } from "react";
import { Button } from "../Button";
import { ModalForm } from "./ModelPopUp";

export default function CategoriesManagement({
  onSave,
  data,
  onEdit,
  onDetele,
}) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isEditData, setIsEditData] = useState({});

  const onSelectEdit = (id) => {
    setIsEditData(data.find((dt) => dt.id === id));
    setIsShowModal(true);
  };

  return (
    <>
      {isShowModal && (
        <ModalForm
          setIsShowModal={setIsShowModal}
          onSave={onSave}
          onEdit={onEdit}
          isEditData={isEditData}
        />
      )}
      <div className="mb-10">
        <div className="flex justify-between">
          <h3 className="text-left font-bold font-mono ">
            Categories Managements
          </h3>
          <Button
            onClick={() => {
              setIsShowModal(true), setIsEditData({});
            }}
            label="Add"
            type="button"
          />
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
                  code
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((row) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {row.id}
                    </td>
                    <td className="px-6 py-4">{row.name}</td>
                    <td className="px-6 py-4">{row.code}</td>
                    <td>
                      <button
                        className="text-blue-600 mr-2"
                        onClick={() => onSelectEdit(row.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 ml-2"
                        onClick={() => onDetele(row.id)}
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
    </>
  );
}
