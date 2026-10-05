import courseService, { CourseType } from "@/services/courseService";
import styles from "../../../styles/episodePlayer.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import HeaderGeneric from "@/components/common/headerGeneric";
import { useEffect, useState } from "react";
import PageSpinner from "@/components/common/spinner";
import { Container, Button } from "reactstrap";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const EpisodePlayer = function () {
  const router = useRouter();
  const [course, setCourse] = useState<CourseType>();
  const [token, setToken] = useState("");
  const episodeOrder = parseFloat(router.query.id?.toString() || "");
  const courseId = router.query.courseId?.toString() || "";

  useEffect(() => {
    setToken(sessionStorage.getItem("onebitflix-token") || "");
  }, [courseId]);

  useEffect(() => {
    if (!courseId) return;

    const getCourse = async () => {
      const res = await courseService.getEpisodes(courseId);
      if (res?.status === 200) setCourse(res.data);
    };

    getCourse();
  }, [courseId]);

  const episode = course?.episodes?.[episodeOrder];
  const streamUrl =
    episode?.videoUrl && token
      ? `${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${encodeURIComponent(episode.videoUrl)}&token=${encodeURIComponent(token)}`
      : undefined;

  const handleLastEpisode = () => {
    if (course) router.push(`/course/episode/${episodeOrder - 1}?courseId=${course.id}`);
  };

  const handleNextEpisode = () => {
    if (course) router.push(`/course/episode/${episodeOrder + 1}?courseId=${course.id}`);
  };

  if (!course) return <PageSpinner />;

  return (
    <>
      <Head>
        <title>Onebitflix | {episode?.name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric logoUrl="/home" btnContent={"Voltar para o curso"} btnUrl={`/course/${courseId}`} />
        <Container className="d-flex flex-column align-items-center gap-3 pt-5">
          <p className={styles.episodeTitle}>{episode?.name}</p>

          {streamUrl && <ReactPlayer url={streamUrl} controls={true} />}
          <div className={styles.episodeButtonDiv}>
            <Button
              className={styles.episodeButton}
              disabled={episodeOrder === 0 ? true : false}
              onClick={handleLastEpisode}
            >
              <img src="/episode/iconArrowLeft.svg" alt="setaEsquerda" className={styles.arrowImg} />
            </Button>
            <Button
              className={styles.episodeButton}
              disabled={episodeOrder + 1 === (course.episodes?.length || 0)}
              onClick={handleNextEpisode}
            >
              <img src="/episode/iconArrowRight.svg" alt="setaDireita" className={styles.arrowImg} />
            </Button>
          </div>
            <p className="text-center py-4">
              {episode?.synopsis ? episode.synopsis : "Sem sinopse para este episódio."}
            </p>
        </Container>
      </main>
    </>
  );
};

export default EpisodePlayer;
