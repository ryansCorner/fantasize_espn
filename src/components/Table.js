import React from 'react'

const Table = ({ columns, data }) => {
    console.log('taaaaaaaaable ', columns, data)
    var columns = columns
    var data = data
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups if your table have groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function need to called for each row before getting the row props)

    } = useTable({
        columns,
        data
    })

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default Table

// export default function Table({ columns, data }) {
//     const {
//         getTableProps, // table props from react-table
//         getTableBodyProps, // table body props from react-table
//         headerGroups, // headerGroups if your table have groupings
//         rows, // rows for the table based on the data passed
//         prepareRow // Prepare the row (this function need to called for each row before getting the row props)

//     } = useTable({
//         columns,
//         data
//     })


//     return (
//         <table {...getTableProps()}>
//             <thead>
//                 {headerGroups.map(headerGroup => (
//                     <tr {...headerGroup.getHeaderGroupProps()}>
//                         {headerGroup.headers.map(column => (
//                             <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//                         ))}
//                     </tr>
//                 ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//                 {rows.map((row, i) => {
//                     prepareRow(row);
//                     return (
//                         <tr {...row.getRowProps()}>
//                             {row.cells.map(cell => {
//                                 return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                             })}
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>
//     )
// }
