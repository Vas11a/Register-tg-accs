import React from 'react'
import AutoResForm from './AutoResForm';
import SemiAutoResForm from './SemiAutoResForm';
import UserList from './UserList';
import Manual from './Manual';


export default function NavBar() {
    const [form, setForm] = React.useState(1);
    return (
        <div className=' w-full -mt-5'>
            <div className=" cursor-pointer flex gap-5 justify-between flex-wrap">
                <div onClick={() => setForm(1)} className=' min-w-fit flex-1 py-3 flex justify-between px-5 items-center border-yellow-500 bg-white rounded-md border-l-4 '>
                    Автоматично
                </div>
                <div onClick={() => setForm(2)} className=' min-w-fit flex-1 py-3 flex justify-between px-5 items-center border-yellow-500 bg-white rounded-md border-l-4 '>
                    Напівавтоматично
                </div>
                <div onClick={() => setForm(4)} className=' min-w-fit flex-1 py-3 flex justify-between px-5 items-center border-yellow-500 bg-white rounded-md border-l-4 '>
                    Мануально
                </div>
                <div onClick={() => setForm(3)} className=' min-w-fit flex-1 py-3 flex justify-between px-5 items-center border-yellow-500 bg-white rounded-md border-l-4 '>
                    Список аккаунтів
                </div>
            </div>
            {
                form === 1 && < AutoResForm />
            }
            {
                form === 2 && <SemiAutoResForm />
            }
            {
                form === 3 && <UserList />
            }
            {
                form === 4 && <Manual />
            }

        </div>
    )
}
