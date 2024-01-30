<template>
 <div class=" md:grid justify-center w-screen md:h-screen">
  <div class="mt-10 md:mt-0  md:flex justify-center md:w-screen grid">
    <div class=" items-center md:w-[40rem] flex justify-center"><img src="../assets/logo.png" class=" bg-black md:m-2 rounded-full md:w-[30rem] hover:shadow-xl hover:shadow-sky-900 ease-linear duration-200"></div>
    <div class="md:grid">
      <div class="grid md:items-end p-5 md:p-2">
        <p class="md:text-[2rem] font-semibold font-mono md:grid ">Hi my name is Swen, <br>
        im a Full-Stack Developer from the Netherlands.</p>
      </div>
      
      <div class="flex items-center justify-end md:p-5 p-4 font-mono">
        <router-link to="/about"><button class="bg-red-500  p-3 md:p-5 rounded-2xl grid hover:font-bold hover:shadow-md hover:text-orange-400 hover:shadow-white ease-linear duration-200 ">Read More</button></router-link>
      </div>
      
    </div>
    <div class="flex justify-end">
       
    </div>
  </div>
  <div class="grid md:flex justify-center  p-2">
      <div class="  p-2 w-[20rem] flex justify-center items-center font-mono">
        <ul class="flex">
          <li class="p-2 hover:text-orange-400 ease-linear duration-500"><a href="#">Linkedin</a></li>
          <li class="p-2 hover:text-orange-400 ease-linear duration-500"><a href="#">GitHub</a></li>
        </ul>
      </div>
      <div class="p-2 w-[20rem] grid justify-center items-center font-mono">
        <ul class="grid">
          <li class=" hover:text-orange-400 ease-linear duration-500"><a href="0624539865">Phone: 06-24539865</a> </li>
          <li class=" hover:text-orange-400 ease-linear duration-500"><a href="swentemebel@outlook.com">Mail: swentemebel@outlook.com </a></li>
          <li class=" hover:text-orange-400 ease-linear duration-500"><a href="#">Made by: Swen te Mebela </a></li>
        </ul>
      </div>
    </div>
 </div>

</template>

<script>
export default {
  name: 'homePage',

}
</script>

