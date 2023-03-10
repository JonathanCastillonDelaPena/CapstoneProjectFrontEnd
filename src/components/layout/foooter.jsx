import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></a>
            <span class="text-muted">© 2021 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><use xlink:href="#twitter"></use></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><use xlink:href="#instagram"></use></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><use xlink:href="#facebook"></use></a></li>
    </ul>
  </footer>
        </div>
    )
}

export default Footer