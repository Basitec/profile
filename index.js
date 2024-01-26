let userName = document.querySelector("span.use")
let id = document.querySelector("span.id")
let repos = document.querySelector("span.page")
let followers = document.querySelector("span.follo")
let following = document.querySelector(".following")
let input =document.querySelector("input")
let button = document.querySelector("button")
let section = document.querySelector("section")
let FetchGithubData = ()=>{
    button.addEventListener("click",function () {
    let url = "https://api.github.com/users/"+input.value
    let newXMLOBJECT = new XMLHttpRequest()
    newXMLOBJECT.open("Get",url)
    newXMLOBJECT.onload= populateCard
    newXMLOBJECT.send()
    function populateCard() {
    let dob = JSON.parse(newXMLOBJECT.response)
    let idd = dob.id;
    let h1 = document.querySelector("h1")
    h1.innerHTML=dob.login+"'s Github Profile Card"
    let img = document.querySelector("img")
    img.src="https://avatars.githubusercontent.com/u/"+idd+"?v=4"
    id.innerHTML=dob.id
    repos.innerHTML=dob.public_repos
    followers.innerHTML=dob.followers
    userName.innerHTML=dob.login
    following.innerHTML=dob.following
    section.classList.add("show")
    button.classList.add("hide")
    input.classList.add("hide")

}
    })
}
FetchGithubData()
