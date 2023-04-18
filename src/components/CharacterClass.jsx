import { useState } from "react";
import { useSelector } from "react-redux";

import { ATTRIBUTE_LIST, CLASS_LIST } from "../consts";

const CharacterClass = (props) => {
  const [showMinimumStats, setShowMinimumStats] = useState(false);
  const attributes = useSelector(state => state.attribute)

  const minStats = ATTRIBUTE_LIST.map(attribute => {
    return (
      <tr>
        <td>{attribute}</td>
        <td>{CLASS_LIST[props.name][attribute]}</td>
      </tr>
    )
  })

  const minStatsTable = (
    <>
      <table>
        <tr>
          <td colSpan={2}>
            <b>{props.name} Minimum Requirements</b>
          </td>
        </tr>
        {minStats}
      </table>
      <button onClick={() => setShowMinimumStats(false)}>Close Requirements View</button>
    </>
  )

  const textColor = () => {
    let qualifies = true;

    ATTRIBUTE_LIST.forEach(attribute => {
      if (attributes[attribute].value < CLASS_LIST[props.name][attribute]) {
        qualifies = false;
      }
    })

    return qualifies ? 'red' : 'white';
  }

  return (
    <>
      <table>
        <tr onClick={() => setShowMinimumStats(true)} style={{ color: textColor() }}>{props.name}</tr>
        {showMinimumStats && minStatsTable}
      </table>
    </>
  )
}

export default CharacterClass;
