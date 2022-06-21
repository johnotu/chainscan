export default function Footer() {
  return (
    <footer className="app-footer">
      <div>
        Powered by{" "}
        <a className="text-muted" href="https://subsquid.io/">
          Subsquid
        </a>
        ,{" "}
        <a className="text-muted" href="https://reactjs.org/">
          React
        </a>{" "}
        and{" "}
        <a className="text-muted" href="https://getbootstrap.com/">
          Bootstrap
        </a>
      </div>
      <div>
        Made with <span className="oi oi-heart"></span> in Lagos, Nigeria.
      </div>
    </footer>
  );
}
