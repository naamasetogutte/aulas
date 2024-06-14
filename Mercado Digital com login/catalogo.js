let produtos = [
    { id: 1, nome: 'Maçã', preco: 2.50, imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' },
    { id: 2, nome: 'Banana', preco: 1.20, imagem: 'https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg' },
    { id: 3, nome: 'Laranja', preco: 3.00, imagem: 'https://longevidadesaudavel.com.br/wp-content/uploads/2023/07/10.png' },
    { id: 4, nome: 'Macarrão', preco: 6.50, imagem: 'https://giassi.vtexassets.com/arquivos/ids/1158185/Macarrao-de-Semola-Ninho-2-Galo-Pacote-500g.png?v=638509674322600000' },
    { id: 5, nome: 'Arroz', preco: 24.50, imagem: 'https://supermercadobomdemais.com.br/wp-content/uploads/2020/05/Arroz-Branco-Tipo-1-Tio-Jo%C3%A3o-5kg.jpg' },
    { id: 6, nome: 'Feijão Preto', preco: 10.50, imagem: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/f/e/feijao-camil-preto-1kg-7896006751113.jpg' },
    { id: 7, nome: 'Alho', preco: 7.50, imagem: 'https://conteudo.imguol.com.br/blogs/218/files/2019/02/iStock-517895450.jpg' },
    { id: 8, nome: 'Cebola', preco: 4.50, imagem: 'https://hiperideal.vtexassets.com/arquivos/ids/170995/51055.jpg?v=636616549635870000' },
    { id: 9, nome: 'Batata', preco: 5.50, imagem: 'https://www.shutterstock.com/image-photo/new-potato-isolated-on-white-600nw-1910558641.jpg' },
    { id: 10, nome: 'Cereja', preco: 8.50, imagem: 'https://www.infoescola.com/wp-content/uploads/2009/12/cereja1.jpg' },
    { id: 11, nome: 'Coca Cola', preco: 12.00, imagem: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg' },
    { id: 12, nome: 'Sorvete', preco: 8.00, imagem: 'https://skinabon.com.br/files/1371750/092a52ac071f4c46a2f3897b081b6faa' },
    { id: 13, nome: 'Suco de Laranja', preco: 12.00, imagem: 'https://naturalone.vteximg.com.br/arquivos/ids/157673/SUCO_DE_LARANJA_INTEGRAL_2L_REFRIGERADO_GARRAFA_RECICLAVEL_-_NATURAL_ONE-01.jpg?v=638210558436300000' },
    { id: 14, nome: 'Leite', preco: 5.00, imagem: 'https://tb0932.vtexassets.com/arquivos/ids/165337-800-auto?v=638197489347830000&width=800&height=auto&aspect=true' },
    { id: 15, nome: 'Guaraná', preco: 12.00, imagem: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/195393-800-450?v=637793382780370000&width=800&height=450&aspect=true' },
    { id: 16, nome: 'Danoninho', preco: 5.50, imagem: 'https://toninstr.blob.core.windows.net/product/16002-petit-suisse-danoninho-320-g-morango-g.jpg' }
];

let carrinho = [];

function atualizarCatalogo() {
    let catalogo = document.getElementById('product-catalog');
    catalogo.innerHTML = '';

    produtos.forEach(produto => {
        let card = document.createElement('div');
        card.className = 'col-md-4 col-lg-3 product-card';
        card.innerHTML = `
            <div class="card">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
                    <button onclick="adicionarAoCarrinho(${produto.id})" class="btn btn-success">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        catalogo.appendChild(card);
    });
}

function adicionarAoCarrinho(produtoId) {
    let produto = produtos.find(p => p.id === produtoId);
    let itemCarrinho = carrinho.find(item => item.produto.id === produtoId);

    if (itemCarrinho) {
        itemCarrinho.quantidade += 1;
    } else {
        carrinho.push({ produto: produto, quantidade: 1 });
    }

    atualizarCarrinho();
}

function atualizarCarrinho() {
    let cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    carrinho.forEach((item, indice) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.produto.nome}</td>
            <td>${item.quantidade}</td>
            <td>R$ ${item.produto.preco.toFixed(2)}</td>
            <td>R$ ${(item.produto.preco * item.quantidade).toFixed(2)}</td>
            <td>
                <button onclick="removerDoCarrinho(${indice})" class="btn btn-danger">Remover</button>
            </td>
        `;
        cartList.appendChild(tr);
    });

    atualizarTotalCarrinho();
}

function removerDoCarrinho(indice) {
    carrinho.splice(indice, 1);
    atualizarCarrinho();
}

function atualizarTotalCarrinho() {
    let total = carrinho.reduce((soma, item) => soma + item.produto.preco * item.quantidade, 0);
    document.getElementById('cart-total').textContent = `Total do Carrinho: R$ ${total.toFixed(2)}`;
}

function abrirCheckout() {
    $('#cartModal').modal('hide');
    $('#checkoutModal').modal('show');
}

document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;
    let pagamento = document.querySelector('input[name="pagamento"]:checked').value;

    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert(`Compra finalizada com sucesso!\nNome: ${nome}\nEndereço: ${endereco}\nTelefone: ${telefone}\nPagamento: ${pagamento}`);
        carrinho = [];
        atualizarCarrinho();
        $('#checkoutModal').modal('hide');
    }
});

atualizarCatalogo();
