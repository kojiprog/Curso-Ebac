function verificador() {
  const numero_box01 = document.querySelector("#box01");
  const numero_box02 = document.querySelector("#box02");
  const resultadoHTML = document.querySelector("#resultado");
  const box01 = parseInt(numero_box01.value);
  const box02 = parseInt(numero_box02.value);

  if (numero_box01.value == "" || numero_box02.value == "") {
    const resposta = "Por favor preencha os campos corretamente.";
    return (resultadoHTML.innerHTML = resposta);
  } else if (box01 > box02) {
    const resposta = `O número ${box01} é maior que o número ${box02}`;
    return (resultadoHTML.innerHTML = resposta);
  } else if (box01 < box02) {
    const resposta = `O número ${box02} é maior que o número ${box01}`;
    return (resultadoHTML.innerHTML = resposta);
  } else {
    const resposta = `Os números são iguais.`;
    return (resultadoHTML.innerHTML = resposta);
  }
}
