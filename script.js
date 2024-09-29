function check(botao){
    const tarefa = botao.parentElement;
    tarefa.style.textDecoration = 'line-through';
    tarefa.style.color = 'gray';
    botao.disabled = true
}