import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات استقرار Docker Compose در برنامه‌های Docker - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="docker" />
      <div className="page-title">
        <h1>پلتفرم Docker</h1>
        <span className="page-description">(Docker Platform)</span>
      </div>
    </div>

    <h3>استقرار Docker Compose</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/docker/docker-compose.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Link href="/app-deploy/docker/envs">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
