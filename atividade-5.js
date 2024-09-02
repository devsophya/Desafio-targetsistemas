// Simulando a condição das lâmpadas
let lampada1 = { ligada: false, quente: false };
let lampada2 = { ligada: false, quente: false };
let lampada3 = { ligada: false, quente: false };

// 1. Ligue o switch1 por alguns minutos
let switch1 = true;
lampada1.ligada = true;

// Simular a lâmpada aquecendo após um tempo
setTimeout(() => {
  lampada1.quente = true; // Lâmpada 1 fica quente
  switch1 = false; // Desliga o switch1
  lampada1.ligada = false; // Lâmpada 1 é desligada

  // 2. Ligue o switch2
  let switch2 = true;
  lampada2.ligada = true;

  // Vamos verificar a condição das lâmpadas
  verificarLampadas();

}, 2000); // Simula um tempo de espera para a lâmpada aquecer

function verificarLampadas() {
  console.log("Verificando as lâmpadas...");

  if (lampada1.ligada) {
    console.log("Lâmpada 1 está acesa, então é controlada pelo switch2.");
  } else if (lampada1.quente) {
    console.log("Lâmpada 1 está apagada mas quente, então é controlada pelo switch1.");
  } else {
    console.log("Lâmpada 1 está apagada e fria, então é controlada pelo switch3.");
  }

  if (lampada2.ligada) {
    console.log("Lâmpada 2 está acesa, então é controlada pelo switch2.");
  } else if (lampada2.quente) {
    console.log("Lâmpada 2 está apagada mas quente, então é controlada pelo switch1.");
  } else {
    console.log("Lâmpada 2 está apagada e fria, então é controlada pelo switch3.");
  }

  if (!lampada1.ligada && !lampada1.quente) {
    console.log("Lâmpada 3 está apagada e fria, então é controlada pelo switch3.");
  }
}
