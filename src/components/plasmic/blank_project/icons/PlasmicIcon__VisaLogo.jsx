// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VisaLogoIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 10"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.438 9.698H4.863l-1.93-7.583c-.092-.348-.287-.657-.573-.802A8.216 8.216 0 000 .51V.22h4.148c.572 0 1.001.438 1.073.947l1.002 5.47L8.796.219H11.3L7.438 9.698zm5.292 0H10.3l2-9.48h2.432l-2.003 9.48zm5.148-6.853c.072-.51.501-.803 1.002-.803a4.418 4.418 0 012.36.437l.43-2.04A6 6 0 0019.453 0c-2.36 0-4.078 1.313-4.078 3.135 0 1.387 1.217 2.115 2.075 2.553.93.437 1.287.73 1.216 1.166 0 .656-.716.948-1.43.948-.859 0-1.718-.218-2.503-.584l-.43 2.043c.859.364 1.788.51 2.646.51 2.647.072 4.291-1.24 4.291-3.208 0-2.48-3.362-2.625-3.362-3.718zM29.75 9.698L27.82.218h-2.075c-.429 0-.858.292-1.001.73l-3.575 8.75h2.503l.5-1.385h3.075l.286 1.385h2.217zM26.103 2.77l.715 3.573h-2.003l1.288-3.573z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VisaLogoIcon;
/* prettier-ignore-end */
