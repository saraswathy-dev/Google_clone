import React,{FC} from 'react'

interface Props{
    url:string,
    className?:string
}
const Avatar:FC<Props>=({url,className})=>{
    return(<div>
        <img loading='lazy' className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        src={url}
        alt='profilepic'/>
    </div>)
}
export default Avatar;