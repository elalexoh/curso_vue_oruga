<template>
  <header class="header clearfix">
    <nav class>
      <ul class="nav nav-pills pull-right">
        <router-link tag="li" to="/" active-class="active" exact>
          <a href>Inicio</a>
        </router-link>
        <router-link tag="li" to="/usuarios" active-class="active" exact>
          <a href>Usuarios</a>
        </router-link>
      </ul>
      <h3 class="text muted">Aplicación Usuarios</h3>
    </nav>
  </header>
</template>