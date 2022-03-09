import React, { useEffect, useState } from "react";

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 5 // 25 Minutos

function Countdown() {

    const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);

    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60

    useEffect( () => {
        if(secondsAmount === 0) {
            return
        }

        setTimeout(() => {
            setSecondsAmount(state => state - 1)
        }, 1000);
    }, [secondsAmount]);

    return(
        <>
            <span>{ String(minutes).padStart(2, '0') }</span>
            <span>:</span>
            <span>{ String(seconds).padStart(2, '0') }</span>
        </>
    );
}

export default Countdown;

// Obs.
// Math.floor (Arredonda para baixo)
// Math.ceil (Arredonda para cima)
// Math.round (Arredonda para o mais próximo)
// Linha 10: Para saber a quantidade de segundos é necessário pegar o resto da divisão de segundos por minutos.
// Linha 12: useEffect tem a opção de passar um array de dependências. Esse array de dependências funciona da seguinte forma, sempre que o valor do array for alterado, ele vai executar a função novamente. Sempre que alterar um estado e esse estado depender do valor anterior, é melhor utilizar formato de callback, isso facilita para que o React não se perca entre os fluxos de renderização.
// Linha 18/20: padStart é uma função que só funciona com String e adiciona uma quantidade de caracteres a esquerda de uma string até ela completa o número de caracteres desejado.