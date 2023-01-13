import React from 'react'

const Text = () => {
    return (
        <div className='flex '>
            <div className='sticky bg-orange-500 top-0'>
                <div className='bg-red-500 sticky top-0'>sidebar</div>
            </div>
            <div className='flex flex-col flex-1 relative'>

                <div className='bg-blue-500 sticky top-0'>Header</div>
                <div className='flex-1'>

                    <div className='bg-green-500 h-[2000px]'>Main</div>
                </div>
            </div>
        </div>
    )
}

export default Text