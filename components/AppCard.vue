<script setup>
const show = ref(false)
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <slot name="image"></slot>
      </figure>
    </div>
    <div class="card-header is-clickable" @click="show = !show">
      <slot name="title"></slot>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <FontAwesomeIcon
            v-if="!show"
            icon="fa-angle-down"
            size="sm"
            aria-hidden="true"
          />
          <FontAwesomeIcon
            v-if="show"
            icon="fa-angle-up"
            size="sm"
            aria-hidden="true"
          />
        </span>
      </button>
    </div>
    <Transition name="slide-up">
      <div v-if="show" class="card-content">
        <article class="media">
          <div class="media-content">
            <slot name="content"></slot>
          </div>
          <div class="media-right">
            <button class="delete" @click="show = !show"></button>
          </div>
        </article>
      </div>
    </Transition>
    <footer class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style lang="css" scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
