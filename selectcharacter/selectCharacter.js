
//DOM//

const narutoImg = document.getElementById("narutoImg");
const sasukeImg = document.getElementById("sasukeImg");
const sakuraImg = document.getElementById("sakuraImg");
const kakashiImg = document.getElementById("kakashiImg");
const hinataImg = document.getElementById("hinataImg");
const nejiImg = document.getElementById("nejiImg");
const jiraiyaImg = document.getElementById("jiraiyaImg");
const yamatoImg = document.getElementById("yamatoImg");
const saiImg = document.getElementById("saiImg");
const gaiImg = document.getElementById("gaiImg");
const leeImg = document.getElementById("leeImg");
const gaaraImg = document.getElementById("gaaraImg");
const uwknownImg1 = document.getElementById("uwknown1");
const uwknownImg2 = document.getElementById("uwknown2");
const uwknownImg3 = document.getElementById("uwknown3");
const lockBtn = document.getElementById("lockbutton");

//Variables//

const narutoPick = new Audio("../sounds/naruto-pick.mp3");
const sasukePick = new Audio("../sounds/sasuke-pick.mp3");
const sakuraPick = new Audio("../sounds/sakura-pick.mp3");
const kakashiPick = new Audio("../sounds/kakashi-pick.mp3");
const hinataPick = new Audio("../sounds/hinata-pick.mp3");
const nejiPick = new Audio("../sounds/neji-pick.mp3");
const jiraiyaPick = new Audio("../sounds/jiraiya-pick.mp3");
const yamatoPick = new Audio("../sounds/yamato-pick.mp3");
const saiPick = new Audio("../sounds/sai-pick.mp3");
const gaiPick = new Audio("../sounds/gai-pick.mp3");
const leePick = new Audio("../sounds/lee-pick.mp3");
const gaaraPick = new Audio("../sounds/gaara-pick.mp3");

narutoPick.volume = 0.25;
sasukePick.volume = 0.25;
sakuraPick.volume = 0.25;
kakashiPick.volume = 0.25;
hinataPick.volume = 0.25;
nejiPick.volume = 0.25;
jiraiyaPick.volume = 0.25;
yamatoPick.volume = 0.25;
saiPick.volume = 0.25;
gaiPick.volume = 0.5;
leePick.volume = 0.25;
gaaraPick.volume = 0.25;


teamMembers = [];
teamMember1 = false;
teamMember2 = false;
teamMember3 = false;
teamMember1Name = "";
teamMember2Name = "";
teamMember3Name = "";
narutoOnTeam = false;
sasukeOnTeam = false;
sakuraOnTeam = false;
kakashiOnTeam = false;
hinataOnTeam = false;
nejiOnTeam = false;
jiraiyaOnTeam = false;
yamatoOnTeam = false;
saiOnTeam = false;
gaiOnTeam = false;
leeOnTeam = false;
gaaraOnTeam = false;
let teamCount = 0;

lockBtn.addEventListener("click", function() {
    location.href = "../games/game1/game1.html";
})
localStorage.removeItem("teamMembers");

//Event listeners for select charaters//
//Naruto//

narutoImg.addEventListener("click", function() {
    if(narutoImg.src = "../images/naruto.jpg") {
        if(teamMember1 === false) {
            if(narutoOnTeam === false) {
                narutoImg.style.transition = "0.9s ease";
                narutoImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/naruto.jpg";
                teamMember1 = true;
                teamMember1Name = "Naruto";
                narutoOnTeam = true;
                teamMembers.push("Naruto");
                console.log(teamMembers);
                sasukePick.pause();
                sasukePick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                narutoPick.play();
                setTimeout(() => {narutoPick.pause(); narutoPick.currentTime = 0;}, 2700);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }       
            if(narutoImg.src = "../images/naruto.jpg") {
                if(teamMember2 === false) {
                    if(narutoOnTeam === false) {
                        narutoImg.style.transition = "0.9s ease";
                        narutoImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/naruto.jpg";
                        teamMember2 = true;
                        teamMember2Name = "Naruto";
                        narutoOnTeam = true;
                        teamMembers.push("Naruto");
                        console.log(teamMembers);
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        yamatoPick.pause();
                        yamatoPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        narutoPick.play();
                        setTimeout(() => {narutoPick.pause(); narutoPick.currentTime = 0;}, 2700);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    }
                        } else { 
                            console.log("no")
                        }
                    }
                    if(narutoImg.src = "../images/naruto.jpg") {
                        if(teamMember3 === false) {
                            if(narutoOnTeam === false) {
                                narutoImg.style.transition = "0.9s ease";
                                narutoImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/naruto.jpg";
                                teamMember3 = true;
                                teamMember3Name = "Naruto";
                                narutoOnTeam = true;
                                teamMembers.push("Naruto");
                                console.log(teamMembers);
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                narutoPick.play();
                                setTimeout(() => {narutoPick.pause(); narutoPick.currentTime = 0;}, 2700);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
            }
        }
})

//Sasuke//

sasukeImg.addEventListener("click", function() {
    if(sasukeImg.src = "../images/sasuke.jpg") {
        if(teamMember1 === false) {
            if(sasukeOnTeam === false) {
                sasukeImg.style.transition = "0.9s ease";
                sasukeImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/sasuke.jpg";
                teamMember1 = true;
                teamMember1Name = "Sasuke";
                sasukeOnTeam = true;
                teamMembers.push("Sasuke");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                sasukePick.play();
                setTimeout(() => {sasukePick.pause(); sasukePick.currentTime = 0;}, 2700);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }      
            if(sasukeImg.src = "../images/sasuke.jpg") {
                if(teamMember2 === false) {
                    if(sasukeOnTeam === false) {
                        sasukeImg.style.transition = "0.9s ease";
                        sasukeImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/sasuke.jpg";
                        teamMember2 = true;
                        teamMember2Name = "Sasuke";
                        sasukeOnTeam = true;
                        teamMembers.push("Sasuke");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        yamatoPick.pause();
                        yamatoPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        sasukePick.play();
                        setTimeout(() => {sasukePick.pause(); sasukePick.currentTime = 0;}, 2700);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    }
                } else { 
                    if(sasukeImg.src = "../images/sasuke.jpg") {
                        if(teamMember3 === false) {
                            if(sasukeOnTeam === false) {
                                sasukeImg.style.transition = "0.9s ease";
                                sasukeImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/sasuke.jpg";
                                teamMember3 = true;
                                teamMember3Name = "Sasuke";
                                sasukeOnTeam = true;
                                teamMembers.push("Sasuke");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                sasukePick.play();
                                setTimeout(() => {sasukePick.pause(); sasukePick.currentTime = 0;}, 2700);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})

//Sakura//

sakuraImg.addEventListener("click", function() {
    if(sakuraImg.src = "../images/sakura.jpg") {
        if(teamMember1 === false) {
            if(sakuraOnTeam === false) {
                sakuraImg.style.transition = "0.9s ease";
                sakuraImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/sakura.jpg";
                teamMember1 = true;
                teamMember1Name = "Sakura";
                sakuraOnTeam = true;
                teamMembers.push("Sakura");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sasukePick.pause();
                sasukePick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                sakuraPick.play();
                setTimeout(() => {sakuraPick.pause(); sakuraPick.currentTime = 0;}, 2700);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }         
            if(sakuraImg.src = "../images/sakura.jpg") {
                if(teamMember2 === false) {
                    if(sakuraOnTeam === false) {
                        sakuraImg.style.transition = "0.9s ease";
                        sakuraImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/sakura.jpg";
                        teamMember2 = true;
                        teamMember2Name = "Sakura";
                        sakuraOnTeam = true;
                        teamMembers.push("Sakura");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        yamatoPick.pause();
                        yamatoPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        sakuraPick.play();
                        setTimeout(() => {sakuraPick.pause(); sakuraPick.currentTime = 0;}, 2700);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    }
                } else { 
                    if(sakuraImg.src = "../images/sakura.jpg") {
                        if(teamMember3 === false) {
                            if(sakuraOnTeam === false) {
                                sakuraImg.style.transition = "0.9s ease";
                                sakuraImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/sakura.jpg";
                                teamMember3 = true;
                                teamMember3Name = "Sakura";
                                sakuraOnTeam = true;
                                teamMembers.push("Sakura");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                sakuraPick.play();
                                setTimeout(() => {sakuraPick.pause(); sakuraPick.currentTime = 0;}, 2700);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})



//Kakashi//

kakashiImg.addEventListener("click", function() {
    if(kakashiImg.src = "../images/kakashi.jpg") {
        if(teamMember1 === false) {
            if(kakashiOnTeam === false) {
                kakashiImg.style.transition = "0.9s ease";
                kakashiImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/kakashi.jpg";
                teamMember1 = true;
                teamMember1Name = "Kakashi";
                kakashiOnTeam = true;
                teamMembers.push("Kakashi");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sasukePick.pause();
                sasukePick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                kakashiPick.play();
                setTimeout(() => {kakashiPick.pause(); kakashiPick.currentTime = 0;}, 2700);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }         
            if(kakashiImg.src = "../images/kakashi.jpg") {
                if(teamMember2 === false) {
                    if(kakashiOnTeam === false) {
                        kakashiImg.style.transition = "0.9s ease";
                        kakashiImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/kakashi.jpg"
                        teamMember2 = true;
                        teamMember2Name = "Kakashi";
                        kakashiOnTeam = true;
                        teamMembers.push("Kakashi");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        yamatoPick.pause();
                        yamatoPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        kakashiPick.play();
                        setTimeout(() => {kakashiPick.pause(); kakashiPick.currentTime = 0;}, 2700);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    }
                } else { 
                    if(kakashiImg.src = "../images/kakashi.jpg") {
                        if(teamMember3 === false) {
                            if(kakashiOnTeam === false) {
                                kakashiImg.style.transition = "0.9s ease";
                                kakashiImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/kakashi.jpg";
                                teamMember3 = true;
                                teamMember3Name = "Kakashi";
                                kakashiOnTeam = true;
                                teamMembers.push("Kakashi");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                kakashiPick.play();
                                setTimeout(() => {kakashiPick.pause(); kakashiPick.currentTime = 0;}, 2700);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})

//Hinata//

hinataImg.addEventListener("click", function() {
    if(hinataImg.src = "../images/hinata.jpg") {
        if(teamMember1 === false) {
            if(hinataOnTeam === false) {
                hinataImg.style.transition = "0.9s ease";
                hinataImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/hinata.jpg";
                teamMember1 = true;
                teamMember1Name = "Hinata";
                hinataOnTeam = true;
                teamMembers.push("Hinata");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sasukePick.pause();
                sasukePick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                hinataPick.play();
                setTimeout(() => {hinataPick.pause(); hinataPick.currentTime = 0;}, 2000);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }        
            if(hinataImg.src = "../images/hinata.jpg") {
                if(teamMember2 === false) {
                    if(hinataOnTeam === false) {
                        hinataImg.style.transition = "0.9s ease";
                        hinataImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/hinata.jpg";
                        teamMember2 = true;
                        teamMember2Name = "Hinata";
                        hinataOnTeam = true;
                        teamMembers.push("Hinata");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        yamatoPick.pause();
                        yamatoPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        hinataPick.play();
                        setTimeout(() => {hinataPick.pause(); hinataPick.currentTime = 0;}, 2000);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    }
                } else { 
                    if(hinataImg.src = "../images/hinata.jpg") {
                        if(teamMember3 === false) {
                            if(hinataOnTeam === false) {
                                hinataImg.style.transition = "0.9s ease";
                                hinataImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/hinata.jpg"
                                teamMember3 = true;
                                teamMember3Name = "Hinata";
                                hinataOnTeam = true;
                                teamMembers.push("Hinata");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                hinataPick.play();
                                setTimeout(() => {hinataPick.pause(); hinataPick.currentTime = 0;}, 2000);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})

//Neji//

nejiImg.addEventListener("click", function() {
    if(nejiImg.src = "../images/neji.jpg") {
        if(teamMember1 === false) {
            if(nejiOnTeam === false) {
                nejiImg.style.transition = "0.9s ease";
                nejiImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/neji.jpg";
                teamMember1 = true;
                teamMember1Name = "Neji";
                nejiOnTeam = true;
                teamMembers.push("Neji");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sasukePick.pause();
                sasukePick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                nejiPick.play();
                setTimeout(() => {nejiPick.pause(); nejiPick.currentTime = 0;}, 2000);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }      
            if(nejiImg.src = "../images/neji.jpg") {
                if(teamMember2 === false) {
                    if(nejiOnTeam === false) {
                        nejiImg.style.transition = "0.9s ease";
                        nejiImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/neji.jpg";
                        teamMember2 = true;
                        teamMember2Name = "Neji";
                        nejiOnTeam = true;
                        teamMembers.push("Neji");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        yamatoPick.pause();
                        yamatoPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        nejiPick.play();
                        setTimeout(() => {nejiPick.pause(); nejiPick.currentTime = 0;}, 2000);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    }
                } else { 
                    if(nejiImg.src = "../images/neji.jpg") {
                        if(teamMember3 === false) {
                            if(nejiOnTeam === false) {
                                nejiImg.style.transition = "0.9s ease";
                                nejiImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/neji.jpg";
                                teamMember3 = true;
                                teamMember3Name = "Neji";
                                nejiOnTeam = true;
                                teamMembers.push("Neji");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                nejiPick.play();
                                setTimeout(() => {nejiPick.pause(); nejiPick.currentTime = 0;}, 2000);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})

//Jiraiya

jiraiyaImg.addEventListener("click", function() {
    if(jiraiyaImg.src = "../images/jiraiya.jpg") {
        if(teamMember1 === false) {
            if(jiraiyaOnTeam === false) {
                jiraiyaImg.style.transition = "0.9s ease";
                jiraiyaImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/jiraiya.jpg";
                teamMember1 = true;
                teamMember1Name = "Jiraiya";
                jiraiyaOnTeam = true;
                teamMembers.push("Jiraiya");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sasukePick.pause();
                sasukePick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                jiraiyaPick.play();
                setTimeout(() => {jiraiyaPick.pause(); jiraiyaPick.currentTime = 0;}, 2700);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }        
            if(jiraiyaImg.src = "../images/jiraiya.jpg") {
                if(teamMember2 === false) {
                    if(jiraiyaOnTeam === false) {
                        jiraiyaImg.style.transition = "0.9s ease";
                        jiraiyaImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/jiraiya.jpg";
                        teamMember2 = true;
                        teamMember2Name = "Jiraiya";
                        jiraiyaOnTeam = true;
                        teamMembers.push("Jiraiya");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        jiraiyaPick.play();
                        setTimeout(() => {jiraiyaPick.pause(); jiraiyaPick.currentTime = 0;}, 2700);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));

                    }
                } else { 
                    if(jiraiyaImg.src = "../images/jiraiya.jpg") {
                        if(teamMember3 === false) {
                            if(jiraiyaOnTeam === false) {
                                jiraiyaImg.style.transition = "0.9s ease";
                                jiraiyaImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/jiraiya.jpg";
                                teamMember3 = true;
                                teamMember3Name = "Jiraiya";
                                jiraiyaOnTeam = true;
                                teamMembers.push("Jiraiya");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                jiraiyaPick.play();
                                setTimeout(() => {jiraiyaPick.pause(); jiraiyaPick.currentTime = 0;}, 2700);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})

//Yamato//

yamatoImg.addEventListener("click", function() {
    if(yamatoImg.src = "../images/yamato.jpg") {
        if(teamMember1 === false) {
            if(yamatoOnTeam === false) {
                yamatoImg.style.transition = "0.9s ease";
                yamatoImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/yamato.jpg";
                teamMember1 = true;
                teamMember1Name = "Yamato";
                yamatoOnTeam = true;
                teamMembers.push("Yamato");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sasukePick.pause();
                sasukePick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                yamatoPick.play();
                setTimeout(() => {yamatoPick.pause(); yamatoPick.currentTime = 0;}, 2700);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }        
            if(yamatoImg.src = "../images/yamato.jpg") {
                if(teamMember2 === false) {
                    if(yamatoOnTeam === false) {
                        yamatoImg.style.transition = "0.9s ease";
                        yamatoImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/yamato.jpg";
                        teamMember2 = true;
                        teamMember2Name = "Yamato";
                        yamatoOnTeam = true;
                        teamMembers.push("Yamato");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        yamatoPick.play();
                        setTimeout(() => {yamatoPick.pause(); yamatoPick.currentTime = 0;}, 2700);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    }
                } else { 
                    if(yamatoImg.src = "../images/yamato.jpg") {
                        if(teamMember3 === false) {
                            if(yamatoOnTeam === false) {
                                yamatoImg.style.transition = "0.9s ease";
                                yamatoImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/yamato.jpg";
                                teamMember3 = true;
                                teamMember3Name = "Yamato";
                                yamatoOnTeam = true;
                                teamMembers.push("Yamato");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                yamatoPick.play();
                                setTimeout(() => {yamatoPick.pause(); yamatoPick.currentTime = 0;}, 2700);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})

//Sai//

saiImg.addEventListener("click", function() {
    if(saiImg.src = "../images/sai.jpg") {
        if(teamMember1 === false) {
            if(saiOnTeam === false) {
                saiImg.style.transition = "0.9s ease";
                saiImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/sai.jpg";
                teamMember1 = true;
                teamMember1Name = "Sai";
                saiOnTeam = true;
                teamMembers.push("Sai");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sasukePick.pause();
                sasukePick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                saiPick.play();
                setTimeout(() => {saiPick.pause(); saiPick.currentTime = 0;}, 2700);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }      
            if(saiImg.src = "../images/sai.jpg") {
                if(teamMember2 === false) {
                    if(saiOnTeam === false) {
                        saiImg.style.transition = "0.9s ease";
                        saiImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/sai.jpg";
                        teamMember2 = true;
                        teamMember2Name = "Sai";
                        saiOnTeam = true;
                        teamMembers.push("Sai");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        yamatoPick.pause();
                        yamatoPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        saiPick.play();
                        setTimeout(() => {saiPick.pause(); saiPick.currentTime = 0;}, 2700);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    }
                } else { 
                    if(saiImg.src = "../images/sai.jpg") {
                        if(teamMember3 === false) {
                            if(saiOnTeam === false) {
                                saiImg.style.transition = "0.9s ease";
                                saiImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/sai.jpg";
                                teamMember3 = true;
                                teamMember3Name = "Sai";
                                saiOnTeam = true;
                                teamMembers.push("Sai");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                saiPick.play();
                                setTimeout(() => {saiPick.pause(); saiPick.currentTime = 0;}, 2700);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})

//Gai//

gaiImg.addEventListener("click", function() {
    if(gaiImg.src = "../images/gai.jpg") {
        if(teamMember1 === false) {
            if(gaiOnTeam === false) {
                gaiImg.style.transition = "0.9s ease";
                gaiImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/gai.jpg";
                teamMember1 = true;
                teamMember1Name = "Gai";
                gaiOnTeam = true;
                teamMembers.push("Gai");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sasukePick.pause();
                sasukePick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                gaiPick.play();
                setTimeout(() => {gaiPick.pause(); gaiPick.currentTime = 0;}, 2500);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }        
            if(gaiImg.src = "../images/gai.jpg") {
                if(teamMember2 === false) {
                    if(gaiOnTeam === false) {
                        gaiImg.style.transition = "0.9s ease";
                        gaiImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/gai.jpg";
                        teamMember2 = true;
                        teamMember2Name = "Gai";
                        gaiOnTeam = true;
                        teamMembers.push("Gai");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        yamatoPick.pause();
                        yamatoPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        gaiPick.play();
                        setTimeout(() => {gaiPick.pause(); gaiPick.currentTime = 0;}, 2500);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    }
                } else { 
                    if(gaiImg.src = "../images/gai.jpg") {
                        if(teamMember3 === false) {
                            if(gaiOnTeam === false) {
                                gaiImg.style.transition = "0.9s ease";
                                gaiImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/gai.jpg";
                                teamMember3 = true;
                                teamMember3Name = "Gai";
                                gaiOnTeam = true;
                                teamMembers.push("Gai");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                gaiPick.play();
                                setTimeout(() => {gaiPick.pause(); gaiPick.currentTime = 0;}, 2500);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})

//Lee//

leeImg.addEventListener("click", function() {
    if(leeImg.src = "../images/lee.jpg") {
        if(teamMember1 === false) {
            if(leeOnTeam === false) {
                leeImg.style.transition = "0.9s ease";
                leeImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/lee.jpg";
                teamMember1 = true;
                teamMember1Name = "Lee";
                leeOnTeam = true;
                teamMembers.push("Lee");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sasukePick.pause();
                sasukePick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                gaaraPick.pause();
                gaaraPick.currentTime = 0;
                leePick.play();
                setTimeout(() => {leePick.pause(); leePick.currentTime = 0;}, 2700);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }        
            if(leeImg.src = "../images/lee.jpg") {
                if(teamMember2 === false) {
                    if(leeOnTeam === false) {
                        leeImg.style.transition = "0.9s ease";
                        leeImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/lee.jpg";
                        teamMember2 = true;
                        teamMember2Name = "Lee";
                        leeOnTeam = true;
                        teamMembers.push("Lee");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        yamatoPick.pause();
                        yamatoPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        gaaraPick.pause();
                        gaaraPick.currentTime = 0;
                        leePick.play();
                        setTimeout(() => {leePick.pause(); leePick.currentTime = 0;}, 2700);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    }
                } else { 
                    if(leeImg.src = "../images/lee.jpg") {
                        if(teamMember3 === false) {
                            if(leeOnTeam === false) {
                                leeImg.style.transition = "0.9s ease";
                                leeImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/lee.jpg";
                                teamMember3 = true;
                                teamMember3Name = "Lee";
                                leeOnTeam = true;
                                teamMembers.push("Lee");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                gaaraPick.pause();
                                gaaraPick.currentTime = 0;
                                leePick.play();
                                setTimeout(() => {leePick.pause(); leePick.currentTime = 0;}, 2700);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})

//Gaara//

gaaraImg.addEventListener("click", function() {
    if(gaaraImg.src = "../images/gaara.png") {
        if(teamMember1 === false) {
            if(gaaraOnTeam === false) {
                gaaraImg.style.transition = "0.9s ease";
                gaaraImg.style.transform = "scale(0.8)";
                uwknownImg1.src = "../images/gaara.png";
                teamMember1 = true;
                teamMember1Name = "Gaara";
                gaaraOnTeam = true;
                teamMembers.push("Gaara");
                console.log(teamMembers);
                narutoPick.pause();
                narutoPick.currentTime = 0;
                sasukePick.pause();
                sasukePick.currentTime = 0;
                sakuraPick.pause();
                sakuraPick.currentTime = 0;
                kakashiPick.pause();
                kakashiPick.currentTime = 0;
                hinataPick.pause();
                hinataPick.currentTime = 0;
                nejiPick.pause();
                nejiPick.currentTime = 0;
                jiraiyaPick.pause();
                jiraiyaPick.currentTime = 0;
                yamatoPick.pause();
                yamatoPick.currentTime = 0;
                saiPick.pause();
                saiPick.currentTime = 0;
                gaiPick.pause();
                gaiPick.currentTime = 0;
                leePick.pause();
                leePick.currentTime = 0;
                gaaraPick.play();
                setTimeout(() => {gaaraPick.pause(); gaaraPick.currentTime = 0;}, 2700);
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
        } else {
            console.log("no")
    }         
            if(gaaraImg.src = "../images/gaara.png") {
                if(teamMember2 === false) {
                    if(gaaraOnTeam === false) {
                        gaaraImg.style.transition = "0.9s ease";
                        gaaraImg.style.transform = "scale(0.8)";
                        uwknownImg2.src = "../images/gaara.png";
                        teamMember2 = true;
                        teamMember2Name = "Gaara";
                        gaaraOnTeam = true;
                        teamMembers.push("Gaara");
                        console.log(teamMembers);
                        narutoPick.pause();
                        narutoPick.currentTime = 0;
                        sasukePick.pause();
                        sasukePick.currentTime = 0;
                        sakuraPick.pause();
                        sakuraPick.currentTime = 0;
                        kakashiPick.pause();
                        kakashiPick.currentTime = 0;
                        hinataPick.pause();
                        hinataPick.currentTime = 0;
                        nejiPick.pause();
                        nejiPick.currentTime = 0;
                        jiraiyaPick.pause();
                        jiraiyaPick.currentTime = 0;
                        yamatoPick.pause();
                        yamatoPick.currentTime = 0;
                        saiPick.pause();
                        saiPick.currentTime = 0;
                        gaiPick.pause();
                        gaiPick.currentTime = 0;
                        leePick.pause();
                        leePick.currentTime = 0;
                        gaaraPick.play();
                        setTimeout(() => {gaaraPick.pause(); gaaraPick.currentTime = 0;}, 2700);
                        localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                     }
                } else { 
                    if(gaaraImg.src = "../images/gaara.png") {
                        if(teamMember3 === false) {
                            if(gaaraOnTeam === false) {
                                gaaraImg.style.transition = "0.9s ease";
                                gaaraImg.style.transform = "scale(0.8)";
                                uwknownImg3.src = "../images/gaara.png";
                                teamMember3 = true;
                                teamMember3Name = "Gaara";
                                gaaraOnTeam = true;
                                teamMembers.push("Gaara");
                                console.log(teamMembers);
                                narutoPick.pause();
                                narutoPick.currentTime = 0;
                                sasukePick.pause();
                                sasukePick.currentTime = 0;
                                sakuraPick.pause();
                                sakuraPick.currentTime = 0;
                                kakashiPick.pause();
                                kakashiPick.currentTime = 0;
                                hinataPick.pause();
                                hinataPick.currentTime = 0;
                                nejiPick.pause();
                                nejiPick.currentTime = 0;
                                jiraiyaPick.pause();
                                jiraiyaPick.currentTime = 0;
                                yamatoPick.pause();
                                yamatoPick.currentTime = 0;
                                saiPick.pause();
                                saiPick.currentTime = 0;
                                gaiPick.pause();
                                gaiPick.currentTime = 0;
                                leePick.pause();
                                leePick.currentTime = 0;
                                gaaraPick.play();
                                setTimeout(() => {gaaraPick.pause(); gaaraPick.currentTime = 0;}, 2700);
                                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                            }
                        } else { 
                            console.log("no");
                        }
                    }
                }
            }
        }
})







// Unselect Characters

uwknownImg1.addEventListener("click", function() {
    if(teamMember1 === false) {
        console.log("No Character Found");

            //Naruto//
    } else if (teamMember1 === true) {
        if(teamMember1Name === "Naruto") {
            narutoImg.style.transition = "0.9s ease";
            narutoImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            narutoOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            narutoPick.pause(); 
            narutoPick.currentTime = 0;
        } 
            //Sasuke//
        if(teamMember1Name === "Sasuke") {
            sasukeImg.style.transition = "0.9s ease";
            sasukeImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            sasukeOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            sasukePick.pause(); 
            sasukePick.currentTime = 0;
        }
            //Sakura//
        } 
        if(teamMember1Name === "Sakura") {
            sakuraImg.style.transition = "0.9s ease";
            sakuraImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            sakuraOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            sakuraPick.pause(); 
            sakuraPick.currentTime = 0;
        }
            //Kakashi
        if(teamMember1Name === "Kakashi") {
            kakashiImg.style.transition = "0.9s ease";
            kakashiImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            kakashiOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            kakashiPick.pause(); 
            kakashiPick.currentTime = 0;
        }
            //Hinata//
        if(teamMember1Name === "Hinata") {
            hinataImg.style.transition = "0.9s ease";
            hinataImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            hinataOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            hinataPick.pause(); 
            hinataPick.currentTime = 0;
        }
            //Neji//
        if(teamMember1Name === "Neji") {
            nejiImg.style.transition = "0.9s ease";
            nejiImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            nejiOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            nejiPick.pause(); 
            nejiPick.currentTime = 0;
        }
    //Jiraiya//
        if(teamMember1Name === "Jiraiya") {
            jiraiyaImg.style.transition = "0.9s ease";
            jiraiyaImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            jiraiyaOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            jiraiyaPick.pause(); 
            jiraiyaPick.currentTime = 0;
        }

    //Yamato//
        if(teamMember1Name === "Yamato") {
            yamatoImg.style.transition = "0.9s ease";
            yamatoImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            yamatoOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            yamatoPick.pause(); 
            yamatoPick.currentTime = 0;
        }

    //Sai//
        if(teamMember1Name === "Sai") {
            saiImg.style.transition = "0.9s ease";
            saiImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            saiOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            saiPick.pause(); 
            saiPick.currentTime = 0;
        }

    //Gai//
        if(teamMember1Name === "Gai") {
            gaiImg.style.transition = "0.9s ease";
            gaiImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            gaiOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            gaiPick.pause(); 
            gaiPick.currentTime = 0;
        }

    //Lee//
        if(teamMember1Name === "Lee") {
            leeImg.style.transition = "0.9s ease";
            leeImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            leeOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            leePick.pause(); 
            leePick.currentTime = 0;
        }

    //Gaara//
        if(teamMember1Name === "Gaara") {
            gaaraImg.style.transition = "0.9s ease";
            gaaraImg.style.transform = "scale(1)";
            uwknownImg1.src = "../images/uwknown.png";
            teamMember1 = false;
            teamMember1Name = "";
            gaaraOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            gaaraPick.pause(); 
            gaaraPick.currentTime = 0;
        }
    })





    uwknownImg2.addEventListener("click", function() {
        if(teamMember2 === false) {
            console.log("No Character Found");
    
                //Naruto//
        } else if (teamMember2 === true) {
            if(teamMember2Name === "Naruto") {
                narutoImg.style.transition = "0.9s ease"
                narutoImg.style.transform = "scale(1)"
                uwknownImg2.src = "../images/uwknown.png"
                teamMember2 = false
                teamMember2Name = ""
                narutoOnTeam = false
                narutoPick.pause();
                narutoPick.currentTime = 0;
                var index = teamMembers.indexOf("Naruto");
                if (index !== -1) {
                    teamMembers.splice(index, 1)
                    console.log(teamMembers)
                }
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            } 
                //Sasuke//
            if(teamMember2Name === "Sasuke") {
                sasukeImg.style.transition = "0.9s ease";
                sasukeImg.style.transform = "scale(1)";
                uwknownImg2.src = "../images/uwknown.png";
                teamMember2 = false;
                teamMember2Name = "";
                sasukeOnTeam = false;
                sasukePick.pause(); 
                sasukePick.currentTime = 0;
                var index = teamMembers.indexOf("Sasuke");
                if (index !== -1) {
                    teamMembers.splice(index, 1);
                    console.log(teamMembers);
                }
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
                //Sakura//
            } 
            if(teamMember2Name === "Sakura") {
                sakuraImg.style.transition = "0.9s ease";
                sakuraImg.style.transform = "scale(1)";
                uwknownImg2.src = "../images/uwknown.png";
                teamMember2 = false;
                teamMember2Name = "";
                sakuraOnTeam = false;
                sakuraPick.pause(); 
                sakuraPick.currentTime = 0;
                var index = teamMembers.indexOf("Sakura");
                if (index !== -1) {
                    teamMembers.splice(index, 1);
                    console.log(teamMembers);
                }
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
                //Kakashi
            if(teamMember2Name === "Kakashi") {
                kakashiImg.style.transition = "0.9s ease";
                kakashiImg.style.transform = "scale(1)";
                uwknownImg2.src = "../images/uwknown.png";
                teamMember2 = false;
                teamMember2Name = "";
                kakashiOnTeam = false;
                kakashiPick.pause(); 
                kakashiPick.currentTime = 0;
                var index = teamMembers.indexOf("Kakashi");
                if (index !== -1) {
                    teamMembers.splice(index, 1);
                    console.log(teamMembers);
                }
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
                //Hinata//
            if(teamMember2Name === "Hinata") {
                hinataImg.style.transition = "0.9s ease";
                hinataImg.style.transform = "scale(1)";
                uwknownImg2.src = "../images/uwknown.png";
                teamMember2 = false;
                teamMember2Name = "";
                hinataOnTeam = false;
                hinataPick.pause(); 
                hinataPick.currentTime = 0;
                var index = teamMembers.indexOf("Hinata");
                if (index !== -1) {
                    teamMembers.splice(index, 1);
                    console.log(teamMembers);
                }
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }
                //Neji//
            if(teamMember2Name === "Neji") {
                nejiImg.style.transition = "0.9s ease";
                nejiImg.style.transform = "scale(1)";
                uwknownImg2.src = "../images/uwknown.png";
                teamMember2 = false;
                teamMember2Name = "";
                nejiOnTeam = false;
                nejiPick.pause(); 
                nejiPick.currentTime = 0;
                var index = teamMembers.indexOf("Neji");
                if (index !== -1) {
                    teamMembers.splice(index, 1);
                    console.log(teamMembers);
                }
                localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            }

                //Jiraiya//
        if(teamMember2Name === "Jiraiya") {
            jiraiyaImg.style.transition = "0.9s ease";
            jiraiyaImg.style.transform = "scale(1)";
            uwknownImg2.src = "../images/uwknown.png";
            teamMember2 = false;
            teamMember2Name = "";
            jiraiyaOnTeam = false;
            console.log(teamMembers);
            jiraiyaPick.pause(); 
            jiraiyaPick.currentTime = 0;
            var index = teamMembers.indexOf("Jiraiya");
            if (index !== -1) {
                teamMembers.splice(index, 1);
                console.log(teamMembers)
            }
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
        }

    //Yamato//
        if(teamMember2Name === "Yamato") {
            yamatoImg.style.transition = "0.9s ease";
            yamatoImg.style.transform = "scale(1)";
            uwknownImg2.src = "../images/uwknown.png";
            teamMember2 = false;
            teamMember2Name = "";
            yamatoOnTeam = false;
            console.log(teamMembers);
            yamatoPick.pause(); 
            yamatoPick.currentTime = 0;
            var index = teamMembers.indexOf("Yamato");
            if (index !== -1) {
                teamMembers.splice(index, 1);
                console.log(teamMembers)
            }
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
        }


    //Sai//
        if(teamMember2Name === "Sai") {
            saiImg.style.transition = "0.9s ease";
            saiImg.style.transform = "scale(1)";
            uwknownImg2.src = "../images/uwknown.png";
            teamMember2 = false;
            teamMember2Name = "";
            saiOnTeam = false;
            console.log(teamMembers);
            saiPick.pause(); 
            saiPick.currentTime = 0;
            var index = teamMembers.indexOf("Sai");
            if (index !== -1) {
                teamMembers.splice(index, 1);
                console.log(teamMembers);
            }
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
        }

    //Gai//
        if(teamMember2Name === "Gai") {
            gaiImg.style.transition = "0.9s ease";
            gaiImg.style.transform = "scale(1)";
            uwknownImg2.src = "../images/uwknown.png";
            teamMember2 = false;
            teamMember2Name = "";
            gaiOnTeam = false;
            console.log(teamMembers);
            gaiPick.pause(); 
            gaiPick.currentTime = 0;
            var index = teamMembers.indexOf("Gai");
            if (index !== -1) {
                teamMembers.splice(index, 1);
                console.log(teamMembers);
            }
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
        }

    //Lee//
        if(teamMember2Name === "Lee") {
            leeImg.style.transition = "0.9s ease";
            leeImg.style.transform = "scale(1)";
            uwknownImg2.src = "../images/uwknown.png";
            teamMember2 = false;
            teamMember2Name = "";
            leeOnTeam = false;
            console.log(teamMembers);
            leePick.pause(); 
            leePick.currentTime = 0;
            var index = teamMembers.indexOf("Lee");
            if (index !== -1) {
                teamMembers.splice(index, 1);
                console.log(teamMembers);
            }
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
        }

    //Gaara//
        if(teamMember2Name === "Gaara") {
            gaaraImg.style.transition = "0.9s ease";
            gaaraImg.style.transform = "scale(1)";
            uwknownImg2.src = "../images/uwknown.png";
            teamMember2 = false;
            teamMember2Name = "";
            gaaraOnTeam = false;
            console.log(teamMembers);
            gaaraPick.pause(); 
            gaaraPick.currentTime = 0;
            var index = teamMembers.indexOf("Gaara");
            if (index !== -1) {
                teamMembers.splice(index, 1);
                console.log(teamMembers);
            }
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
        }
        })



    


        uwknownImg3.addEventListener("click", function() {
            if(teamMember3 === false) {
                console.log("No Character Found");
        
                    //Naruto//
            } else if (teamMember3 === true) {
                if(teamMember3Name === "Naruto") {
                    narutoImg.style.transition = "0.9s ease";
                    narutoImg.style.transform = "scale(1)";
                    uwknownImg3.src = "../images/uwknown.png";
                    teamMember3 = false;
                    teamMember3Name = "";
                    narutoOnTeam = false;
                    narutoPick.pause(); 
                    narutoPick.currentTime = 0;
                    teamMembers.pop();
                    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    console.log(teamMembers);
                } 
                    //Sasuke//
                if(teamMember3Name === "Sasuke") {
                    sasukeImg.style.transition = "0.9s ease";
                    sasukeImg.style.transform = "scale(1)";
                    uwknownImg3.src = "../images/uwknown.png";
                    teamMember3 = false;
                    teamMember3Name = "";
                    sasukeOnTeam = false;
                    sasukePick.pause(); 
                    sasukePick.currentTime = 0;
                    teamMembers.pop();
                    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    console.log(teamMembers);
                }
                    //Sakura//
                } 
                if(teamMember3Name === "Sakura") {
                    sakuraImg.style.transition = "0.9s ease";
                    sakuraImg.style.transform = "scale(1)";
                    uwknownImg3.src = "../images/uwknown.png";
                    teamMember3 = false;
                    teamMember3Name = "";
                    sakuraOnTeam = false;
                    sakuraPick.pause(); 
                    sakuraPick.currentTime = 0;
                    teamMembers.pop();
                    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    console.log(teamMembers);
                }
                    //Kakashi
                if(teamMember3Name === "Kakashi") {
                    kakashiImg.style.transition = "0.9s ease";
                    kakashiImg.style.transform = "scale(1)";
                    uwknownImg3.src = "../images/uwknown.png";
                    teamMember3 = false;
                    teamMember3Name = "";
                    kakashiOnTeam = false;
                    kakashiPick.pause(); 
                    kakashiPick.currentTime = 0;
                    teamMembers.pop();
                    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    console.log(teamMembers);
                }
                    //Hinata//
                if(teamMember3Name === "Hinata") {
                    hinataImg.style.transition = "0.9s ease";
                    hinataImg.style.transform = "scale(1)";
                    uwknownImg3.src = "../images/uwknown.png";
                    teamMember3 = false;
                    teamMember3Name = "";
                    hinataOnTeam = false;
                    hinataPick.pause(); 
                    hinataPick.currentTime = 0;
                    teamMembers.pop();
                    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    console.log(teamMembers);
                }
                    //Neji//
                if(teamMember3Name === "Neji") {
                    nejiImg.style.transition = "0.9s ease";
                    nejiImg.style.transform = "scale(1)";
                    uwknownImg3.src = "../images/uwknown.png";
                    teamMember3 = false;
                    teamMember3Name = "";
                    nejiOnTeam = false;
                    nejiPick.pause(); 
                    nejiPick.currentTime = 0;
                    teamMembers.pop();
                    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
                    console.log(teamMembers);
                }

                    //Jiraiya//
        if(teamMember3Name === "Jiraiya") {
            jiraiyaImg.style.transition = "0.9s ease";
            jiraiyaImg.style.transform = "scale(1)";
            uwknownImg3.src = "../images/uwknown.png";
            teamMember3 = false;
            teamMember3Name = "";
            jiraiyaOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            jiraiyaPick.pause();
            jiraiyaPick.currentTime = 0;
        }

    //Yamato//
        if(teamMember3Name === "Yamato") {
            yamatoImg.style.transition = "0.9s ease";
            yamatoImg.style.transform = "scale(1)";
            uwknownImg3.src = "../images/uwknown.png";
            teamMember3 = false;
            teamMember3Name = "";
            yamatoOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            yamatoPick.pause(); 
            yamatoPick.currentTime = 0;
        }

    //Sai//
        if(teamMember3Name === "Sai") {
            saiImg.style.transition = "0.9s ease";
            saiImg.style.transform = "scale(1)";
            uwknownImg3.src = "../images/uwknown.png";
            teamMember3 = false;
            teamMember3Name = "";
            saiOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            saiPick.pause(); 
            saiPick.currentTime = 0;
        }

    //Gai//
        if(teamMember3Name === "Gai") {
            gaiImg.style.transition = "0.9s ease";
            gaiImg.style.transform = "scale(1)";
            uwknownImg3.src = "../images/uwknown.png";
            teamMember3 = false;
            teamMember3Name = "";
            gaiOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            gaiPick.pause(); 
            gaiPick.currentTime = 0;
        }

    //Lee//
        if(teamMember3Name === "Lee") {
            leeImg.style.transition = "0.9s ease";
            leeImg.style.transform = "scale(1)";
            uwknownImg3.src = "../images/uwknown.png";
            teamMember3 = false;
            teamMember3Name = "";
            leeOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            leePick.pause(); 
            leePick.currentTime = 0;
        }

    //Gaara//
        if(teamMember3Name === "Gaara") {
            gaaraImg.style.transition = "0.9s ease";
            gaaraImg.style.transform = "scale(1)";
            uwknownImg3.src = "../images/uwknown.png";
            teamMember3 = false;
            teamMember3Name = "";
            gaaraOnTeam = false;
            teamMembers.shift();
            localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
            console.log(teamMembers);
            gaaraPick.pause(); 
            gaaraPick.currentTime = 0;
        }
            })
