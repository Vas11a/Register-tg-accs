import React from 'react'

export default function UserList() {
    return (
        <div className=" mt-8 min-w-375 flex-1 bg-white border border-gray-200">
            <div className=" bg-gray-50 p-3 text-lg font-bold text-blue-600">Напівавтоматично</div>
            <div className=" w-full flex justify-between gap-2 p-3">
                <div className="flex flex-col gap-3 ">
                    <div className=" text-gray-400 text-lg font-bold">Країна:</div>
                    <div className=" text-lg">Ukraina</div>
                    <div className=" text-lg">Poland</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className=" text-gray-400 text-lg font-bold">Число(дата):</div>
                    <div className=" text-lg">24/6/1202</div>
                    <div className=" text-lg">90/21/4444</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className=" text-gray-400 text-lg font-bold">Активність:</div>
                    <div className=" text-lg">24/6/1202</div>
                    <div className=" text-lg">90/21/4444</div>
                </div>
                
            </div>
            
            <div className=" w-full flex justify-center py-5">
                <div className=' cursor-pointer px-2 py-1 rounded-lg bg-green-300 border-2 duration-500 hover:bg-green-600 text-lg border-green-600'>Оновити</div>
            </div>
        </div>
    )
}
