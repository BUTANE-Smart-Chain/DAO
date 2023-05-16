import Head from 'next/head'
import Nav from '../src/components/navbar/Nav'
import Info from '../src/components/Info'
import Services from '../src/components/Services'
import Earn from '../src/components/Earn'
import Ecosystem from '../src/components/Ecosystem'
import Companies from '../src/components/Companies'
import FarmBoxes from '../src/components/FarmBoxes'
import Footer from '../src/components/Footer'
import {audited, seen} from '../src/consts/companies'

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Butane: DAO Home $GAS </title>
          <meta name="description" content="The $GAS DAO token offers a rich array of utilities!" />
          <link rel="preload" as="image" href="/static_assets/Bicon.png"/>
          <meta property="og:image" content="https://harvest.finance/static_assets/Bicon.png"/>
          <meta property="twitter:image" content="https://harvest.finance/static_assets/Bicon.png"/>
          <meta name="twitter:title" content="Butane: Home of $GAS Token" />
          <meta name="twitter:description" content="The $GAS DAO token offers a rich array of utilities!" />
          <meta name="twitter:image" content="https://harvest.finance/static_assets/Bicon.png" />
        </Head>
        <Nav/>
        <main>
          <Info/>
          <Services/>
          <Earn/>
          <Companies title="AS SEEN ON" data={seen} id="asSeenOn"/>
        
          <Ecosystem/>
          <Companies title="AUDITED BY" data={audited} grid id="auditedBy"/>
          <FarmBoxes/>
        </main>
      </div>
      <Footer/>
    </>
  )
}
