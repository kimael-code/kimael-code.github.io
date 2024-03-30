<script setup></script>

<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>{{ $t('footer.app.name') }}</strong> {{ $t('footer.app.by') }} <a href="https://twitter.com/_kimael_" target="blank" rel="noreferrer noopener">Maikel Carballo</a> .
        {{ $t('footer.app.licensed') }}
        <a href="http://opensource.org/licenses/mit-license.php" target="blank" rel="noreferrer noopener">MIT</a>. <span class="subtitle is-6">2022-2024.</span>
      </p>
      <p>
        <a href="https://bulma.io" target="blank" rel="noreferrer noopener">
          <img src="~/assets/images/made-with-bulma--dark.png" alt="Made with Bulma" width="128" height="24">
        </a>
      </p>
    </div>
  </footer>
</template>
