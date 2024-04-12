<div class="w-full h-full flex flex-col justify-center items-center gap-4">
    <p class="text-sm"><span class="font-semibold">Uploading</span>, please wait...</p>
    <div class="w-2/4 h-[8px] relative overflow-hidden rounded-full bg-[#E5E7EB]">
      <div class="loader-inner w-[30%] h-full rounded-full bg-[#3662E3]"></div>
    </div>
</div>

<style>
.loader-inner {
  animation: loader 2s linear infinite;
}
@keyframes loader {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}
</style>