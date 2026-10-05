import HeaderAuth from "@/components/common/headerAuth";
import styles from "../../styles/coursePage.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import courseService, { CourseType } from "@/services/courseService";
import { useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import PageSpinner from "@/components/common/spinner";
import EpisodeList from "@/components/common/episodeList";
import Footer from "@/components/common/footer";

const CoursePage = function () {
  const [course, setCourse] = useState<CourseType>();
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const getCourse = async function () {
    if (typeof id !== "string") return;

    const res = await courseService.getEpisodes(id);
    if (res.status === 200) {
      setCourse(res.data);
      setLiked(res.data.liked);
      setFavorited(res.data.favorited);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <PageSpinner />;
  }

  const handleLikeCourse = async () => {
    if (typeof id !== "string") return;

    if (liked === true) {
      const res = await courseService.removeLike(id);
      if (res?.status === 204) setLiked(false);
    } else {
      const res = await courseService.like(id);
      if (res?.status === 201) setLiked(true);
    }
  };

  const handleFavCourse = async () => {
    if (typeof id !== "string") return;

    if (favorited === true) {
      const res = await courseService.removeFav(id);
      if (res?.status === 204) setFavorited(false);
    } else {
      const res = await courseService.addToFav(id);
      if (res?.status === 201) setFavorited(true);
    }
  };

  if (course === undefined) return <PageSpinner />;

  return (
    <>
      <Head>
        <title>Onebitflix | {course?.name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "550px",
          }}
        >
          <HeaderAuth />
        </div>
        <Container className={styles.courseInfo}>
          <p className={styles.courseTitle}>{course?.name}</p>
          <p className={styles.courseDescription}>{course?.synopsis}</p>
          <Button outline className={styles.courseBtn} disabled={course?.episodes?.length === 0 ? true : false}>
            Assistir agora!
            <img src="/buttonPlay.svg" alt="buttonImg" className={styles.buttonImg} />
          </Button>
          <div className={styles.interactions}>
            {liked === false ? (
              <img
                src="/course/iconLike.svg"
                alt="likeImage"
                className={styles.interactionImages}
                onClick={handleLikeCourse}
              />
            ) : (
              <img
                src="/course/iconLiked.svg"
                alt="likeImage"
                className={styles.interactionImages}
                onClick={handleLikeCourse}
              />
            )}

            {favorited === false ? (
              <img
                onClick={handleFavCourse}
                src="/course/iconAddFav.svg"
                alt="addFav"
                className={styles.interactionImages}
              />
            ) : (
              <img
                onClick={handleFavCourse}
                src="/course/iconFavorited.svg"
                alt="addFav"
                className={styles.interactionImages}
              />
            )}
          </div>
        </Container>
        <Container className={styles.episodeInfo}>
          <p className={styles.episodeDivision}>Episódios</p>
          <p className={styles.episodeLength}>
            {course.episodes?.length
              ? `${course.episodes.length} ${course.episodes.length === 1 ? "episódio" : "episódios"}`
              : null}
          </p>
          {course.episodes?.length ? (
            course.episodes.map((episode) => <EpisodeList key={episode.id} episode={episode} course={course} />)
          ) : (
            <p>
              <strong>Curso sem episódios, Retorne mais tarde! &#x1F606;&#x1F918;</strong>
            </p>
          )}
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default CoursePage;
