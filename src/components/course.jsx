import React from 'react'
import Card from './card'
import { Link } from 'react-router-dom'

function Course({list}) {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 item-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delight to have you 
                <span className='text-pink-500'> here :)</span>
            </h1>
            <p className='mt-10'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
            </p>
            <Link style={{decoration: 'none'}} to={'/'}>
            <button className='bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-700 duration-700 mt-6'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {list.map((item)=> <Card item={item} key={item.id}/>)}
            
        </div>
    </div>
    </>
  )
}

export default Course