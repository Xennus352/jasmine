'use client'
import { useRouter } from "next/navigation";
import React from "react";

type SaveProps = {
  id: string;
  tag: string;
  title: string;
};

const SaveCard = ({id, tag, title }: SaveProps) => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => {
          router.push(`/blog/${id}`);
        }}
        className=" w-[130px] mb-20 h-[130px] m-2 rounded-md border border-info
        flex flex-col items-center justify-center bg-violet-700 text-white 
     hover:cursor-pointer shadow-md
     "
      >
        <h2 className="uppercase">{title}</h2>
        <p>{tag}</p>
      </div>
    </>
  );
};

export default SaveCard;
