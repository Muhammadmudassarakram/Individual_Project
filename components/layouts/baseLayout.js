import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Desi-Recipe';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The Desi Recipe website is a web based application where you can create recipes of own choice and share the you tube videos along with other information like ingredients, procedure"/>
        <meta name="keywords" content="Desi recipe, Best rcipes,healthy foods recipies, veg and non veg foods"/>
        <meta property="og:title" content="Desi-recipe, delicious foods , healthy foods , quick meal" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="The Desi Recipe website is a web based application where you can create recipes of own choice and share the you tube videos along with other information like ingredients, procedure"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`}
                isAuthenticated={isAuthenticated}
                user={user}
                isSiteOwner={isSiteOwner}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;
