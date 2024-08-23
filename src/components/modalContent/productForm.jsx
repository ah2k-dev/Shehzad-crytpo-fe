import { Button, Input, ModalBody, ModalFooter, Select, SelectItem, Textarea } from "@nextui-org/react";
import React from "react";

const ProductForm = ({ onClose }) => {
  console.log(onclose);

  return (
    <div>
      <form>
        <ModalBody>
          <Input
            className="border border-zinc-600 rounded-md"
            key="outside"
            type="text"
            placeholder="Product Name"
          />
              <Textarea
                className="border border-zinc-600 rounded-md"
                key="outside"
                type="text"
                placeholder="Description..."
                />
                 <Select 
        placeholder="Select Category" 
        className="border border-zinc-600 bg-transparent rounded-md w-full"
      >
        {["abc","xyz"].map((animal , i) => (
          <SelectItem key={i} className="bg-zinc-700 w-full rounded-md hover:bg-zinc-500 text-white hover:text-white">
            {animal}
          </SelectItem>
        ))}
      </Select>
          <div className="flex justify-between gap-2">

          <Input
            className="border border-zinc-600 rounded-md"
            key="outside"
            type="text"
            placeholder="Price"
            />
          <Input
            className="border border-zinc-600 rounded-md"
            key="outside"
            type="text"
            placeholder="Discount"
            />
            </div>
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
            Add Product
          </Button>
        </ModalFooter>
      </form>
    </div>
  );
};

export default ProductForm;
