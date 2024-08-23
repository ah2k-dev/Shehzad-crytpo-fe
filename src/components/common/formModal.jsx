import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

const FormModal = ({isOpen,onClose,content , title}) => {
    console.log(isOpen);
    
  return (
    <div>
        <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='bg-zinc-900 rounded-md shadow-lg border border-zinc-800'>
        <ModalContent>
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