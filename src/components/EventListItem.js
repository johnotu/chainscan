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
      <td className="text-indigo">{blockNumber}</td>
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
