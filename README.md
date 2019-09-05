# vue-remove-scope-directive

Vue directive that stops `data-v-XXXXXX` propagation in components with scoped styles. The primary use is to prevent leaking styles into slots.

## Install

```sh
yarn add vue-remove-scope-directive
```

## Use

Import in your entrypoint, such as `main.ts`:

```ts
import Vue from "vue"
import VueRemoveScopeDirective from "vue-remove-scope-directive"

Vue.directive("remove-scope", VueRemoveScopeDirective)
```

then use in Vue templates:

```vue
<!-- Layout.vue -->
<template>
	<div>
		<!-- This h1 is styled -->
		<h1>Welcome</h1>
		<main v-remove-scope>
			<!-- This h1 is not styled -->
			<h1>Willkommen!</h1>
			<!-- Neither are slot contents -->
			<slot />
		</main>
	</div>
</template>

<style scoped>
	h1 { color: red }
</style>
```

and child templates:

```vue
<!-- page.vue -->
<template>
	<Layout>
		<!-- Styles will not leak here -->
		<h1>Page</h1>
	</Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

import Layout from "@/Layout.vue"

@Component({
	components: { Layout },
})
export default class Page extends Vue {}
</script>
```

### Modifiers

`v-remove-scope.inner` modifier keeps `data-v-XXXXXX` attribute on the actual node where the directive is applied (but removes from all inner nodes).

Consider the following example:

```vue
<template>
	<div class="page">
		<main v-remove-scope>
			<p>This will be unstyled.</p>
		</main>
		<footer v-remove-scope.inner>
			<p>
				This will be green: footer keeps scope attribute,
				but the paragraph is cleared.
			</p>
		</main>
	</div>
</template>

<style scoped>
	main { color: red }
	footer { color: green }
	p { color: blue }
</style>
```
