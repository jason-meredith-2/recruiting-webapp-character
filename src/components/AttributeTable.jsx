import React from "react";
import Attribute from "./Attribute";

import { ATTRIBUTE_LIST } from "../consts";

const AttributeTable = () => {
  const rows = ATTRIBUTE_LIST.map(attribute => {
    return <Attribute name={attribute} />
  })

  return (
    <table>
      {rows}
    </table>
  )
}

export default AttributeTable
