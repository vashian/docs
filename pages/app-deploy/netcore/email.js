import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سرویس ایمیل در برنامه‌های .Net Core - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="netcore" />
      <div className="page-title">
        <h1>پلتفرم .Net</h1>
        <span className="page-description">(.Net Platform)</span>
      </div>
    </div>

    <h3>ارسال ایمیل</h3>

    <p>
      برای استفاده از سرویس ایمیل در برنامه‌های ASP.Net Core باید پس از{" "}
      <Link href="/app-features/email#create-email">ایجاد سرویس ایمیل</Link>،
      اطلاعات <Link href="/app-features/email#settings">دسترسی SMTP</Link> را
      طبق مستندات <Link href="/app-deploy/netcore/envs">تنظیم متغیرها</Link> در
      تنظیمات برنامه اضافه کنید.
    </p>

    <Highlight className="plaintext">
      {`MAIL_HOST=smtp.iran.liara.ir
MAIL_PORT=587
IS_ENCRYPTED=true
MAIL_USERNAME=my-app
MAIL_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که مقادیر <span className="code">MAIL_USERNAME</span> و{" "}
      <span className="code">MAIL_PASSWORD</span> در هر سرویس ایمیل ایجاد شده
      متفاوت است بنابراین باید آن‌ها را با مقادیر ارائه شده در تنظیمات سرویس
      ایمیل‌تان جایگزین کنید.
    </Notice>

    <p>
      حال می‌توانید بدون نگرانی در پروژه‌ی خود با استفاده از دسترسی SMTP سرویس
      ایمیل لیارا به‌صورت امن اقدام به ارسال ایمیل‌های تراکنشی کنید.
    </p>

    <Notice variant="warning">
      قابل ذکر است که فیلد <span className="code">from</span> باید یکی از
      نشانی‌های اضافه شده در سرویس ایمیل باشد.
    </Notice>

    <p>
      برای اطلاعات بیشتر می‌توانید به{" "}
      <a
        href="https://github.com/jstedfast/MailKit#sending-messages"
        target="_blank"
      >
        مستندات ارسال ایمیل MailKit
      </a>{" "}
      مراجعه کنید.
    </p>

    <Link href="/app-deploy/netcore/tips">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
