import { IoCreate, IoHome } from "react-icons/io5";

const Sidebar = ({ selectedTab, onSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary vh-100"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4 fw-bold">Social Media</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => onSelectedTab("Home")}>
          <a
            href="#"
            className={`nav-link ${
              selectedTab === "Home" ? "active" : "link-body-emphasis"
            }`}
            aria-current="page"
          >
            <span className="me-3 fs-5">
              <IoHome />
            </span>
            Home
          </a>
        </li>
        <li onClick={() => onSelectedTab("Create Post")}>
          <a
            href="#"
            className={`nav-link ${
              selectedTab === "Create Post" ? "active" : "link-body-emphasis"
            }`}
          >
            <span className="me-3 fs-5">
              <IoCreate />
            </span>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
