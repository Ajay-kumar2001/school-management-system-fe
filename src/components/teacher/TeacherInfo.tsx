import React from 'react'

const TeacherInfo = () => {
  return (
    <div className='flex flex-row justify-around justify-center items-center w-[300px] h-[150px] '>
        <div className='w-20  h-20 text-center rounded-full backdrop-grayscale-0'>profile</div>
        <div className='flex  flex-col w-[70%] h-[80%]'>
            <div>teacher Name</div>
            <div>description</div>
            <div className="flex flex-row justify-around"><div>contact number</div><div>email id</div></div>
        </div>

    </div>
  )
}

export default TeacherInfo