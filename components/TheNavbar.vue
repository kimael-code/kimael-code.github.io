<script setup>
const isBurgerOpen = ref(false)
const isDropdownOpen = ref(false)
</script>

<template>
  <nav class="navbar is-dark is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-burger burger" data-target="theNavbar" aria-label="menu" aria-expanded="false" @click="isBurgerOpen = !isBurgerOpen" :class="{ 'is-active': isBurgerOpen }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>

    <div id="theNavbar" class="navbar-menu" :class="{ 'is-active': isBurgerOpen }">
      <div class="navbar-start" @click="isBurgerOpen = !isBurgerOpen">
        <NuxtLink class="navbar-item" to="/">
          <span class="icon is-medium">
            <FontAwesomeIcon icon="fa-home" size="lg" />
          </span>
          <span>{{ $t('navbar.home') }}</span>
        </NuxtLink>
        <NuxtLink class="navbar-item" to="/portfolio">
          <span class="icon is-medium">
            <FontAwesomeIcon icon="fa-briefcase" size="lg" />
          </span>
          <span>{{ $t('navbar.portfolio') }}</span>
        </NuxtLink>
        <NuxtLink class="navbar-item" to="/about">
          <span class="icon is-medium">
            <FontAwesomeIcon icon="fa-smile" size="lg" />
          </span>
          <span>{{ $t('navbar.about') }}</span>
        </NuxtLink>
        <NuxtLink class="navbar-item" to="/contact">
          <span class="icon is-medium">
            <FontAwesomeIcon icon="fa-envelope" size="lg" />
          </span>
          <span>{{ $t('navbar.contact') }}</span>
        </NuxtLink>
      </div>

      <div class="navbar-end">
        <div
          class="navbar-item has-dropdown mr-5"
          :class="{ 'is-active': isDropdownOpen }"
        >
          <a
            class="navbar-link is-arrowless"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <span class="icon is-medium">
              <FontAwesomeIcon icon="fa-language" size="2x" />
            </span>
          </a>
          <div
            class="navbar-dropdown"
            @click="
              ;(isDropdownOpen = !isDropdownOpen),
                (isBurgerOpen = !isBurgerOpen)
            "
          >
            <a href="#" class="navbar-item" @click="$i18n.locale = 'en'"
              >English</a
            >
            <a href="#" class="navbar-item" @click="$i18n.locale = 'es'"
              >Español</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
