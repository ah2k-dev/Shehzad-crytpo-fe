import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

const FormModal = ({isOpen,onClose,content , title}) => {
    console.log(isOpen);
    
  return (
    <div>
        <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='bg-white rounded-md shadow-lg border border-slate-200'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            {content}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default FormModal