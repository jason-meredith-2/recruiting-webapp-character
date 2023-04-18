import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../reducers/skillSlice";

const Skill = (props) => {
  const value = useSelector(state => state.skill[props.name])
  const attributeModifier = useSelector(state => state.attribute[props.modifier].modifier)
  const total = value + attributeModifier;

  const dispatch = useDispatch();

  const increaseSkill = () => {
    if (props.increasable)
      dispatch(increase(props.name))
  }

  return (
    <tr>
      <td>
        {props.name}: {value} (Modifier: {props.modifier}): {attributeModifier}
      </td>
      <td>
        <button
          onClick={() => dispatch(decrease(props.name))}
        >
          -
        </button>

        <button
          onClick={() => increaseSkill()}
        >
          +
        </button>
        Total: {total}
      </td>

    </tr>
  )
}

export default Skill;
