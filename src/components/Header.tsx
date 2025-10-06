function Header() {
  return (
    <header className="h-full">
      <nav>
        <div className="left">
          <a href="/" className="title">
            <span className="blue">Sahan </span><span className="gray">Kaushalya</span>
        </a>
        </div>
        <div className="right">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hamburger" id="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  )
}

export default Header