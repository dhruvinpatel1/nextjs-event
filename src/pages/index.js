import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import React from 'react'
import Homepage from '@/components/Homepage'

export default function index({menuData,footerData,homeData}) {

  return (
    <>
     <Menu menu={menuData.data.attributes} />
     <Homepage homePagedata={homeData.data.attributes} />
     <Footer footer={footerData.data.attributes} />
    </>
  )
}

export async function getServerSideProps() {
  const menuRes = await fetch(`${process.env.PUBLIC_SITE_URL}/api/menus/4?nested&populate=*`)
  const menuData = await menuRes.json()
  const homeRes = await fetch(`${process.env.PUBLIC_SITE_URL}/api/home-page?nested&populate=deep`)
  const homeData = await homeRes.json()
  const footerRes = await fetch(`${process.env.PUBLIC_SITE_URL}/api/footer?populate=deep`)
  const footerData = await footerRes.json()
  return { props: { menuData,footerData,homeData } }
}