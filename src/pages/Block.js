import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useGetArchiveData from "../libs/use-get-archive-data";

export default function Block() {
  const { id } = useParams();

  const isHash = /^[0x]/.test(id);

  console.log(id, isHash);
  //  const { isLoading, data } = useGetArchiveData({
  //   query: `{
  //     substrate_block(limit: 30, order_by: {height: desc}) {
  //       id
  //       height
  //       hash
  //       extrinsics
  //       events
  //       validatorId
  //       timestamp
  //     }
  //   }`,
  // });
  // if (isLoading || !data) {
  if (true) {
    return (
      <div className="section-block">
        <div className="card" style={{ height: "800px" }}>
          <div className="d-flex align-items-center justify-content-center h-100">
            <Loader />
          </div>
        </div>
      </div>
    );
  }
}
