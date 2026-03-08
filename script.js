function copiarPix() {
  const chave = "xisraiz@hotmail.com";
  navigator.clipboard.writeText(chave)
    .then(() => {
      alert("Chave Pix copiada com sucesso!");
    })
    .catch(() => {
      alert("Não foi possível copiar a chave Pix.");
    });
}
