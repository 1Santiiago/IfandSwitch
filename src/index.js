import "./styles.css";

//se a hora estiver entre 06:00 até 12:00, caso contrario, das 12:00 a té 18, boa tarder, caso contrario: boa noite

let hora = 19;

if (hora > 6 && hora < 12) {
  console.log("Bom Dia");
} else if (hora > 12 && hora < 18) {
  console.log("Boa Tarde");
} else {
  console.log("Boa noite");
}

console.log(hora);

//switch case

let permissao; // comum; gerente, diretor
permissao = "gerente" || "Gerente";
switch (permissao) {
  case "comum":
    console.log("Usuário Comum");
    break;

  case "gerente" || "Gerente":
    console.log("Usuário Gerente");
    break;

  case "Diretor":
    console.log("Usuário Diretor");
    break;

  default:
    console.log("Usuario nao reconhecido");
}
