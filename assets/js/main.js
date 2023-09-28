// Capturar o evento de envio do formulário.
const form = document.querySelector('#formulario');// Selecionei meu form.

form.addEventListener('submit', function (e) {// Adicionei um espião de eventos no meu form.
    e.preventDefault();// Aqui eu parei o evento de submit do formulário.
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');// Selecionei os inputs para pegar os valores inseridos neles.

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);// Aqui estou pegando os valores dos inputs, já convertendo eles em numbers.

    if (!peso) {// Se o peso for false faço isso.
        setResultado('Peso inválido.', false);// Se o peso for válido este if não vai ser executado, porém se for inválido, vai ser executado. Mesma coisa para a altura.
        return;// Para de ler aqui.
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);// Criei esta const com uma função, pois vou usat ela para calcular meu imc.
    const nivelImc = getNivelImc(imc);// Criei a variável nivelImc e chamei a função getnivelimc com o imc já calculado.
    const msg = `Seu IMC é de ${imc} (${nivelImc})`;// Criei a menssagem para exibir na minha div de resultado.

    setResultado(msg, true);
});

function getNivelImc (imc) {// Criei uma função para saber o nível de obesidade da pessoa.
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']// Separei os resultados em um array para pegá-los por seus índices para colocá-los nos ifs.

    if (imc >= 39.9) {// Não preciso de nehum else if, apenas os ifs, pois tenho o return em todos que para a execução da função.
        return nivel[5]// Obesidade grau 3
    }
    
    if (imc >= 34.9) {
        return nivel[4]// Obesidade grau 2
    } 
    
    if (imc >= 29.9) {
        return nivel[3]// Obesidade grau 1
    } 
    
    if (imc >= 24.9) {
        return nivel[2]// Sobrepeso
    } 
    
    if (imc >= 18.5) {
        return nivel[1]// Peso normal
    } 
    
    if (imc < 18.5) {
        return nivel[0]// Abaixo do peso
    }
}

function getImc(peso, altura) {// Criei a minha função que calcula o imc.
    const imc = peso / altura ** 2;// O cálculo.
    return imc.toFixed(2);// Retornei meu imc com 2 casas decimais.
}

function criaP() {// Criei esta função, que a função dela é apenas criar os Ps.
    const p = document.createElement('p');// Criei um elemento no meu html pelo js, um parágrafo.
    return p;// Retornei o p para colcoar na outra função.
}

function setResultado(msg, isValid) {// Função que vai adicionar coisas dentro da minha div resultado no HTML.
    const resultado = document.querySelector('#resultado');// Selecionei minha div pelo id.
    resultado.innerHTML = '';// Toda vez que eu executar minha função, limpo meu html.
    const p = criaP();// Chamei a função criaP() para criar o rodar o meu p.

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;// Coloquei a msg dentro do meu p.
    resultado.appendChild(p);// Adicionei meu p dentro da div resultado.
}