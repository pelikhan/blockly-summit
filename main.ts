scene.setBackgroundColor(11)
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . 3 3 3 3 5 5 5 b . 3 . 
    . . . . 3 b 5 d 3 3 3 3 3 3 3 . 
    . . . 3 b 3 3 3 3 3 3 3 3 3 3 3 
    . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 
    b d d 3 b b 3 3 5 5 4 4 4 4 3 3 
    b b d 3 5 3 3 5 5 4 4 4 4 4 3 3 
    b d c 3 3 5 5 d 5 5 5 5 5 b 3 3 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
