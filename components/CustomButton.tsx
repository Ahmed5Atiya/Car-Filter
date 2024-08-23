"use client";
import { title } from "process";
import React, { MouseEventHandler } from "react";
import { CustomButtonProps } from "../types";
import Image from "next/image";

function CustomButton({
  title,
  containerStyle,
  handelClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={() => {}}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right Icon"
            className="object-contain"
            height={20}
            width={20}
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
