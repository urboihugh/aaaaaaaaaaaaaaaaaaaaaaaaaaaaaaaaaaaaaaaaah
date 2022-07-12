basic.show_leds("""
    # # . # #
        # # . # #
        . . # . .
        # # # # #
        # . . . #
""")
basic.show_leds("""
    # . . # #
        # # . . #
        . . # . .
        # # # # .
        # . . . #
""")
basic.show_leds("""
    # . . # #
        . # . . .
        . . # . .
        . # # . #
        # . . . #
""")
basic.show_leds("""
    . . . . #
        . # . . .
        . . # . .
        . . . . #
        # . . . .
""")
basic.show_leds("""
    # # . . #
        . # # # .
        # # # . .
        # . . # #
        # . # # #
""")

def on_forever():
    music.play_melody("C5 B A G C D E F ", 120)
basic.forever(on_forever)
