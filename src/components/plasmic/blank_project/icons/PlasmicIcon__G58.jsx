// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G58Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.077 0C.633 0 .252.268.087.65A1.261 1.261 0 000 1.093c0 .027.003.054.005.08 0 .01.002.017.003.026a.583.583 0 011.125.218.583.583 0 01-.585.582l-.02-.002a1.076 1.076 0 001.629-.923A1.079 1.079 0 001.076 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G58Icon;
/* prettier-ignore-end */
