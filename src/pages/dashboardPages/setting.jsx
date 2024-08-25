import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Textarea, useDisclosure } from '@nextui-org/react'
import { EllipsisVertical, ImagePlus, Pencil, Plus } from 'lucide-react'
import React, { useState } from 'react'
import GeneralTable from '../../components/common/table';
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp"; 
import FormModal from '../../components/common/formModal';
import BannerForm from '../../components/modalContent/bannerForm';

const Setting = () => {
    
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImageUrl, setSelectedImageUrl] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const coulumns = [
    {
      key: "sno",
      label: "Sno",
    },
    {
      key: "banner",
      label: "Banner",
    },
    {
      key: "created",
      label: "Created At",
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
      banner:(
        <div className='flex items-center flex-col md:flex-row  gap-4'>
        <img src={banner1} width={"100px"}/>
        <p>Summer collection 50% off</p>
            </div>
      ),
      created:"24 Mar 2024",
      action: (
        <div className="relative flex justify-end items-center gap-2 ">
              <Dropdown>
  <DropdownTrigger>
    <span 
    
    className='p-2 rounded-full hover:bg-slate-200 hover:text-zinc-800 cursor-pointer'
      variant="bordered" 
    >
    <EllipsisVertical />
    </span>
  </DropdownTrigger>
  <DropdownMenu aria-label="Static Actions" className='bg-slate-200 border border-slate-200 shadow-md rounded-md'>
    
    <DropdownItem
     key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
    <DropdownItem key="edit" className='hover:bg-zinc-500 rounded-md hover:text-white'>Delete</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
        </div>
      ),
    },
    {
      key: 1,
      sno: "02",
      banner:(
        <div className='flex items-center gap-4 flex-col md:flex-row '>
        <img src={banner2} width={"100px"}/>
        
        <p>Trendy bags collection | gift favourite</p>
            </div>
      ),
      created:"24 Mar 2024",
      action: (
        <div className="relative flex justify-end items-center gap-2 ">
              <Dropdown>
  <DropdownTrigger>
    <span 
    
    className='p-2 rounded-full hover:bg-slate-200 hover:text-zinc-800 cursor-pointer'
      variant="bordered" 
    >
    <EllipsisVertical />
    </span>
  </DropdownTrigger>
  <DropdownMenu aria-label="Static Actions" className='bg-slate-200 border border-slate-200 shadow-md rounded-md'>
    
    <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
    <DropdownItem key="edit" className='hover:bg-zinc-500 rounded-md hover:text-white'>Delete</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
        </div>
      ),
    },
    {
      key: 2,
      sno: "03",
      banner:(
        <div className='flex items-center gap-4 flex-col md:flex-row ' >
        <img src={banner3} width={"100px"}/>
        
        <p>Wooly cloths , fashionable and comfort</p>
            </div>
      ),
      created:"24 Mar 2024",
      action: (
        <div className="relative flex justify-end items-center gap-2 ">
              <Dropdown>
  <DropdownTrigger>
    <span 
    
    className='p-2 rounded-full hover:bg-slate-200 hover:text-zinc-800 cursor-pointer'
      variant="bordered" 
    >
    <EllipsisVertical />
    </span>
  </DropdownTrigger>
  <DropdownMenu aria-label="Static Actions" className='bg-slate-200 border border-slate-200 shadow-md rounded-md'>
    
    <DropdownItem key="copy" className='hover:bg-slate-300 rounded-md'>Edit</DropdownItem>
    <DropdownItem key="edit" className='hover:bg-zinc-500 rounded-md hover:text-white'>Delete</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
        </div>
      ),
    },
  
   
  ];

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

   
    setSelectedImage(files[0]);
    const objectUrl = URL.createObjectURL(files[0]);
    setSelectedImageUrl(objectUrl);
  };

  console.log(selectedImageUrl);
  
  return (
    <div>
        <div className='flex justify-end my-1'>
        <Button  className='bg-orange-500 text-white rounded-md '><Pencil/> <span className='hidden md:block'>Edit Website Content</span></Button>
      
        </div>

        <div className='flex flex-col gap-4 sw-full md:w-2/4'>
        <label
            className="flex justify-center cursor-pointer bg-orange-500/40 py-10 w-full md:w-[200px] text-white rounded-lg border-2 border-orange-500"
            htmlFor="image-picker"
          >
             {selectedImageUrl ? (
              <img
               
                className=" w-[200px] md:w-[100px] aspect-square object-contain bg-zinc-700"
                src={selectedImageUrl}
                alt={`Selected Image`}
              />
            ) : (
            <div className="flex flex-col justify-center items-center gap-2">
              <ImagePlus />
              <p>Upload Banner</p>
            </div>
            )}
            <input
              type="file"
              id="image-picker"
              className="hidden"
              multiple
              accept="image/*"
            
              onChange={handleImageChange}
            />
          </label>
        <div>
        <p>Website Name</p>
        <Input
        //   {...register("question", { required: "Question is required" })}
          className={`border border-zinc-600 rounded-md text-foreground-500 `}
          type="text"
          placeholder="Website Name"
        />
            </div>
        <div>
        <p>Website Description</p>
        <Textarea
        //   {...register("question", { required: "Question is required" })}
          className={`border border-zinc-600 rounded-md text-foreground-500 `}
          type="text"
          placeholder="Website Description"
        />
            </div>
        <div>
        <p>Facebook Link</p>
        <Input
        //   {...register("question", { required: "Question is required" })}
          className={`border border-zinc-600 rounded-md text-foreground-500 `}
          type="text"
          placeholder="Facebook Link"
        />
            </div>
        <div>
        <p>Instagram Link</p>
        <Input
        //   {...register("question", { required: "Question is required" })}
          className={`border border-zinc-600 rounded-md text-foreground-500 `}
          type="text"
          placeholder="Instagram Link"
        />
            </div>
        <div>
        <p>Twitter Link</p>
        <Input
        //   {...register("question", { required: "Question is required" })}
          className={`border border-zinc-600 rounded-md text-foreground-500 `}
          type="text"
          placeholder="Twitter Link "
        />
            </div>
    </div>
    <div className='my-4'>
        <div className='flex justify-between items-center my-4'>
        <p className='text-2xl font-medium'>Banners</p>
        <Button onPress={onOpen} className='bg-orange-500 text-white rounded-md '><Plus/> <span className='hidden md:block'>Add Banner</span></Button>
      
        </div>
        <GeneralTable columns={coulumns} rows={rows} />
    </div>
    <FormModal isOpen={isOpen} onClose={onClose} title="Add Banner" content={<BannerForm onClose={onClose}/>}/>
  
    </div>
  )
}

export default Setting