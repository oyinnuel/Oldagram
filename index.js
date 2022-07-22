const posts = [{
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12502
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15137
    }
]

const avataSmallOne = document.getElementById("avata-small-one")
const avataSmallTwo = document.getElementById("avata-small-two")
const avataSmallThree = document.getElementById("avata-small-three")

const imgPostOne = document.getElementById("img-post-one")
const imgPostTwo = document.getElementById("img-post-two")
const imgPostThree = document.getElementById("img-post-three")



const nameOne = document.getElementById("name-one")
const nameTwo = document.getElementById("name-two")
const nameThree = document.getElementById("name-three")

const locationOne = document.getElementById("location-one")
const locationTwo = document.getElementById("location-two")
const locationThree = document.getElementById("location-three")

const usernameOne = document.getElementById("username-one")
const usernameTwo = document.getElementById("username-two")
const usernameThree = document.getElementById("username-three")


const avatarOne = document.getElementById("avatar-one")
const avatarTwo = document.getElementById("avatar-two")
const avatarThree = document.getElementById("avatar-three")

const postOne = document.getElementById("post-one")
const postTwo = document.getElementById("post-two")
const postThree = document.getElementById("post-three")

const commentOne = document.getElementById("comment-one")
const commentTwo = document.getElementById("comment-two")
const comment = document.getElementById("comment-three")

const likesOne = document.getElementById("likes-one")
const likesTwo = document.getElementById("likes-two")
const likesThree = document.getElementById("likes-three")


imgPostOne.style.backgroundImage = `url(${posts[0].post})`
imgPostTwo.style.backgroundImage = `url(${posts[1].post})`
imgPostThree.style.backgroundImage = `url(${posts[2].post})`

avataSmallOne.style.backgroundImage = `url(${posts[0].avatar})`
avataSmallTwo.style.backgroundImage = `url(${posts[1].avatar})`
avataSmallThree.style.backgroundImage = `url(${posts[2].avatar})`

let likesDisplayOne = (posts[0].likes).toLocaleString("en-US")
let likesDisplayTwo = (posts[1].likes).toLocaleString("en-US")
let likesDisplayThree = (posts[2].likes).toLocaleString("en-US")

likesOne.textContent = `${likesDisplayOne}  likes`
likesTwo.textContent = `${likesDisplayTwo}  likes`
likesThree.textContent = `${likesDisplayThree} likes`

nameOne.textContent = posts[0].name
nameTwo.textContent = posts[1].name
nameThree.textContent = posts[2].name

locationOne.textContent = posts[0].location
locationTwo.textContent = posts[1].location
locationThree.textContent = posts[2].location

usernameOne.textContent = posts[0].username
usernameTwo.textContent = posts[1].username
usernameThree.textContent = posts[2].username

commentOne.textContent = posts[0].comment
commentTwo.textContent = posts[1].comment
comment.textContent = posts[2].comment

avatarOne.textContent = posts[0].avatar
avatarTwo.textContent = posts[1].avatar
avatarThree.textContent = posts[2].avatar

postOne.textContent = posts[0].post
postTwo.textContent = posts[1].post
postThree.textContent = posts[2].post

/**
 * other things to do inthe JS session
 * 1) On clicking the heart, change it to a red heart
 * 2) On clicking the heart, increase the likes by one
 * **/