/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { useSortableTableRows } from "+elements"
import type { Comparator } from "+types"
import { act, renderHook } from "@testing-library/preact-hooks"

const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
] as const

type Planet = (typeof planets)[number]

const diameter: Readonly<Record<Planet, number>> = {
    Mercury: 4_880 /* km */,
    Venus: 12_104,
    Earth: 12_756,
    Mars: 6_794,
    Jupiter: 142_984,
    Saturn: 120_536,
    Uranus: 51_118,
    Neptune: 49_532,
}

const byDiameter: Comparator<Planet> =
    (left, right) => diameter[left] - diameter[right]

test("The table rows appear in ascending order upon being sorted by a comparator.", () => {
    // GIVEN a test subject.
    // GIVEN that a comparator is specified.
    const { result } = renderHook(() => useSortableTableRows({
        rows: planets,
        comparator: byDiameter,
    }))
    
    // THEN the table rows appear in an ordered sequence.
    expect(result.current!.sortedRows).toEqual([
        "Mercury",
        "Mars",
        "Venus",
        "Earth",
        "Neptune",
        "Uranus",
        "Saturn",
        "Jupiter",
    ])
    expect(result.current!.order).toBe("ascending")
})

test("The table rows appear in descending order upon being sorted by a comparator and reversed.", async () => {
    // GIVEN a test subject.
    // GIVEN that a comparator is specified.
    const { result } = renderHook(() => useSortableTableRows({
        rows: planets,
        comparator: byDiameter,
    }))
    
    // WHEN reversing the order.
    await act(() => {
        result.current!.setOrder("descending")
    })
    
    // THEN the table rows appear in a reversed ordered sequence.
    expect(result.current!.sortedRows).toEqual([
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
        "Earth",
        "Venus",
        "Mars",
        "Mercury",
    ])
    expect(result.current!.order).toBe("descending")
})
