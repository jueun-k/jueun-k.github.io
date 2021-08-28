const main = document.querySelector(".main");
const qna = document.querySelector(".qna");
const result = document.querySelector(".result");
const endPoint = 10;
const select =[];

function calResult(){
    var pointArray = [
        { name: 'americano', value : 0, key: 0 },
        { name: 'cappuccino', value : 0, key: 1 },
        { name: 'caramel', value : 0, key: 2 },
        { name: 'espresso', value : 0, key: 3 },
        { name: 'latte', value : 0, key: 4 },
        { name: 'mix', value : 0, key: 5 },
        { name: 'mocha', value : 0, key: 6 },
    ]

    for(let i = 0; i < endPoint; i++){
        var target = qnaList[i].a[select[i]];
        for(let j = 0; j < target.type.length; j++){
            for(let k = 0; k < pointArray.length; k++){
                if(target.type[j] === pointArray[k].name){
                    pointArray[k].value += 1;
                }
            }
        }
    }

    var resultArray = pointArray.sort(function (a,b){
        if(a.value > b.value){
            return -1;
        }
        if(a.value < b.value){
            return 1;
        }
        return 0;
    });

    let resultword = resultArray[0].key;
    return resultword;
}
function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector("#resultImg");
    var imgURL = 'testimg/' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}
function goResult(){
    setTimeout(() => {
        setTimeout(() => {
            qna.style.display ="none";
            result.style.display ="block";
        },100)
    },100);

    setResult();
}
function addAnswer(answerText,qIdx,idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    a.appendChild(answer);
    answer.innerHTML = answerText;


    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i<children.length; i++){
            children[i].disabled = true;
        }
        setTimeout(() =>{
            select[qIdx] = idx;
            for(let i = 0; i<children.length;i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },100)
    },false);
}

function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }

}

function begin(){
    setTimeout(() => {
        setTimeout(() => {
            main.style.display ="none";
            qna.style.display ="block";
        },100)
        let qIdx = 0;
        goNext(qIdx);
    },100);
}

/*function begin(){
    main.style.display ="none";
    qna.style.display ="block";

    let qIdx = 0;
    goNext(qIdx);
}




/*
americano 0
cappuccino 1
caramel 2
espresso 3
latte 4
mix 5
mocha 6
*/


