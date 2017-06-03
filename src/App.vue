<template>
  <div id="app">
    <h1>vue-i18n Tests</h1>

    <h1>Basic Use Cases (All Working)</h1>
    <ol>
      <li><strong>topLevel.message</strong>: {{ $t('topLevel.message') }} </li>
      <li><strong>topLevel.error_message</strong>: {{ $t('topLevel.error_message') }} </li>
      <li><strong>topLevel.error-message</strong>: {{ $t('topLevel.error-message') }} </li>
    </ol>

    <h1>Linked Message (Item 2 fails)</h1>
    <ol>
      <li><strong>topLevel.linked1</strong>: {{ $t('topLevel.linked1') }} </li>
      <li><strong>topLevel.linked2</strong>: {{ $t('topLevel.linked2') }} </li>
      <li><strong>topLevel.linked3</strong>: {{ $t('topLevel.linked3') }} </li>
    </ol>

    <h1>Linked Messages in Component interpolation (Items 3,4 fails)</h1>
    <ol>
      <li>
        <strong>topLevel.message</strong>:
        <i18n path="componentInterpolation.messageText" tag="span">
          <strong>{{ $t('topLevel.message') }}</strong>
        </i18n>
      </li>

      <li>
        <strong>topLevel.linked1</strong>:
        <i18n path="componentInterpolation.messageText" tag="span">
          <strong>{{ $t('topLevel.linked1') }}</strong>
        </i18n>
      </li>

      <li>
        <strong>topLevel.error_message</strong>:
        <i18n path="componentInterpolation.messageText2" tag="span">
          <strong>{{ $t('topLevel.error_message') }}</strong>
        </i18n>
      </li>

      <li>
        <strong>topLevel.linked1</strong>:
        <i18n path="componentInterpolation.messageText2" tag="span">
          <strong>{{ $t('topLevel.linked1') }}</strong>
        </i18n>
      </li>

    </ol>

  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
