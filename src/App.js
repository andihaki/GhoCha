// import template from './template.html'
import contacts from "./data.json";

const element = document.createElement("div");
element.innerHTML = 'Hello World';

const contactList = document.createElement("div");

contactList.className = "contact-list";



contacts.forEach((entry) => {
  const element = document.createElement("div");
  element.className = "contact";

  // element.innerHTML = template;
  const name = document.createElement('h2')
  const phone = document.createElement('p')
  element.appendChild(name)
  element.appendChild(phone)

  element.querySelector("h2").innerHTML = entry.name;
  element.querySelector("p").innerHTML = entry.phone;

  contactList.appendChild(element);
});
const _App = document.body.appendChild(contactList);

export default _App;