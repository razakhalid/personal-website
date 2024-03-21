<template>
  <div>
    <section class="grid grid-cols-5 gap-x-4 items-center mb-16 sm:my-16">
      <div class="flex justify-end col-span-2">
        <img
            class="w-[200px] h-[200px] mb-4 object-cover object-center rounded-full"
            src="/img/profile-photo%20(1).jpeg"
            alt="Raza Khalid"
        />
        <!--        <div>-->
        <!--          <a href="https://www.linkedin.com/in/raza-khalid/" target="_blank">-->
        <!--            <img src="../../public/icons/linkedin.svg" alt="Linkedin"/>-->
        <!--          </a>-->
        <!--        </div>-->
      </div>
      <div class="col-span-3">
        <h3 class="text-5x mb-4">Hi, I'm Raza.</h3>
        <p class="text-xl max-w-md mx-auto">A <u>full stack software engineer</u> on a mission to build web engaging technology that <strong>solves business problems.</strong></p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Introduction'
}
</script>