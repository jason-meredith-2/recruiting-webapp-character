import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../reducers/attributeSlice";

const Attribute = (props) => {
  const value = useSelector(state => state.attribute[props.name])
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        {props.name}:
      </td>
      <td>
        {value}
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
