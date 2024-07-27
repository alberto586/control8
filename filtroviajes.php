<?php

class FiltroViajes {
    private $nombreHotel;
    private $ciudad;
    private $pais;
    private $fechaViaje;
    private $duracionViaje;

    // Constructor
    public function __construct($nombreHotel, $ciudad, $pais, $fechaViaje, $duracionViaje) {
        $this->nombreHotel = $nombreHotel;
        $this->ciudad = $ciudad;
        $this->pais = $pais;
        $this->fechaViaje = $fechaViaje;
        $this->duracionViaje = $duracionViaje;
    }

    // Método para obtener el nombre del hotel
    public function getNombreHotel() {
        return $this->nombreHotel;
    }

    // Método para obtener la ciudad
    public function getCiudad() {
        return $this->ciudad;
    }

    // Método para obtener el país
    public function getPais() {
        return $this->pais;
    }

    // Método para obtener la fecha de viaje
    public function getFechaViaje() {
        return $this->fechaViaje;
    }

    // Método para obtener la duración del viaje
    public function getDuracionViaje() {
        return $this->duracionViaje;
    }

    // Método para buscar destinos por ciudad y fecha
    public function buscarDestinos($ciudad, $fechaViaje) {
        // Aquí podrías implementar la lógica de búsqueda según los parámetros recibidos
        // Por ejemplo, buscar en una base de datos o en un array de destinos disponibles
        // Retornarías un array o una lista de resultados encontrados
        // En este ejemplo simple, simplemente devolveremos un mensaje de demostración.
        return "Buscando destinos para $ciudad en la fecha $fechaViaje...";
    }
}

// Ejemplo de uso de la clase y sus métodos
$filtro = new FiltroViajes("Hotel Ejemplo", "Ciudad Ejemplo", "País Ejemplo", "2024-07-15", "7 días");

// Acceder a las propiedades y métodos
echo "Hotel: " . $filtro->getNombreHotel() . "<br>";
echo "Ciudad: " . $filtro->getCiudad() . "<br>";
echo "País: " . $filtro->getPais() . "<br>";
echo "Fecha de Viaje: " . $filtro->getFechaViaje() . "<br>";
echo "Duración del Viaje: " . $filtro->getDuracionViaje() . "<br>";

// Ejemplo de búsqueda
$ciudadBusqueda = "Ciudad Ejemplo";
$fechaBusqueda = "2024-07-15";
$resultados = $filtro->buscarDestinos($ciudadBusqueda, $fechaBusqueda);
echo "<br>Resultado de la búsqueda: " . $resultados;
?>