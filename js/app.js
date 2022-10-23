const cards = document.querySelector('.cards_part'), prev = document.querySelector('.prev'),
next = document.querySelector('.next'), timer = document.querySelector('#timer'),
resTimer = document.getElementById('res_timer') 
feedPrev = document.getElementById('prev'), feedNext = document.getElementById('next'),
feeds = document.querySelector('.feeds'), pePrev = document.getElementById('pePrev'),
peNext = document.getElementById('peNext'), people = document.querySelector('.people')
let count = 0, feedCount = 0, peCount = 0


// console.log(typeof w, w);
prev.addEventListener('click', ()=>{
    let w = document.body.clientWidth
    count--
    
    if(count == -1){
        if(w < 650){
            count = 6
        }
        if(w < 1200){
            count = 5
        }
        else{
            count = 4
        }
    }
    cards.style.marginLeft = -360*count + 'px'
})

next.addEventListener('click', ()=>{
    let w = document.body.clientWidth
    count++
    if(w > 1200){
        if(count == 4){
            count = 0
        }
    }else if(w > 650 && w <= 1200){
        if(count == 5){
            count = 0
        }
    }else{
        if(count == 6){
            count = 0
        }
    }
    console.log(w, count);
    cards.style.marginLeft = -360*count + 'px'
})



// Feedback part
feedPrev.addEventListener('click', ()=>{
    let w = document.body.clientWidth
    feedCount--
    if(w > 1200){
        console.log(w);
        if(count == -1){
            count = 3
        }
    }else if(w > 550 && w <= 1200){
        console.log(w);
        if(count == -1){
            count = 4
        }
    }else{
        if(count == -1){
            console.log(w);
            count = 5
        }
    }
    feeds.style.marginLeft = -500*feedCount + 'px'
})

feedNext.addEventListener('click', ()=>{
    let w = document.body.clientWidth
    feedCount++
    if(w > 1200){
        console.log(w);
        if(feedCount == 4){
            feedCount = 0
        }
    }else if(w > 550 && w <= 1200){
        console.log(w);
        if(feedCount == 5){
            feedCount = 0
        }
    }else{
        console.log(w);
        if(feedCount == 6){
            feedCount = 0
        }
    }
    feeds.style.marginLeft = -500*feedCount + 'px'
})


// People part
pePrev.addEventListener('click', ()=>{
    let w = document.body.clientWidth
    peCount--
    if(w > 1200){
        if(peCount == -1){
            peCount = 5
        }
    }else if(w > 550 && w <= 1200){
        if(peCount == -1){
            peCount = 6
        }
    }else{
        if(peCount == -1){
            peCount = 7
        }
    }
    people.style.marginLeft = -300*peCount + 'px'
})

peNext.addEventListener('click', ()=>{
    let w = document.body.clientWidth
    peCount++
    if(w > 1200){
        if(peCount == 6){
            peCount = 0
        }
    }else if(w > 550 && w<=1200){
        if(peCount == 7){
            peCount = 0
        }
    }else{
        if(peCount == 8){
            peCount = 0
        }
    }
    people.style.marginLeft = -300*peCount + 'px'
})


// Timer
const newYears = "1 Jan 2023";


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    timer.innerHTML = `Участвует в распродаже <br> Скидка 40% действует ${days} дня ${hours}:${mins}:${seconds}`
    resTimer.innerHTML = `Участвует в распродаже <br> Скидка 40% действует ${days} дня ${hours}:${mins}:${seconds}`
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);




const inner = document.querySelectorAll('.inner'), outer = document.querySelectorAll('.outer'),
inner_para = document.querySelectorAll('.inner p')
let x = inner.length

for(let i=0; i<x; i++){
    inner[i].addEventListener('click', ()=>{
        outer[i].classList.toggle('inner_activated_outer')
        inner_para[i].classList.toggle('inner_activated_p')
    })
}

const basics = document.querySelectorAll('#basic')
let basicCount = 0

for(let i=0; i<basics.length; i++){
    if(i === 0){
        basics[i].style.display = 'flex'
    }else{
        basics[i].style.display = 'none'
    }
}

document.getElementById('basic_left').addEventListener('click', ()=>{
    basicCount--
    if(basicCount === -1){
        basicCount = 2
    }
    for(let i=0; i<basics.length; i++){
        if(i === basicCount){
            basics[i].style.display = 'flex'
        }else{
            basics[i].style.display = 'none'
        }
    }
})

document.getElementById('basic_right').addEventListener('click', ()=>{
    basicCount++
    if(basicCount === 3){
        basicCount = 0
    }
    for(let i=0; i<basics.length; i++){
        if(i === basicCount){
            basics[i].style.display = 'flex'
        }else{
            basics[i].style.display = 'none'
        }
    }
})

const comments = document.querySelector('.comments')
let commentCount = 0

document.getElementById('comment_left').addEventListener('click', ()=>{
    let w = document.body.clientWidth
    commentCount--
    if(commentCount === -1){
        commentCount = 5;
    }
    if(w < 1400 && w >= 900){
        comments.style.marginLeft = -800*commentCount+'px'    
    }else if(w < 900 && w>=650){
        comments.style.marginLeft = -650*commentCount+'px'
    }else if(w < 650){
        comments.style.marginLeft = -450*commentCount+'px'
    }
    else{
        comments.style.marginLeft = -1000*commentCount+'px'
    }
})

document.getElementById('comment_right').addEventListener('click', ()=>{
    let w = document.body.clientWidth
    commentCount++
    if(commentCount === 6){
        commentCount = 0;
    }
    if(w < 1400 && w >= 900){
        comments.style.marginLeft = -800*commentCount+'px'    
    }else if(w < 900 && w>=650){
        comments.style.marginLeft = -650*commentCount+'px'
    }else if(w < 650){
        comments.style.marginLeft = -450*commentCount+'px'
    }
    else{
        comments.style.marginLeft = -1000*commentCount+'px'
    }
})


const ask = document.querySelectorAll('.ask'), answer = document.querySelectorAll('.answer'), 
ask_para = document.querySelectorAll('.ask p')

for(let i=0; i<ask.length; i++){
    ask[i].addEventListener('click', ()=>{
        answer[i].classList.toggle('ans_activated')
        ask_para[i].classList.toggle('ask_activated')
    })
}