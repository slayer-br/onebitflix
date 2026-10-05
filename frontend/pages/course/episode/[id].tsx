import courseService, { CourseType } from "@/services/courseService";
import styles from "../../../styles/episodePlayer.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import HeaderGeneric from "@/components/common/headerGeneric";
import { useEffect, useRef, useState } from "react";
import PageSpinner from "@/components/common/spinner";
import { Container, Button } from "reactstrap";
import dynamic from "next/dynamic";
import watchEpisodeService from "@/services/episodeService";
import { convertCustomRouteSource } from "next/dist/server/lib/router-utils/route-types-utils";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const EpisodePlayer = function () {
  const router = useRouter();
  const [course, setCourse] = useState<CourseType>();
  const [token, setToken] = useState("");
  const [isRead, setIsRead] = useState(false);
  const episodeOrder = parseFloat(router.query.id?.toString() || "");
  const episodeId = parseFloat(router.query.episodeId?.toString() || "");

  const courseId = router.query.courseId?.toString() || "";

  const [getEpisodeTime, setGetEpisodeTime] = useState(0);
  const [episodeTime, setEpisodeTime] = useState(0);

  const playerRef = useRef<ReactPlayer>(null);

  const handleGetEpisodeTime = async () => {
    const res = await watchEpisodeService.getWatchTime(episodeId);
    if (res?.data !== null) {
      setGetEpisodeTime(res.data.seconds);
    }
  };

  const handleSetEpisodeTime = async () => {
    await watchEpisodeService.setWatchTime({ episodeId, seconds: Math.round(episodeTime) });
  };

  const handlePlayerTime = () => {
    playerRef.current?.seekTo(getEpisodeTime, "seconds");
    setIsRead(true);
  };

  if (isRead === true) {
    setTimeout(() => {
      handleSetEpisodeTime();
    }, 1000 * 3);
  }

  useEffect(() => {
    if (episodeId) {
      handleGetEpisodeTime();
    }
  }, [router]);

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
    if (course) router.push(`/course/episode/${episodeOrder - 1}?courseId=${course.id}&episodeId=${episode?.id - 1}`);
  };

  const handleNextEpisode = () => {
    if (course) router.push(`/course/episode/${episodeOrder + 1}?courseId=${course.id}&episodeId=${episode?.id + 1}`);
  };

  if (!course) return <PageSpinner />;

  if (episodeOrder + 1 < course?.episodes?.length) {
    if (Math.round(episodeTime) === course.episodes[episodeOrder].secondsLong) {
      handleNextEpisode();
    }
  }

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

          {streamUrl && <ReactPlayer url={streamUrl} controls={true} ref={playerRef} onStart={handlePlayerTime} onProgress={(progress)=> setEpisodeTime(progress.playedSeconds)} />}
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
          <p className="text-center py-4">{episode?.synopsis ? episode.synopsis : "Sem sinopse para este episódio."}</p>
        </Container>
      </main>
    </>
  );
};

export default EpisodePlayer;
