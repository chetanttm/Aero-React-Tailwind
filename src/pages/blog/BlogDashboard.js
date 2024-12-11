import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactApexChart from 'react-apexcharts'
import ReactDataTable from 'react-data-table-component';
import {
  IconBrandFacebook,
  IconBrandGoogleFilled,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutubeFilled,
  IconDots,
  IconX,
} from '@tabler/icons-react';

export default function BlogDashboard() {

  const breadcrumbItem = [
    {
      name: "Blog",
    },
    {
      name: "Dashboard",
    },
  ]

  const chartData1 = {
    options: {
      colors: ['var(--chart-color1)'],
      chart: {
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        colors: 'var(--white)',
        width: 2,
      },
    },
    series: [
      {
        data: [5, 2, 3, 7, 6, 4, 8, 1]
      }
    ]
  };

  const chartData2 = {
    options: {
      colors: ['var(--chart-color2)'],
      chart: {
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        colors: 'var(--white)',
        width: 2,
      },
    },
    series: [
      {
        data: [8, 2, 6, 5, 1, 4, 4, 3]
      }
    ]
  };

  const chartData3 = {
    options: {
      colors: ['var(--chart-color3)'],
      chart: {
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        colors: 'var(--white)',
        width: 2,
      },
    },
    series: [
      {
        data: [4, 4, 3, 9, 2, 1, 5, 7]
      }
    ]
  };

  const chartData4 = {
    options: {
      colors: ['var(--chart-color4)'],
      chart: {
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        colors: 'var(--white)',
        width: 2,
      },
    },
    series: [
      {
        data: [7, 5, 3, 8, 4, 6, 2, 9]
      }
    ]
  };

  const chartData5 = {
    series: [
      {
        name: 'Web',
        data: [11, 8, 15, 18, 19, 17]
      },
      {
        name: 'Sports',
        data: [7, 7, 5, 7, 9, 12]
      },
      {
        name: 'Lifestyle',
        data: [11, 6, 10, 17, 13, 21]
      },
      {
        name: 'Technology',
        data: [3, 12, 13, 14, 9, 18]
      },
    ],
    options: {
      dataLabels: {
        enabled: false
      },
      colors: ['var(--chart-color1)', 'var(--chart-color5)', 'var(--chart-color3)',],
      chart: {
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        style: {
          fontFamily: 'var(--font-family)',
        },
      },
      grid: {
        borderColor: 'var(--border-color)',
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        labels: {
          style: {
            fontFamily: 'var(--font-family)',
          },
        },
        tooltip: {
          enabled: false,
        },
        axisBorder: {
          color: 'var(--border-color)',
        },
        axisTicks: {
          color: 'var(--border-color)',
        },
      },
      yaxis: {
        min: 0,
        max: 22,
        tickAmount: 11,
        labels: {
          style: {
            fontFamily: 'var(--font-family)',
          },
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '24%',
        }
      },
    },
  };

  const columnsFilter = [
    {
      name: 'Media',
      selector: row => row.media,
    },
    {
      name: 'Name',
      selector: row => row.name,
      cell: row =>
        <div>
          <p className="text-[16px]/[19.2px]">{row.name}</p>
          <p className="text-font-color-100">{row.location}</p>
        </div>,
      sortable: true,
    },
    {
      name: 'Like',
      selector: row => row.like,
      sortable: true,
    },
    {
      name: 'Comment',
      selector: row => row.comment,
      sortable: true,
    },
    {
      name: 'Share',
      selector: row => row.share,
      sortable: true,
    },
    {
      name: 'Member',
      selector: row => row.member,
      cell: row =>
        <span className='px-2 py-[3px] inline-block rounded bg-success text-white text-[12px]/[1] font-bold'>{row.member}</span>,
      sortable: true,
    },
  ];

  const dataFilter = [
    {
      media: <IconBrandLinkedin className="w-[40px] h-[40px] bg-blue rounded-full text-white p-2 stroke-[1.5]" />,
      name: 'LINKED IN',
      location: 'Florida, United States',
      like: '19K',
      comment: '14K',
      share: '10K',
      member: 2341,
    },
    {
      media: <IconBrandTwitter className="w-[40px] h-[40px] bg-sky rounded-full text-white p-2 stroke-[1.5]" />,
      name: 'TWITTER',
      location: 'Arkansas, United States',
      like: '7K',
      comment: '11K',
      share: '21K',
      member: 952,
    },
    {
      media: <IconBrandFacebook className="w-[40px] h-[40px] bg-blue rounded-full text-white p-2 stroke-[1.5]" />,
      name: 'FACEBOOK',
      location: 'Illunois, United States',
      like: '15K',
      comment: '18K',
      share: '8K',
      member: 6127,
    },
    {
      media: <IconBrandGoogleFilled className="w-[40px] h-[40px] bg-red-500 rounded-full text-white p-2 stroke-[1.5]" />,
      name: 'GOOGLE PLUS',
      location: 'Arizona, United States',
      like: '15K',
      comment: '18K',
      share: '154K',
      member: 325,
    },
    {
      media: <IconBrandYoutubeFilled className="w-[40px] h-[40px] bg-red-700 rounded-full text-white p-2 stroke-[1.5]" />,
      name: 'YOUTUBE',
      location: 'Alaska, United States',
      like: '15K',
      comment: '18K',
      share: '200',
      member: 160,
    },
  ]

  return (
    <>
      <Breadcrumb breadcrumbItem={breadcrumbItem} title="Blog Dashboard" />
      <div className='mb-20 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
        <div className='card bg-success-50 md:p-20 p-15 rounded-md'>
          <h5 className="font-medium text-[24px]/[1.5]">2,048</h5>
          <span className='flex items-center gap-1'>
            Total Leads
          </span>
          <ReactApexChart options={chartData1.options} series={chartData1.series} type="line" height={55} />
        </div>
        <div className='card bg-danger-50 md:p-20 p-15 rounded-md'>
          <h5 className="font-medium text-[24px]/[1.5]">365</h5>
          <span className='flex items-center gap-1'>
            Returns
          </span>
          <ReactApexChart options={chartData2.options} series={chartData2.series} type="line" height={55} />
        </div>
        <div className='card bg-sky-50 md:p-20 p-15 rounded-md'>
          <h5 className="font-medium text-[24px]/[1.5]">65</h5>
          <span className='flex items-center gap-1'>
            Queries
          </span>
          <ReactApexChart options={chartData3.options} series={chartData3.series} type="line" height={55} />
        </div>
        <div className='card bg-purple-50 md:p-20 p-15 rounded-md'>
          <h5 className="font-medium text-[24px]/[1.5]">2,055</h5>
          <span className='flex items-center gap-1'>
            Invoices
          </span>
          <ReactApexChart options={chartData4.options} series={chartData4.series} type="line" height={55} />
        </div>
      </div>
      <div className='mb-20'>
        <div className='flex items-center justify-between gap-2 mb-10'>
          <h2 className='flex items-center gap-5 uppercase'>
            <strong className='text-primary flex items-center'>
              Popular
            </strong>
            Categories
          </h2>
          <div className='flex items-center gap-2'>
            <button>
              <IconDots />
            </button>
            <button>
              <IconX />
            </button>
          </div>
        </div>
        <div className='card bg-card-color md:p-20 p-15 rounded-md'>
          <ReactApexChart options={chartData5.options} series={chartData5.series} type="bar" height={300} />
        </div>
      </div>
      <div>
        <div className='flex items-center justify-between gap-2 mb-10'>
          <h2 className='flex items-center gap-5 uppercase'>
            <strong className='text-primary flex items-center'>
              Social
            </strong>
            Media
          </h2>
          <div className='flex items-center gap-2'>
            <button>
              <IconDots />
            </button>
            <button>
              <IconX />
            </button>
          </div>
        </div>
        <div className='react-data-table'>
          <ReactDataTable
            columns={columnsFilter}
            data={dataFilter}
          />
        </div>
      </div>
    </>
  )
}
