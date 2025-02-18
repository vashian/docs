import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات ایمیل Transactional Email - لیارا</title>
    </Head>

    <h1>ایمیل</h1>
    <span className="page-description">(Transactional Email)</span>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#create-email">ایجاد سرویس ایمیل</a>
      </li>
      <li>
        <a href="#send-email">ارسال ایمیل</a>
      </li>
      <li>
        <a href="#inbox">صندوق ورودی</a>
      </li>
      <li>
        <a href="#sent-email">ارسال شده‌ها</a>
      </li>
      <li>
        <a href="#settings">تنظیمات</a>
      </li>
      <li>
        <a href="#spam-rate">درصد اسپم بودن ایمیل</a>
      </li>
    </ul>

    <p>
      سرویس ایمیل لیارا این امکان را فراهم کرده تا از طریق دسترسی SMTP قادر به
      ارسال ایمیل‌های تراکنشی باشید.
    </p>
    <p>
      ایمیل تراکنشی یا همان Transactional Email به ایمیل‌هایی گفته می‌شود که در
      پاسخ به یک عمل ارسال می‌شوند. برای مثال می‌توان ایمیل‌های تایید ثبت نام،
      فراموشی رمز عبور و سایر موارد مشابه را از دسته‌ی ایمیل‌های تراکنشی دانست.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که نمی‌توانید از این سرویس برای ارسال ایمیل‌های تبلیغاتی
      مانند: خبرنامه، جشنواره فروش و سایر موارد مشابه استفاده کنید و در صورت
      مشاهده، سرویس ایمیل شما مسدود خواهد شد.
    </Notice>

    <h3 id="create-email">ایجاد سرویس ایمیل</h3>
    <p>
      برای ایجاد سرویس ایمیل در ابتدا اطمینان حاصل کنید که{" "}
      <u>
        حداقل یک استقرار موفق داشته و حتما یک دامنه به برنامه‌ی خود متصل کرده
        باشید
      </u>
      . سپس وارد <b>برنامه‌ها</b> شده و بعد از انتخاب برنامه مورد نظر، از فهرست
      سمت راست بر روی گزینه‌ی <b>ایمیل</b> کلیک کنید.
    </p>

    <p>
      توجه داشته باشید که سرویس ایمیل فقط برای ریشه‌ی دامنه قابل ارائه است و
      ارائه سرویس ایمیل برای زیردامنه‌هایی مانند ‌subdomain.example.com ممکن
      نیست.
    </p>

    <ZoomableImage src="/static/email-1.png" />

    <p>
      در مرحله‌ی بعد بر روی دکمه‌ی <b>ایجاد سرویس ایمیل</b> کلیک کرده و اطلاعات
      خواسته شده در این مرحله را انتخاب کنید.
    </p>

    <ZoomableImage src="/static/email-2.png" />

    <p>
      پس از ایجاد سرویس ایمیل و انتقال به صفحه‌ی زیر بایستی رکوردهای DNS نمایش
      داده شده را به رکوردهای ثبت شده در زمان{" "}
      <Link href="/domains/management#add-domain">اتصال دامنه</Link>، اضافه کرده
      و بر روی دکمه‌ی <b>بررسی وضعیت رکوردها</b> کلیک کنید. همچنین این امکان
      برای شما فراهم است تا درصورت انتخاب دامنه‌ی اشتباه و یا هر دلیل دیگر بر
      روی دکمه‌ی <b>انصراف</b> کلیک کنید.
    </p>

    <ZoomableImage src="/static/email-3.png" />

    <p>
      درنهایت درصورتی که تمام رکوردها را به‌درستی وارد کرده باشید به صفحه‌ی زیر
      منتقل خواهید شد.
    </p>

    <ZoomableImage src="/static/email-4.png" />

    <h3 id="send-email">ارسال ایمیل</h3>

    <p>
      شما می‌توانید در این بخش با تعیین عنوان، فرستنده، گیرنده و محتوا به‌منظور
      ارسال ایمیل‌های فوری و آزمایشی استفاده کنید.
    </p>

    <ZoomableImage src="/static/email-5.png" />

    <h3 id="inbox">صندوق ورودی</h3>

    <p>
      در صندوق ورودی لیستی از ایمیل‌های دریافتی نمایش داده می‌شود که به‌کمک نشان
      دایره‌ای آبی رنگ در سمت راست عنوان ایمیل می‌توانید تشخیص دهید که این ایمیل
      هنوز خوانده نشده است و همچنین دایره‌ی بزرگ قرار گرفته در سمت راست هر ایمیل{" "}
      <Link href="#spam-rate">درصد اسپم بودن</Link> را نمایش می‌دهد که در بخشی
      دیگر این مورد را بررسی خواهیم کرد.
    </p>

    <ZoomableImage src="/static/email-6.png" />

    <h3 id="sent-email">ارسال شده‌ها</h3>

    <p>
      این بخش شامل لیستی از ایمیل‌های ارسال شده به‌همراه وضعیت ارسال ایمیل است
      که با کلیک بر روی هر کدام از ایمیل‌ها می‌توانید محتوای ایمیل را به‌همراه
      اطلاعات بیشتری در رابطه با وضعیت ارسال ایمیل مشاهده کنید.
    </p>

    <ZoomableImage src="/static/email-7.png" />

    <h3 id="settings">تنظیمات</h3>

    <p>
      تنظیمات سرویس ایمیل به چندین بخش تقسیم می‌شود که در ادامه هرکدام را بررسی
      می‌کنیم:
    </p>

    <h4>افزودن نشانی</h4>

    <p>
      در این قسمت می‌توانید نشانی‌های بیشتری در سرویس ایمیل ایجاد شده اضافه
      کنید. در حال حاضر تعداد مجاز نشانی، ۱۰ عدد است.
    </p>

    <ZoomableImage src="/static/email-settings-1.png" />

    <h4>دسترسی SMTP</h4>

    <p>
      در این بخش اطلاعات لازم برای استفاده از دسترسی SMTP نمایش داده می‌شود.
    </p>

    <ZoomableImage src="/static/email-settings-2.png" />

    <h4>رکوردهای DNS</h4>

    <p>
      در این قسمت وضعیت رکوردهای سرویس ایمیل نمایش داده می‌شود و در صورت نیاز به
      این رکوردها می‌توانید به این قسمت مراجعه کنید.
    </p>

    <ZoomableImage src="/static/email-settings-3.png" />

    <h4>حذف سرویس ایمیل</h4>

    <p>
      در بخش پایانی تنظیمات سرویس ایمیل امکان حذف سرویس ایمیل ایجاد شده وجود
      دارد که درصورت نیاز می‌توانید از این گزینه استفاده کنید. البته توجه داشته
      باشید که تمام داده‌ها در زمان حذف سرویس پاک خواهند شد و امکان بازگردانی
      اطلاعات وجود ندارد.
    </p>

    <ZoomableImage src="/static/email-settings-4.png" />

    <h3 id="spam-rate">درصد اسپم بودن ایمیل</h3>
    <p>
      شما می‌توانید درصد اسپم بودن هر ایمیل را در صفحه‌های{" "}
      <Link href="#inbox">صندوق ورودی</Link>،{" "}
      <Link href="send-email">ارسال شده‌ها</Link> و صفحه‌‌ای که محتوای هر ایمیل
      را نمایش می‌دهد، مشاهده کنید. چنانچه درصد اسپم بودن ایمیل‌های ارسال شده
      توسط شما بیش از ۵۰ باشد، ایمیل شما از طرف لیارا ارسال نخواهد شد.
    </p>
    <p>
      برای مطالعه در رابطه با نحوه‌ی بهبود ایمیل می‌توانید این{" "}
      <a
        href="https://www.copernica.com/en/documentation/some-tips-to-lower-your-email-spam-score"
        target="_blank"
      >
        مطلب
      </a>{" "}
      را مطالعه کرده و همچنین ایمیل خود را با استفاده از ابزارهای زیر، اعتبار
      سنجی کنید:
    </p>
    <ul>
      <li>
        <a href="https://www.mailgenius.com/" target="_blank" rel="noopener">
          mailgenius
        </a>
      </li>
      <li>
        <a
          href="https://www.barracudacentral.org/lookups"
          target="_blank"
          rel="noopener"
        >
          barracudacentral lookups
        </a>
      </li>
      <li>
        <a href="https://www.mail-tester.com/" target="_blank" rel="noopener">
          mail-tester
        </a>
      </li>
    </ul>
    <p>
      درصورتی که احساس کردید ایمیل‌های شما به مقصد مورد نظر ارسال نمی‌شود باید
      به‌کمک ابزارهای زیر بررسی کنید که دامنه‌ی شما در لیست سیاه قرار نگرفته
      باشد:
    </p>
    <ul>
      <li>
        <a
          href="https://mxtoolbox.com/blacklists.aspx"
          target="_blank"
          rel="noopener"
        >
          mxtoolbox blacklists check
        </a>
      </li>
      <li>
        <a
          href="https://www.debouncer.com/blacklistlookup"
          target="_blank"
          rel="noopener"
        >
          debouncer blacklistlookup
        </a>
      </li>
    </ul>
  </Layout>
);
