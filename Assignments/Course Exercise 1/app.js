new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],

        playerDamage: {
            maxDamage: 10,
            minDamage: 3
        },

        playerSpecialDamage: {
            maxDamage: 20,
            minDamage: 10
        },

        playerHealAmt: 10,

        monsterDamage: {
            maxDamage: 12,
            minDamage: 5
        }
    },
    methods: {
        startGame: function() {
          this.gameIsRunning = true
          this.playerHealth = 100
          this.monsterHealth = 100
            this.turns = []
        },
        attack: function(doSpecial) {
            var damage = this.calculateDamage(
                doSpecial ? this.playerSpecialDamage : this.playerDamage
            )
            this.monsterHealth -= damage
            if (this.monsterHealth < 0) this.monsterHealth = 0
            this.turns.unshift({
                isPlayer: true,
                text: `Player ${doSpecial ? "casts special attack on" : "hits"} Monster for ${damage} pts`
            })

            if(this.gameIsRunning) this.monsterAttacks()
        },
        heal: function() {
            if (this.playerHealth <= 100 - this.playerHealAmt) {
                this.playerHealth += this.playerHealAmt
            } else {
                this.playerHealth = 100
            }
            this.turns.unshift({
                isPlayer: true,
                text: `Player heals ${this.playerHealAmt} pts`
            })
            this.monsterAttacks()
        },
        giveUp: function() {
            this.gameIsRunning = false
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(this.monsterDamage)
            this.playerHealth -= damage
            if (this.playerHealth < 0) this.playerHealth = 0 // not ideal
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits Player for ${damage} pts`
            })
        },
        calculateDamage: function(damageObj) {
            return Math.max(damageObj.minDamage, Math.floor(Math.random() * damageObj.maxDamage) + 1)
        },
        checkWin: function() {
            if (!this.gameIsRunning) return

            if (this.monsterHealth <= 0 || this.playerHealth <= 0) {
                this.gameIsRunning = false;
                var didWin = this.monsterHealth <= 0

                if(confirm(`You ${didWin ? "won" : "lost"}! New Game?`)) {
                    this.startGame();
                }
            }
        }
    },
    watch: {
        monsterHealth: function() {
            this.checkWin()
        },
        playerHealth: function() {
            this.checkWin()
        }
    }
})