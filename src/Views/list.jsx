import React from "react";
import axios from "axios";

function deleteButton() {
  console.log("Delete button clicked");
}

function editButton() {
  console.log("Edit button clicked");
}

function List() {
  const url = "http://localhost:3000/tasks";
  let [responseData, setResponseData] = React.useState("");

  const headers = {
    "Content-Type": "application/json",
  };

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: url,
      headers: headers,
    })
      .then((response) => {
        console.log("------->", response.data);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="py-3 px-8 justify-center flex flex-col">
      <table className="divide-y">
        <thead className="bg-cyan-900">
          <tr>
            <th
              scope="col"
              className="px-6 py-6 text-left text-xs font-medium text-sixth-500 uppercase tracking-wider text-white"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-6 text-left text-xs font-medium text-sixth-500 uppercase tracking-wider text-white"
            >
              Task
            </th>

            <th
              scope="col"
              className="px-6 py-6 text-center text-xs font-medium text-sixth-500 uppercase tracking-wider text-white"
            >
              Complete by
            </th>

            <th
              scope="col"
              className="px-6 py-6 text-center text-xs font-medium text-sixth-500 uppercase tracking-wider text-white"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-sixth-200 shadow bg-white">
            {responseData.map((item, index) => {
              console.log("item", item);

                        <tr key={index}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                          <div className="flex">
                            <div className="flex">
                              <div className="text-sm font-medium text-cyan-400">
                                {item.id}
                              </div>
                            </div>
                          </div>
                        </td>
            
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                          <div className="flex">
                            <div className="flex">
                              <div className="text-sm font-medium text-cyan-400">{item.name}</div>
                            </div>
                          </div>
                        </td>
            
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                          <div className="items-center">
                            <div className="flex justify-center">
                              <button
                                className="text-sm font-medium pr-2"
                                onClickCapture={editButton}
                              >
                                <i className="text-black">{0}</i>{" "}
                                <span className="text-black">Edit</span>
                              </button>
            
                              <button
                                className="text-sm font-medium text-black pr-2"
                                onClickCapture={deleteButton}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
          
          })}
        
        </tbody>
      </table>
    </div>
  );
}

export default List;
