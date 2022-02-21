import type { UniversityCourse } from "+elements"
import { UniversityCourseTable } from "+elements"
import { indistinguishable, LocaleProvider } from "+i18n"
import { render, screen, waitFor } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"

const courses: Readonly<Record<string, UniversityCourse>> = {
    "terraforming": { name: { da: "Jordliggørelse", en: "Terraforming" }, year: "2017", term: "autumn", weight: "10", grade: "10" },
    "launch-vehicles": { name: { da: "Rumraketter", en: "Launch Vehicles" }, year: "2017", term: "autumn", weight: "5", grade: "10" },
    "space-cruise": { name: { da: "Rumrejse", en: "Space Cruise" }, year: "2017", term: "spring", weight: "30", grade: "12" },
    "time-travel": { name: { da: "Tidsrejse", en: "Time Travel" }, year: "2018", term: "spring", weight: "5", grade: "7" },
    "low-gravity-fields": { name: { da: "Vægtløshed", en: "Zero Gravity Fields" }, year: "2017", term: "summer", weight: "5", grade: "12" },
    "trn-1": { name: indistinguishable("Terrain Relative Navigation 1"), year: "2017", term: "autumn", weight: "5", grade: "pass" },
    "trn-2": { name: indistinguishable("Terrain Relative Navigation 2"), year: "2018", term: "spring", weight: "5", grade: "12" },
}

test("The table rows are sorted in ascending order by year and term initially.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // THEN the table rows are sorted in ascending order by year and term initially (and then by key if their years and terms are equivalent).
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Space Cruise")
    })
    expect(courseTable.getRows()[2]).toHaveTextContent("Zero Gravity Fields")
    expect(courseTable.getRows()[3]).toHaveTextContent("Terraforming")
    expect(courseTable.getRows()[4]).toHaveTextContent("Launch Vehicles")
    expect(courseTable.getRows()[5]).toHaveTextContent("Terrain Relative Navigation 1")
    expect(courseTable.getRows()[6]).toHaveTextContent("Time Travel")
    expect(courseTable.getRows()[7]).toHaveTextContent("Terrain Relative Navigation 2")
})

test("The table rows are sorted in descending order by year and term by clicking on the 'term' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Space Cruise")
    })
    
    // WHEN clicking on the 'term' column header.
    courseTable.clickColumnHeader("Term")
    
    // THEN the table rows are sorted in descending order by year and term (and then by key if their years and terms are equivalent).
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Time Travel")
    })
    
    expect(courseTable.getRows()[2]).toHaveTextContent("Terrain Relative Navigation 2")
    expect(courseTable.getRows()[3]).toHaveTextContent("Terraforming")
    expect(courseTable.getRows()[4]).toHaveTextContent("Launch Vehicles")
    expect(courseTable.getRows()[5]).toHaveTextContent("Terrain Relative Navigation 1")
    expect(courseTable.getRows()[6]).toHaveTextContent("Zero Gravity Fields")
    expect(courseTable.getRows()[7]).toHaveTextContent("Space Cruise")
})

test("The table rows are sorted in ascending order by name by clicking on the 'name' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Space Cruise")
    })
    
    // WHEN clicking on the 'name' column header.
    courseTable.clickColumnHeader("Course")
    
    // THEN the table rows are sorted in ascending order by name.
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Launch Vehicles")
    })
    expect(courseTable.getRows()[2]).toHaveTextContent("Space Cruise")
    expect(courseTable.getRows()[3]).toHaveTextContent("Terraforming")
    expect(courseTable.getRows()[4]).toHaveTextContent("Terrain Relative Navigation 1")
    expect(courseTable.getRows()[5]).toHaveTextContent("Terrain Relative Navigation 2")
    expect(courseTable.getRows()[6]).toHaveTextContent("Time Travel")
    expect(courseTable.getRows()[7]).toHaveTextContent("Zero Gravity Fields")
})

test("The table rows are sorted in descending order by name by clicking on the 'name' column header two times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by name.
    courseTable.clickColumnHeader("Course")
    
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Launch Vehicles")
    })
    
    // WHEN clicking on the 'name' column header.
    courseTable.clickColumnHeader("Course")
    
    // THEN the table rows are sorted in descending order by name.
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Zero Gravity Fields")
    })
    expect(courseTable.getRows()[2]).toHaveTextContent("Time Travel")
    expect(courseTable.getRows()[3]).toHaveTextContent("Terrain Relative Navigation 2")
    expect(courseTable.getRows()[4]).toHaveTextContent("Terrain Relative Navigation 1")
    expect(courseTable.getRows()[5]).toHaveTextContent("Terraforming")
    expect(courseTable.getRows()[6]).toHaveTextContent("Space Cruise")
    expect(courseTable.getRows()[7]).toHaveTextContent("Launch Vehicles")
})

test("The table rows are sorted in ascending order by name by clicking on the 'name' column header three times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in descending order by name.
    courseTable.clickColumnHeader("Course")
    
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Launch Vehicles")
    })
    
    courseTable.clickColumnHeader("Course")
    
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Zero Gravity Fields")
    })
    
    // WHEN clicking on the 'name' column header.
    courseTable.clickColumnHeader("Course")
    
    // THEN the table rows are sorted in ascending order by name.
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Launch Vehicles")
    })
    expect(courseTable.getRows()[2]).toHaveTextContent("Space Cruise")
    expect(courseTable.getRows()[3]).toHaveTextContent("Terraforming")
    expect(courseTable.getRows()[4]).toHaveTextContent("Terrain Relative Navigation 1")
    expect(courseTable.getRows()[5]).toHaveTextContent("Terrain Relative Navigation 2")
    expect(courseTable.getRows()[6]).toHaveTextContent("Time Travel")
    expect(courseTable.getRows()[7]).toHaveTextContent("Zero Gravity Fields")
})

test("The table rows are re-sorted by name when the locale changes while they are sorted by name.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by name.
    courseTable.clickColumnHeader("Course")
    
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Launch Vehicles")
    })
    
    // WHEN changing the locale to Danish.
    courseTable.changeToDanishLocale()
    
    // THEN the table rows are re-sorted accordingly.
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Jordliggørelse")
    })
    expect(courseTable.getRows()[2]).toHaveTextContent("Rumraketter")
    expect(courseTable.getRows()[3]).toHaveTextContent("Rumrejse")
    expect(courseTable.getRows()[4]).toHaveTextContent("Terrain Relative Navigation 1")
    expect(courseTable.getRows()[5]).toHaveTextContent("Terrain Relative Navigation 2")
    expect(courseTable.getRows()[6]).toHaveTextContent("Tidsrejse")
    expect(courseTable.getRows()[7]).toHaveTextContent("Vægtløshed")
})

test("The table rows are sorted in ascending order by weight by clicking on the 'weight' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Space Cruise")
    })
    
    // WHEN clicking on the 'weight' column header.
    courseTable.clickColumnHeader("Weight")
    
    // THEN the table rows are sorted in ascending order by weight (and then by key if their weights are equivalent).
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Launch Vehicles")
    })
    expect(courseTable.getRows()[2]).toHaveTextContent("Time Travel")
    expect(courseTable.getRows()[3]).toHaveTextContent("Zero Gravity Fields")
    expect(courseTable.getRows()[4]).toHaveTextContent("Terrain Relative Navigation 1")
    expect(courseTable.getRows()[5]).toHaveTextContent("Terrain Relative Navigation 2")
    expect(courseTable.getRows()[6]).toHaveTextContent("Terraforming")
    expect(courseTable.getRows()[7]).toHaveTextContent("Space Cruise")
})

test("The table rows are sorted in descending order by weight by clicking on the 'weight' column header two times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by weight.
    courseTable.clickColumnHeader("Weight")
    
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Launch Vehicles")
    })
    
    // WHEN clicking on the 'weight' column header.
    courseTable.clickColumnHeader("Weight")
    
    // THEN the table rows are sorted in descending order by weight (and then by key if their weights are equivalent).
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Space Cruise")
    })
    expect(courseTable.getRows()[2]).toHaveTextContent("Terraforming")
    expect(courseTable.getRows()[3]).toHaveTextContent("Launch Vehicles")
    expect(courseTable.getRows()[4]).toHaveTextContent("Time Travel")
    expect(courseTable.getRows()[5]).toHaveTextContent("Zero Gravity Fields")
    expect(courseTable.getRows()[6]).toHaveTextContent("Terrain Relative Navigation 1")
    expect(courseTable.getRows()[7]).toHaveTextContent("Terrain Relative Navigation 2")
})

test("The table rows are sorted in ascending order by grade by clicking on the 'grade' column header.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by year and term.
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Space Cruise")
    })
    
    // WHEN clicking on the 'grade' column header.
    courseTable.clickColumnHeader("Grade")
    
    // THEN the table rows are sorted in ascending order by grade (and then by key if their grades are equivalent).
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Terrain Relative Navigation 1")
    })
    expect(courseTable.getRows()[2]).toHaveTextContent("Time Travel")
    expect(courseTable.getRows()[3]).toHaveTextContent("Terraforming")
    expect(courseTable.getRows()[4]).toHaveTextContent("Launch Vehicles")
    expect(courseTable.getRows()[5]).toHaveTextContent("Space Cruise")
    expect(courseTable.getRows()[6]).toHaveTextContent("Zero Gravity Fields")
    expect(courseTable.getRows()[7]).toHaveTextContent("Terrain Relative Navigation 2")
})

test("The table rows are sorted in descending order by grade by clicking on the 'grade' column header two times.", async () => {
    // GIVEN a test subject.
    const courseTable = renderUniversityCourseTable()
    
    // GIVEN that the table rows are already sorted in ascending order by grade.
    courseTable.clickColumnHeader("Grade")
    
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Terrain Relative Navigation 1")
    })
    
    // WHEN clicking on the 'grade' column header.
    courseTable.clickColumnHeader("Grade")
    
    // THEN the table rows are sorted in descending order by grade (and then by key if their grades are equivalent).
    await waitFor(() => {
        expect(courseTable.getRows()[1]).toHaveTextContent("Space Cruise")
    })
    
    expect(courseTable.getRows()[2]).toHaveTextContent("Zero Gravity Fields")
    expect(courseTable.getRows()[3]).toHaveTextContent("Terrain Relative Navigation 2")
    expect(courseTable.getRows()[4]).toHaveTextContent("Terraforming")
    expect(courseTable.getRows()[5]).toHaveTextContent("Launch Vehicles")
    expect(courseTable.getRows()[6]).toHaveTextContent("Time Travel")
    expect(courseTable.getRows()[7]).toHaveTextContent("Terrain Relative Navigation 1")
})

function renderUniversityCourseTable() {
    const { rerender } = render((
        <LocaleProvider value="en">
            <UniversityCourseTable courses={courses}/>
        </LocaleProvider>
    ))
    
    return {
        getRows: () => screen.getAllByRole("row"),
        clickColumnHeader: (columnLabel: string) => {
            const columnHeader = screen.getByRole("columnheader", { name: columnLabel })
            userEvent.click(columnHeader)
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
