import React from "react";
import Skill from './Skill'
import { useSelector } from "react-redux";

import { SKILL_LIST } from "../consts";

const SkillsTable = () => {
  const pointsUsed = useSelector(state => state.skill['total'])
  const intelligence = useSelector(state => state.attribute['Intelligence']);
  const pointsAvailable = Math.max(0, 10 + (intelligence.modifier * 4));

  const increasable = pointsUsed < pointsAvailable;

  const rows = SKILL_LIST.map(skill => {
    return (
      <Skill name={skill.name} modifier={skill.attributeModifier} increasable={increasable} />
    )
  })

  return (
    <table>
      <tr>
        <td>Total skill points available: {pointsAvailable}</td>
      </tr>
      {rows}
    </table>
  )
}

export default SkillsTable
