import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات تهیه فایل پشتیبان از دیتابیس‌های SQL Server - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mssql" />
      <div className="page-title">
        <h1>دیتابیس SQL Server</h1>
        <span className="page-description">(SQL Server Database)</span>
      </div>
    </div>

    <h3>تهیه فایل پشتیبان</h3>

    <p>
      تهیه فایل پشتیبان از دیتابیس‌ها در لیارا به‌صورت روزانه و خودکار انجام
      می‌شود. همچنین شما می‌توانید از منوی <strong>پشتیبان‌گیری</strong> سرویس
      دیتابیس خود و با کلیک بر روی دکمه‌ی <strong>ایجاد فایل پشتیبان</strong>،{" "}
      به‌صورت دستی اقدام به تهیه فایل پشتیبان کنید.
    </p>
    <ZoomableImage
      src="/static/databases/mysql-liara-backup.png"
      alt="sql server backup page"
    />
  </Layout>
);
