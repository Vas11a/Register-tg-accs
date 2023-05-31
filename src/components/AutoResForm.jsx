import React from 'react'

export default function AutoResForm() {
    const [country, setCountry] = React.useState('');
    const [amount, setAmount] = React.useState('');

    return (
        <div className=" mt-8 min-w-375 flex-1 bg-white border border-gray-200">
            <div className=" bg-gray-50 p-3 text-lg font-bold text-blue-600">Автоматично</div>
            <div className="m-3 mt-8 flex justify-between items-center gap-4">
                <div className=' text-lg'>Кількість аккаунтів:</div>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className=' flex justify-between border-2 items-center border-gray-300 rounded-md w-1/2 min-w-200 px-3 py-2' />
            </div>
            <div className="m-3 mt-8 flex justify-between items-center gap-4">
                <div className=' text-lg'>Країна:</div>
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className=' flex justify-between border-2 items-center border-gray-300 rounded-md w-1/2 min-w-200 px-3 py-2' />
            </div>
            <div className=" w-full flex justify-center py-5">
                <div className=' cursor-pointer px-2 py-1 rounded-lg bg-green-300 border-2 duration-500 hover:bg-green-600 text-lg border-green-600'>Застосувати</div>
            </div>
        </div>
    )
}
