import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 className='text-center' onClick={() => props.setVehicleFound(false)}><i className="text-xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

            <h3 className='text-xl font-bold mb-2'>Looking for a Driver</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />

                <div className="w-full mt-5">
                    <div className='flex gap-5 items-center p-2 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600 -mt-1'>{props.pickup}</p>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center p-2 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600 -mt-1'>{props.destination}</p>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center p-2 border-b-2'>
                        <i className="text-lg ri-cash-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{`Rs ${props.fare[props.vehicleType]}`}</h3>
                            <p className='text-sm text-gray-600 -mt-1'>Cash Payment</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LookingForDriver