import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { CircleX, ImagePlus } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ProductForm = ({ onClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesUrl, setSelectedImagesUrl] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    if (selectedImages?.length < 1) {
      setError("images", {
        type: "manual",
        message: "You can upload a maximum of 5 images.",
      });
    }
    console.log("Form data submitted:", data);
    console.log("Form data images submitted:", selectedImages);
    onClose(); // Close modal or perform any other action
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);

    if (selectedImages?.length > 5) {
      setError("images", {
        type: "manual",
        message: "You can upload a maximum of 5 images.",
      });
      return;
    }

    clearErrors("images"); 
    setSelectedImages([ ...selectedImages, files[0] ]); 
    const objectUrl = URL.createObjectURL(files[0]);
    setSelectedImagesUrl([...selectedImagesUrl , objectUrl])
  };

  const handleDeleteImage = (index) => {
    const updatedImagesUrl = [...selectedImagesUrl]; 
    updatedImagesUrl.splice(index, 1); 
    setSelectedImagesUrl(updatedImagesUrl); 
    const updatedImages = [...selectedImages]; 
    updatedImages.splice(index, 1); 
    setSelectedImages(updatedImages); 
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <label
            className="bg-orange-500/40 py-10 text-white rounded-lg border-2 border-orange-500"
            htmlFor="image-picker"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <ImagePlus />
              <p>Upload Images</p>
            </div>
            <input
              type="file"
              id="image-picker"
              className="hidden"
              multiple
              accept="image/*"
              {...register("images", {
                // validate: {
                //   lessThanFive: (files) =>
                //     selectedImages?.length > 5 ||
                //     "You can upload a maximum of 5 images.",
                // },
                required: "Upload Image",
              })}
              onChange={handleImageChange}
            />
          </label>
          {errors.images && (
            <p className="text-red-500">{errors.images.message}</p>
          )}
          {
  selectedImagesUrl?.length > 0 && (
    <div className="grid grid-cols-3 gap-4">
      {selectedImagesUrl.map((value, i) => {
     

        return (
          <div key={i} className="relative group">
      <span onClick={()=>handleDeleteImage(i)} className="absolute top-2 right-2 cursor-pointer bg-orange-500 text-white p-1 rounded-full hidden group-hover:block">
      <CircleX  />
      </span>
            <img
            width={"200px"}
            height={"200px"}
            className="aspect-square object-contain bg-zinc-700"
              src={value}
              alt={`Selected Image ${i + 1}`}
              />
          </div>
        );
      })}
    </div>
  )
}

          <Input
            {...register("name", { required: "Product name is required" })}
            className={`border border-zinc-600 rounded-md text-foreground-500 ${
              errors.name ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Product Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <Textarea
            {...register("description", {
              required: "Description is required",
            })}
            className={`border border-zinc-600 rounded-md text-foreground-500 ${
              errors.description ? "border-red-500" : ""
            }`}
            key="outside"
            type="text"
            placeholder="Description..."
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}

          <Select
            {...register("category", { required: "Category is required" })}
            placeholder="Select Category"
            className={`border border-zinc-600 rounded-md text-foreground-500 ${
              errors.category ? "border-red-500" : ""
            }`}
          >
            {["abc", "xyz"].map((animal, i) => (
              <SelectItem
                key={i}
                className={`border border-zinc-600 rounded-md text-foreground-500 `}
              >
                {animal}
              </SelectItem>
            ))}
          </Select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}

          <div className="flex justify-between gap-2">
            <div>
              <Input
                {...register("price", { required: "Price is required" })}
                className={`border border-zinc-600 rounded-md text-foreground-500 ${
                  errors.price ? "border-red-500" : ""
                }`}
                key="outside"
                type="text"
                placeholder="Price"
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register("discount", { required: "Discount is required" })}
                className={`border border-zinc-600 rounded-md text-foreground-500 ${
                  errors.discount ? "border-red-500" : ""
                }`}
                key="outside"
                type="text"
                placeholder="Discount"
              />
              {errors.discount && (
                <p className="text-red-500">{errors.discount.message}</p>
              )}
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <Input
                {...register("sku", { required: "SKU is required" })}
                className={`border border-zinc-600 rounded-md text-foreground-500 ${
                  errors.sku ? "border-red-500" : ""
                }`}
                key="outside"
                type="text"
                placeholder="SKU"
              />
              {errors.sku && (
                <p className="text-red-500">{errors.sku.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register("brand", { required: "Brands is required" })}
                className={`border border-zinc-600 rounded-md text-foreground-500 ${
                  errors.brand ? "border-red-500" : ""
                }`}
                key="outside"
                type="text"
                placeholder="Brand"
              />
              {errors.brand && (
                <p className="text-red-500">{errors.brand.message}</p>
              )}
            </div>
          </div>
          <Select
            {...register("avaliability", {
              required: "Avalilability is required",
            })}
            placeholder="Select Availablity"
            className={`border border-zinc-600 rounded-md text-foreground-500 ${
              errors.avaliability ? "border-red-500" : ""
            }`}
          >
            {["In Stock", "Out Of Stock"].map((animal, i) => (
              <SelectItem
                key={i}
                className="bg-zinc-700 w-full rounded-md hover:bg-zinc-500 text-white hover:text-white"
              >
                {animal}
              </SelectItem>
            ))}
          </Select>
          {errors.avaliability && (
            <p className="text-red-500">{errors.avaliability.message}</p>
          )}
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
            Add Product
          </Button>
        </ModalFooter>
      </form>
    </div>
  );
};

export default ProductForm;
