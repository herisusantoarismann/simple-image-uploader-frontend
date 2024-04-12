<script>
import Exit from '../assets/exit.svg'

</script>

<div class="w-2/5 p-2 aspect-video bg-white shadow rounded-lg overflow-hidden">
    <div class="w-full h-full flex flex-col items-center justify-center gap-5 border border-dashed rounded-lg">
        <img src={Exit} alt="exit">
        <div class="flex flex-col items-center">
            <p class="font-semibold">Drag & drop a file or <span class="text-blue-400">browse files</span></p>
            <p class="text-sm">JPG, PNG or GIF - Max file size 2MB</p>
        </div>
    </div>
</div>