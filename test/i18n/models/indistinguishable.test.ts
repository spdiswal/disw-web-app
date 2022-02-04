import { indistinguishable } from "+i18n"

test("An indistinguishable expression 'Mars' says 'Mars' in both Danish and English.", () => {
    // GIVEN an indistinguishable expression 'Mars'.
    const expression = indistinguishable("Mars")
    
    // THEN it says 'Mars' in Danish.
    expect(expression.da).toBe("Mars")
    
    // AND it says 'Mars' in English.
    expect(expression.en).toBe("Mars")
})

test("An indistinguishable expression 'Jupiter' says 'Jupiter' in both Danish and English.", () => {
    // GIVEN an indistinguishable expression 'Jupiter'.
    const expression = indistinguishable("Jupiter")
    
    // THEN it says 'Jupiter' in Danish.
    expect(expression.da).toBe("Jupiter")
    
    // AND it says 'Jupiter' in English.
    expect(expression.en).toBe("Jupiter")
})
