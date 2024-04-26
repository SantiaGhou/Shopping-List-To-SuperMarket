var items = [];

document.querySelector('input[type="submit"]').addEventListener('click', function() {
    var nomeProduto = document.querySelector('input[name="nome_produto"]').value;
    var precoProduto = document.querySelector('input[name="valor_produto"]').value;

    if (nomeProduto.trim() === "" || precoProduto.trim() === "") {
        alert("Por favor, preencha todos os campos antes de cadastrar o produto.");
        return;
    }

    items.push({
        nome: nomeProduto,
        valor: precoProduto
    });

    var listaProdutos = document.querySelector('.lista-produtos');
    var soma = 0;
    listaProdutos.innerHTML = "";

    items.forEach(function(val) {
        soma += parseFloat(val.valor);

        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
            <h3>${val.nome}</h3>
            <h3 class="price-produto"><span>R$ ${parseFloat(val.valor).toFixed(2)}</span></h3>
        </div>`;
    });

    soma = soma.toFixed(2);
    document.querySelector('input[name="nome_produto"]').value = "";
    document.querySelector('input[name="valor_produto"]').value = "";

    var elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$ ' + soma;
});

document.querySelector('button[name="limpar"]').addEventListener('click', function() {
    items = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "R$ 0.00";
});
