"use client";
import { ShowMoreProps } from "@/types";
import { updateTheUrlPathName } from "@/utlis";
import { useRouter } from "next/navigation";
import React from "react";

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();
  const handelClick = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathUrl = updateTheUrlPathName("limit", `${newLimit}`);
    router.push(newPathUrl);
  };
  return (
    <div className=" w-full flex-center gap-5 mt-10">
      {!isNext && (
        <button
          onClick={handelClick}
          className="md:w-1/3 flex items-center justify-center w-full text-center outline-none py-3 px-4 bg-primary-blue text-white "
        >
          ShowMore
        </button>
      )}
    </div>
  );
}

export default ShowMore;
