Feature: Validar Filtros por categoria

    Yo quiero validar que al ingresar en una categoria se visualicen los filtros definidos

Background:
  Given que el usuario ingresa a la página de Fravega

  Scenario: Selecciona la categoria "TV y Audio>TV por marca>Samsung"
  When ingresa a la categoria: "TV y Audio>TV por marca>Samsung"    
  Then se muestra el listado de la categoria
  And se muestran filtros comunes a todas las categorias
  And se muestran filtros específicos de la categoria "TV"
  

  