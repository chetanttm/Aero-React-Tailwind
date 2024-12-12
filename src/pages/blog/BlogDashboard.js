import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactApexChart from 'react-apexcharts'
import ReactDataTable from 'react-data-table-component';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { usMill } from "@react-jvectormap/unitedstates";
import {
  IconBrandFacebook,
  IconBrandGoogleFilled,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutubeFilled,
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconDots,
  IconTrendingDown,
  IconTrendingUp,
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
      responsive: [{
        breakpoint: 767,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '60%',
            }
          },
        },
      }]
    },
  };

  const chartData6 = {
    series: [40, 30, 15, 10, 5],
    options: {
      labels: ['Chrome', 'Firefpx', 'Safari', 'IE', 'Other'],
      colors: ['rgb(56, 102, 166)', 'rgb(61, 168, 236)', 'rgb(70, 182, 254)', 'rgb(94, 188, 249)', 'rgb(111, 198, 255)'],
      legend: {
        show: true,
        position: 'bottom',
        markers: {
          strokeWidth: 0,
          shape: 'square',
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "60%"
          }
        }
      }
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

  const columnsBrowser = [
    {
      selector: row => row.id,
    },
    {
      selector: row => row.browser,
    },
    {
      selector: row => row.usage,
    },
  ];

  const dataBrowser = [
    {
      id: '1',
      browser: 'Chrome',
      usage: <div className='flex items-center gap-1'>6985 <IconCaretUpFilled className='w-[14px] h-[14px] min-w-[14px] text-success' /></div>,
    },
    {
      id: '2',
      browser: 'Other',
      usage: <div className='flex items-center gap-1'>2697 <IconCaretUpFilled className='w-[14px] h-[14px] min-w-[14px] text-success' /></div>,
    },
    {
      id: '3',
      browser: 'Safari',
      usage: <div className='flex items-center gap-1'>3597 <IconCaretDownFilled className='w-[14px] h-[14px] min-w-[14px] text-danger' /></div>,
    },
    {
      id: '4',
      browser: 'Firefox',
      usage: <div className='flex items-center gap-1'>2145 <IconCaretUpFilled className='w-[14px] h-[14px] min-w-[14px] text-success' /></div>,
    },
    {
      id: '5',
      browser: 'IE',
      usage: <div className='flex items-center gap-1'>54 <IconCaretDownFilled className='w-[14px] h-[14px] min-w-[14px] text-danger' /></div>,
    },
  ]

  const columnsVisitors = [
    {
      name: 'Contrary',
      selector: row => row.contrary,
      sortable: true,
    },
    {
      name: '2016',
      selector: row => row.year2016,
      sortable: true,
    },
    {
      name: '2019',
      selector: row => row.year2019,
      sortable: true,
    },
    {
      name: 'Change',
      selector: row => row.change,
      sortable: true,
    },
  ];

  const dataVisitors = [
    {
      contrary: 'USA',
      year2016: '2,009',
      year2019: '3,591',
      change: <div className='flex items-center gap-1'>7.01% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
    },
    {
      contrary: 'India',
      year2016: '1,129',
      year2019: '1,361',
      change: <div className='flex items-center gap-1'>3.01% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
    },
    {
      contrary: 'Canada',
      year2016: '2,009',
      year2019: '2,901',
      change: <div className='flex items-center gap-1'>9.01% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
    },
    {
      contrary: 'Australia',
      year2016: '954',
      year2019: '901',
      change: <div className='flex items-center gap-1'>5.71% <IconTrendingDown className='w-[16px] h-[16px] min-w-[16px] text-danger' /></div>,
    },
    {
      contrary: 'Other',
      year2016: '4,236',
      year2019: '4,591',
      change: <div className='flex items-center gap-1'>9.15% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
    },
  ]

  const columnsUsa = [
    {
      name: 'Categories',
      selector: row => row.category,
      sortable: true,
    },
    {
      name: '2016',
      selector: row => row.year2016,
      sortable: true,
    },
    {
      name: '2019',
      selector: row => row.year2019,
      sortable: true,
    },
    {
      name: 'Change',
      selector: row => row.change,
      sortable: true,
    },
  ];

  const dataUsa = [
    {
      category: 'Web Design',
      year2016: '2,009',
      year2019: '3,591',
      change: <div className='flex items-center gap-1'>7.01% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
    },
    {
      category: 'Photography',
      year2016: '1,129',
      year2019: '1,361',
      change: <div className='flex items-center gap-1'>3.01% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
    },
    {
      category: 'Technology',
      year2016: '2,009',
      year2019: '2,901',
      change: <div className='flex items-center gap-1'>9.01% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
    },
    {
      category: 'Lifestyle',
      year2016: '954',
      year2019: '901',
      change: <div className='flex items-center gap-1'>5.71% <IconTrendingDown className='w-[16px] h-[16px] min-w-[16px] text-danger' /></div>,
    },
    {
      category: 'Sports',
      year2016: '4,236',
      year2019: '4,591',
      change: <div className='flex items-center gap-1'>9.15% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
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
      <div className='mb-20'>
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
      <div className='mb-20'>
        <div className='flex items-center justify-between gap-2 mb-10'>
          <h2 className='flex items-center gap-5 uppercase'>
            <strong className='text-primary flex items-center'>
              Browser
            </strong>
            Usage
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
        <div className='card bg-card-color md:p-20 p-15 rounded-md grid lg:grid-cols-2 grid-cols-1 gap-4'>
          <ReactApexChart options={chartData6.options} series={chartData6.series} type="donut" height="280" />
          <div className='react-data-table'>
            <ReactDataTable
              columns={columnsBrowser}
              data={dataBrowser}
              noTableHead
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-4'>
        <div className='lg:col-span-7 col-span-12'>
          <div className='flex items-center justify-between gap-2 mb-10'>
            <h2 className='flex items-center gap-5 uppercase'>
              <strong className='text-primary flex items-center'>
                Visitors
              </strong>
              Statistics
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
          <div className='card bg-card-color md:p-20 p-15 rounded-md sm:h-[410px] h-[250px]'>
            <VectorMap
              map={worldMill}
              backgroundColor='var(--card-color)'
              regionStyle={{
                initial: {
                  fill: "var(--border-color)"
                },
                hover: {
                  fill: "var(--primary)"
                },
              }}
              markers={[
                { latLng: [20.5937, 78.9629], name: "India" },
                { latLng: [-25.2744, 133.7751], name: "Australia" },
                { latLng: [37.0902, -95.7129], name: "United States" },
                { latLng: [55.3781, -3.4360], name: "United Kingdom" },
                { latLng: [51.1657, 10.4515], name: "Germany" },
                { latLng: [56.1304, -106.3468], name: "Canada" },
              ]}
              series={{
                regions: [{
                  attribute: 'fill',
                  values: {
                    'IN': 'var(--danger)',
                    'AU': 'var(--success)',
                    'US': 'var(--sky)',
                    'GB': 'var(--purple)',
                    'DE': 'var(--warning)',
                    'CA': 'var(--info)',
                  }
                }]
              }}
              markerStyle={{
                initial: {
                  fill: "var(--white)",
                  stroke: 'var(--black)',
                },
              }}
              zoomOnScroll={false}
            />
          </div>
          <div className='react-data-table header-primary mt-10'>
            <ReactDataTable
              columns={columnsVisitors}
              data={dataVisitors}
            />
          </div>
        </div>
        <div className='lg:col-span-5 col-span-12'>
          <div className='flex items-center justify-between gap-2 mb-10'>
            <h2 className='flex items-center gap-5 uppercase'>
              <strong className='text-primary flex items-center'>
                USA
              </strong>
              Categories Statistics
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
          <div className='card bg-card-color md:p-20 p-15 rounded-md sm:h-[410px] h-[250px]'>
            <VectorMap
              map={usMill}
              backgroundColor='var(--card-color)'
              regionStyle={{
                initial: {
                  fill: "var(--sky)"
                },
              }}
              zoomOnScroll={false}
            />
          </div>
          <div className='react-data-table header-primary mt-10'>
            <ReactDataTable
              columns={columnsUsa}
              data={dataUsa}
            />
          </div>
        </div>
      </div>
    </>
  )
}
