import { Button, Input, ModalBody, ModalFooter, Select, SelectItem, Textarea } from "@nextui-org/react";
import React from "react";

const CategoryForm = ({ onClose }) => {
 

  return (
    <div>
      <form>
      <ModalBody>
          <Input
            className="border border-zinc-600 rounded-md text-foreground-500"
            key="outside"
            type="text"
            placeholder="Category"
          />
              <Textarea
                className="border border-zinc-600 rounded-md text-foreground-500"
                key="outside"
                type="text"
                placeholder="Sub Category e.g(abc,xyz,...)"
                />
                
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            variant="light"
            onPress={onClose}
            className="bg-zinc-500 rounded-md text-white"
          >
            Close
          </Button>
          <Button
            color="primary"
            onPress={onClose}
            className="bg-orange-500 rounded-md text-white"
          >
            Add Category
          </Button>
        </ModalFooter>
      </form>
    </div>
  );
};

export default CategoryForm;
