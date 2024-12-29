import React from 'react'
import Avatar from '../components/Avatar.tsx';
import Footer from '../components/Footer.tsx';
import { useNavigate } from 'react-router-dom';
import { useResultContext } from '../context/ResultContextProvider.tsx';

const Home=()=>{
  const searchInputRef=useRef<HTMLInputElement>(null);
  const navigate =useNavigate();
  const {setSearchTerm}=useResultContext();
  const search=(e)=>{
    e.preventDefault();
    const term=searchInputRef!
    setSearchTerm(term);
    navigate('/search')
  }

    return(<div
    className='flex flex-col items-center justify-center h-screen'>
        <header className='flex w-full p-2 justify-between text-xs text-gray-950'>
            <div className='flex space-x-4 items-center'>
                <p className='link'>About</p>
                <p className='link'>Store</p>
            </div>
            <div className='flex space-x-4 items-center'>
                <p className='link'>Gmail</p>
                <p className='link'>Images</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 hover:bg-gray-100 cursor-pointer">
  <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2h-2ZM3.5 9A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9h-2ZM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2ZM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9h-2Z" />
</svg>
<Avatar url='https://media.licdn.com/dms/image/v2/D4E35AQFy7TqXUpn0og/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1677489588418?e=1735473600&v=beta&t=BDk0MsGUe2pfjoQKMOqexb-d4-nvy4BPGZRbtHKRKB0' ></Avatar>
</div>
        </header>
        <form onsubmit={search}className='flex flex-col items-center mt-40 flex-grow w-4/5'>
    <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' width={272} height={92}
    alt='google img'
    />
    <div className='flex w-3/4 mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
</svg>
<input ref={searchInputRef}type='text' className='ml-2 focus:outline-none flex-grow'></input>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0b57d0" class="size-5">
  <path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z" />
  <path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z" />
</svg>
</div>
<div class='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
<button className='btn'>Google Search</button>
<button className='btn'>I'm Feeling Lucky</button>
</div>
</form>
<Footer></Footer>


    </div>)

}
export default Home;

function useRef<T>(arg0: null) {
  throw new Error('Function not implemented.');
}
