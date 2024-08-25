import { Button, Input, ModalBody, ModalFooter,  Textarea } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";

const FaqForm = ({ onClose }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    onClose(); 
  };
  return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <Input
          {...register("question", { required: "Question is required" })}
          className={`border border-zinc-600 rounded-md text-foreground-500 ${errors.question ? "border-red-500" : ""}`}
          type="text"
          placeholder="Question"
        />
        {errors.question && <p className="text-red-500">{errors.question.message}</p>}

        <Textarea
          {...register("answer", { required: "Answer is required" })}
          className={`border border-zinc-600 rounded-md text-foreground-500 ${errors.answer ? "border-red-500" : ""}`}
          placeholder="Answer..."
        />
        {errors.answer && <p className="text-red-500">{errors.answer.message}</p>}
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
          Add Faq
        </Button>
      </ModalFooter>
    </form>
    </div>
  );
};

export default FaqForm;
