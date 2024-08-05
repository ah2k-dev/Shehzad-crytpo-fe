import React from 'react'
import ProductGrid from '../../components/shop/productGrid'
import Filters from '../../components/shop/filters'

const Shop = () => {
  return (
    <div className='container grid  md:grid-cols-5 gap-3'>
    <div className='hidden md:block'>
        <Filters />
        </div>
    <div className='col-span-4'>
        <ProductGrid />
        </div>
        </div>
  )
}

export default Shop