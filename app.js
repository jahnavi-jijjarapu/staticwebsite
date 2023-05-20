const userInput = document.querySelector("#textareaInput")
const postData=document.querySelector("#post-data")
const  postButton=document.querySelector("#post-btn")
let usserInput;
const usserInputHandler = (e) => {
    userInput= e.target.value

}
const postClickHandler = () => {
    postData.textContent= userInput
}
userInput.addEventListener("input",usser)


usserInput.addEventListener("input",usserInputHandler)
postButton.addEventListener("click",postClickHandler)