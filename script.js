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

function enviarPedido() {
  let mensagem = "🍔 *Novo Pedido*\n\n";
  let total = 0;

  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const pagamento = document.getElementById("pagamento").value;
  const observacao = document.getElementById("observacao").value;

  mensagem += `👤 Cliente: ${nome}\n`;
  mensagem += `📍 Endereço: ${endereco}\n`;
  mensagem += `💳 Pagamento: ${pagamento}\n\n`;

  inputs.forEach(input => {
    const quantidade = parseInt(input.value);
    if (quantidade > 0) {
      const nomeItem = input.dataset.name;
      const preco = parseFloat(input.dataset.price);
      mensagem += `${quantidade}x ${nomeItem} - R$ ${(quantidade * preco).toFixed(2)}\n`;
      total += quantidade * preco;
    }
  });

  mensagem += `\n📝 Observação: ${observacao}\n`;
  mensagem += `\n💰 Total: R$ ${total.toFixed(2)}`;

  const telefone = "5548992126854"; // ALTERAR
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}