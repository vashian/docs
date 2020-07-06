import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        سرویس ابری لیارا | مستندات بررسی سلامت برنامه - Health Check
      </title>
    </Head>

    <h1>بررسی سلامت</h1>
    <span className="page-description">(Health Check)</span>

    <p>
      برای این که بتوانید از قابلیت «
      <Link href="/apps/zero-downtime-deployment">استقرار بدون اختلال</Link>»
      لیارا بیشترین استفاده را ببرید، توصیه می‌کنیم که از قابلیت «بررسی سلامت»
      هم استفاده کنید. هر استقرار جدید منجر به ایجاد یک{" "}
      <Link href="/apps/applets">برنامک</Link> مختص به آن استقرار می‌شود.
      برنامک‌ها، یک نسخه‌ی اجرا شده از استقرار شما هستند. تا زمانی که تست «بررسی
      سلامت» این برنامک موفق نباشد، ترافیک به آن منتقل نمی‌شود و برنامک قبلی
      همچنان مسئول پردازش درخواست‌های ارسالی به برنامه‌ی‌تان خواهد بود.
    </p>

    <p>
      بررسی سلامت به این شکل کار می‌کند که شما یک دستور مشخصی را تعریف می‌کنید و
      لیارا در بازه‌هایی مشخص این دستور را در برنامک شما اجرا می‌کند. اگر نتیجه
      موفقیت‌آمیز باشد، برنامک شما «سالم» در نظر گرفته می‌شود. اگر نتیجه ناموفق
      باشد، ناسالم.
    </p>

    <p>
      این دستور، باید یک دستور
      <span className="code">shell</span>و
      <span className="code">exit code</span>
      آن باید برابر 0 و یا 1 باشد. 0 به معنای اجرای موفق و 1 به معنای خطا و
      اجرای ناموفق دستور است.
    </p>

    <h3>ایجاد تست بررسی سلامت</h3>
    <p>
      تست بررسی سلامت را باید در فایل{" "}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">
        liara.json
      </Link>{" "}
      تعریف کنید. برای نمونه:
    </p>
    <Highlight className="json">
      {`{
  "port": 3000,
  "healthCheck": {
    "command": "curl --fail http://localhost:3000 || exit 1",
    "interval": 20,
    "timeout": 15,
    "retries": 2,
    "startPeriod": 5
  }
}`}
    </Highlight>
    <ZoomableImage
      src="/static/health-check.jpg"
      alt="docker container health check"
    />

    <p>
      در مثال بالا، از ابزار
      <span className="code">curl</span>
      استفاده کردیم. ابزاری که استفاده می‌کنید، باید در برنامک نصب شده باشد.
      لیارا به صورت پیش‌فرض،
      <span className="code">curl</span>
      را روی تمام پلتفرم‌های پشتیبانی شده نصب کرده است.
    </p>

    <Notice>
      در فایل نمونه‌ی بالا از دستور{" "}
      <span className="code">curl --fail http://localhost:3000 || exit 1</span>{" "}
      استفاده کرده‌ایم. این دستور به این صورت عمل می‌کند که یا وب‌سرور شما Status
      200 برمیگرداند و در نتیجه curl با کد 0 خارج می‌شود (عملیات موفقیت‌آمیز) و
      یا این که وب‌سرور شما Status 200 برنمیگرداند و curl با کد 0 خارج نمی‌شود و
      قسمت بعد از || یا همان exit 1 اجرا می‌شود. (عملیات غیرموفقیت‌آمیز)
    </Notice>

    <p>
      در مثال بالا، بعد از روشن‌شدن برنامک‌، به اندازه‌ی
      <span className="code">startPeriod</span>
      صبر کنیم که در این مثال برابر ۵ ثانیه است. چرا که گاها می‌دانیم برنامک ما
      در چند ثانیه‌ی اول پاسخ‌گوی کاربر نیست و برای مثال نیازمند اتصال به
      دیتابیس است و این مورد ممکن است چندثانیه‌ای طول بکشد.
    </p>
    <p>
      بعد از اتمام ۵ ثانیه، لیارا به مدت
      <span className="code">interval</span>
      ثانیه صبر می‌کند و سپس دستور را یک بار اجرا می‌کند. در مثال بالا، این
      مقدار برابر با ۲۰ ثانیه است، و این یعنی اولین تست سلامت در ثانیه‌ی ۲۵
      انجام می‌گردد. (۵ + ۲۰ = ۲۵)
    </p>
    <p>
      وب‌سرور شما حداکثر به اندازه‌ی
      <span className="code">timeout</span>
      ثانیه فرصت دارد که پاسخ دهد. اگر پاسخی ندهد و یا کد HTTP پاسخ برابر با
      <span className="code">200</span>
      نباشد، تست ناموفق حساب می‌شود.
    </p>
    <p>
      لیارا تا حداکثر به اندازه‌ی
      <span className="code">retries</span>
      بار، دستور را اجرا می‌کند و اگر در هر بار نتیجه ناموفق باشد، برنامک را به
      عنوان «ناسالم» اعلام می‌کند.
    </p>

    <p>
      <ul>
        <li>
          <span className="code">command</span>: دستوری که به صورت بازه‌ای داخل
          برنامک اجرا می‌شود. الزامی.
        </li>
        <li>
          <span className="code">interval</span>: هر چند ثانیه یک بار این دستور
          اجرا شود؟ اختیاری. پیش‌فرض: ۳۰ ثانیه
        </li>
        <li>
          <span className="code">timeout</span>: حداکثر چند ثانیه طول می‌کشد تا
          دستور پاسخ دهد؟ اختیاری. پیش‌فرض: ۳۰ ثانیه
        </li>
        <li>
          <span className="code">retries</span>: در صورت ناموفق‌بودن اجرای
          دستور، چند بار تست سلامت را تکرار کنیم تا در نهایت برنامک را «ناسالم»
          اعلام کنیم؟ اختیاری. پیش‌فرض: ۳ بار
        </li>
        <li>
          <span className="code">startPeriod</span>: بعد از روشن‌شدن برنامک، چند
          ثانیه صبر کنیم و بعد تست سلامت را شروع کنیم؟ اختیاری. پیش‌فرض: ۳ ثانیه
        </li>
      </ul>
    </p>

    <h3>اگر برنامک ناسالم باشد، چه اتفاقی می‌افتد؟</h3>
    <p>
      در صورتی که تست‌های سلامت برنامک شما ناموفق باشد و برنامک «ناسالم» اعلام
      شود، در شرایط مختلف، لیارا واکنش متفاوتی نشان می‌دهد.
    </p>
    <p>
      ۱) در زمانی که استقرار جدیدی انجام داده‌اید، ترافیک به برنامک‌های ناسالم
      هدایت نمی‌شود و صرفا زمانی که برنامک تست‌های خود را با موفقیت سپری کند و
      سالم حساب شود، می‌تواند ترافیک ورودی برنامه‌ی شما را پردازش کند.
    </p>
    <p>
      ۲) در صورتی که استقرار انجام شده و ساعت‌ها و یا روزهای بعد به هر دلیلی
      برنامک ناسالم شود، لیارا به صورت خودکار برنامک را ری‌استارت می‌کند تا مشکل
      احتمالی برطرف شود و برنامک بتواند سرویس‌دهی کند و شما بتوانید سر فرصت و در
      زمان مناسب مسئله را پیدا کرده و رفع کنید. این اتفاق زمانی رخ می‌دهد که
      برنامک شما روشن است اما به هر دلیلی پاسخ‌گوی کاربر نیست و نیاز به
      ری‌استارت دارد.
    </p>
  </Layout>
);
