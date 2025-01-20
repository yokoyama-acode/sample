import Head from 'next/head';
import Link from 'next/link';
export default function Header() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>株式会社 A Code</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ここにサイト説明を入れます" />
        <link rel="stylesheet" href="../css/style.css" />
      </Head>

      <header>
        <h1 id="logo">
          <Link href="/">
            <img src="/images/logo.png" alt="株式会社A Code" />
          </Link>
        </h1>
        <nav>
          <ul>
            {/* <li><Link href="#koe">お客様の声</Link></li> */}
            {/* <li>
              <Link href="#products">制作実績</Link>
              <ul>
                <li><Link href="#">ドロップダウンメニュー</Link></li>
                <li><Link href="#">ドロップダウンメニュー</Link></li>
                <li><Link href="#">ドロップダウンメニュー</Link></li>
              </ul>
            </li> */}
            <li><Link href="#company-profile">会社概要</Link></li>
            {/* <li><Link href="#faq">よく頂く質問</Link></li>
            <li><Link href="#flow">制作の流れ</Link></li> */}
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
