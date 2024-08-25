import React, { useState } from "react";
import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  Textarea,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { ImagePlus } from "lucide-react";

const BannerForm = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState({});
  const [selectedImageUrl, setSelectedImageUrl] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
   
  } = useForm();

  const handleImageChange = (e) => {
    console.log(e);
    const files = Array.from(e.target.files);
    console.log(files);

    setSelectedImage(files[0]);
    const objectUrl = URL.createObjectURL(files[0]);
    setSelectedImageUrl(objectUrl);
  };

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    onClose();
  };

  console.log(selectedImageUrl);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <label
            className="bg-orange-500/40 py-10 text-white rounded-lg border-2 border-orange-500"
            htmlFor="image-picker"
          >
            {selectedImageUrl ? (
              <img
                width={"200px"}
                height={"200px"}
                className="aspect-square object-contain bg-zinc-700"
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
              accept="image/*"
                {...register("images", {
                  required: "Upload Image",
                })}
              onChange={handleImageChange}
            //   onChange={(e)=>{console.log(e)}}
            />
          </label>
          {errors.images && (
            <p className="text-red-500">{errors.images.message}</p>
          )}
          <Input
            {...register("answer", { required: "Answer is required" })}
            className={`border border-zinc-600 rounded-md text-foreground-500 ${
              errors.answer ? "border-red-500" : ""
            }`}
            placeholder="Banner Name"
          />
          {errors.answer && (
            <p className="text-red-500">{errors.answer.message}</p>
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
            type="submit" // Use 'submit' type to handle form submission
            className="bg-orange-500 rounded-md text-white"
          >
            Add Banner
          </Button>
        </ModalFooter>
      </form>
    </div>
  );
};

export default BannerForm;
