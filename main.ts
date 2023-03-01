basic.forever(function () {
    // note for length: Whole, Half, Quarter, Eighth, Sixteenth, only one note can be played at a time (becuse of the stupid micro.bit)
    music.setTempo(35)
    if (input.buttonIsPressed (Button.A && Button.B)) {
    	
    } 
    // this maddness does not work ask clark for help
    else if (input.pinIsPressed(TouchPin.P1)) {
music.stopAllSounds()
    }
    //scale (all notes but not sharps becuse no )
    else if (input.pinIsPressed(TouchPin.P0)) {
        //low
        music.playTone(Note.C5, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(Note.D3, music.beat(BeatFraction.Quarter))
        music.playTone(Note.Eb3, music.beat(BeatFraction.Quarter))
        music.playTone(Note.F3, music.beat(BeatFraction.Quarter))
        music.playTone(Note.G3, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A3, music.beat(BeatFraction.Quarter))
        music.playTone(Note.Bb3, music.beat(BeatFraction.Quarter))
        //middle
        music.playTone(Note.C, music.beat(BeatFraction.Quarter))
        music.playTone(Note.D, music.beat(BeatFraction.Quarter))
        music.playTone(Note.Eb, music.beat(BeatFraction.Quarter))
        music.playTone(Note.F, music.beat(BeatFraction.Quarter))
        music.playTone(Note.G, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A, music.beat(BeatFraction.Quarter))
        music.playTone(Note.Bb, music.beat(BeatFraction.Quarter))
        //high
        music.playTone(Note.C5, music.beat(BeatFraction.Quarter))
        music.playTone(Note.D5, music.beat(BeatFraction.Quarter))
        music.playTone(Note.Eb5, music.beat(BeatFraction.Quarter))
        music.playTone(Note.F5, music.beat(BeatFraction.Quarter))
        music.playTone(Note.G5, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A5, music.beat(BeatFraction.Quarter))
        music.playTone(Note.Bb5, music.beat(BeatFraction.Quarter))
        

    } else if (input.buttonIsPressed(Button.A)) {
    	
    } else if (input.buttonIsPressed(Button.B)) {
    	
    } else if (input.isGesture(Gesture.Shake)) {
    	
    } else if (input.lightLevel() < 100) {
       // mesure 1
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))

//mesure 2

        music.playTone(Note.E, music.beat(BeatFraction.Quarter)) 
        music.playTone(Note.Bb3, music.beat(BeatFraction.Eighth))
        music.playTone(Note.C, music.beat(BeatFraction.Eighth))
        music.playTone(Note.D, music.beat(BeatFraction.Eighth))
        music.playTone(Note.E, music.beat(BeatFraction.Sixteenth))
        music.playTone(Note.D, music.beat(BeatFraction.Sixteenth))
        music.playTone(Note.C, music.beat(BeatFraction.Eighth)) 
        music.playTone(Note.B3, music.beat(BeatFraction.Eighth))
//mesure 3

        music.playTone(Note.A3, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A3, music.beat(BeatFraction.Eighth))
        music.playTone(Note.C, music.beat(BeatFraction.Eighth))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
        music.playTone(Note.D, music.beat(BeatFraction.Eighth))
        music.playTone(Note.C, music.beat(BeatFraction.Eighth))

        music.playTone(Note.A3, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A3, music.beat(BeatFraction.Eighth))
        music.playTone(Note.C, music.beat(BeatFraction.Eighth))
        music.playTone(Note.D, music.beat(BeatFraction.Quarter))
        music.playTone(Note.E, music.beat(BeatFraction.Quarter))

        music.playTone(Note.C, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A3, music.beat(BeatFraction.Quarter))
        music.playTone(Note.A3, music.beat(BeatFraction.Quarter))
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
