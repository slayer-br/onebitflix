import courseService, { CourseType, EpisodeType } from "@/services/courseService";
import styles from "../../../styles/episodePlayer.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import HeaderGeneric from "@/components/common/headerGeneric";
import { useEffect, useState } from "react";
import PageSpinner from "@/components/common/spinner";
import { Container, Button } from "reactstrap";
import ReactPlayer from "react-player";

interface props {
  episode: EpisodeType;
  course: CourseType;
}
const EpisodePlayer = function ({ episode, course }: props) {
  const router = useRouter();
  const [coursedata, setCourseData] = useState<CourseType>();
  const episodeOrder = parseFloat(router.query.id?.toString() || "");
  const courseId = router.query.courseId?.toString() || "";

  const getCourse = async function () {
    if (typeof courseId !== "string") return;

    const res = await courseService.getEpisodes(courseId);

    if (res.status === 200) {
      setCourseData(res.data);
    }
  };

  useEffect(() => {
    getCourse();
  }, [courseId]);

  const handleLastEpisode = () => {
    router.push(`/course/episode/${episodeOrder - 1}?courseId=${course.id}`);
  };

  const handleNextEpisode = () => {
    router.push(`/course/episode/${episodeOrder + 1}?courseId=${course.id}`);
  };

  if (course?.episodes === undefined) return <PageSpinner />;

  return (
    <>
      <Head>
        <title>Onebitflix | {course.episodes[episodeOrder]?.name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric logoUrl="/home" btnContent={"Voltar para o curso"} btnUrl={`/course/${courseId}`} />
        <Container className="d-flex flex-column align-items-center gap-3 pt-5">
          <p className={styles.episodeTitle}>{course.episodes[episodeOrder]?.name}</p>

          {typeof window !== "undefined" ? null : (
            <ReactPlayer
              url={`${process.env.NEXT_PUBLIC_BASEURL}/${course.episodes[episodeOrder]?.videoUrl}&token=${sessionStorage.getItem("onebitflix-token")}`}
              controls={true}
            />
          )}
          <div className={styles.episodeButton}>
            <Button
              className={styles.episodeButton}
              disabled={episodeOrder === 0 ? true : false}
              onClick={handleLastEpisode}
            >
              <img src="/episode/iconArrowLeft.svg" alt="setaEsquerda" className={styles.arrowImg} />
            </Button>
            <Button
              className={styles.episodeButton}
              disabled={episodeOrder + 1 === course.episodes.length ? true : false}
              onClick={handleNextEpisode}
            >
              <img src="/episode/iconArrowRight.svg" alt="setaDireita" className={styles.arrowImg} />
            </Button>
            <p className="text-center py-4">
              {course.episodes[episodeOrder]?.synopsis
                ? course.episodes[episodeOrder]?.synopsis
                : "Sem sinopse para este episódio!"}
            </p>
          </div>
        </Container>
      </main>
    </>
  );
};

export default EpisodePlayer;
