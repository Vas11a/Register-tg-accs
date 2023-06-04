import React from 'react'
import axios from 'axios'
import loader from '../imgs/loader.gif'
import { webUrl } from '../url'

export default function UserList() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [list, setList] = React.useState([{"country": "Ukraina", "data": "20202", "activity": "40404"}, {"country": "Poland", "data": "2000", "activity": "3434"}])
    const getListData = async () => {
        setIsLoading(true)
        try {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
            // const res = await axios.get(`${webUrl}/lst_of_obj`)
            // console.log(res.data)
            // setList(res.data)
        } catch (error) {
            alert('Server error')
            setIsLoading(false)
        }
    }
    React.useEffect(() => {
        getListData()
    }, [])
    return (
        <div className=" mt-8 min-w-375 flex-1 bg-white border border-gray-200 relative">
            <div className=" bg-gray-50 p-3 text-lg font-bold text-blue-600">Список аккаунтів</div>
            <div className=" w-full flex justify-between gap-2 p-3">
                <div className="flex flex-col gap-3 w-full">
                    {
                        isLoading && <img src={loader} className=' w-9 h-auto absolute top-2 right-2' alt="Loading..." /> 
                    }
                    <div className=" w-full flex justify-between gap-3 px-1 sm:px-5 py-2">
                        <div className=" text-gray-400 text-lg font-bold">Країна:</div>
                        <div className=" text-gray-400 text-lg font-bold">Число(дата):</div>
                        <div className=" text-gray-400 text-lg font-bold">Активність:</div>
                    </div>
                    {
                        list.map((elem, idx) => (
                            <div key={idx} className=" w-full flex justify-between gap-3 px-1 sm:px-5 py-2">
                               <div className=" text-lg">{elem.country}</div>
                               <div className=" text-lg">{elem.data}</div>
                               <div className=" text-lg">{elem.activity}</div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className=" w-full flex justify-center py-5">
                <div onClick={getListData} className=' cursor-pointer px-2 py-1 rounded-lg bg-green-300 border-2 duration-500 hover:bg-green-600 text-lg border-green-600'>Оновити</div>
            </div>
        </div>
    )
}
