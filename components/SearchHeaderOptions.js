import { useRouter } from 'next/router'
import { PhotoIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import SearchHeaderOption from './SearchHeaderOption'

export default function SearchHeaderOptions() {
    const router = useRouter();
  return (
    <div className='flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b'>
        <SearchHeaderOption title="all" Icon={MagnifyingGlassIcon} selected={router.query.searchType === "" || !router.query.searchType} />
        <SearchHeaderOption title="images" Icon={PhotoIcon} selected={router.query.searchType === "image"}/> 
    </div>
  )
}
