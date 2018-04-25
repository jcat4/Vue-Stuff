new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,

        playerMaxDamage: 10,
        playerMinDamage: 3,

        monsterMaxDamage: 12,
        monsterMinDamage: 5
    },
    methods: {
        startGame: function() {
          this.gameIsRunning = true
          this.playerHealth = 100
          this.monsterHealth = 100
        },
        attack: function() {
            this.monsterHealth -= this.calculateDamage(
                this.playerMinDamage, this.playerMaxDamage
            )
            if (this.monsterHealth < 0) his.monsterHealth = 0

            if (this.checkWin()) return

            this.playerHealth -= this.calculateDamage(
                this.monsterMinDamage, this.monsterMaxDamage
            )
            if (this.playerHealth < 0) this.playerHealth = 0

            this.checkWin()
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        },
        calculateDamage: function(min, max) {
            return Math.max(min, Math.floor(Math.random() * max) + 1)
        },
        checkWin: function() {
            if (this.monsterHealth <= 0 || this.playerHealth <= 0) {

                var didWin = this.monsterHealth <= 0


                if(confirm(`You ${didWin ? "won" : "lost"}! New Game?`)) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return didWin
            }
        }
    }
})