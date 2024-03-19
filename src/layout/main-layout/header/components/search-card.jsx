import React from 'react'

export const SearchCard = ({ img, title, id }) => {
    return (
        <div className='flex w-[700px]'>
            <img src={img} alt="img" />
            <h1>{title}</h1>
        </div>
    )
}
