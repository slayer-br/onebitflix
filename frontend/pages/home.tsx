import Footer from "@/components/common/footer";
import FeaturedSection from "@/components/homeAuth/featuredSection";
import Head from "next/head";
import NewestCategory from "@/components/homeAuth/newestCategory";
import FavoritesCourses from "@/components/homeAuth/favoriteCtegory";
import FeaturedCategory from "@/components/homeAuth/featuredCategory";
const HomeAuth = function () {
  return (
    <>
      <Head>
        <title>Onebitflix | Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
        <NewestCategory />
        <FavoritesCourses />
        <FeaturedCategory />
        <Footer />
      </main>
    </>
  );
};

export default HomeAuth;
