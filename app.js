// Referências aos elementos
const xInput = document.getElementById('xCoord');
const yInput = document.getElementById('yCoord');
const log = document.getElementById('log');

// Simula um clique na posição especificada
function simulateClick(x, y) {
    const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
    });

    const element = document.elementFromPoint(x, y);
    if (element) {
        element.dispatchEvent(event);
        addLog(`Clique simulado em (${x}, ${y}) no elemento: ${element.tagName}`);
    } else {
        addLog(`Nenhum elemento encontrado em (${x}, ${y}).`);
    }
}

// Simula movimento do mouse
function simulateMovement(x, y) {
    const event = new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
    });

    document.dispatchEvent(event);
    addLog(`Movimento simulado para (${x}, ${y}).`);
}

// Função para adicionar logs
function addLog(message) {
    const p = document.createElement('p');
    p.textContent = message;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight; // Rola para o fim
}

// Botões
document.getElementById('simulateClick').addEventListener('click', () => {
    const x = parseInt(xInput.value, 10);
    const y = parseInt(yInput.value, 10);
    simulateClick(x, y);
});

document.getElementById('simulateMovement').addEventListener('click', () => {
    const x = parseInt(xInput.value, 10);
    const y = parseInt(yInput.value, 10);
    simulateMovement(x, y);
});
