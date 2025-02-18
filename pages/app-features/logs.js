import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات لاگ‌ها logs - لیارا</title>
    </Head>

    <h1>لاگ‌ها</h1>
    <span className="page-description">(Logs)</span>

    <p>
      لاگ‌ها بخش مهمی را در هر برنامه‌ای به عهده دارند. لیارا این امکان را
      برای‌تان فراهم کرده‌است که بعد از مستقر کردن برنامه‌های‌تان بتوانید
      لاگ‌های آن‌ها را مشاهده و دنبال کنید.
    </p>
    <p>
      لیارا تنها لاگ‌هایی را می‌تواند نمایش دهد که بر روی stdout و یا stderr
      نوشته شوند. مثلا اگر در NodeJS با
      <span className="code">console.log('Hello World!')</span>
      یک لاگ ایجاد کنید، لیارا آن را نشان خواهد داد. اما اگر لاگ‌ها‌ی‌تان را
      داخل فایلی بریزید، از این بخش نمی‌توانید آن‌ها را مشاهده کنید و ممکن است
      بخواهید از بخش <a href="/apps/console">کنسول</a> استفاده کنید. که البته
      توصیه‌ی ما این است که از همان stdout و یا stderr استفاده کنید و لاگ‌های
      مهم‌تر را نیز علاوه بر کنسول در فایل نیز نگهداری کنید.
    </p>

    <h3>مشاهده‌ی لاگ‌ها از طریق پنل لیارا</h3>
    <p>
      با مراجعه به فهرست «برنامه‌ها»، روی برنامه‌ی مورد نظرتان کلیک کنید.
      <br />
      سپس روی گزینه‌ی لاگ‌ها از فهرست سمت راست کلیک کنید تا وارد صفحه‌ی لاگ‌ها
      شوید.
    </p>
    <ZoomableImage src="/static/logs.png" alt="بخش لاگ‌ها" />
    <p>
      لاگ‌ها به صورت زنده برای‌تان نمایش داده خواهند شد و نیازی به رفرش‌کردن
      صفحه نیست. هر لحظه‌ای که برنامه‌ی شما لاگ جدیدی تولید کند، همان لحظه در
      پنل لیارا آن را مشاهده خواهید کرد.
    </p>

    <h3>مشاهده‌ی لاگ‌ها از طریق خط فرمان</h3>
    <p>
      با دستور زیر می‌توانید لاگ‌ها را به صورت زنده از طریق{" "}
      <Link href="/clients/cli">CLI</Link> نیز مشاهده کنید. فقط کافیست شناسه
      برنامه‌‌ی‌تان را به بخش <span className="code">--app</span> بدهید:
    </p>
    <pre>
      <code>$ liara logs --app my-app</code>
    </pre>
  </Layout>
);
