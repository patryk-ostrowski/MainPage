const Top = () => {
  return (
    <div className="site_top">
      Top
    </div>
 )
}

const Menu = () => {
  return (
    <div className="site_menu">
      <div className="menu_container">
        <div id="1" className="menu_position">3213213131</div>
        <div id="2" className="menu_position">3213213131</div>
        <div id="3" className="menu_position">3213213131</div>
        <div id="4" className="menu_position">3213213131</div>
        <div id="5" className="menu_position">3213213131</div>
        <div id="6" className="menu_position">3213213131</div>
        <div id="7" className="menu_position">3213213131</div>
        <a href="#"><div id="8" className="menu_position"><i className="fa-regular fa-address-card"><p>KONTAKT</p></i></div></a>
      </div>
    </div>
  )
}

const Bottom = () => {
  return (
    <div className="site_bottom">
        Bottom
    </div>)
}

const Footer = () => {
  return (
    <div className="site_footer">
        Footer
    </div>)
}

class App extends React.Component{

  render(){
    return (
      <>
        <Top />
        <Menu />
        <Bottom />
        <Footer />
      </>      
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))