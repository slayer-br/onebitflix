import Footer from "@/components/common/footer";
import FeaturedSection from "@/components/homeAuth/featuredSection";
import Head from "next/head";
import NewestCategory from "@/components/homeAuth/newestCategory";
import FavoritesCourses from "@/components/homeAuth/favoriteCategory";
import FeaturedCategory from "@/components/homeAuth/featuredCategory";
import ListCategories from "@/components/homeAuth/listCategories";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageSpinner from "@/components/common/spinner";

const HomeAuth = function () {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if(!sessionStorage.getItem("onebitflix-token")){
      router.push("/login");
    } else {
      setLoading(false);
    }

  }, [])

  if (loading) {
    return <PageSpinner />;
  }

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
        <ListCategories />
        <Footer />
      </main>
    </>
  );
};

export default HomeAuth;
