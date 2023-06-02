import React from 'react'
import axios from 'axios';
import { webUrl } from '../url';
import loader from '../imgs/loader.gif'

export default function SemiAutoResForm() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [code, setCode] = React.useState('');
    const [amount, setAmount] = React.useState('');

    const postSemiAutoData = async () => {
        if (amount.replace(/\s/g, "").length < 1 || code.replace(/\s/g, "").length < 1) {
            alert('Enter correct data')
            return            
        }
        setIsLoading(true)
        try {
            // await axios.post(`${webUrl}/semi-auto-res-data`, {code, amount})
        } catch (error) {
            alert('Server error')
        }
        setIsLoading(false)
    }

    return (
        <div className=" mt-8 min-w-375 flex-1 bg-white border border-gray-200">
            <div className=" bg-gray-50 p-3 text-lg font-bold text-blue-600">Напівавтоматично</div>
            <div className="m-3 mt-8 flex justify-between items-center gap-4">
                <div className=' text-lg'>Кількість аккаунтів:</div>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className=' flex justify-between border-2 items-center border-gray-300 rounded-md w-1/2 min-w-200 px-3 py-2' />
            </div>
            <div className="m-3 mt-8 flex justify-between items-center gap-4">
                <div className=' text-lg'>Код підтвердження:</div>
                <input type="text" value={code} onChange={(e) => setCode(e.target.value)} className=' flex justify-between border-2 items-center border-gray-300 rounded-md w-1/2 min-w-200 px-3 py-2' />
            </div>
            {
                isLoading && <img src={loader} className=' w-9 h-auto m-auto mt-4' alt="Loading..." /> 
            }
            
            <div className=" w-full flex justify-center py-5">
                <div onClick={postSemiAutoData} className=' cursor-pointer px-2 py-1 rounded-lg bg-green-300 border-2 duration-500 hover:bg-green-600 text-lg border-green-600'>Застосувати</div>
            </div>
        </div>
    )
}
