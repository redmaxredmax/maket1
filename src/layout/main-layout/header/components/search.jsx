import React from 'react'
import Skeleton from "react-loading-skeleton";
import { useSearchData } from '../../../../service/query/useSearchData';
import useDebounce from "../../../../hooks/useDebounce"
import { SearchCard } from './search-card';

export const Search = () => {
    const [input, setInput] = React.useState('')
    const value = useDebounce(input)
    const { data, isLoading } = useSearchData(value);

    return (
        <div className="container mt-5 mx-auto">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Search..." />
            {isLoading ? <Skeleton height={150} count={4} baseColor='transparent' /> : <div>
                {data?.map((item) =>
                    <SearchCard key={item.id} {...item} />
                )}
            </div>}
        </div>
    )
}
