const MenuItems = {
  menu: [
    {
      a_href: "#",
      i_className: "fa-regular fa-compass",
      text: "home",
    },
    {
      a_href: "#",
      i_className: "fa-regular fa-face-smile",
      text: "o mnie",
    },
    {
      a_href: "#",
      i_className: "fa-regular fa-chart-bar",
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
    menu.map(item=><a id={item.text} href={item.a_href}><div className="menu_position"><i className={item.i_className}><p className="menu_list">{item.text.toUpperCase()}</p></i></div></a>)
  )
}

const Menu_right = () => {
  return (
    <div className="menu_right">
      <div className="menu_container">
        <MenuButtons />
      </div>
    </div>
  )
}

const Menu_left = () => {
  return (
    <div className="menu_left">left</div>
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
        <Menu_left />
        <Menu_right />
        <Bottom />
        <Footer />
      </div>      
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))