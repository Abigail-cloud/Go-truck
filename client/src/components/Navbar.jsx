import logo from "../assets/logo.png"
import img1 from "../assets/R.png"

const Navbar = () => {
    return (  
        <nav className="wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} alt="Logo" />
  <a class="navbar-brand" href="#">Tuscot</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search....." aria-label="Search"/>
    </form>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">New Project</button>
  </div>
  <ul class="navbar-nav mr-auto">
  <li class="nav-item active">
    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item dropdown">
  <img className="person" src={img1} alt="name-person" />
    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
      Calvin Peterson
    </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </li>
</ul>
</nav>
        </nav>
    );
}
 
export default Navbar;