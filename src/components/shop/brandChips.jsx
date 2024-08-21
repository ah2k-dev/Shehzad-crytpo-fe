import React from "react";
import {useCheckbox, Chip, VisuallyHidden, tv} from "@nextui-org/react";
import { Check } from "lucide-react";

const checkbox = tv({
  slots: {
    base: "border border-slate-300 hover:bg-zinc-200",
    content: "text-default-500"
  },
  variants: {
    isSelected: {
      true: {
        base: "border-zinc-500 bg-zinc-200 hover:bg-zinc-300 hover:border-primary-500",
        content: "text-primary-foreground pl-1"
      }
    },
    isFocusVisible: {
      true: { 
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      }
    }
  }
})

export const CustomCheckbox = (props) => {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    ...props
  })

  const styles = checkbox({ isSelected, isFocusVisible })

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        startContent={isSelected ? <Check  className="ml-1 text-zinc-500" /> : null}
        variant="faded"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
}
