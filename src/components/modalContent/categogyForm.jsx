import { Button, Input, ModalBody, ModalFooter, Select, SelectItem, Textarea } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";

const CategoryForm = ({ onClose }) => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    onClose(); // Close modal or perform any other action
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
          <Input
           {...register("category", { required: "Category is required" })}
           className={`border border-zinc-600 rounded-md text-foreground-500 ${errors.category ? "border-red-500" : ""}`}
           key="outside"
            type="text"
            placeholder="Category"
          />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}

              <Textarea
               {...register("subcategory", { required: "Sub Category is required" })}
               className={`border border-zinc-600 rounded-md text-foreground-500 ${errors.subcategory ? "border-red-500" : ""}`}
               key="outside"
               type="text"
               placeholder="Sub Category e.g(abc,xyz,...)"
               />
               {errors.subcategory && <p className="text-red-500">{errors.subcategory.message}</p>}
                
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
              type="submit"
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
