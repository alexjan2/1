def dotkne_se(cat: Image, robot: Image, ubere_život: bool, _1: number):
    pass
game.set_life(game.score())

def on_forever():
    cat2: game.LedSprite = None
    game.remove_life(game.score())
    cat2.if_on_edge_bounce()
    game.remove_life(1)
basic.forever(on_forever)
