import React from "react";
import { TemplateTooltip } from "../Body/TemplateTooltip";
import { Avatar } from "../types";

type Props = {
  children: JSX.Element,
  attribute: keyof Avatar
}

export const ColorsTooltip = ({
  children,
  attribute
}: Props) => (
  <TemplateTooltip
    tabs={['color']}
    attribute={attribute}
    anchor={children}
  />
)