<template>
<div class="container md:flex gap-[5rem]  text-mono text-black font-serif">
    <div class="md:w-[200rem] bg-gradient-to-r from-sky-200 via-orange-300 to-sky-900 p-5 md:my-20 mt-[2rem] mx-5 md:mr-5 rounded-xl shadow-xl ease-linear duration-150 hover:shadow-gray-300">
        <h1 class="text-2xl text-center font-semibold md:mb-8 mb-5 border-b-2 border-black">About me</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis voluptatibus, labore doloremque libero vitae qui voluptate eius nisi quibusdam, sint excepturi adipisci ullam tenetur et perspiciatis? Harum rem perspiciatis aliquam?</p>
        <div class="">
            <h1 class="text-2xl text-center font-semibold md:mb-8 mb-5 border-b-2 border-black mt-5">Skills</h1>
          <div class="">
            <ul>
                <h2>Programeer Talen</h2>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Javascript</li>
                <li>API</li>
                <li>OOP</li>
                <li>HTML5</li>
                <li>CSS3</li>
            </ul>
          </div>
          <div class=" ">
            <h2 class="font-bold text-center border-b-2 border-black">Frameworks</h2>
            <ul>
                <li>JQuery</li>
                <li>Laravel</li>
                <li>Vue.Js</li>
            </ul>
          </div>
        </div>
    </div>
    <div class=" bg-gradient-to-r from-sky-200 via-orange-300 to-sky-900 p-5 md:my-20 mt-[2rem] mx-5 md:mr-5 rounded-xl shadow-xl ease-linear duration-150 hover:shadow-gray-300">
        <h1 class="text-2xl text-center font-semibold md:mb-8 mb-5 border-b-2 border-black">Projects</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit a nisi aliquam cupiditate dolor consequatur et at omnis repellat unde, eos architecto assumenda accusamus molestiae eligendi necessitatibus dolorum nihil incidunt!</p>

        <div class="border-2 rounded-xl p-2 m-2">
            <div class="">
                <h2 class="text-2xl text-center font-semibold md:mb-8 mb-5">LedenAdministratie</h2>
                <p>
                    Project dat ik gemaakt heb. Het project is gemaatk met PHP, OOP, en MySQL. Bij het starten van de applicatie maakt hij automatische een login gebruiker aan en alle tables die nodig zijn voor het werken van de applicatie. 
                    Het project bevat een database waar je moet inloggen om leden aan te maken en een familie.
                    Elk lid moet een familie hebben, elk lid word gekoppeld aan een soort lid dat een bedrag aan contributie betaald, dit is afhankleijk van de leeftijd.
                    <br><br>
                    Klik op de Github Repo knop om alle code te zien.
                </p>
            </div>
            <div class="flex justify-end md:justify-center p-2">
                <a  class="bg-gray-200 text-black md:p-2 p-1 rounded-md " href="https://github.com/SwenteMebel/PHPLedenadministratie">GitHub Repo</a>
            </div>
            
            
        </div>
        <div class="p-2 m-2">
            <h2 class="text-2xl text-center font-semibold md:mb-8 mb-5">MovieAPI</h2>
            <p>
                Een applicatie waar je alle Movies kun opzoeken. Zodra je een film hebt kun je alle gegevens zien van de film!
                De applicatie is gemaakt met Vue.js, Tailwind, HTML, JS en een API koppeling.
                <br><br>
                Klik op de Github Repo knip om alle code te zien
            </p>
            <div class="flex justify-end md:justify-center p-2">
                <a  class="bg-gray-200 text-black md:p-2 p-1 rounded-md " href="https://github.com/SwenteMebel/MovieAPI">GitHub Repo</a>
            </div>
        </div>
        
        <div class="border-2  rounded-xl p-2 m-2">
            <h2 class="text-2xl text-center font-semibold md:mb-8 mb-5">Rekenmachine</h2>
            <p>
                De klassieke rekenmachine! :)
                <br><br>
                Klik op de Github Repo knip om alle code te zien
            </p>
            <div class="flex justify-end md:justify-center p-2">
                <a  class="bg-gray-200 text-black md:p-2 p-1 rounded-md " href="https://github.com/SwenteMebel/Rekenmachine">GitHub Repo</a>
            </div>
        </div>

        <div class="p-2 m-2">
            <h2 class="text-2xl text-center font-semibold md:mb-8 mb-5">Weather App</h2>
            <p>
                Zoek de plaats naam en kijk wat het weer doet!
                <br><br>
                Klik op de Github Repo knip om alle code te zien
            </p>
            <div class="flex justify-end md:justify-center p-2">
                <a  class="bg-gray-200 text-black md:p-2 p-1 rounded-md " href="https://github.com/SwenteMebel/WeerSite">GitHub Repo</a>
            </div>
        </div>

        <div class=" border-2  rounded-xl p-2 m-2">
            <h2 class="text-2xl text-center font-semibold md:mb-8 mb-5">Card Game</h2>
            <p>
                Klik op refresh vervolgens schud hij zelf alle kaarten door elkaar. Hij zal zelf kijken hoeveel score je hebt. 
                <br><br>
                Klik op de Github Repo knip om alle code te zien
            </p>
            <div class="flex justify-end md:justify-center p-2">
                <a  class="bg-gray-200 text-black md:p-2 p-1 rounded-md " href="https://github.com/SwenteMebel/EmoKonijn">GitHub Repo</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default ({
    name: 'AboutVue',

})
</script>


