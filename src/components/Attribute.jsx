import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../reducers/attributeSlice";

const Attribute = (props) => {
  const value = useSelector(state => state.attribute[props.name])
  const dispatch = useDispatch();

  const modifier = Math.floor((value - 10) / 2);

  return (
    <tr>
      <td>
        {props.name}:
      </td>
      <td>
        {value} (Modifier: {modifier})
        <button
          onClick={() => dispatch(decrease(props.name))}
        >
          -
        </button>

        <button
          onClick={() => dispatch(increase(props.name))}
        >
          +
        </button>
      </td>

    </tr>
  )
}

export default Attribute;
