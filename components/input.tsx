import React from'react'

interface InputProps {
    id: string,
    onChange: any,
    value:string,
    label:string,
    type?:string
}

const Imput: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        className="
            block
            rounded-md
            px-6
            py-6
            pb-1
            w-full
            text-md
            text-white
            bg-neutral-700
            appearence-none
            focus:outline-none
            focus:ring-0
            peer
            "
        type={type}
        placeholder=""
        value={value}
        onChange={onChange}
      />
      <label
        className="
        absolute
        text-md
        text-zinc-400
        duration-150
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        origin-[0]
        left-6
        peer-placeholder-show:scale-100
        peer-placeholder-show:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Imput;
