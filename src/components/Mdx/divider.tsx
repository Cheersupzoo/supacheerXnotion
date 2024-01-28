import React from 'react'

export default function Divider() {
    return (
            <div className="flex justify-center gap-x-6 my-10">
                <div className="bg-[var(--text-color)] w-[3px] h-[3px]" />
                <div className="bg-[var(--text-color)] w-[3px] h-[3px]" />
                <div className="bg-[var(--text-color)] w-[3px] h-[3px]" />
            </div>
    )
}
