const home = document.getElementById("home");
const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
const ul_position = document.querySelector("ul");

const home_content = document.getElementById("home_content")
const about_content = document.getElementById('about_content');
const portfolio_content = document.getElementById('portfolio_content');
const contact_content = document.getElementById('contact_content');

const handleClick = (e) => {
  console.log(e);
}

const handleMenu = (e) => {
  switch (e.target.id) {
    case "home":
      home_content.style.display = "block";
      about_content.style.display = "none";
      portfolio_content.style.display = "none";
      contact_content.style.display = "none";
      break;
    case "about":
      home_content.style.display = "none";
      about_content.style.display = "grid";
      portfolio_content.style.display = "none";
      contact_content.style.display = "none";
      break;
    case "portfolio":
      home_content.style.display = "none";
      about_content.style.display = "none";
      portfolio_content.style.display = "grid";
      contact_content.style.display = "none";
      break;
    case "contact":
      home_content.style.display = "none";
      about_content.style.display = "none";
      portfolio_content.style.display = "none";
      contact_content.style.display = "grid";
      break;
  }
}

home.addEventListener("click", handleMenu);
about.addEventListener("click", handleMenu);
portfolio.addEventListener("click", handleMenu);
contact.addEventListener("click", handleMenu);
ul_position.addEventListener("click", handleClick);

// // .style.display = "none"