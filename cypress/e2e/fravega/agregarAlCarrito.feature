Feature: Buscar y agrega al carrito

    Yo quiero validar que se pueda buscar un producto y que pueda dejarlo en carrito

Background:
  Given que el usuario ingresa a la página de Fravega


  Scenario: El usuario busca y agrega al carrito presionando "Enter" en la barra de búsqueda
  When ingresa "Heladera Samsung" en el buscador
  And ejecuta la busqueda presionado la tecla "Enter"
  And selecciona el segundo producto listado
  And verifica si hay stock disponible
  And agrega el producto al carrito
  Then el producto debería aparecer en el carrito de compras


  Scenario: El usuario busca y agrega al carrito usando la segunda sugerencia de búsqueda
  When ingresa "Heladera Samsung" en el buscador
  And selecciona el segundo resultado de la sugerencia
  And verifica si hay stock disponible
  And agrega el producto al carrito
  Then el producto debería aparecer en el carrito de compras 