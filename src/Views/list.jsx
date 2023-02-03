function List() {
    return (

            <div className="py-3 px-8 justify-center flex flex-col">
                <table className="divide-y  bg-cyan-900">
                <thead>
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
                <tbody className="divide-y divide-sixth-200">
                
    
  
                </tbody>
              </table>
            
            </div>
      
    );
}


export default List;