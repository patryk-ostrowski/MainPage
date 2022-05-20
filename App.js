const MenuItems = {
  menu: [
    {
      a_href: "#",
      i_className: "fa-regular fa-address-card",
      text: "home",
    },
    {
      a_href: "#",
      i_className: "fa-regular fa-address-card",
      text: "info",
    },
    {
      a_href: "#",
      i_className: "fa-regular fa-address-card",
      text: "portfolio",
    },
    {
      a_href: "#",
      i_className: "fa-regular fa-address-card",
      text: "kontakt",
    },
  ]  
}

const Top = () => {
  return (
    <div className="site_top">
      Top
    </div>
 )
}

const MenuButtons = () => {
  let menu = MenuItems.menu
  console.log(menu);
  return (
    menu.map(item=><a id={item.text} href={item.a_href}><div className="menu_position"><i className={item.i_className}><p>{item.text.toUpperCase()}</p></i></div></a>)
  )

  // return (
  //   <a id="1" href="#"><div className="menu_position"><i className="fa-regular fa-address-card"><p>KONTAKT</p></i></div></a>
  // )
}

const Menu = () => {
  return (
    <div className="site_menu">
      <div className="menu_container">
        <MenuButtons />
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
      <div className="container">
        <Top />
        <Menu />
        <Bottom />
        <Footer />
      </div>      
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))