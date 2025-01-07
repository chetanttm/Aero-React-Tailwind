import React, { useMemo } from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactDataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

export default function DataTable() {

    const breadcrumbItem = [
        {
            name: "Tables",
        },
        {
            name: "Data Table",
        },
    ]

    const columnsBasic = [
        {
            name: '#',
            selector: row => row.number,
        },
        {
            name: 'First Name',
            selector: row => row.firstName,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
        },
        {
            name: 'Username',
            selector: row => row.username,
        },
    ];

    const dataBasic = [
        {
            number: '1',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
        },
        {
            number: '2',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '3',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
        {
            number: '4',
            firstName: 'Larry',
            lastName: 'Jellybean',
            username: '@lajelly',
        },
        {
            number: '5',
            firstName: 'Larry',
            lastName: 'Kikat',
            username: '@lakitkat',
        },
    ]

    const columnsSorting = [
        {
            name: '#',
            selector: row => row.number,
            sortable: true,
        },
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true,
        },
        {
            name: 'Username',
            selector: row => row.username,
            sortable: true,
        },
    ];

    const dataSorting = [
        {
            number: '1',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
        },
        {
            number: '2',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '3',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
        {
            number: '4',
            firstName: 'Larry',
            lastName: 'Jellybean',
            username: '@lajelly',
        },
        {
            number: '5',
            firstName: 'Larry',
            lastName: 'Kikat',
            username: '@lakitkat',
        },
    ]

    const columnsSelectable = [
        {
            name: '#',
            selector: row => row.number,
        },
        {
            name: 'First Name',
            selector: row => row.firstName,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
        },
        {
            name: 'Username',
            selector: row => row.username,
        },
    ];

    const dataSelectable = [
        {
            number: '1',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
        },
        {
            number: '2',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '3',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
        {
            number: '4',
            firstName: 'Larry',
            lastName: 'Jellybean',
            username: '@lajelly',
        },
        {
            number: '5',
            firstName: 'Larry',
            lastName: 'Kikat',
            username: '@lakitkat',
        },
    ]

    const Checkbox = React.forwardRef(({ onClick, ...rest }, ref) => {
        return (
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    ref={ref}
                    onClick={onClick}
                    {...rest}
                />
            </div>
        )
    })

    const columnsExpandable = [
        {
            name: '#',
            selector: row => row.number,
        },
        {
            name: 'First Name',
            selector: row => row.firstName,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
        },
        {
            name: 'Username',
            selector: row => row.username,
        },
    ];

    const dataExpandable = [
        {
            number: '1',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            content: 'No. : 1 <br/> First Name : Mark <br/> Last Name : Otto <br/> Username : @mdo'
        },
        {
            number: '2',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '3',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
        {
            number: '4',
            firstName: 'Larry',
            lastName: 'Jellybean',
            username: '@lajelly',
        },
        {
            number: '5',
            firstName: 'Larry',
            lastName: 'Kikat',
            username: '@lakitkat',
        },
    ]

    const ExpandedComponent = ({ data }) => {
        return data && data.content ?
            (
                <div className='p-15' dangerouslySetInnerHTML={{ __html: data.content }} />
            ) : (
                <div className='p-15'>No Data Found</div>
            );
    };

    const columnsPagination = [
        {
            name: '#',
            selector: row => row.number,
        },
        {
            name: 'First Name',
            selector: row => row.firstName,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
        },
        {
            name: 'Username',
            selector: row => row.username,
        },
    ];

    const dataPagination = [
        {
            number: '1',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            content: 'No. : 1 <br/> First Name : Mark <br/> Last Name : Otto <br/> Username : @mdo'
        },
        {
            number: '2',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '3',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
        {
            number: '4',
            firstName: 'Larry',
            lastName: 'Jellybean',
            username: '@lajelly',
        },
        {
            number: '5',
            firstName: 'Larry',
            lastName: 'Kikat',
            username: '@lakitkat',
        },
        {
            number: '6',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            content: 'No. : 1 <br/> First Name : Mark <br/> Last Name : Otto <br/> Username : @mdo'
        },
        {
            number: '7',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '8',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
        {
            number: '9',
            firstName: 'Larry',
            lastName: 'Jellybean',
            username: '@lajelly',
        },
        {
            number: '10',
            firstName: 'Larry',
            lastName: 'Kikat',
            username: '@lakitkat',
        },
        {
            number: '11',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            content: 'No. : 1 <br/> First Name : Mark <br/> Last Name : Otto <br/> Username : @mdo'
        },
        {
            number: '12',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '13',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
    ]

    const columnsFilter = [
        {
            name: '#',
            selector: row => row.number,
        },
        {
            name: 'First Name',
            selector: row => row.firstName,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
        },
        {
            name: 'Username',
            selector: row => row.username,
        },
    ];

    const dataFilter = [
        {
            number: '1',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            content: 'No. : 1 <br/> First Name : Mark <br/> Last Name : Otto <br/> Username : @mdo'
        },
        {
            number: '2',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '3',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
        {
            number: '4',
            firstName: 'Larry',
            lastName: 'Jellybean',
            username: '@lajelly',
        },
        {
            number: '5',
            firstName: 'Larry',
            lastName: 'Kikat',
            username: '@lakitkat',
        },
        {
            number: '6',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            content: 'No. : 1 <br/> First Name : Mark <br/> Last Name : Otto <br/> Username : @mdo'
        },
        {
            number: '7',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '8',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
        {
            number: '9',
            firstName: 'Larry',
            lastName: 'Jellybean',
            username: '@lajelly',
        },
        {
            number: '10',
            firstName: 'Larry',
            lastName: 'Kikat',
            username: '@lakitkat',
        },
        {
            number: '11',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            content: 'No. : 1 <br/> First Name : Mark <br/> Last Name : Otto <br/> Username : @mdo'
        },
        {
            number: '12',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '13',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
    ]

    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = dataFilter.filter(
        item =>
            item.number.toLowerCase().includes(filterText.toLowerCase()) ||
            item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
            item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
            item.username.toLowerCase().includes(filterText.toLowerCase())
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <div className='flex gap-5 mb-10 w-full justify-end'>
                <div className='relative w-full max-w-[221px]'>
                    <input
                        type='text'
                        id='search'
                        value={filterText}
                        onChange={e => setFilterText(e.target.value)}
                        placeholder='Search here...'
                        className='bg-card-color-color border border-border w-full py-5 px-3 rounded-[4px] placeholder:text-font-color-100 focus:outline-none'
                    />
                </div>
                <button onClick={handleClear} className="btn btn-danger btn-small">
                    Clear
                </button>
            </div>
        );
    }, [filterText, resetPaginationToggle]);

    const columnsExport = [
        {
            name: '#',
            selector: row => row.number,
        },
        {
            name: 'First Name',
            selector: row => row.firstName,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
        },
        {
            name: 'Username',
            selector: row => row.username,
        },
    ];

    const dataExport = [
        {
            number: '1',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            content: 'No. : 1 <br/> First Name : Mark <br/> Last Name : Otto <br/> Username : @mdo'
        },
        {
            number: '2',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            number: '3',
            firstName: 'Larry',
            lastName: 'The Bird',
            username: '@twitter',
        },
        {
            number: '4',
            firstName: 'Larry',
            lastName: 'Jellybean',
            username: '@lajelly',
        },
        {
            number: '5',
            firstName: 'Larry',
            lastName: 'Kikat',
            username: '@lakitkat',
        },
    ]

    function convertArrayOfObjectsToCSV(array) {
        let result;

        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(dataExport[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];

                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    function downloadCSV(array) {
        const link = document.createElement('a');
        let csv = convertArrayOfObjectsToCSV(array);
        if (csv == null) return;

        const filename = 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }

    const Export = ({ onExport }) => <button onClick={e => onExport(e.target.value)} className='btn btn-primary btn-small'>Export</button>;
    // eslint-disable-next-line
    const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(dataExport)} />, []);

    return (
        <>
            <Breadcrumb title="Data Table" breadcrumbItem={breadcrumbItem} />
            <div className='react-data-table mb-30'>
                <div className='mb-30'>
                    <div className='text-[16px]/[19.2px] font-medium mb-5'>
                        Basic Data Table
                    </div>
                    <p className='text-font-color-100'>
                        Here we used <span className='text-danger'>react-data-table-component</span> library. If you need any further information you can visit the website <Link to="https://react-data-table-component.netlify.app/" target='_blank' className='text-blue transition-all duration-300 hover:text-blue-100'>https://react-data-table-component.netlify.app/</Link>
                    </p>
                </div>
                <ReactDataTable
                    columns={columnsBasic}
                    data={dataBasic}
                />
            </div>
            <div className='react-data-table mb-30'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    With Sorting
                </div>
                <ReactDataTable
                    columns={columnsSorting}
                    data={dataSorting}
                />
            </div>
            <div className='react-data-table mb-30'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    With Selectable
                </div>
                <ReactDataTable
                    columns={columnsSelectable}
                    data={dataSelectable}
                    selectableRows
                    selectableRowsComponent={Checkbox}
                />
            </div>
            <div className='react-data-table mb-30'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    With Expandable
                </div>
                <ReactDataTable
                    columns={columnsExpandable}
                    data={dataExpandable}
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                />
            </div>
            <div className='react-data-table mb-30'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    With Pagination
                </div>
                <ReactDataTable
                    columns={columnsPagination}
                    data={dataPagination}
                    pagination
                />
            </div>
            <div className='react-data-table mb-30'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    With Search Filter
                </div>
                <div className='react-data-table'>
                    <ReactDataTable
                        columns={columnsFilter}
                        data={filteredItems}
                        pagination
                        paginationResetDefaultPage={resetPaginationToggle}
                        subHeader
                        subHeaderComponent={subHeaderComponentMemo}
                    />
                </div>
            </div>
            <div className='react-data-table'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    With Export CSV
                </div>
                <div className='react-data-table'>
                    <ReactDataTable
                        columns={columnsExport}
                        data={dataExport}
                        actions={actionsMemo}
                    />
                </div>
            </div>
        </>
    )
}
