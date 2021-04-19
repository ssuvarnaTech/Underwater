//Sreevani Suvarna
//Project's Title: Ariel's Fight
//4/19/21
//Time it took to complete project: 4 days
//Points BREAKDOWN:
//Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) 
// (60):  I changed the artwork to the underwater artwork with an underwater theme UI and sounds that relate to underwater life like bubbles and splashes
//Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20) (created new trident and made it move faster)
//Create a new animated sprite for the Spaceship enemies (10) -> (changed to a firework explosion)
//Create a new title screen (e.g., new artwork, typography, layout) (10) (added background image)
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height : 480,
    backgroundColor: "#4B0082",
    scene: [Menu,Play],
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height/ 15;
let borderPadding = borderUISize/ 3;

let keyF,keyR,keyLEFT, keyRIGHT,keyS;



