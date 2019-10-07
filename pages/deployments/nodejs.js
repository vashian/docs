import Layout from '../../components/Layout'
import Head from 'next/head'
import ZoomableImage from '../../components/ZoomableImage'

export default () => (
  <Layout>
    <Head>
      <title>Liara | استقرار پروژه‌های NodeJS - NodeJS deployment</title>
    </Head>

    <h1>استقرار پروژه‌های NodeJS</h1>

    <p>
      ما هم مثل شما عاشق NodeJS هستیم :)
      <br/>
      پروژه‌ی شما باید دارای فایل
      <span className="code">package.json</span>
      باشد تا بتواند در لیارا مستقر شود.
    </p>

    <h3>انتخاب نسخه‌ی NodeJS</h3>
    <p>
      به‌صورت پیش‌فرض، پروژه‌ی شما روی نسخه‌ی 10 این پلتفرم اجرا می‌شود.
      می‌توانید یک فایل با نام
      <span className="code">liara.json</span>
      داخل پروژه‌ی‌تان بسازید و نسخه‌ی مدنظرتان را به شکل زیر تعیین کنید. سپس بعد از یک بار دیپلوی،
      پروژه‌ی شما روی نسخه‌ی تعیین شده اجرا خواهد شد.
    </p>
<pre>
  <code>
{`{
  "node": {
    "version": "12"
  }
}`}
  </code>
</pre>
    <p>
      در حال حاظر، از نسخه‌های زیر پشتیبانی می‌شود:
      <ul>
        <li>8</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
      </ul>
    </p>

    <h3>پکیج‌ها به صورت خودکار نصب می‌شوند</h3>
    <p>
      لیارا به صورت خودکار پکیج‌هایی که در فایل
      <span className="code">package.json</span>
      لیست شده‌اند را برای شما نصب می‌کند. پس نیازی ندارید که دنبال اجرای دستور
      <span className="code">npm install</span>
      باشید. از آن‌جایی که اجرای این دستور زمان‌بر است، برای سرعت بیشتر، این دستور را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر نمانید.
    </p>

    <h3>دستور npm start</h3>
    <p>
      داخل فایل 
      <span className="code">package.json</span>
      یک فیلد با نام
      <span className="code">scripts</span>
      وجود دارد. شما باید
      <b> حتما </b>
      یک اسکریپت در این بخش با نام
      <span className="code">start</span>
      تعریف کنید.
    </p>
    <h3>نمونه‌ی فایل package.json</h3>
    <pre>
      <code>
{`{
  "name": "app",
  "version": "0.1.0",
  "description": "My application",`}
<b>
{`
  "scripts": {
    "start": "node server.js"
  },`}
</b>
{`
  "dependencies": {
    "express": "4"
  }
}`}
      </code>
    </pre>
    <p>
      بعد از این‌که پروژه‌ی شما آپلود شد، لیارا برای شما دستور
      <span className="code">npm start</span>
      را اجرا می‌کند. شما باید داخل این اسکریپت، دستوری بنویسید که باعث اجرا شدن برنامه‌ی‌تان شود.
      مثلا اگر یک فایل
      <span className="code">server.js</span>
      در پروژه‌ی‌تان وجود دارد که باید توسط node اجرا شود، باید
      <span className="code">node server.js</span>
      را داخل فیلد
      <span className="code">start</span>
      قرار دهید. (مانند نمونه‌ی بالا)
    </p>

    <h3>مشخص کردن Port</h3>
    <p>
      لیارا باید بداند که پروژه‌ی شما روی چه پورتی اجرا خواهد شد تا بتواند درخواست‌هایی که
      {' '}
      به سمت برنامه‌ی شما می‌آیند را به درستی هدایت کند.
    </p>
    <p>
      CLI هر بار که بخواهید مستقر کردن را انجام دهید، از شما پورت را می‌پرسد.
      <br/>
      اما شما می‌توانید یک فایل
      <span className="code">liara.json</span>
      داخل پروژه‌ی‌تان تعریف کرده و پورت را داخل آن وارد کنید:
    </p>
    <pre>
      <code>
{`{
  "port": 3000
}`}
      </code>
    </pre>
    <p>
      در این مثال، فرض بر این بوده‌است که پروژه‌ی شما روی پورت ۳۰۰۰ اجرا خواهد شد.
      شما باید به جای این پورت، پورتی که برنامه‌ی‌تان در آن اجرا خواهد شد را وارد نمایید.
    </p>

    <h3>آغاز عملیات استقرار</h3>
    <p>
      و حالا که تقریبا تمامی تنظیمات اولیه را انجام داده‌ایم، می‌توانیم عملیات استقرار (deployment)
      {' '}
      را آغاز کنیم.
      <br />
      دستور زیر را داخل پروژه‌ی‌تان اجرا کنید:
    </p>
    <pre>
      <code>liara deploy</code>
    </pre>
    <p>
      و تمام! تبریک می‌گوییم. شما پروژه‌ی‌تان را با موفقیت در بستر ابری ما مستقر کردید.
    </p>

    <h3>ES6 و build کردن پروژه</h3>
    <p>
      اگر پروژه‌ی‌تان را با ES6 و یا بالاتر نوشته‌اید و برنامه‌ی‌تان قبل از اجرا شدن، نیاز به build شدن دارد،
      باید یک اسکریپت دیگر با نام
      <span className="code">build</span>
      تعریف کنید و دستورات لازم برای build شدن پروژه‌ی‌تان را داخلش تعریف کنید.
      <br/>
      برای نمونه:
    </p>
    <pre>
      <code>
{`{
  "scripts": {
    "start": "node build/server.js",
    "build": "gulp build"
  }
}`}
      </code>
    </pre>

    <a name="npm-auditing"></a>
    <h3>گزارش مشکلات امنیتی پکیج‌های نصب شده با npm</h3>
    <p>
      قابل انکار نیست که تعداد پکیج‌های npm بسیار زیاد هستند و برخی از آن‌ها هم ممکن است دارای مشکلات امنیتی باشند و بسیاری از این مشکلات امنیتی هم بعدها در نسخه‌های جدیدی که ارائه می‌کنند رفع می‌شود. اما شما چگونه می‌توانید مطمئن شوید که نسخه‌ی فعلی پکیج‌هایی که نصب کرده‌اید دارای مشکل هستند یا نه؟ چگونه می‌توانید متوجه شوید که آیا راه حلی هم برای این مشکل وجود دارد یا نه؟
    </p>
    <p>
      لیارا می‌تواند گزارشات کاملی را درباره مشکلات امنیتی پروژه‌ی‌تان در پنل کاربری به شما نمایش دهد. فقط کافی است که در فایل
      <span className="code">liara.json</span>
      پروژه‌ی خود، <span className="code">npmAudit</span>
      را برابر <span className="code">true</span> قرار دهید. این قابلیت به صورت پیش‌فرض غیر فعال است. برای نمونه:
    </p>
    <pre>
      <code>
{`{
  "port": 3000,
  "node": {
    "version": "10",
    "npmAudit": true
  }
}`}
      </code>
    </pre>
    <p>
      و حالا از این پس هر بار که دستور
      <span className="code">liara deploy</span>
      را برای استقرار و بروزرسانی پروژه‌ی‌تان وارد کنید، گزارش امنیتی نیز برای‌تان قابل مشاهده خواهد بود.
    </p>
    <ZoomableImage src="/static/npm-auditing.png" alt="صفحه‌ی گزارشات امنیتی" />
  </Layout>
)
