import React from 'react'
import { ExpandableCardDemo } from '../cards/productCard'
// import { Pagination } from '@nextui-org/react'

const ProductGrid = () => {
  return (
    <div><ExpandableCardDemo page={"shop"}/>
    {/* <div className='flex justify-center my-3'>
    <Pagination total={10} initialPage={1} />
    </div> */}
    </div>
  )
}

export default ProductGrid