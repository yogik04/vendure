// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 37"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M34.5 10.125L18.25 2 2 10.125v16.25L18.25 34.5l16.25-8.125v-16.25z"}
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M26.375 6.063l-16.25 8.125M2 10.125l16.25 8.125L2 10.125zM18.25 34.5V18.25 34.5zM34.5 10.125L18.25 18.25l16.25-8.125z"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
