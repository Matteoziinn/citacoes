const citacoes = [
  "A imaginação é mais importante que o conhecimento. - Albert Einstein",
  "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
  "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. - Winston Churchill",
  "A persistência é o caminho do êxito. - Charles Chaplin",
  "A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz. - Jean-Paul Sartre",
  "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos. - Friedrich Nietzsche",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos. - Eleanor Roosevelt",
  "A coragem não é a ausência do medo; é a persistência apesar do medo. - Nelson Mandela"
];


const p = document.querySelector('#citacao p');
const botaoEl = document.getElementById("novaCitacaoBtn");

botaoEl.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * citacoes.length);
  p.textContent = citacoes[randomIndex];
});
