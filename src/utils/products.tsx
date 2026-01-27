export const getVisibleItems = <T extends Record<string, any>>(
    items: T[],
    sort: keyof T | undefined,
    order: 'asc' | 'desc' | undefined,
    page: number = 1,
    limit: number = 10
): T[] => {
    let res = [...items]

    if (sort) {
        res.sort((a, b) => {
            const aVal = a[sort]
            const bVal = b[sort]


            if (typeof aVal === 'string' || typeof bVal === 'string') {
                return order === 'asc'
                    ? String(aVal ?? '').localeCompare(String(bVal ?? ''))
                    : String(bVal ?? '').localeCompare(String(aVal ?? ''))
            }

            if (typeof aVal === 'number' && typeof bVal === 'number') {
                return order === 'asc' ? aVal - bVal : bVal - aVal
            }

            return 0
        })
    }

    const start = (page - 1) * limit
    const end = start + limit

    return res.slice(start, end)
}
