import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Tooltip, useDisclosure } from '@nextui-org/react'
import { EllipsisVertical, Pencil, Plus, Search, Trash } from 'lucide-react'
import React from 'react'
import GeneralTable from '../../components/common/table'
import FormModal from '../../components/common/formModal'
import ProductForm from '../../components/modalContent/productForm'

const Products = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const coulumns = [
        {
        key:"sno",
        label:"Sno"
    },
        {
        key:"name",
        label:"Name"
    },
        {
        key:"desc",
        label:"Description"
    },
        {
        key:"category",
        label:"Category"
    },
        {
        key:"price",
        label:"Price"
    },
        {
        key:"discount",
        label:"Discount"
    },
        {
        key:"action",
        label:"Action"
    },
]
    const rows = [
        {key:0,
           sno:"01",
           name:"shoes",
           category:"footware",
           desc:"Loren ipsm of that the way he finds enrishment...",
           price:"900",
           discount:"10%",
           action: (
            <div className="relative flex justify-end items-center gap-2 ">
                  <Dropdown>
      <DropdownTrigger>
        <span 
        
        className='p-2 rounded-full hover:bg-slate-200 cursor-pointer'
          variant="bordered" 
        >
        <EllipsisVertical />
        </span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className='bg-slate-200 border border-slate-200 shadow-md rounded-md'>
        <DropdownItem key="new" className='hover:bg-slate-300 rounded-md'>View</DropdownItem>
        <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
        <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
            </div>
          ),
        },
        {key:1,
           sno:"02",
           name:"shoes",
           category:"footware",
           desc:"Loren ipsm of that the way he finds enrishment...",
           price:"900",
           discount:"10%",
           action: (
            <div className="relative flex justify-end items-center gap-2 ">
              <div className="relative flex justify-end items-center gap-2 ">
                  <Dropdown>
      <DropdownTrigger>
        <span 
        
        className='p-2 rounded-full hover:bg-slate-200 cursor-pointer'
          variant="bordered" 
        >
        <EllipsisVertical />
        </span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className='bg-slate-200 border border-slate-200 shadow-md rounded-md'>
        <DropdownItem key="new" className='hover:bg-slate-300 rounded-md'>View</DropdownItem>
        <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
        <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
            </div>
            </div>
          ),
        },
        {key:2,
           sno:"03",
           name:"shoes",
           category:"footware",
           desc:"Loren ipsm of that the way he finds enrishment...",
           price:"900",
           discount:"10%",
           action: (
            <div className="relative flex justify-end items-center gap-2 ">
              <div className="relative flex justify-end items-center gap-2 ">
                  <Dropdown>
      <DropdownTrigger>
        <span 
        
        className='p-2 rounded-full hover:bg-slate-200 cursor-pointer'
          variant="bordered" 
        >
        <EllipsisVertical />
        </span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className='bg-slate-200 border border-slate-200 shadow-md rounded-md'>
        <DropdownItem key="new" className='hover:bg-slate-300 rounded-md'>View</DropdownItem>
        <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
        <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
            </div>
            </div>
          ),
        },
        {key:3,
           sno:"04",
           name:"shoes",
           category:"footware",
           desc:"Loren ipsm of that the way he finds enrishment...",
           price:"900",
           discount:"10%",
           action: (
            <div className="relative flex justify-end items-center gap-2 ">
              <div className="relative flex justify-end items-center gap-2 ">
                  <Dropdown>
      <DropdownTrigger>
        <span 
        
        className='p-2 rounded-full hover:bg-slate-200 cursor-pointer'
          variant="bordered" 
        >
        <EllipsisVertical />
        </span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className='bg-slate-200 border border-slate-200 shadow-md rounded-md'>
        <DropdownItem key="new" className='hover:bg-slate-300 rounded-md'>View</DropdownItem>
        <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
        <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
            </div>
            </div>
          ),
        },
        {key:4,
           sno:"05",
           name:"shoes",
           category:"footware",
           desc:"Loren ipsm of that the way he finds enrishment...",
           price:"900",
           discount:"10%",
           action: (
            <div className="relative flex justify-end items-center gap-2 ">
            <Dropdown>
<DropdownTrigger>
  <span 
  
  className='p-2 rounded-full hover:bg-slate-200 cursor-pointer'
    variant="bordered" 
  >
  <EllipsisVertical />
  </span>
</DropdownTrigger>
<DropdownMenu aria-label="Static Actions" className='bg-slate-200 border border-slate-200 shadow-md rounded-md'>
  <DropdownItem key="new" className='hover:bg-slate-300 rounded-md'>View</DropdownItem>
  <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
  <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
  
</DropdownMenu>
</Dropdown>
      </div>
          ),
        },
        {key:5,
           sno:"06",
           name:"shoes",
           category:"footware",
           desc:"Loren ipsm of that the way he finds enrishment...",
           price:"900",
           discount:"10%",
           action: (
            <div className="relative flex justify-end items-center gap-2 ">
            <Dropdown>
<DropdownTrigger>
  <span 
  
  className='p-2 rounded-full hover:bg-slate-200 cursor-pointer'
    variant="bordered" 
  >
  <EllipsisVertical />
  </span>
</DropdownTrigger>
<DropdownMenu aria-label="Static Actions" className='bg-slate-200 border border-slate-200 shadow-md rounded-md'>
  <DropdownItem key="new" className='hover:bg-slate-300 rounded-md'>View</DropdownItem>
  <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
  <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
  
</DropdownMenu>
</Dropdown>
      </div>
          ),
        },
        {key:6,
           sno:"07",
           name:"shoes",
           category:"footware",
           desc:"Loren ipsm of that the way he finds enrishment...",
           price:"900",
           discount:"10%",
           action: (
            <div className="relative flex justify-end items-center gap-2 ">
            <Dropdown>
<DropdownTrigger>
  <span 
  
  className='p-2 rounded-full hover:bg-slate-200 cursor-pointer'
    variant="bordered" 
  >
  <EllipsisVertical />
  </span>
</DropdownTrigger>
<DropdownMenu aria-label="Static Actions" className='bg-slate-200 border border-slate-200 shadow-md rounded-md'>
  <DropdownItem key="new" className='hover:bg-slate-300 rounded-md'>View</DropdownItem>
  <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
  <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
  
</DropdownMenu>
</Dropdown>
      </div>
          ),
        },
        
        
    ]
  return (
    <div className=''>
        <div className='py-4  flex justify-between w-full items-start'>
            <Input 
            className='border border-slate-400 rounded-md w-[20rem]'
            placeholder='Search Product...'
          type="text"
          endContent={
            <Search  className="bg-blackcurrent-300 rounded-md p-1 text-blackcurrent-700 text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }/>
            <Button onPress={onOpen} className='bg-blackcurrent-500 text-white rounded-md'><Plus/> Add New</Button>
        </div>
        <GeneralTable columns={coulumns} rows={rows} />
        <FormModal isOpen={isOpen} onClose={onClose} title="Add Product" content={<ProductForm onClose={onClose}/>}/>
    </div>
  )
}

export default Products