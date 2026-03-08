const inputs = document.querySelectorAll("input[type='number']");
const totalSpan = document.getElementById("total");


inputs.forEach(input => {
  input.addEventListener("input", calcularTotal);
});


function calcularTotal() {
  let total = 0;


  inputs.forEach(input => {
    const quantidade = parseInt(input.value) || 0;
    const preco = parseFloat(input.dataset.price);
    total += quantidade * preco;
  });


  totalSpan.textContent = total.toFixed(2);
}


function mostrarPix() {
  const pagamento = document.getElementById("pagamento").value;
  const pixBox = document.getElementById("pixBox");


  if (pagamento === "Pix") {
    pixBox.classList.remove("oculto");
  } else {
    pixBox.classList.add("oculto");
  }
}


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


function enviarPedido() {
  const nome = document.getElementById("nome").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const pagamento = document.getElementById("pagamento").value;
  const observacao = document.getElementById("observacao").value.trim();


  let mensagem = "🍔 *Novo Pedido - Xis Raiz*%0A%0A";


  if (nome !== "") {
    mensagem += "👤 Nome: " + nome + "%0A";
  }


  if (endereco !== "") {
    mensagem += "📍 Endereço: " + endereco + "%0A";
  }


  if (pagamento !== "") {
    mensagem += "💳 Pagamento: " + pagamento + "%0A";
  }


  mensagem += "%0A*Itens do pedido:*%0A";


  let total = 0;
  let temItens = false;


  inputs.forEach(input => {
    const quantidade = parseInt(input.value) || 0;


    if (quantidade > 0) {
      const nomeItem = input.dataset.name;
      const preco = parseFloat(input.dataset.price);
      const subtotal = quantidade * preco;


      mensagem += `${quantidade}x ${nomeItem} - R$ ${subtotal.toFixed(2)}%0A`;
      total += subtotal;
      temItens = true;
    }
  });


  if (!temItens) {
    alert("Selecione pelo menos 1 item.");
    return;
  }


  if (observacao !== "") {
    mensagem += "%0A📝 Observações: " + observacao + "%0A";
  }


  mensagem += "%0A💰 *Total: R$ " + total.toFixed(2) + "*";


  const telefone = "5548992126854";
  const url = `https://wa.me/${telefone}?text=${mensagem}`;


  window.open(url, "_blank");
}
