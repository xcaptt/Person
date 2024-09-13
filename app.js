function buscar() {
    // Pega o valor do campo de pesquisa
    let input = document.getElementById('ibus').value.toLowerCase();
  
    // Seleciona todas as seções que contêm conteúdo no site
    let sections = document.querySelectorAll('main section');
  
    // Itera sobre todas as seções
    sections.forEach(section => {
      // Verifica se o título ou o parágrafo contém o texto da pesquisa
      let title = section.querySelector('h2').textContent.toLowerCase();
      let content = section.querySelector('p').textContent.toLowerCase();
  
      // Se o texto de busca estiver no título ou no conteúdo, a seção é exibida, caso contrário, é escondida
      if (title.includes(input) || content.includes(input)) {
        section.style.display = 'block'; // Exibe a seção se houver correspondência
      } else {
        section.style.display = 'none'; // Esconde a seção se não houver correspondência
      }
    });
  }

//const paginas = [
    //{ url: 'pag2.html', title: "Person's" },
    //{ url: 'pente.html', title: "Notícias" },
    //{ url: 'shopping.html', title: "Shopping" }
  ];
  
  // Função de busca
  //async function buscar() {
    // Obter o valor de pesquisa e converter para letras minúsculas
    //let termoBusca = document.getElementById('ibus').value.toLowerCase();
  
    // Limpar resultados anteriores
    //let resultadosDiv = document.getElementById('resultados');
    //resultadosDiv.innerHTML = '';
  
    // Checar se o termo de busca está vazio
    //if (termoBusca.trim() === '') {
      //resultadosDiv.innerHTML = '<p>Digite um termo para pesquisar.</p>';
      //return;
    }
  
    // Percorrer todas as páginas
    //for (let pagina of paginas) {
      //try {
        // Fazer a solicitação da página
        //let resposta = await fetch(pagina.url);
        //let texto = await resposta.text();
  
        // Transformar o conteúdo da página em minúsculas
        //let textoMinusculo = texto.toLowerCase();
  
        // Verificar se o termo de busca está presente na página
        //if (textoMinusculo.includes(termoBusca)) {
          // Se encontrado, adicionar aos resultados
          //let resultado = document.createElement('p');
          //resultado.innerHTML = `Termo encontrado em: <a href="${pagina.url}">${pagina.title}</a>`;
          //resultadosDiv.appendChild(resultado);
        }
      } //catch (erro) {
        //console.error(`Erro ao carregar a página ${pagina.url}: `, erro);
      }
    }
  
    // Verificar se não houve resultados
    //if (resultadosDiv.innerHTML === '') {
      //resultadosDiv.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    }
  }
  //