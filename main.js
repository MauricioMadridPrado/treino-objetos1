// function Carro(){
//     this.marca = 'Marca';
//     this.preco = 0
// }

// const honda = new Carro();
// honda.marca = 'Honda';
// honda.preco = 21000;

// console.log(honda)

function Colaborador(nome, função, salario) {
  const bonificacao = 1.3;
  this.salario = salario * bonificacao;
  this.nome = nome;
  this.funcao = função;
}
const colaboradores = [];
const local = document.getElementById("colaboradores");

colaboradores.push(
  (Mauricio = new Colaborador("Maurício", "Dev Junior", 1000))
);
colaboradores.push((Ricardo = new Colaborador("Ricardo", "Dev Pleno", 1100)));
colaboradores.push((Joana = new Colaborador("Joana", "Dev Pleno", 1200)));
colaboradores.push((Tiffany = new Colaborador("Tiffany", "Dev Senior", 1400)));

console.table(colaboradores);
colaboradores.forEach((colaborador) => {
    local.innerHTML += 
      `
          <li>
              <h1>${colaborador.nome}</h1>
              <h2>${colaborador.funcao}</h2>
              <h3>${colaborador.salario}</h3>
          </li>
      `;
  });