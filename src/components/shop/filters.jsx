import { RadioGroup, Radio, cn, CheckboxGroup, Checkbox } from "@nextui-org/react";

import React, { useState } from "react";
import { CustomCheckbox } from "./brandChips";

const Filters = () => {
    const [brandSelected, setBrandsSelected] = useState([]);
  return (
    <div>
      <p className="text-xl text-orange-400 font-medium mb-3">
        Categories :
      </p>

      <RadioGroup color="yellow" defaultValue="all">
        {[
          "all",
          "computer & mobile",
          "clothings",
          "furniture",
          "fashion & beauty",
        ].map((value, i) => (
          <Radio
            key={i}
            value={value}
            classNames={{
              base: cn(
                "inline-flex capitalize m-0 bg-content1 hover:bg-content2 items-center justify-between",
                "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-1 p-1 border-2 border-transparent",
                "data-[selected=true]:bg-orange-400/40 "
              ),
            }}
          >
            {value}
          </Radio>
        ))}
      </RadioGroup>

      <p className="text-xl text-orange-400 font-medium my-3">
        Price :
      </p>

      <CheckboxGroup
      color="warning"
      defaultValue={["All"]}
    >
        {["All","$100 to $1000","$100- to $5000" , "$5000 to $ 10000", "$10000 to $30000","$30000 to $60000" , "$60000 to Onwards" ].map((value , i)=>(

            <Checkbox key={i} value={value} className="px-5 py-4">{value}</Checkbox>
        ))}
       </CheckboxGroup>

       <p className="text-xl text-orange-400 font-medium my-3">
        Brands :
      </p>

       <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup
        className="gap-1"
        
        orientation="horizontal"
        value={brandSelected}
        onChange={setBrandsSelected}
      >
        {["Hp","Dell","Lenovo","Realme","Redmi","Techno","Apple","Hello hair","Pixi","Neutrogena","Loreal","Paris","Victoria's secrets","Huda"]?.map((value , i)=>(

        <CustomCheckbox key={i} value={value}>{value}</CustomCheckbox>
        ))}
        </CheckboxGroup>
      {/* <p className="mt-4 ml-1 text-default-500">
        Selected: {brandSelected.join(", ")}
      </p> */}
    </div>
    </div>
  );
};

export default Filters;
