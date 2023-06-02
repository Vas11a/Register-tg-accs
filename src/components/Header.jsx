import React from 'react'
import logo from '../imgs/logo.webp'

export default function Header() {
    return (
        <div className=" w-full py-4 px-3 sm:px-8 flex items-center gap-2 flex-wrap justify-between">
            <div className=" text-3xl pb-3 md:pb-0">
                Реєстрація акаунтів
            </div>
            <div className=" flex gap-8">
                <img src={logo} alt="LOGO" className=' w-8 h-8 -mr-3' />
                <div className=" cursor-pointer flex gap-2 pl-5 border-l items-center border-gray-400">
                    <div className=" ">Telegram Soft</div>
                </div>
            </div>
        </div>
    )
}
