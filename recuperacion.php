<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

 $nombreHotel = htmlspecialchars($_POST['nombreHotel']);
 $ciudad = htmlspecialchars($_POST['ciudad']);
 $pais = htmlspecialchars($_POST['pais']);
 $fechaViaje = $_POST['fechaViaje']; // No es necesario sanear porque es un input type="date"
 $duracionViaje = htmlspecialchars($_POST['duracionViaje']);


 $filtro = new FiltroViajes($nombreHotel, $ciudad, $pais, $fechaViaje, $duracionViaje);

 echo "<h2>Resumen de la Intención de Viaje Registrada:</h2>";
 echo "<p><strong>Hotel:</strong> " . $filtro->getNombreHotel() . "</p>";
 echo "<p><strong>Ciudad:</strong> " . $filtro->getCiudad() . "</p>";
 echo "<p><strong>País:</strong> " . $filtro->getPais() . "</p>";
 echo "<p><strong>Fecha de Viaje:</strong> " . $filtro->getFechaViaje() . "</p>";
 echo "<p><strong>Duración del Viaje:</strong> " . $filtro->getDuracionViaje() . "</p>";

}
?>