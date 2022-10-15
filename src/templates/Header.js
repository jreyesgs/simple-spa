const Header = () => {
  const view = `
    <header class="header-main">
      <div class="header-logo">
        <h1>
          <a href="#">
            C0deJ0se Log
          </a>
        </h1>
      </div>
      <nav class="header-nav">
        <ul class="menu">
          <li class="menu-item">
            <a class="menu-link" href="#/10">User 10</a>
            <a class="menu-link" href="#/about">About</a>
            <a class="menu-link" href="#/character/10">Character 10</a>
            <a class="menu-link" href="#/character/10/detail/222">Detalle Character 10</a>
          </li>
        </ul>
      </nav>
    </header>
  `
  return view
}

export default Header