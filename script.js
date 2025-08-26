const citacoes = [
  "A imaginação é mais importante que o conhecimento. - Albert Einstein",
  "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
  "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. - Winston Churchill"
];

const p = document.querySelector('#citacao p');
const botaoEl = document.getElementById("novaCitacaoBtn");

botaoEl.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * citacoes.length);
  p.textContent = citacoes[randomIndex];
});
