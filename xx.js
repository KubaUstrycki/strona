const app = Vue.createApp({
    data() {
        return {
            postac: {hp: 0,attak: 0,mana: 0,gold: 0},
            wybor: 0,
            sklepWybor: 0,
            spotkanieN: 0,
            spotkanieB: 0,
            product: 'hashdashdah',
            ihp: 'C:/Users/Kuba/Pictures/x.png',
        }
    }
})


/*
<div id="spotkanieB">
    <h1>Spotkanie Bossa</h1>
    <ul>
        <li @click="spotkanieB=1">Atakuj</li>
        <li @click="spotkanieB=2">Zaklęcia</li>
    </ul>
</div>
*/