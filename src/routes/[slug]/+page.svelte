<script lang="ts">
  import Image from "../../components/Image.svelte";
  import type { IImage } from "../../types/image";

  export let data: IImage
</script>

<div class="w-full flex flex-col items-center justify-center gap-8">
    <Image previewImageUrl={data?.url}/>
</div>