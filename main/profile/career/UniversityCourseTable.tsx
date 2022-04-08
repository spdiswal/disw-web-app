import { Expandable, SortableTableColumnHeader, Table, TableCell, useExpansionRequestSubscriber, useSortableTableRows } from "+elements"
import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { Comparator, Year } from "+types"
import { Fragment } from "preact"
import { useCallback, useMemo, useState } from "preact/hooks"

const columns = ["name", "term", "weight", "grade"] as const
export type CourseColumn = typeof columns[number]

const columnHeaderLabel: Readonly<Record<CourseColumn, Localisable<string>>> = {
    name: { da: "Kursus", en: "Course" },
    term: { da: "Semester", en: "Term" },
    weight: { da: "Belastning", en: "Weight" },
    grade: { da: "Karakter", en: "Grade" },
}

const termLabel: Readonly<Record<Term, Localisable<string>>> = {
    spring: { da: "Forår", en: "Spring" },
    summer: { da: "Sommer", en: "Summer" },
    autumn: { da: "Efterår", en: "Autumn" },
}

const gradeLabel: Readonly<Record<Grade, Localisable<string>>> = {
    pass: { da: "bestået", en: "pass" },
    7: { da: "7", en: "C" },
    10: { da: "10", en: "B" },
    12: { da: "12", en: "A" },
}

type UniversityCourseTableProps = {
    readonly courses: Readonly<Record<string, UniversityCourse>>
}

export type UniversityCourse = {
    readonly name: string
    readonly year: Year
    readonly term: Term
    readonly weight: Weight
    readonly grade: Grade
}

export type Term = "spring" | "summer" | "autumn"
export type Weight = "5" | "10" | "30"
export type Grade = "pass" | "7" | "10" | "12"

export function UniversityCourseTable({
    courses,
}: UniversityCourseTableProps) {
    const locale = useLocale()
    
    const compareAsCourses =
        useCallback((comparator: Comparator<UniversityCourse>) => {
            return (
                (left, right) => comparator(courses[left], courses[right])
            ) as Comparator<string>
        }, [courses])
    
    const [activeColumn, setActiveColumn] = useState<CourseColumn>("term")
    const comparator =
        useMemo(() => {
            return compareAsCourses(getColumnComparator(activeColumn))
        }, [compareAsCourses, activeColumn])
    
    const rows = useMemo(() => Object.keys(courses), [courses])
    const { sortedRows, order, setOrder } =
        useSortableTableRows({ rows, comparator })
    
    const { subscribe, expand } = useExpansionRequestSubscriber()
    const expandAndSortByColumn = useCallback((column: CourseColumn) => {
        expand()
        
        if (column !== activeColumn) {
            setActiveColumn(column)
            setOrder("ascending")
        } else {
            setOrder(order === "ascending" ? "descending" : "ascending")
        }
    }, [activeColumn, expand, order, setOrder])
    
    const table = useMemo(() => (
        <Table
            columns={columns}
            rows={sortedRows}
            renderColumnHeader={(column) => (
                <SortableTableColumnHeader
                    order={column === activeColumn ? order : undefined}
                    onClick={() => expandAndSortByColumn(column)}
                >
                    {columnHeaderLabel[column][locale]}
                </SortableTableColumnHeader>
            )}
            renderRow={(row) => {
                const { name, year, term, weight, grade } = courses[row]
                
                return (
                    <Fragment>
                        <TableCell class="font-semibold">
                            <div class="w-44 sm:w-auto md:w-44 lg:w-auto">
                                {name}
                            </div>
                        </TableCell>
                        <TableCell class="whitespace-nowrap">
                            {termLabel[term][locale]}{" "}{year}
                        </TableCell>
                        <TableCell class="whitespace-nowrap">
                            {weight}{" "}ECTS
                        </TableCell>
                        <TableCell class="whitespace-nowrap">
                            {gradeLabel[grade][locale]}
                        </TableCell>
                    </Fragment>
                )
            }}
        />
    ), [
        locale,
        courses,
        activeColumn,
        order,
        sortedRows,
        expandAndSortByColumn,
    ])
    
    return (
        <Expandable
            buttonLabels={{
                collapsed: { da: "Vis alle kurser", en: "Show all courses" }[locale],
                expanded: { da: "Skjul kurserne", en: "Hide the courses" }[locale],
            }}
            subscribeToExpansionRequests={subscribe}
        >
            {table}
        </Expandable>
    )
}

const byName: Comparator<UniversityCourse> =
    ({ name: left }, { name: right }) => left.localeCompare(right)

const byYear: Comparator<UniversityCourse> =
    ({ year: left }, { year: right }) => Number(left) - Number(right)

const byTerm: Comparator<UniversityCourse> =
    ({ term: left }, { term: right }) => {
        if (left === right) {
            return 0
        } else if (left === "spring") {
            return -1
        } else if (right === "spring") {
            return 1
        } else if (left === "summer") {
            return -1
        } else {
            return 1
        }
    }

const byYearAndTerm: Comparator<UniversityCourse> =
    (left, right) => {
        const yearComparison = byYear(left, right)
        return yearComparison !== 0 ? yearComparison : byTerm(left, right)
    }

const byWeight: Comparator<UniversityCourse> =
    ({ weight: left }, { weight: right }) => {
        return Number(left) - Number(right)
    }

const byGrade: Comparator<UniversityCourse> =
    ({ grade: left }, { grade: right }) => {
        if (left === right) {
            return 0
        } else if (left === "pass") {
            return -1
        } else if (right === "pass") {
            return 1
        } else {
            return Number(left) - Number(right)
        }
    }

function getColumnComparator(
    column: CourseColumn,
): Comparator<UniversityCourse> {
    switch (column) {
        case "name":
            return byName
        
        case "term":
            return byYearAndTerm
        
        case "weight":
            return byWeight
        
        case "grade":
            return byGrade
    }
}
