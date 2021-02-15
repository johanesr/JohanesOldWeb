import './styles.scss';

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-text">
          <i className="fa fa-instagram" />
        </div>
        <div className="nav-text">
          <i className="fa fa-linkedin-square" />
        </div>
        <div className="nav-text">
          <i className="fa fa-github-square" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;