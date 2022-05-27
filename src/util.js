export function getMonth(month=new Date().getMonth()){
    const year = new Date().getFullYear()
    const firstDayOfMonth = new Date(year,month,1).getDay()
    let currentMonthCount = 0-firstDayOfMonth
    const dayMatrix = new Array(6).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++
            return new Date(year,month,currentMonthCount)
        })
    })
    return dayMatrix
}

export function getWeek(day=new Date().getDay()){
    const year = new Date().getFullYear()
    const firstDayOfMonth = new Date(year,month,1).getDay()
    let currentMonthCount = 0-firstDayOfMonth
    const dayMatrix = new Array(6).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++
            return new Date(year,month,currentMonthCount)
        })
    })
    return dayMatrix
}