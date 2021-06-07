import Head from 'next/head'
import Div from '../patterns/div'

import ContentHome from './[...home]'


export default function Home() {
  return (
    <Div>
      <Head>
            <meta name="keywords" content="animes, series, all animes, allanimes, desenhos, mangás, assistir anime, assistir animes,victor kiss"/>

                <meta name="author" content="Victor Kiss"/>

                <meta name="description" content="Obtenha mais de 20 mil dados de diversos animes de todos os gêneros. Não sabe o que assistir? Temos uma variedade de animes te esperando!!"/>

                <meta charSet="UTF-8"/>

                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>

                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


                <meta httpEquiv="Content-Language" content="pt-br"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
                <title>home</title>
            </Head>
          <ContentHome/>
    </Div>
  )
}
