(function(){
    function nombrar(nombre) {
        return nombre;
    }

    function saludar(nombre) {
        console.info(nombre, ', un saludo de julio desde DO Podcast');
    }

    saludar(nombrar('Julio fernandez')); 
})();
