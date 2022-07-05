import { Link } from "react-router-dom";
import RelativeTime from "./RelativeTime";

export default function EventListItem({
  blockTimestamp,
  blockNumber,
  extrinsicIndex,
  indexInBlock,
  method,
  section,
}) {
  return (
    <tr>
      <td className="text-indigo text-nowrap">
        {blockNumber}-{indexInBlock}
      </td>
      <td className="text-indigo">
        <Link to={`/block/${blockNumber}`}>{blockNumber}</Link>
      </td>
      <td className="text-nowrap">
        {blockNumber}-{extrinsicIndex}
      </td>
      <td className="text-nowrap">
        <RelativeTime timestamp={parseInt(blockTimestamp)} />
      </td>
      <td className="text-indigo">
        {section} ({method})
      </td>
    </tr>
  );
}
