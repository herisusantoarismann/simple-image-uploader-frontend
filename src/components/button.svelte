<script>
    export let variant = 'default'
</script>

<button class="py-2 px-4 bg-[#3662E3] flex items-center gap-2 rounded-lg text-white" class:bg-red-600={variant === 'danger'} on:click>
    <slot />
</button>