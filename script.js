parentElement = document.querySelector(".n")
parentElementFlex = document.querySelector(".i")

const childElements = ["hamster", "this", "is", "how", "its", "done"]

childElements.forEach(element => {
  let e = document.createElement("div")
  e.innerHTML = element
  e.className = "element"
  parentElement.appendChild(e)
});
parentElementFlex.innerHTML = parentElement.innerHTML