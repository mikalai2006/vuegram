<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <slot />
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
