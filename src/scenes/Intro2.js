class Intro1 extends Phaser.Scene{
    constructor(){
        super("intro2");

    }
    preload() {
        // load audio
        this.load.audio('sfx_select', 'assets/splash.wav');
        this.load.audio('sfx_explosion', 'assets/spell.wav');
        this.load.audio('sfx_rocket', 'assets/bubbles.wav');
        this.load.image('cover', 'assets/bakground.png');
      }

    create(){
        let menuConfig = {
            fontFamily: 'Comic Sans',
            fontSize : '25px',
            backgroundColor: '#90ee90',
            color: '#FFF',
            align: 'right',
            padding: {
                top: 10,
                bottom: 10,

            },
            fixedWidth : 0
        }
        this.cover = this.add.image(game.config.width / 2, game.config.height / 2, 'cover');
        this.cover.setDisplaySize(game.config.width, game.config.height);
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - 
            borderPadding, "How fast can you save her?", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - 
            borderPadding + 50, "Press S to start the game", menuConfig).setOrigin(0.5);   
        console.log('hi');
       
        menuConfig.backgroundColor = '#90ee90';
        menuConfig.color = '#000';
        // keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        console.log("hi")
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
          music.stop();
        }
        // if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        //   // hard mode
        //   game.settings = {
        //     spaceshipSpeed: 4,
        //     gameTimer: 45000    
        //   }
        //   this.sound.play('sfx_select');
        //   this.scene.start('playScene');    
        // }
      }


}