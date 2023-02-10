import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          <span className="tag-html">&lt;html&gt;</span>
          <br />
          &lt;body&gt;
        </span>
        <Outlet />
        <footer>
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="tag-html">&lt;/html&gt;</span>
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
