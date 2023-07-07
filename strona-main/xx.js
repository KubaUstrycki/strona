const app = Vue.createApp({
    data() {
        return {
            postac: { hp: 0, attack: 0, mana: 0, gold: 0 },
            wybor: 0,
            sklepWybor: 0,
            spotkanieN: 0,
            spotkanieB: 0,
            komunikat: "",
            ihp: 'C:/Users/kubau/Desktop/strona-main/hp.png',
            iat: 'C:/Users/kubau/Desktop/strona-main/attack.jpg',
            ima: 'C:/Users/kubau/Desktop/strona-main/mana.png',
            igo: 'C:/Users/kubau/Desktop/strona-main/gold.jpg',

        }

    },
    methods: {
        zmianapostaci(wyborpostaci) {
            console.log(wyborpostaci)
            if (wyborpostaci == 1) {
                this.postac.hp = 200;
                this.postac.attack = 60;
                this.postac.gold = 30;
            }
            if (wyborpostaci == 2) {
                this.postac.hp = 150;
                this.postac.attack = 30;
                this.postac.mana = 150;
                this.postac.gold = 25;
            }
            if (wyborpostaci == 3) {
                this.postac.hp = 120;
                this.postac.attack = 40;
                this.postac.mana = 30;
                this.postac.gold = 35;
            }
            if (wyborpostaci == 4) {
                this.postac.hp = 150;
                this.postac.attack = 80;
                this.postac.mana = 50;
                this.postac.gold = 40;
            }
        },
        sklep(przedmiot){
            console.log(przedmiot)
            if (przedmiot == 1){
                if (this.postac.gold>=15){
                    this.postac.attack += 7;
                    this.postac.gold -= 15;
                }
            }
            if (przedmiot == 2){
                if (this.postac.gold>=25){
                    this.postac.mana += 40;
                    this.postac.gold -= 25;
                }
            }
            if (przedmiot == 3){
                if (this.postac.gold>=10){
                    this.postac.hp += 20;
                    this.postac.gold -= 10;
                }
            }
        }
    }

})

postac.attack += 7, postac.gold -=15
postac.mana += 40, postac.gold -=25
postac.hp += 20, postac.gold -=10