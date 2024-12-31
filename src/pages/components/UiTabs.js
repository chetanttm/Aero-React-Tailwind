import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import {
  IconAddressBook,
  IconHome,
  IconUserCircle,
} from '@tabler/icons-react'

export default function UiTabs() {

  const breadcrumbItem = [
    {
      name: "Components",
    },
    {
      name: "Tabs",
    },
  ]

  return (
    <>
      <Breadcrumb title="Tabs" breadcrumbItem={breadcrumbItem} />
      <div className='grid lg:grid-cols-2 lg:gap-30'>
        <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
          <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
            .custom-tab1
          </p>
          <Tabs className="custom-tab1">
            <TabList>
              <Tab>
                Home
              </Tab>
              <Tab>
                Profile
              </Tab>
              <Tab>
                Contact
              </Tab>
            </TabList>
            <TabPanel>
              Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
            </TabPanel>
            <TabPanel>
              Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie.
            </TabPanel>
            <TabPanel>
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS.
            </TabPanel>
          </Tabs>
        </div>
        <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
          <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
            .custom-tab2
          </p>
          <Tabs className="custom-tab2">
            <TabList>
              <Tab>
                Home
              </Tab>
              <Tab>
                Profile
              </Tab>
              <Tab>
                Contact
              </Tab>
            </TabList>
            <TabPanel>
              Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
            </TabPanel>
            <TabPanel>
              Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie.
            </TabPanel>
            <TabPanel>
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS.
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          .custom-tab3
        </p>
        <Tabs className="custom-tab3">
          <TabList>
            <Tab>
              Home
            </Tab>
            <Tab>
              Profile
            </Tab>
            <Tab>
              Contact
            </Tab>
          </TabList>
          <TabPanel>
            Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
          </TabPanel>
          <TabPanel>
            Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie.
          </TabPanel>
          <TabPanel>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS.
          </TabPanel>
        </Tabs>
      </div>
      <div className='card bg-card-color rounded-md md:p-20 p-15'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Tabs With Icon
        </p>
        <Tabs className="custom-tab1">
          <TabList>
            <Tab>
              <IconHome className='w-[18px] h-[18px] stroke-[1.5]' />
              Home
            </Tab>
            <Tab>
              <IconUserCircle className='w-[18px] h-[18px] stroke-[1.5]' />
              Profile
            </Tab>
            <Tab>
              <IconAddressBook className='w-[18px] h-[18px] stroke-[1.5]' />
              Contact
            </Tab>
          </TabList>
          <TabPanel>
            Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
          </TabPanel>
          <TabPanel>
            Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie.
          </TabPanel>
          <TabPanel>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS.
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}
