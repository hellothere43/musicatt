basic.forever(function () {
    // note for length: Whole, Half, Quarter, Eighth, Sixteenth
    music.setTempo(140)
    if (input.buttonIsPressed (Button.A && Button.B)) {
    	
    } 
    //scale test
    else if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(Note.Bb, music.beat(BeatFraction.Quarter))
        music.playTone(Note.C, music.beat(BeatFraction.Quarter))
        music.playTone(Note.D, music.beat(BeatFraction.Quarter))
        music.playTone(Note.Eb, music.beat(BeatFraction.Quarter))
        music.playTone(Note.F, music.beat(BeatFraction.Quarter))
        music.playTone(Note.G, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A, music.beat(BeatFraction.Quarter))
        music.playTone(Note.Bb, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))

    } else if (input.buttonIsPressed(Button.A)) {
    	
    } else if (input.buttonIsPressed(Button.B)) {
    	
    } else if (input.isGesture(Gesture.Shake)) {
    	
    } else if (input.lightLevel() < 100) {
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))

        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.Bb, music.beat(BeatFraction.Eighth))
        music.playTone(Note.C, music.beat(BeatFraction.Eighth))
        music.playTone(Note.D, music.beat(BeatFraction.Eighth))
        music.playTone(Note.E, music.beat(BeatFraction.Sixteenth))
        music.playTone(Note.D, music.beat(BeatFraction.Sixteenth))
        music.playTone(Note.C, music.beat(BeatFraction.Eighth))
        music.playTone(Note.B, music.beat(BeatFraction.Eighth))

        music.playTone(Note.A, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A, music.beat(BeatFraction.Eighth))
        music.playTone(Note.C, music.beat(BeatFraction.Eighth))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.D, music.beat(BeatFraction.Eighth))
        music.playTone(Note.C, music.beat(BeatFraction.Eighth))

        music.playTone(Note.A, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A, music.beat(BeatFraction.Eighth))
        music.playTone(Note.C, music.beat(BeatFraction.Eighth))
        music.playTone(Note.D, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))

        music.playTone(Note.C, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))

//Line 2
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(Note.D, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A3, music.beat(BeatFraction.Eighth))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))

    }
})
