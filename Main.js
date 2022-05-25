const home = document.getElementById("home");
const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');

const home_content = document.getElementById("home_content")
const about_content = document.getElementById('about_content');
const portfolio_content = document.getElementById('portfolio_content');
const contact_content = document.getElementById('contact_content');

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
      about_content.style.display = "block";
      portfolio_content.style.display = "none";
      contact_content.style.display = "none";
      break;
    case "portfolio":
      home_content.style.display = "none";
      about_content.style.display = "none";
      portfolio_content.style.display = "block";
      contact_content.style.display = "none";
      break;
    case "contact":
      home_content.style.display = "none";
      about_content.style.display = "none";
      portfolio_content.style.display = "none";
      contact_content.style.display = "block";
      break;
  }
}

home.addEventListener("click", handleMenu);
about.addEventListener("click", handleMenu);
portfolio.addEventListener("click", handleMenu);
contact.addEventListener("click", handleMenu);

// // .style.display = "none"