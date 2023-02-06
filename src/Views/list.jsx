import { AiFillEdit } from 'react-icons/ai';


function deleteButton() {
  console.log("Delete button clicked");
}


function editButton () {
  return console.log("Edit button clicked");
}


function List() {

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

    return (
            <div className="py-3 px-8 justify-center flex flex-col">
                <table className="divide-y">
                <thead className="bg-cyan-900">
                  <tr>
                    <th scope="col" className="px-6 py-6 text-left text-xs font-medium text-sixth-500 uppercase tracking-wider text-white">
                      Task
                    </th>
                
                    <th scope="col" className="px-6 py-6 text-center text-xs font-medium text-sixth-500 uppercase tracking-wider text-white">
                      Complete by
                    </th>
  
                    <th scope="col" className="px-6 py-6 text-center text-xs font-medium text-sixth-500 uppercase tracking-wider text-white">
                      Actions
                    </th>  
                  </tr>
                </thead>
                <tbody className="divide-y divide-sixth-200 shadow bg-white">
                  <tr>

                    <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                      <div className="flex">
                        <div className="flex">
                          <div className="text-sm font-medium text-cyan-400">
                            Task 1
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                      <div className="items-center">
                        <div className="flex-row justify-end">
                          <div className="text-sm font-medium text-cyan-400">
                            {today}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                      <div className="items-center">
                        <div className="flex justify-center">
                          <button className="text-sm font-medium pr-2" onClickCapture={editButton}>
                            <i className='text-black'>{AiFillEdit}</i> <span className='text-black'>Edit</span>
                          </button>

                          <button className="text-sm font-medium text-black pr-2" onClickCapture={deleteButton}>
                            Delete
                          </button>

                        </div>
                      </div>
                    </td>

                  </tr>                  

  
                </tbody>
              </table>  
            </div>
      
    );
}


export default List;