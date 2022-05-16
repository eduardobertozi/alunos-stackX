let box = document.querySelector('#box');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');

box.innerText = '<p>Teste do parágrafo do text content</p>';
box.innerHTML += '<br /><br /><p>Teste do parágrafo do Inner Html</p>'+'<p>Este é o texto do 2° parágrafo</p>';
box.innerHTML += '<a href="#">Um link de navegação</a>';

const btn = document.createElement("button");
btn.innerHTML = "Clicar";
box.appendChild(btn);

const a = document.querySelector("#box > a");
a.remove();

box2.innerHTML = `
  <div class="teste">
    <h2>Título do meu teste</h2>
    <br />
    <p>Estou testando a segunda box</p>
  </div>
`;

box3.innerHTML = `
    <h2>Box 3</h2>
    <p>Este é o paragrafo da box 3</p>
`;

// box3.classList.add('classeDaBox3');
// box3.classList.remove('classeDaBox3');
box3.classList.toggle('classeDaBox3');
