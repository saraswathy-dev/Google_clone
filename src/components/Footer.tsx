import React,{FC} from 'react'

const Footer:FC=()=>{
    return(
        // <footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100'>
        //    <div className='px-8 py-2'>
        //    <p>Germany</p>
        //    </div>
        //    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 grid-flow-row-dense px-8 py-3'>
        //     <div className='flex w-1/2 justify-between items-center md:col-span-2 lg:col-start-2'>
        //         <p>Advertising</p>
        //         <p>Business</p>
        //         <p>How Search works</p>
        //     </div>
        //    </div>
            
        // </footer>
        <footer className="bg-gray-100 text-sm text-gray-800 w-full">
      <div className="border-b border-gray-300 p-2">
        <p className="text-left">Germany</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center p-2">
        <div className="flex space-x-4 mb-2 sm:mb-0">
          <a href="#" className="hover:underline" >Advertising</a>
          <a href="#" className="hover:underline">Business</a>
          <a href="#" className="hover:underline">How Search works</a>
          
        </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Settings</a>
        </div>
      </div>
    </footer>
    )
}
export default Footer