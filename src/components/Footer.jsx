function Footer () {
    return <footer className="page-footer brown darken-4">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Meals are pleasure
      <a className="grey-text text-lighten-4 right" href="https://github.com/Rrilence/React-food">Repository</a>
      </div>
    </div>
  </footer>
}

export {Footer}