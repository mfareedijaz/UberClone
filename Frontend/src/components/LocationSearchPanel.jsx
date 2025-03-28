import React from 'react'

const LocationSearchPanel = (props) => {
    const locations = [
        "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
        "20C, Near Malholtra's cafe, Sheriyans Coding School, Bhopal",
        "90K, Near Singhai's cafe, Sheriyans Coding School, Bhopal",
        "57B, Near Sharma's cafe, Sheriyans Coding School, Bhopal",
        "62A, Near Pandya's cafe, Sheriyans Coding School, Bhopal",
    ]

    return (
        <div>
            {
                locations.map(function (element, index) {
                    return <div key={index} onClick={() => { props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                     }} className='flex items-center justify-start gap-2 text-sm my-3 border-2 p-2 border-gray-50 rounded-xl active:border-black'>
                        <h2 className='h-8 w-12 bg-[#eee] rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{element}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel