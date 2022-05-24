const MenuItems = {
  menu: [
    {
      id: 1,
      a_href: "#",
      i_className: "fa-regular fa-compass",
      text: "home",
    },
    {
      id: 2,
      a_href: "#",
      i_className: "fa-regular fa-face-smile",
      text: "o mnie",
    },
    {
      id: 3,
      a_href: "#",
      i_className: "fa-regular fa-clone",
      text: "co umiem",
    },
    {
      id: 4,
      a_href: "#",
      i_className: "fa-regular fa-address-card",
      text: "kontakt",
    },
  ]  
}

const Top = () => {
  return (
    <div className="site_top">
      <h1 className="site_top_title">WEB-DEV Patryk Ostrowski</h1>
    </div>
 )
}

const MenuButtons = (props) => {
  let menu = MenuItems.menu
  return (
    menu.map(item=><a key={item.id} href={item.a_href}><div key={item.id} className="menu_position" onClick={props.handleMenu}><i className={item.i_className}><p className="menu_list">{item.text.toUpperCase()}</p></i></div></a>)
  )
}

const Menu_left = () => {
  return (
    <div className="menu_left"></div>
  )
}

const Menu_right = (props) => {
  return (
    <div className="menu_right">
      <div className="menu_container">
        <MenuButtons handleMenu={props.handleMenu}/>
      </div>
    </div>
  )
}

const Bottom = () => {
  return (
    <div className="site_bottom">
      <div className="site_content">
        Siema! to ja!
      </div>
    </div>)
}

const Footer = () => {
  return (
    <div className="site_footer">
        Footer
    </div>)
}

class App extends React.Component{
  state = {
    id: "",
  }

  handleMenu = () => {
    const button_id = toString(1);
    this.setState({
      id: button_id,
    })
    
  }

  render(){
    return (
      <div className="container">
        <Top />
        <Menu_left />
        <Menu_right handleMenu={this.handleMenu}/>
        <Bottom />
        <Footer />
      </div>      
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))