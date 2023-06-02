import React from 'react'
import axios from 'axios';
import { webUrl } from '../url';

export default function Manual() {
    const [code, setCode] = React.useState('');
    const [phoneNumber, setNumber] = React.useState('');

    const postManualData = async () => {
        if (code.replace(/\s/g, "").length < 1 || phoneNumber.replace(/\s/g, "").length < 5) {
            alert('Enter correct data')
            return            
        }
        try {
            // await axios.post(`${webUrl}/manual-res-data`, {code, phoneNumber})
        } catch (error) {
            alert('Server error')
        }
    }

    return (
        <div className=" mt-8 min-w-375 flex-1 bg-white border border-gray-200">
            <div className=" bg-gray-50 p-3 text-lg font-bold text-blue-600">Мануально</div>
            <div className="m-3 mt-8 flex justify-between items-center gap-4">
                <div className=' text-lg'>Номер телефона:</div>
                <input type="text" value={phoneNumber} onChange={(e) => setNumber(e.target.value)} className=' flex justify-between border-2 items-center border-gray-300 rounded-md w-1/2 min-w-200 px-3 py-2' />
            </div>
            <div className="m-3 mt-8 flex justify-between items-center gap-4">
                <div className=' text-lg'>Код підтвердження:</div>
                <input type="text" value={code} onChange={(e) => setCode(e.target.value)} className=' flex justify-between border-2 items-center border-gray-300 rounded-md w-1/2 min-w-200 px-3 py-2' />
            </div>
            <div className=" w-full flex justify-center py-5">
                <div onClick={postManualData} className=' cursor-pointer px-2 py-1 rounded-lg bg-green-300 border-2 duration-500 hover:bg-green-600 text-lg border-green-600'>Застосувати</div>
            </div>
        </div>
    )
}
