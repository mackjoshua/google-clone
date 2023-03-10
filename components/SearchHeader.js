import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react";
import { MicrophoneIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {

    const router = useRouter();
    const searchInputRef = useRef(null);

    function search(e) {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term.trim()) {
            return
        } else {
            router.push(`/search?term=${term.trim()}&searchType=`)
        }
    }


  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
            <Image 
                onClick={() => router.push("/")}
                width="120" 
                height="40"
                className="cursor-pointer" 
                objectFit='cover'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" 
                alt='Google Logo'
            />
            <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 max-w-3xl items-center">
                <input 
                type="text" 
                defaultValue={router.query.term} 
                className="w-full focus:outline-none"
                ref={searchInputRef} 
                />
                <XMarkIcon onClick={() => (searchInputRef.current.value = "")} className="h-7 text-gray-500 cursor-pointer sm:mr-3"/>
                <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
                <MagnifyingGlassIcon className="h-6 hidden sm:inline-flex text-blue-500" />
                <button onClick={search} type="submit" hidden></button>
            </form>
            <User className="ml-auto whitespace-nowrap"/>
        </div>
        <SearchHeaderOptions />
    </header>
  )
}
