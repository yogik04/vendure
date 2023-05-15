// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G50Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.61 14.832l-7.372-7.34a.296.296 0 00-.418.416l5.152 5.13-.113.176a7.65 7.65 0 01-5.22 2.046 7.656 7.656 0 01-5.408-2.225c-.498-.504-2.12-.589-3.231-.462.687-.879 1.358-2.216 1.215-3.048A7.613 7.613 0 01.976 7.63C.976 3.416 4.407 0 8.64 0c.044 0 .087 0 .131.002V0h7.532v5.19a7.04 7.04 0 01.307 9.642z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G50Icon;
/* prettier-ignore-end */
