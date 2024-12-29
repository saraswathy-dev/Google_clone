import React, {createContext,Dispatch,FC,ReactNode,SetStateAction,useContext,useState} from 'react'


interface ContextInterface{
    getResults:(data:string)=>void;
    results:object|any;
    searchTerm:string;
    setSearchTerm:Dispatch<SetStateAction<string>>;
    isLoading:boolean;
}

export const ResultContext=createContext<ContextInterface>({
    getResults:()=>{},
    results:[],
    searchTerm:'',
    setSearchTerm:()=>{},
    isLoading:false
})

const baseUrl='https://google-search72.p.rapidapi.com/search?q=word%20cup&lr=en-US&num=10';

interface Props{
    children:ReactNode
}

export const ResultContextProvider:FC<Props>=({children})=>{
    const[results,setResults]=useState<Object>([])
    const[isLoading,setIsLoading]=useState<boolean>(false);
    const[searchTerm,setSearchTerm]=useState<string>('')
 const getResults= async(type:string)=>{
    setIsLoading(true)
    const response=await fetch(`${baseUrl}${type}`,{
        method:'GET',
        headers: {
            'x-rapidapi-key': '3d6609410bmsha9eb1f774ff8b54p167e7bjsn2db78b141d0b',
            'x-rapidapi-host': 'google-search72.p.rapidapi.com'
        }
    })
    const data=await response.json();
    if(type.includes('/news')){
        setResults(data.entries)
    } else if(type.includes('/image')){
        setResults(data.image_results)
    }else{
        setResults(data.results)
    }
    setIsLoading(false)
 }
const sampleAppContext:ContextInterface|null= {
     getResults,
     results,
     searchTerm,
     setSearchTerm,
     isLoading
}
 
    return(<ResultContext.Provider value={sampleAppContext}>
        {children}
    </ResultContext.Provider>)
}

export const useResultContext=()=>useContext(ResultContext)


