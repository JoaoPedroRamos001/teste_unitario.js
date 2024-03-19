// Função 1
const funcaoDobro = (input) => {
    const result = input * 2;
    return result;
}

// Função 2
const funcaoRaizQuadrada = (input) => {
    const result = Math.sqrt(input);
    return result;
}

// Função 3
const funcaoCaixaAlta = (input) => {
    const result = input.toUpperCase();
    return result;
}

// Função 1
const funcaoMultiplicacao = (a, b) => {
    const result = a * b;
    return result;
};

const funcaoPrimeiraLetra = (input) => {
    if (typeof input !== 'string' || input.length === 0) {
        throw new Error('funcaoPrimeiraLetra: Erro! Entrada inválida. Deve ser uma string não vazia.');
    } else {
        return input.charAt(0);
    }
};
