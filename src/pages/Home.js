import BlocksShortList from "../sections/Home/BlocksShortList";
import EventsShortList from "../sections/Home/EventsShortList";
import TransfersShortList from "../sections/Home/TransfersShortList";

export default function Home() {
  return (
    <div className="page-inner">
      <div className="container">
        <div className="row">
          <BlocksShortList />
          <TransfersShortList />
        </div>
        <EventsShortList />
      </div>
    </div>
  );
}
