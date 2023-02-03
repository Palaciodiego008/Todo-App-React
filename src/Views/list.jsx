function List() {
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
                      <div className="flex items-left">
                        <div className="flex">
                          <div className="text-sm font-medium text-cyan-400">
                            Task 1
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                      <div className="flex items-left">
                        <div className="flex">
                          <div className="text-sm font-medium text-cyan-400">
                            Task 1
                          </div>
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