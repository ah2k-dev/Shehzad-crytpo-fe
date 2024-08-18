import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from "@nextui-org/react";
import { EllipsisVertical,  Plus } from "lucide-react";
import React from "react";
import GeneralTable from "../../components/common/table";
import FormModal from "../../components/common/formModal";
import FaqForm from "../../components/modalContent/faqForm";

const Faqs = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const coulumns = [
    {
      key: "sno",
      label: "Sno",
    },
    {
      key: "question",
      label: "Question",
    },
    {
      key: "answer",
      label: "Answer",
    },

    {
      key: "action",
      label: "Action",
    },
  ];

  const rows = [
    {
      key: 0,
      sno:"01",
      question:"Lorem ipsm of that ways to be inquisitive haelth soom?",
      answer:"Lorem ipsm of that ways to be inquisitive haelth soom ...",
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
    
    <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
    <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
        </div>
      ),
    },
    {
      key: 1,
      sno: "02",
      question:"Lorem ipsm of that ways to be inquisitive haelth soom?",
      answer:"Lorem ipsm of that ways to be inquisitive haelth soom ...",
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
    
    <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
    <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
        </div>
      ),
    },
    {
      key: 2,
      sno: "03",
      question:"Lorem ipsm of that ways to be inquisitive haelth soom?",
      answer:"Lorem ipsm of that ways to be inquisitive haelth soom ...",
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
    
    <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
    <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
        </div>
      ),
    },
    {
      key: 3,
      sno: "04",
      question:"Lorem ipsm of that ways to be inquisitive haelth soom?",
      answer:"Lorem ipsm of that ways to be inquisitive haelth soom ...",
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
    
    <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
    <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
        </div>
      ),
    },
    {
      key: 4,
      sno: "05",
      question:"Lorem ipsm of that ways to be inquisitive haelth soom?",
      answer:"Lorem ipsm of that ways to be inquisitive haelth soom ...",
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
    
    <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
    <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
        </div>
      ),
    },
    {
      key: 5,
      sno: "06",
      question:"Lorem ipsm of that ways to be inquisitive haelth soom?",
      answer:"Lorem ipsm of that ways to be inquisitive haelth soom ...",
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
    
    <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
    <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
        </div>
      ),
    },
    {
      key: 6,
      sno: "07",
      question:"Lorem ipsm of that ways to be inquisitive haelth soom?",
      answer:"Lorem ipsm of that ways to be inquisitive haelth soom ...",
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
    
    <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
    <DropdownItem key="edit" className='hover:bg-blackcurrent-500 rounded-md hover:text-white'>Delete</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
        </div>
      ),
    },
   
   
  ];

  return (
    <div className="">
      <div className="py-4  flex justify-end w-full items-start">
    
        <Button
          onPress={onOpen}
          className="bg-blackcurrent-500 text-white rounded-md"
        >
          <Plus /> Add New
        </Button>
      </div>
      <GeneralTable columns={coulumns} rows={rows} />
      <FormModal
        isOpen={isOpen}
        onClose={onClose}
        title="Add Faq"
        content={<FaqForm onClose={onClose} />}
      />
    </div>
  );
};

export default Faqs;
