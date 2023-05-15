// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G54Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.13 0c1.187 0 2.131.938 2.131 2.093 0 1.166-.945 2.094-2.13 2.094C.955 4.187 0 3.26 0 2.093 0 .938.955 0 2.13 0zm0 3.841c.985 0 1.78-.77 1.78-1.748 0-.957-.795-1.747-1.78-1.747-.984 0-1.778.79-1.778 1.747 0 .978.794 1.748 1.779 1.748zM2.704.89h.453l-.654.958c.141 0 .624.177.624.71 0 .445-.352.731-.825.731h-.995v-2.4h.372v.949h.392L2.704.89zm-.402 2.093c.272 0 .443-.158.443-.424 0-.247-.171-.405-.443-.405h-.623v.83h.623z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G54Icon;
/* prettier-ignore-end */
