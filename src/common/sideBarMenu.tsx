import React from 'react'

const sideBarMenu = (props:any) => {
    console.log(props.headline)
    const Icon = props.icons
  return (
    <div className='flex flex-row items-center '> <div className='pr-3'>{Icon?<Icon/>:<></> }</div>{props.headline}</div>
  )
}

export default sideBarMenu