const home = document.getElementById("home");
const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
const button_about = document.getElementsByClassName("button_about");
const about_content_text = document.getElementById("about_content_text");
const about_text = document.getElementsByClassName("about_text");


const home_content = document.getElementById("home_content")
const about_content = document.getElementById('about_content');
const portfolio_content = document.getElementById('portfolio_content');
const contact_content = document.getElementById('contact_content');

for (let button of button_about) {
  button.addEventListener("click", () => {
    for (let text of about_text) {
      text.style.display = "none";
    }
    for (let button of button_about) {
      button.style.backgroundColor = "";
      button.style.color = "rgb(216, 216, 216)";
    }
    const about_text_id = document.getElementsByClassName("about_text")[button.id];
    about_text_id.style.display = "block";
    button.style.backgroundColor = "rgb(0, 0, 0, .7)";
    button.style.color = "rgb(190, 211, 155)";
  })
}

const handleMenu = (e) => {
  switch (e.target.id) {
    case "home":
      home_content.style.display = "grid";
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
// button_about.addEventListener("click", handleClick);

// // .style.display = "none"