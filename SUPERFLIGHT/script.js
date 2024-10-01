document.getElementById('calcular').addEventListener('click', function() {
    const destinoSelect = document.getElementById('destino');
    const pasajeros = parseInt(document.getElementById('cantidad-pasajeros').value);
    const pesoMaletas = parseInt(document.getElementById('peso-maletas').value);
    const tipoSillaSelect = document.getElementById('tipo-silla');

    if (isNaN(pasajeros) || isNaN(pesoMaletas) || pasajeros <= 0) {
        alert('Por favor ingrese una cantidad válida de pasajeros y peso de las maletas.');
        return;
    }

    const precioDestino = parseInt(destinoSelect.options[destinoSelect.selectedIndex].dataset.precio);
    const precioSilla = parseInt(tipoSillaSelect.options[tipoSillaSelect.selectedIndex].dataset.adicional);

    let valorMaletas = 0;
    if (pesoMaletas > 50) {
        valorMaletas = (pesoMaletas - 50) * 15000;
    }

    const valorTiquete = (precioDestino + precioSilla) * pasajeros + valorMaletas;

    document.getElementById('valor-tiquete').textContent = `Valor Total del Tiquete: $${valorTiquete.toLocaleString()}`;
});
