import { useEffect, useState } from "react";
import moment from "moment";

moment.relativeTimeThreshold("ss", 59);
moment.relativeTimeThreshold("m", 59);
moment.relativeTimeThreshold("h", 23);
moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: function (number, withoutSuffix, key, isFuture) {
      return `${number} ${number > 1 ? "secs" : "sec"}`;
    },
    ss: "%d secs",
    m: "1 min",
    mm: "%d mins",
    h: "1 hr",
    hh: "%d hrs",
    d: "1 day",
    dd: "%d days",
    w: "1 week",
    ww: "%d weeks",
    M: "1 month",
    MM: "%d months",
    y: "1 year",
    yy: "%d years",
  },
});

export default function RelativeTime({ timestamp }) {
  const [relativeTime, setRelativeTime] = useState(moment(timestamp).fromNow());

  useEffect(() => {
    const timer = () => {
      setRelativeTime(moment(timestamp).fromNow());
    };
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [timestamp]);
  return <>{relativeTime}</>;
}
