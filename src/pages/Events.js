import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import ListTable from "../components/ListTable";
import Search from "../components/Search";
import useGetArchiveData from "../libs/use-get-archive-data";

export default function Events() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = { section: "", method: "" };
  for (let param of searchParams) {
    params[param[0]] = param[1];
  }

  let queryCondition = `where: {`;
  if (params.section) {
    queryCondition += `section: {_eq: "${params.section}"}, `;
  }
  if (params.method) {
    queryCondition += `method: {_eq: "${params.method}"}`;
  }
  queryCondition += `}, `;

  const { isLoading, data } = useGetArchiveData({
    query: `{
      substrate_event(limit: 30, ${queryCondition}, order_by: {blockNumber: desc}) {
        blockTimestamp
        blockNumber
        extrinsicIndex
        id
        method
        section
        indexInBlock
      }
    }`,
  });
  return (
    <div className="page-inner">
      <div className="container">
        <Search />
        <Filter params={params} setSearchParams={setSearchParams} />
        <ListTable isLoading={isLoading} data={data} />
      </div>
    </div>
  );
}
