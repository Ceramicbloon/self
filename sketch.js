var person, infected, recovered
var evenMore
var grey, red, green, black
var edges
var group1
var group2
var group3
var gameState = 0
var wall1, wall2, wall3, wall4
var rand, rand2
var deathRate = 50
var help
function preload() {
    grey = loadImage("Grey.png")
    red = loadImage("Circle.png")
    green = loadImage("Green.png")
    black = loadImage("Black.png")

}

function setup() {
    createCanvas(1200, 600)
    group1 = new Group()
    group2 = new Group()
    group3 = new Group()
    edges = createEdgeSprites()
    help = createButton("How to play")
    help.position(570, 400)
    help.mousePressed(aksldhjfklajhsdkfa)
    

    // comment
}

function aksldhjfklajhsdkfa() {
    gameState = 2

}

function draw() {
    
    // console.log(help)
    if (gameState === 0) {
        background("#00bfff")
        textSize(50)
        fill("black")
        text("help = createButtonHowtoplayhelp.position570, 400 help.mousePressedaksldhjfklajhsdkfa", 75, 100)

       
    }
    // if(gameState === 2){
    //     clear()
    //     console.log(gameState)
    // }

    if (gameState === 1) {
        background("#00bfff")
        group1.bounceOff(edges)
        group2.bounceOff(edges)
        group3.bounceOff(edges)
        for (var i = 40; i < 1200; i = i + 100) {
            for (var e = 20; e < 400; e += 80) {
                person = createSprite(i, e, 20, 20)
                //  person.debug()
                rand = Math.round(random(1, 25))
                // console.log(rand)

                if (rand % 12 === 0) {
                    person.addImage(red)
                    red.width = 20
                    red.height = 20
                    group2.add(person)
                } else {
                    person.addImage(grey)
                    group1.add(person)
                }



                grey.width = 20
                grey.height = 20
                // rand = random(Math.round())
                if (frameCount % 30 == 0) {
                    person.velocityX = random(-2, 2)
                    person.velocityY = random(-2, 2)
                }

            }


        }
        for (var s = 0; s < group1.length; s++) {

            for (var v = 0; v < group2.length; v++) {

                if (group2.get(v).isTouching(group1.get(s))) {
                    //console.log("a")

                    group1.get(s).addImage(red)
                    red.width = 20
                    red.height = 20
                    //group1.get(s).remove(group1)
                    group2.add(group1.get(s))
                    //console.log(frameCount)


                }
                for (var p = 0; p < group2.length; p++) {

                    if (frameCount % 260 === 0) {
                        rand2 = random(1, 100)
                        console.log(group2)

                        group2.get(p).addImage(black)
                        black.width = 20
                        black.height = 20
                        group2.get(p).velocityX = 0
                        group2.get(p).velocityY = 0
                        group2.remove(group2.get(p))

                        // group3.add(group2)
                        green.width = 20
                        green.height = 20

                    }
                }
            }
        }
        for (var t = 0; t < group3.length; t++) {

        }

    }


    drawSprites()
}

