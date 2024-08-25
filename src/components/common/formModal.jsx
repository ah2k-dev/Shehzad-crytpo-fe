import { Button, cn, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

const FormModal = ({isOpen,onClose,content , title , type}) => {
    console.log(isOpen);
    
  return (
    <div>
        <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='bg-zinc-900 rounded-md shadow-lg border border-zinc-800'>
        <ModalContent className={cn("max-h-3/4  scroll-box overflow-y-auto",type === "product" && "h-full")}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">{title}</ModalHeader>
            {content}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default FormModal