import React from 'react'
import { ExpandableCardDemo } from '../cards/productCard'
// import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/react";

const ProductGrid = () => {
  return (
    <div>
      <div className='bg-blackcurrent-600 md:mx-4 p-2'>
        <p className='text-white'>Filters :</p>
      </div>
      <ExpandableCardDemo page={"shop"}/>
    {/* <div className='flex justify-center my-3'>
    <Pagination total={10} initialPage={1} showControls/>
    </div> */}
    </div>
  )
}

export default ProductGrid