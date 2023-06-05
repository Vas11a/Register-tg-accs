import React from 'react'

export default function CountryChange({setCountry, country}) {
    const [isOptionsOpen, setOptionsOpen] = React.useState(false);
    const [countryArr, setCountryArr] = React.useState(['Ukraina', 'Poland', 'England', 'USA'])
    
    const [filteredCountryArr, setFilteredCountryArr] = React.useState(countryArr);

    const countryClick = (name) => {
        setCountry(name)
        setOptionsOpen(false)
    }
    const onChangeInput = (part) => {
        setCountry(part)
        filterCountryArr(part);
    }

    const filterCountryArr = (part) => {
        const filteredArr = countryArr.filter((country) =>
          country.toLowerCase().includes(part.toLowerCase())
        );
        setFilteredCountryArr(filteredArr);
      };


    return (
        <div className=' w-1/2 relative'>
            <input onFocus={() => setOptionsOpen(true)} type="text" value={country} onChange={(e) => onChangeInput(e.target.value)} className=' flex justify-between border-2 items-center border-gray-300 rounded-md w-full min-w-200 px-3 py-2' />
            {
                isOptionsOpen && <div className=" w-full max-h-100 overflow-auto absolute top-12 right-0 p-2 border-2 border-gray-300 rounded-md">
                    
                    {
                        filteredCountryArr.map((elem , idx) => (
                            <div onClick={() => countryClick(elem)} key={elem+idx} className='cursor-pointer text-lg'>{elem}</div>
                        ))
                    }
                    {
                        filteredCountryArr.length === 0 && (
                            <div className='cursor-pointer uppercase font-bold text-gray-400'>No countries</div>
                        )
                    }
                </div>
            }

        </div>
    )
}
