import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات خط فرمان - لیارا</title>
    </Head>

    <h1>خط فرمان</h1>
    <span className="page-description">(Terminal)</span>

    <p>
      در برخی برنامه‌ها باید پس از استقرار موفق پروژه یک سری دستورها اجرا شوند.
      برای مثال ممکن است بخواهید دیتابیس را با داده‌های اولیه پر کنید و یا
      ساختار جداول را ایجاد کنید (migrations). خط فرمان بهترین جایی است که
      می‌توانید دستوراتی که معمولا یک بار لازم است اجرا شوند را اجرا کنید.
    </p>

    <h3>دسترسی به خط فرمان برنامه در لیارا CLI</h3>

    <p>
      برای اجرای دستور‌های مورد نیاز در فرایند{" "}
      <Link href="/cicd/about">CI/CD</Link> و یا دسترسی مستقیم به خط فرمان
      برنامه در سیستم‌عامل خود می‌توانید از دستور{" "}
      <Link href="/cli/app/#shell">shell</Link> لیارا CLI استفاده کنید.
    </p>

    <Highlight className="bash">{`$ liara shell`}</Highlight>

    <p>
      پس از اجرای دستور فوق و انتخاب برنامه‌ی مورد نظر به‌صورت مستقیم به خط
      فرمان برنامه با استفاده از <span className="code">/bin/bash</span> متصل
      خواهید شد اما درصورتی که تصمیم داشته باشید دستور به‌خصوصی را اجرا کنید یا
      در{" "}
      <Link href="/app-deploy/docker/getting-started">برنامه‌های Docker</Link>{" "}
      به <span className="code">/bin/sh</span> متصل شوید کافیست command پیش‌فرض
      را به شکل زیر تغییر دهید:
    </p>

    <Highlight className="bash">{`$ liara shell --command=/bin/sh`}</Highlight>

    <h3>دسترسی به خط فرمان برنامه در پنل کاربری</h3>
    <p>
      با مراجعه به فهرست «برنامه‌ها»، روی برنامه‌ی مورد نظرتان کلیک کنید.
      <br />
      سپس روی گزینه‌ی خط فرمان از فهرست سمت راست کلیک کنید تا وارد صفحه‌ی خط
      فرمان شوید.
    </p>
    <ZoomableImage src="/static/console2.png" alt="صفحه‌ی خط فرمان" />
    <p>
      در این صفحه، با کلیک کردن روی دکمه‌ی «اتصال»، به خط فرمان متصل شده و یک
      ترمینال برای‌تان اجرا خواهد شد.
      <br />
      این ترمینال،
      <span className="code">/bin/bash</span>
      را اجرا می‌کند. بنابراین می‌توانید هر دستوری که در bash قابل اجرا است را
      وارد نمایید.
    </p>
    <ZoomableImage src="/static/console1.png" alt="صفحه‌ی ترمینال" />

    <h3>چرا اتصال من به خط فرمان مدام قطع می‌شود؟</h3>
    <p>
      برای این‌که بتوانید به‌خط فرمان وصل شوید، برنامه‌ی شما باید روشن و در حال
      اجرا باشد. حتما بخش{" "}
      <Link href="/app-features/applets">
        <a>برنامک‌ها</a>
      </Link>{" "}
      را بررسی کنید. چنانچه برنامه‌ی شما مدام در حال crash کردن و ری‌استارت‌شدن
      باشد، امکان اتصال به‌خط فرمان را نخواهید داشت و ارتباط شما قطع خواهد شد.
    </p>

    <h3>
      چگونه می‌توانم با <span className="code">apt-get</span> پکیج‌های دلخواهم
      را روی سرور نصب کنم؟
    </h3>
    <p>
      از بخش خط فرمان این مورد امکان‌پذیر نیست. اما شما می‌توانید با استفاده از
      پلتفرم{" "}
      <Link href="/app-deploy/docker/getting-started">
        <a>Docker</a>
      </Link>
      ، هرگونه شخصی‌سازی‌ای که نیاز دارید را انجام دهید و پکیج‌های مدنظرتان را
      نصب کنید.
    </p>
  </Layout>
);
