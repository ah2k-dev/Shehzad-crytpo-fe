import { Button, Input, ModalBody, ModalFooter, Select, SelectItem, Textarea } from "@nextui-org/react";
import React from "react";

const FaqForm = ({ onClose }) => {
  console.log(onclose);

  return (
    <div>
      <form>
        <ModalBody>
          <Input
            className="border border-slate-300 rounded-md"
            key="outside"
            type="text"
            placeholder="Question"
          />
              <Textarea
                className="border border-slate-300 rounded-md"
                key="outside"
                type="text"
                placeholder="Answer..."
                />
                
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            variant="light"
            onPress={onClose}
            className="bg-blackcurrent-500 rounded-md text-white"
          >
            Close
          </Button>
          <Button
            color="primary"
            onPress={onClose}
            className="bg-slate-500 rounded-md text-white"
          >
            Add Faq
          </Button>
        </ModalFooter>
      </form>
    </div>
  );
};

export default FaqForm;
