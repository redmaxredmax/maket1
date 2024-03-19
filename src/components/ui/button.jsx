import React from 'react'
import clsx from 'clsx'
export const Button = ({ type, variant, children, onClick, icon1: startIcon, icon2:endIcon }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx("", {
                "bg-yellow_btn py-3 pl-[15px] pr-[45px] flex items-center gap-2": variant == "catalog",
                "bg-transparent hover:text-blue-500  flex flex-col justify-center items-center text-center":variant=="header"
            })}
        >
            {startIcon ? startIcon : ""}
            <span>{children}</span>
            {endIcon ? endIcon : ""}
        </button>
    )
}
