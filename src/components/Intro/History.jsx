import React from "react";
import { useTable } from 'react-table';

const History = () => {

    const historyData = React.useMemo(
        () => [
            {
                year: 2023,
                yContents: [
                    {
                        month: 1,
                        content: [
                            {a: "jan1"},
                            {a: "jan2"},
                        ]
                    },
                    {
                        month: 2,
                        content: [
                            {a: "feb1"},
                            {a: "feb2"},
                        ]
                    },
                ]
            },
        ]
    )

    const tableForm = React.useMemo(
        () => [
            {
                Header: "Year",
                accessor: "year",
                enableRowSpan: true
            },
            {
                Header: "Month",
                accessor: (row, index) => {
                    return row.yContents.map(content => content.month);
                },
                enableRowSpan: true
            },
            {
                Header: "Content",
                accessor: (row, index) => {
                    return row.yContents.map((content) => {
                        content.map(article => article.a);
                    })
                },
                enableRowSpan: true
            },
        ]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({tableForm, historyData});

    return (
        <section className="sections">

        </section>
    );

}

export default History;