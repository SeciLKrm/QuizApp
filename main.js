const quizData =[{
    question :" Gazap Üzümleri kimin eseridir ?",
    a: "Grigoriy Petrov",
    b: "Franz Kafka",
    c: "Dostoyevski",
    d: "Lev Nikolayeviç Tolstoy",
    e: "John Steinbeck",
    correct : "e"
},
{
    question :" Milena'ya Mektuplar kimin eseridir ?",
    a: "Grigoriy Petrov",
    b: "Franz Kafka",
    c: "Dostoyevski",
    d: "Lev Nikolayeviç Tolstoy",
    e: "John Steinbeck",
    correct :"b"
},
{
    question :" Beyaz Zambaklar Ülkesinde kimin eseridir ?",
    a: "Grigoriy Petrov",
    b: "Franz Kafka",
    c: "Dostoyevski",
    d: "Lev Nikolayeviç Tolstoy",
    e: "John Steinbeck",
    correct:"a"
},
{
    question :" İnsan Neyle Yaşar kimin eseridir ?",
    a: "Grigoriy Petrov",
    b: "Franz Kafka",
    c: "Dostoyevski",
    d: "Lev Nikolayeviç Tolstoy",
    e: "John Steinbeck",
    correct : "d"
},
{
    question :" Suç ve Ceza kimin eseridir ?",
    a: "Grigoriy Petrov",
    b: "Franz Kafka",
    c: "Dostoyevski",
    d: "Lev Nikolayeviç Tolstoy",
    e: "John Steinbeck",
    correct : "c"
}
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0 ; //  ilk olarak ilk sorusunu yükle 0. index
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz] // currentQuiz, mevcut quiz(1-5) sorusunun indeks numarasını tutar


questionEl.innerText= currentQuizData.question;
a_text.innerText= currentQuizData.a;
b_text.innerText= currentQuizData.b;
c_text.innerText= currentQuizData.c;
d_text.innerText= currentQuizData.d;
e_text.innerText= currentQuizData.e;
};
//Seçilmemiş cevapları false e eşitleme
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    }

    )


function getSelected (){
    let answer 

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer =answerEl.id
        }
       })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    // console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
  
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
          <h2>Test tamamlandı, ${score * 20} puan aldınız..</h2>
          <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀 </Button>
        `
      }
    }
  })