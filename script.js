// Crie uma função que recebew como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o salvo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100 = Lendário
//Se vitórias for maior ou igual a 101 = Imortal

let saldoWin = saldoVitorias(100, 0);

function saldoVitorias(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  return saldo;
}

let nivelUser = nivel(saldoWin);

function nivel(saldo) {
  if (saldo < 10) {
    let ranking = "Ferro";
    return ranking;
  } else if (saldo >= 10 && saldo <= 20) {
    let ranking = "Bronze";
    return ranking;
  } else if (saldo >= 21 && saldo <= 50) {
    let ranking = "Prata";
    return ranking;
  } else if (saldo >= 51 && saldo <= 80) {
    let ranking = "Ouro";
    return ranking;
  } else if (saldo >= 81 && saldo <= 90) {
    let ranking = "Diamante";
    return ranking;
  } else if (saldo >= 91 && saldo <= 100) {
    let ranking = "Lendário";
    return ranking;
  } else if (saldo >= 101) {
    let ranking = "Imortal";
    return ranking;
  }
}

console.log("O Herói tem saldo de " + saldoWin + " Vitórias e está no nível " + nivelUser);
