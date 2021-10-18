<script lang="ts">
	import Nested from "./Nested.svelte";
</script>

<div
	class="w-full h-screen bg-gradient-to-br from-lime-300 to-emerald-500 p-20"
>
	<Nested />
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
