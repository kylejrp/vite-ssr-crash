<script lang="ts">
  import { hydratable } from "svelte";
  const foo = await hydratable("foo", () => new Promise(() => { throw new Error("nope")}));
</script>

{foo}