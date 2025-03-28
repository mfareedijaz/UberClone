import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='text-center' onClick={() => props.setWaitingForDriver(false)}><i className="text-xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

      <div className='flex items-center justify-between'>
        <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Sarthak</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>

        <div className="w-full mt-5">
          <div className='flex gap-5 items-center p-2 border-b-2'>
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm text-gray-600 -mt-1'>Kankariya Talab, Bhopal</p>
            </div>
          </div>

          <div className='flex gap-5 items-center p-2 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm text-gray-600 -mt-1'>Kankariya Talab, Bhopal</p>
            </div>
          </div>

          <div className='flex gap-5 items-center p-2 border-b-2'>
            <i className="text-lg ri-cash-line"></i>
            <div>
              <h3 className='text-lg font-medium'>Rs. 193.20</h3>
              <p className='text-sm text-gray-600 -mt-1'>Cash Cash</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WaitingForDriver