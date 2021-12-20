import { multilingual } from "+i18n"

test("An indistinguishable expression 'Mars' says 'Mars' in both Danish and English.", () => {
    // GIVEN an indistinguishable expression 'Mars'.
    const expression = multilingual("Mars")
    
    // THEN it says 'Mars' in Danish.
    expect(expression.resolveFor("da")).toBe("Mars")
    
    // AND it says 'Mars' in English.
    expect(expression.resolveFor("en")).toBe("Mars")
})

test("An indistinguishable expression 'Jupiter' says 'Jupiter' in both Danish and English.", () => {
    // GIVEN an indistinguishable expression 'Jupiter'.
    const expression = multilingual("Jupiter")
    
    // THEN it says 'Jupiter' in Danish.
    expect(expression.resolveFor("da")).toBe("Jupiter")
    
    // AND it says 'Jupiter' in English.
    expect(expression.resolveFor("en")).toBe("Jupiter")
})

test("A multilingual expression 'Solen'/'Sun' says 'Solen' in Danish and 'Sun' in English.", () => {
    // GIVEN a multilingual expression 'Solen'/'Sun'.
    const expression = multilingual({ da: "Solen", en: "Sun" })
    
    // THEN it says 'Solen' in Danish.
    expect(expression.resolveFor("da")).toBe("Solen")
    
    // AND it says 'Sun' in English.
    expect(expression.resolveFor("en")).toBe("Sun")
})

test("A multilingual expression 'Månen'/'Moon' says 'Månen' in Danish and 'Moon' in English.", () => {
    // GIVEN a multilingual expression 'Månen'/'Moon'.
    const expression = multilingual({ da: "Månen", en: "Moon" })
    
    // THEN it says 'Månen' in Danish.
    expect(expression.resolveFor("da")).toBe("Månen")
    
    // AND it says 'Moon' in English.
    expect(expression.resolveFor("en")).toBe("Moon")
})
