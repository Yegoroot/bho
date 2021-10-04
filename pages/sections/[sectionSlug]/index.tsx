import React from 'react'
import Head from 'next/head'
import { NextPageContext } from 'next'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import {
  Typography, Tab, Box, Tabs
} from '@mui/material'

import { Section, Category } from 'src/interfaces'
import CategoryCard from 'components/CategoryCard'

interface Props {
  section: Section
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// function TabPanel(props: TabPanelProps) {
//   const {
//     children, value, index, ...other
//   } = props

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   )
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   }
// }

const MyComponent = (props: Props): React.ReactElement => {
  const { section } = props
  // const [value, setValue] = React.useState('1')

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue)
  // }

  return (
    <>
      <Head>
        <title>{section.title}</title>
      </Head>

      <Typography variant="h1">{section.title}</Typography>

      {/* <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
         <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Item One"
              {...a11yProps(0)}
            />
            <Tab
              label="Item Two"
              {...a11yProps(1)}
            />
            <Tab
              label="Item Three"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel
          value={value}
          index={0}
        >
          Item One
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
        >
          Item Two
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
        >
          Item Three
        </TabPanel>
      </Box> */}

      {section.categories.map((category: Category) => (
        <CategoryCard
          section={section}
          category={category}
        />
      )) }

    </>
  )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context: NextPageContext) {
  const { sectionSlug } = context.query

  const res = await fetch(`${publicRuntimeConfig.API_URL}/sections?slug=${sectionSlug}`)
  const filteredSections = await res.json()
  const section = filteredSections[0]
  return {
    props: { section },
  }
}

export default MyComponent
