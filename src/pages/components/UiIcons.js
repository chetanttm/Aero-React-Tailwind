import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import {
  IconArchiveFilled,
  IconArrowBigLeftFilled,
  IconChartBar,
  IconChevronRight,
  IconDiamond,
  IconFiles,
  IconFolder,
  IconHome,
  IconLayoutGrid,
  IconMail,
  IconMailOpened,
  IconPaperclip,
  IconPuzzle,
  IconSearch,
  IconSend,
  IconVideo,
  IconWorld,
  IconLock,
  IconPencil,
  IconTag,
  IconMap,
  IconMenu2,
  IconCornerUpRightDouble,
  IconStar,
  IconTrash,
  IconCirclePlus,
  IconChevronLeft,
  IconCamera,
  IconSettings,
  IconHelpHexagon,
} from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export default function UiIcons() {

  const breadcrumbItem = [
    {
      name: "Components",
    },
    {
      name: "Icons",
    },
  ]

  const iconItem = [
    {
      icon: <IconFolder />,
      name: 'IconFolder',
    },
    {
      icon: <IconLayoutGrid />,
      name: 'IconLayoutGrid',
    },
    {
      icon: <IconHome />,
      name: 'IconHome',
    },
    {
      icon: <IconWorld />,
      name: 'IconWorld',
    },
    {
      icon: <IconDiamond />,
      name: 'IconDiamond',
    },
    {
      icon: <IconPuzzle />,
      name: 'IconPuzzle',
    },
    {
      icon: <IconLock />,
      name: 'IconLock',
    },
    {
      icon: <IconFiles />,
      name: 'IconFiles',
    },
    {
      icon: <IconPencil />,
      name: 'IconPencil',
    },
    {
      icon: <IconTag />,
      name: 'IconTag',
    },
    {
      icon: <IconChartBar />,
      name: 'IconChartBar',
    },
    {
      icon: <IconMap />,
      name: 'IconMap',
    },
    {
      icon: <IconArrowBigLeftFilled />,
      name: 'IconArrowBigLeftFilled',
    },
    {
      icon: <IconMenu2 />,
      name: 'IconMenu2',
    },
    {
      icon: <IconMail />,
      name: 'IconMail',
    },
    {
      icon: <IconSend />,
      name: 'IconSend',
    },
    {
      icon: <IconMailOpened />,
      name: 'IconMailOpened',
    },
    {
      icon: <IconCornerUpRightDouble />,
      name: 'IconCornerUpRightDouble',
    },
    {
      icon: <IconStar />,
      name: 'IconStar',
    },
    {
      icon: <IconTrash />,
      name: 'IconTrash',
    },
    {
      icon: <IconCirclePlus />,
      name: 'IconCirclePlus',
    },
    {
      icon: <IconSearch />,
      name: 'IconSearch',
    },
    {
      icon: <IconChevronLeft />,
      name: 'IconChevronLeft',
    },
    {
      icon: <IconChevronRight />,
      name: 'IconChevronRight',
    },
    {
      icon: <IconArchiveFilled />,
      name: 'IconArchiveFilled',
    },
    {
      icon: <IconPaperclip />,
      name: 'IconPaperclip',
    },
    {
      icon: <IconCamera />,
      name: 'IconCamera',
    },
    {
      icon: <IconVideo />,
      name: 'IconVideo',
    },
    {
      icon: <IconSettings />,
      name: 'IconSettings',
    },
    {
      icon: <IconHelpHexagon />,
      name: 'IconHelpHexagon',
    },
  ]

  return (
    <>
      <Breadcrumb title="Icons" breadcrumbItem={breadcrumbItem} />
      <div className='card bg-card-color rounded-md md:p-20 p-15'>
        <div className='pb-30 mb-30 border-b border-border'>
          <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
            Icons
          </p>
          <div className='grid xxl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:gap-30 gap-20'>
            {iconItem.map((item, key) => (
              <div key={key} className='flex items-center gap-15'>
                {item.icon}
                <div className='text-[16px] font-medium text-font-color-100'>
                  {`<${item.name} />`}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p><b>Note : </b></p>
          <p>Here we used <b>"tabler ICONS"</b> library for all icons, so you can get more icons from this website. &nbsp;
            <Link to='https://tabler.io/icons' target='_blank' className='text-blue underline'>
              https://tabler.io/icons
            </Link>
          </p>
          <br />
          <p className='flex items-start gap-5 mb-5'>
            <span>{'1)'}</span>
            Search any icon you want.
          </p>
          <p className='flex items-start gap-5 mb-5'>
            <span>{'2)'}</span>
            Open that icon and copy react name.
          </p>
          <p className='flex items-start gap-5'>
            <span>{'3)'}</span>
            Place in your file and import it from '@tabler/icons-react' as a component.
          </p>
        </div>
      </div>
    </>
  )
}
