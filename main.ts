namespace StatusBarKind {
    export const IntrusiveThought = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(100)
})
tiles.setCurrentTilemap(tilemap`level2`)
info.setScore(0)
info.setLife(3)
info.startCountdown(1000)
let intrusive_thought_meter = statusbars.create(20, 4, StatusBarKind.IntrusiveThought)
intrusive_thought_meter.value = 0
intrusive_thought_meter.positionDirection(CollisionDirection.Left)
intrusive_thought_meter.setBarSize(3, 100)
intrusive_thought_meter.setColor(2, 15)
let name = game.askForString("What's your name?")
game.splash("You got grounded and need to get ungrounded!")
let user = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(user)
let tv_status = 1
