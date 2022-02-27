import { LocaleProvider } from "+i18n"
import type { Grade, Term, UniversityCourse, UniversityCourseColumn } from "+profile"
import { UniversityCourseTable } from "+profile"
import { render, screen } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"

const terraforming: UniversityCourse = {
    name: "Terraforming",
    year: "2017", term: "autumn",
    weight: "10",
    grade: "10",
}

const launchVehicles: UniversityCourse = {
    name: "Launch Vehicles",
    year: "2017", term: "autumn", weight: "5", grade: "10",
}

const spaceCruise: UniversityCourse = {
    name: "Space Cruise",
    year: "2017", term: "spring",
    weight: "30",
    grade: "12",
}

const timeTravel: UniversityCourse = {
    name: "Time Travel",
    year: "2018", term: "spring",
    weight: "5",
    grade: "7",
}

const zeroGravityFields: UniversityCourse = {
    name: "Zero Gravity Fields",
    year: "2017", term: "summer",
    weight: "5",
    grade: "12",
}

const terrainRelativeNavigation1: UniversityCourse = {
    name: "Terrain Relative Navigation 1",
    year: "2017", term: "autumn",
    weight: "5",
    grade: "pass",
}

const terrainRelativeNavigation2: UniversityCourse = {
    name: "Terrain Relative Navigation 2",
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

test("The table rows are sorted in ascending order by year and term initially.", () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // THEN the table rows are sorted in ascending order by year and term initially (and then by key if their years and terms are equivalent).
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

test("The table rows are sorted in descending order by year and term by clicking on the 'term' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    expect(courseTable.getTable()).toHaveTextContent(
        matchingTopCourse(spaceCruise),
    )
    
    // WHEN clicking on the 'term' column header.
    await courseTable.clickColumnHeader("term")
    
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

test("The table rows are sorted in ascending order by name by clicking on the 'name' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    expect(courseTable.getTable()).toHaveTextContent(
        matchingTopCourse(spaceCruise),
    )
    
    // WHEN clicking on the 'name' column header.
    await courseTable.clickColumnHeader("name")
    
    // THEN the table rows are sorted in ascending order by name.
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

test("The table rows are sorted in descending order by name by clicking on the 'name' column header two times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by name.
    await courseTable.clickColumnHeader("name")
    
    expect(courseTable.getTable()).toHaveTextContent(
        matchingTopCourse(launchVehicles),
    )
    
    // WHEN clicking on the 'name' column header.
    await courseTable.clickColumnHeader("name")
    
    // THEN the table rows are sorted in descending order by name.
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

test("The table rows are sorted in ascending order by name by clicking on the 'name' column header three times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in descending order by name.
    await courseTable.clickColumnHeader("name")
    
    expect(courseTable.getTable()).toHaveTextContent(
        matchingTopCourse(launchVehicles),
    )
    
    await courseTable.clickColumnHeader("name")
    
    expect(courseTable.getTable()).toHaveTextContent(
        matchingTopCourse(zeroGravityFields),
    )
    
    // WHEN clicking on the 'name' column header.
    await courseTable.clickColumnHeader("name")
    
    // THEN the table rows are sorted in ascending order by name.
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

test("The table rows are sorted in ascending order by weight by clicking on the 'weight' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    expect(courseTable.getTable()).toHaveTextContent(
        matchingTopCourse(spaceCruise),
    )
    
    // WHEN clicking on the 'weight' column header.
    await courseTable.clickColumnHeader("weight")
    
    // THEN the table rows are sorted in ascending order by weight (and then by key if their weights are equivalent).
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

test("The table rows are sorted in descending order by weight by clicking on the 'weight' column header two times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by weight.
    await courseTable.clickColumnHeader("weight")
    
    expect(courseTable.getTable()).toHaveTextContent(
        matchingTopCourse(launchVehicles),
    )
    
    // WHEN clicking on the 'weight' column header.
    await courseTable.clickColumnHeader("weight")
    
    // THEN the table rows are sorted in descending order by weight (and then by key if their weights are equivalent).
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

test("The table rows are sorted in ascending order by grade by clicking on the 'grade' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    expect(courseTable.getTable()).toHaveTextContent(
        matchingTopCourse(spaceCruise),
    )
    
    // WHEN clicking on the 'grade' column header.
    await courseTable.clickColumnHeader("grade")
    
    // THEN the table rows are sorted in ascending order by grade (and then by key if their grades are equivalent).
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

test("The table rows are sorted in descending order by grade by clicking on the 'grade' column header two times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by grade.
    await courseTable.clickColumnHeader("grade")
    
    expect(courseTable.getTable()).toHaveTextContent(
        matchingTopCourse(terrainRelativeNavigation1),
    )
    
    // WHEN clicking on the 'grade' column header.
    await courseTable.clickColumnHeader("grade")
    
    // THEN the table rows are sorted in descending order by grade (and then by key if their grades are equivalent).
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

test("The table is expanded by clicking on the expansion button.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table is not expanded yet.
    expect(courseTable.getExpandButton()).not.toHaveClass("hidden")
    
    // WHEN clicking on the expansion button.
    await courseTable.clickExpandButton()
    
    // THEN the table is expanded.
    expect(courseTable.getExpandButton()).toHaveClass("hidden")
})

test("The table is expanded by clicking on the 'name' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table is not expanded yet.
    expect(courseTable.getExpandButton()).not.toHaveClass("hidden")
    
    // WHEN clicking on the 'name' column header.
    await courseTable.clickColumnHeader("name")
    
    // THEN the table is expanded.
    expect(courseTable.getExpandButton()).toHaveClass("hidden")
})

test("The table is expanded by clicking on the 'term' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table is not expanded yet.
    expect(courseTable.getExpandButton()).not.toHaveClass("hidden")
    
    // WHEN clicking on the 'term' column header.
    await courseTable.clickColumnHeader("term")
    
    // THEN the table is expanded.
    expect(courseTable.getExpandButton()).toHaveClass("hidden")
})

test("The table is expanded by clicking on the 'weight' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table is not expanded yet.
    expect(courseTable.getExpandButton()).not.toHaveClass("hidden")
    
    // WHEN clicking on the 'weight' column header.
    await courseTable.clickColumnHeader("weight")
    
    // THEN the table is expanded.
    expect(courseTable.getExpandButton()).toHaveClass("hidden")
})

test("The table is expanded by clicking on the 'grade' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table is not expanded yet.
    expect(courseTable.getExpandButton()).not.toHaveClass("hidden")
    
    // WHEN clicking on the 'grade' column header.
    await courseTable.clickColumnHeader("grade")
    
    // THEN the table is expanded.
    expect(courseTable.getExpandButton()).toHaveClass("hidden")
})

const columnHeaderLabels: Readonly<Record<UniversityCourseColumn, string>> = {
    name: "Course",
    term: "Term",
    weight: "Weight",
    grade: "Grade",
}

function renderUniversityCourseTable() {
    const user = userEvent.setup()
    
    render((
        <LocaleProvider value="en">
            <UniversityCourseTable courses={courses}/>
        </LocaleProvider>
    ))
    
    function getTable() {
        return screen.getByRole("table")
    }
    
    function getExpandButton() {
        return screen.getByRole("button", { name: "Show all courses" })
    }
    
    async function clickExpandButton() {
        await user.click(getExpandButton())
    }
    
    async function clickColumnHeader(column: UniversityCourseColumn) {
        const columnHeader = screen.getByRole("button", {
            name: columnHeaderLabels[column],
        })
        await user.click(columnHeader)
    }
    
    return {
        getTable,
        getExpandButton,
        clickColumnHeader,
        clickExpandButton,
    }
}

const columnHeadersTextContent =
    columnHeaderLabels.name
    + columnHeaderLabels.term
    + columnHeaderLabels.weight
    + columnHeaderLabels.grade

function matchingTopCourse(expectedTopCourse: UniversityCourse): string {
    return columnHeadersTextContent + mapCourse(expectedTopCourse)
}

function matchingCourseSequence(
    expectedCourseSequence: ReadonlyArray<UniversityCourse>,
): string {
    return columnHeadersTextContent
        + expectedCourseSequence.map(mapCourse).join("")
}

const termLabels: Readonly<Record<Term, string>> = {
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
}

const gradeLabels: Readonly<Record<Grade, string>> = {
    pass: "pass",
    7: "C",
    10: "B",
    12: "A",
}

function mapCourse(
    { name, year, term, weight, grade }: UniversityCourse,
): string {
    return `${name}${termLabels[term]} ${year}${weight} ECTS${gradeLabels[grade]}`
}
