import { createContext,useReducer } from "react";


export const CategoryContext = createContext({
    category_items:[
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
        }
    ],

})

