import type { Grade, Term, UniversityCourse, UniversityCourseColumn } from "+elements"
import { UniversityCourseTable } from "+elements"
import type { Locale } from "+i18n"
import { indistinguishable, LocaleProvider } from "+i18n"
import { render, screen, waitFor } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"

const terraforming: UniversityCourse = {
    name: { da: "Jordliggørelse", en: "Terraforming" },
    year: "2017", term: "autumn",
    weight: "10",
    grade: "10",
}

const launchVehicles: UniversityCourse = {
    name: { da: "Rumraketter", en: "Launch Vehicles" },
    year: "2017", term: "autumn", weight: "5", grade: "10",
}

const spaceCruise: UniversityCourse = {
    name: { da: "Rumrejse", en: "Space Cruise" },
    year: "2017", term: "spring",
    weight: "30",
    grade: "12",
}

const timeTravel: UniversityCourse = {
    name: { da: "Tidsrejse", en: "Time Travel" },
    year: "2018", term: "spring",
    weight: "5",
    grade: "7",
}

const zeroGravityFields: UniversityCourse = {
    name: { da: "Vægtløshed", en: "Zero Gravity Fields" },
    year: "2017", term: "summer",
    weight: "5",
    grade: "12",
}

const terrainRelativeNavigation1: UniversityCourse = {
    name: indistinguishable("Terrain Relative Navigation 1"),
    year: "2017", term: "autumn",
    weight: "5",
    grade: "pass",
}

const terrainRelativeNavigation2: UniversityCourse = {
    name: indistinguishable("Terrain Relative Navigation 2"),
    year: "2018", term: "spring",
    weight: "5",
    grade: "12",
}

const courses = {
    terraforming,
    launchVehicles,
    spaceCruise,
    timeTravel,
    zeroGravityFields,
    trn1: terrainRelativeNavigation1,
    trn2: terrainRelativeNavigation2,
} as const

test("The table rows are sorted in ascending order by year and term initially.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // THEN the table rows are sorted in ascending order by year and term initially (and then by key if their years and terms are equivalent).
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingCourseSequence([
                spaceCruise,
                zeroGravityFields,
                terraforming,
                launchVehicles,
                terrainRelativeNavigation1,
                timeTravel,
                terrainRelativeNavigation2,
            ]),
        )
    })
})

test("The table rows are sorted in descending order by year and term by clicking on the 'term' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingTopCourse(spaceCruise),
        )
    })
    
    // WHEN clicking on the 'term' column header.
    courseTable.clickColumnHeader("term")
    
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingCourseSequence([
                timeTravel,
                terrainRelativeNavigation2,
                terraforming,
                launchVehicles,
                terrainRelativeNavigation1,
                zeroGravityFields,
                spaceCruise,
            ]),
        )
    })
})

test("The table rows are sorted in ascending order by name by clicking on the 'name' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingTopCourse(spaceCruise),
        )
    })
    
    // WHEN clicking on the 'name' column header.
    courseTable.clickColumnHeader("name")
    
    // THEN the table rows are sorted in ascending order by name.
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingCourseSequence([
                launchVehicles,
                spaceCruise,
                terraforming,
                terrainRelativeNavigation1,
                terrainRelativeNavigation2,
                timeTravel,
                zeroGravityFields,
            ]),
        )
    })
})

test("The table rows are sorted in descending order by name by clicking on the 'name' column header two times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by name.
    courseTable.clickColumnHeader("name")
    
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingTopCourse(launchVehicles),
        )
    })
    
    // WHEN clicking on the 'name' column header.
    courseTable.clickColumnHeader("name")
    
    // THEN the table rows are sorted in descending order by name.
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingCourseSequence([
                zeroGravityFields,
                timeTravel,
                terrainRelativeNavigation2,
                terrainRelativeNavigation1,
                terraforming,
                spaceCruise,
                launchVehicles,
            ]),
        )
    })
})

test("The table rows are sorted in ascending order by name by clicking on the 'name' column header three times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in descending order by name.
    courseTable.clickColumnHeader("name")
    
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingTopCourse(launchVehicles),
        )
    })
    
    courseTable.clickColumnHeader("name")
    
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingTopCourse(zeroGravityFields),
        )
    })
    
    // WHEN clicking on the 'name' column header.
    courseTable.clickColumnHeader("name")
    
    // THEN the table rows are sorted in ascending order by name.
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingCourseSequence([
                launchVehicles,
                spaceCruise,
                terraforming,
                terrainRelativeNavigation1,
                terrainRelativeNavigation2,
                timeTravel,
                zeroGravityFields,
            ]),
        )
    })
})

test("The table rows are re-sorted by name when the locale changes while they are sorted by name.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by name.
    courseTable.clickColumnHeader("name")
    
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingTopCourse(launchVehicles),
        )
    })
    
    // WHEN changing the locale to Danish.
    courseTable.changeToDanishLocale()
    
    // THEN the table rows are re-sorted accordingly.
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingCourseSequence([
                terraforming,
                launchVehicles,
                spaceCruise,
                terrainRelativeNavigation1,
                terrainRelativeNavigation2,
                timeTravel,
                zeroGravityFields,
            ], "da"),
        )
    })
})

test("The table rows are sorted in ascending order by weight by clicking on the 'weight' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingTopCourse(spaceCruise),
        )
    })
    
    // WHEN clicking on the 'weight' column header.
    courseTable.clickColumnHeader("weight")
    
    // THEN the table rows are sorted in ascending order by weight (and then by key if their weights are equivalent).
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingCourseSequence([
                launchVehicles,
                timeTravel,
                zeroGravityFields,
                terrainRelativeNavigation1,
                terrainRelativeNavigation2,
                terraforming,
                spaceCruise,
            ]),
        )
    })
})

test("The table rows are sorted in descending order by weight by clicking on the 'weight' column header two times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by weight.
    courseTable.clickColumnHeader("weight")
    
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingTopCourse(launchVehicles),
        )
    })
    
    // WHEN clicking on the 'weight' column header.
    courseTable.clickColumnHeader("weight")
    
    // THEN the table rows are sorted in descending order by weight (and then by key if their weights are equivalent).
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingCourseSequence([
                spaceCruise,
                terraforming,
                launchVehicles,
                timeTravel,
                zeroGravityFields,
                terrainRelativeNavigation1,
                terrainRelativeNavigation2,
            ]),
        )
    })
})

test("The table rows are sorted in ascending order by grade by clicking on the 'grade' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingTopCourse(spaceCruise),
        )
    })
    
    // WHEN clicking on the 'grade' column header.
    courseTable.clickColumnHeader("grade")
    
    // THEN the table rows are sorted in ascending order by grade (and then by key if their grades are equivalent).
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingCourseSequence([
                terrainRelativeNavigation1,
                timeTravel,
                terraforming,
                launchVehicles,
                spaceCruise,
                zeroGravityFields,
                terrainRelativeNavigation2,
            ]),
        )
    })
})

test("The table rows are sorted in descending order by grade by clicking on the 'grade' column header two times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by grade.
    courseTable.clickColumnHeader("grade")
    
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingTopCourse(terrainRelativeNavigation1),
        )
    })
    
    // WHEN clicking on the 'grade' column header.
    courseTable.clickColumnHeader("grade")
    
    // THEN the table rows are sorted in descending order by grade (and then by key if their grades are equivalent).
    await waitFor(() => {
        expect(courseTable.getTable()).toHaveTextContent(
            matchingCourseSequence([
                spaceCruise,
                zeroGravityFields,
                terrainRelativeNavigation2,
                terraforming,
                launchVehicles,
                timeTravel,
                terrainRelativeNavigation1,
            ]),
        )
    })
})

test("The table is expanded by clicking on the expansion button.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table is not expanded yet.
    expect(courseTable.getExpandButton()).not.toHaveClass("hidden")
    
    // WHEN clicking on the expansion button.
    courseTable.clickExpandButton()
    
    // THEN the table is expanded.
    await waitFor(() => {
        expect(courseTable.getExpandButton()).toHaveClass("hidden")
    })
})

test("The table is expanded by clicking on the 'name' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table is not expanded yet.
    expect(courseTable.getExpandButton()).not.toHaveClass("hidden")
    
    // WHEN clicking on the 'name' column header.
    courseTable.clickColumnHeader("name")
    
    // THEN the table is expanded.
    await waitFor(() => {
        expect(courseTable.getExpandButton()).toHaveClass("hidden")
    })
})

test("The table is expanded by clicking on the 'term' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table is not expanded yet.
    expect(courseTable.getExpandButton()).not.toHaveClass("hidden")
    
    // WHEN clicking on the 'term' column header.
    courseTable.clickColumnHeader("term")
    
    // THEN the table is expanded.
    await waitFor(() => {
        expect(courseTable.getExpandButton()).toHaveClass("hidden")
    })
})

test("The table is expanded by clicking on the 'weight' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table is not expanded yet.
    expect(courseTable.getExpandButton()).not.toHaveClass("hidden")
    
    // WHEN clicking on the 'weight' column header.
    courseTable.clickColumnHeader("weight")
    
    // THEN the table is expanded.
    await waitFor(() => {
        expect(courseTable.getExpandButton()).toHaveClass("hidden")
    })
})

test("The table is expanded by clicking on the 'grade' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table is not expanded yet.
    expect(courseTable.getExpandButton()).not.toHaveClass("hidden")
    
    // WHEN clicking on the 'grade' column header.
    courseTable.clickColumnHeader("grade")
    
    // THEN the table is expanded.
    await waitFor(() => {
        expect(courseTable.getExpandButton()).toHaveClass("hidden")
    })
})

function renderUniversityCourseTable() {
    const { rerender } = render((
        <LocaleProvider value="en">
            <UniversityCourseTable courses={courses}/>
        </LocaleProvider>
    ))
    
    return {
        getTable: () => screen.getByRole("table"),
        getExpandButton: (locale: Locale = "en") => screen.getByRole("button", { name: getExpandButtonLabel(locale) }),
        clickColumnHeader: (column: UniversityCourseColumn, locale: Locale = "en") => {
            const columnHeader = screen.getByRole("button", {
                name: mapColumnToExpectedHeaderLabel(column, locale),
            })
            userEvent.click(columnHeader)
        },
        clickExpandButton: (locale: Locale = "en") => {
            const expandButton = screen.getByRole("button", { name: getExpandButtonLabel(locale) })
            userEvent.click(expandButton)
        },
        changeToDanishLocale: () => {
            rerender((
                <LocaleProvider value="da">
                    <UniversityCourseTable courses={courses}/>
                </LocaleProvider>
            ))
        },
    }
}

function matchingTopCourse(
    expectedTopCourse: UniversityCourse,
    locale: Locale = "en",
): string {
    const expectedTopCourseTextContent = mapCourse(expectedTopCourse, locale)
    
    return getExpectedColumnHeadersTextContent(locale)
        + expectedTopCourseTextContent
}

function matchingCourseSequence(
    expectedCourseSequence: ReadonlyArray<UniversityCourse>,
    locale: Locale = "en",
): string {
    const expectedCoursesTextContent = expectedCourseSequence
        .map((course) => mapCourse(course, locale))
        .join("")
    
    return getExpectedColumnHeadersTextContent(locale)
        + expectedCoursesTextContent
}

function mapCourse(
    { name, year, term, weight, grade }: UniversityCourse,
    locale: Locale,
): string {
    return `${name[locale]}${mapTermToExpectedLabel(term, locale)} ${year}${weight} ECTS${mapGradeToExpectedLabel(grade, locale)}`
}

function getExpectedColumnHeadersTextContent(locale: Locale): string {
    return mapColumnToExpectedHeaderLabel("name", locale)
        + mapColumnToExpectedHeaderLabel("term", locale)
        + mapColumnToExpectedHeaderLabel("weight", locale)
        + mapColumnToExpectedHeaderLabel("grade", locale)
}

function mapColumnToExpectedHeaderLabel(
    column: UniversityCourseColumn,
    locale: Locale,
): string {
    switch (column) {
        case "name":
            return { da: "Kursus", en: "Course" }[locale]
        case "term":
            return { da: "Semester", en: "Term" }[locale]
        case "weight":
            return { da: "Belastning", en: "Weight" }[locale]
        case "grade":
            return { da: "Karakter", en: "Grade" }[locale]
    }
}

function mapTermToExpectedLabel(term: Term, locale: Locale): string {
    switch (term) {
        case "spring":
            return { da: "Forår", en: "Spring" }[locale]
        case "summer":
            return { da: "Sommer", en: "Summer" }[locale]
        case "autumn":
            return { da: "Efterår", en: "Autumn" }[locale]
    }
}

function mapGradeToExpectedLabel(grade: Grade, locale: Locale): string {
    switch (grade) {
        case "pass":
            return { da: "bestået", en: "pass" }[locale]
        case "7":
            return { da: "7", en: "C" }[locale]
        case "10":
            return { da: "10", en: "B" }[locale]
        case "12":
            return { da: "12", en: "A" }[locale]
    }
}

function getExpandButtonLabel(locale: Locale): string {
    return { da: "Vis alle kurser", en: "Show all courses" }[locale]
}
