import Head from 'next/head'
import CheckBox from "../components/CheckBox";
import styles from '../styles/Home.module.css';


const CONTENT_LIST = [
  "All text free from spelling errors",
  "Page and content formatting appropriate on all pages",
  "Placeholder text removed",
  "All pages have content",
  "Privacy Policy included (Generate one at getterms.io)",
  "Print stylesheet exists and tested",
  "Favicon created and displays correctly (retina included)",
  "Device icons created and display correctly",
  "Footer includes copyright statement",
  "404 page exists and informative",
  "Correct author is attributed to pages and posts (as required)",
];

const SEO = [
  "Page titles are descriptive and SEO friendly",
  "All page titles are unique",
  "Meta data included and appropriate",
  "H1s used for page titles and only one H1 per page",
  "XML sitemap has been generated and added to root of website",
  "robots.txt is generated and added to root of website",
  "301 redirects for existing website are prepared and in place",
  "Website can be accessed by search engines (remove noindex, nofollow for pages)",
  "Google Analytics and relevant analytics/tracking tools installed",
];

const SOCIAL = [
  "Open Graph tags included across website and appropriate? (including images where possible)",
  "Social accounts integrated, linking to correct URLs and use API for integrations",
];

const MARKUP = [
  "HTML has passed validation (or known issues noted)",
  "CSS has passed validation (or known issues noted)",
  "Bonus: CSS tested on CSS Lint (to hurt your feelings)",
  "Site links have been tested and resolve correctly",
  "JavaScript is error free",
]

const ACCESSIBILITY = [
  "Website meets appropriate level of WCAG compliance",
  "ARIA Landmark Roles specified",
  "Semantic headings and structure used",
  "Links are clearly recognizable and have :focus state",
  "Images use appropriate ALT text",
  "Alternatives provided for users with Javascript disabled",
  "Forms have logical layout",
  "Associated label for all form controls",
  "Colour contrast tested",
  "Website accessibility has been checked with Total Validator Pro or WAVE and issues resolved (exceptions noted)",
];

const RENDERING = [
  "Displays & functions correctly in IE9",
  "Displays & functions correctly in IE10",
  "Displays & functions correctly in IE11",
  "Displays & functions correctly in Firefox (Windows)",
  "Displays & functions correctly in Firefox (Mac)",
  "Displays & functions correctly in Chrome (Windows)",
  "Displays & functions correctly in Chrome (Mac)",
  "Displays & functions correctly in Safari (Mac)",
  "Displays & functions correctly in Safari (iOS – Mobile)",
  "Displays & functions correctly in Safari (iOS – iPad)",
  "Displays & functions correctly in Chrome (iOS – Mobile)",
  "Displays & functions correctly in Chrome (iOS – iPad)",
  "Displays & functions correctly in Chrome (Android – Mobile)",
  "Displays & functions correctly in Chrome (Android – Tablet)",
  "Displays & functions correctly in stock browser (Android)",
  "Displays & functions correctly in Microsoft Edge",
  "Displays & functions correctly on large resolutions",
];

const FUNCTIONALITY = [
  "Forms have been tested and processed correctly",
  "Required fields have been tested",
  "Review input validation (min/max lengths, character limits)",
  "Forms send to the correct recipient",
  "Forms have confirmation URL or event tracking so submissions can be tracked",
  "Forms process correctly with JavaScript disabled",
  "Website search and search results function correctly",
];

const OPTIMIZATION = [
  "Images have been optimized",
  "CSS is minified and combined",
  "JavaScript is minified and combined (as much as possible)",
  "Enable gzip compression",
  "Ensure only necessary fonts, weights and character sets are installed",
  "Run Google speed test and optimise accordingly (record score and known issues)",
  "Run Web page test and optimise accordingly (record results)",
  "Incorporate CDN / Caching as required",
]

const SECURITY = [
  "Secure areas are locked down and not accessible by search engines",
  "Default CMS login URL is changed",
  "Default CMS username is changed",
  "SSL Certificate is requested",
]

const POST_LAUNCH = [
  "Ensure site is visible to search engines",
  "SSL certificates successfully installed",
  "Images, media and links reference live URL",
  "Webfonts integrated and working correctly on live site",
  "Webfonts set to production (as required)",
  "301 redirects are in place and working correctly",
  "Website URL has been submitted to Google",
  "Generate a new sitemap.xml and upload to root",
  "Site added to Google Webmaster tools and sitemap submitted",
  "Analytics has been setup and integrated into website",
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Website Pre &amp; Post launch checklist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Website Pre &amp; Post launch checklist
        </h1>

        <section className={styles.section}>
          <h2>Content</h2>
          {CONTENT_LIST.map((title, index) => (
            <CheckBox key={'content' + index} title={title} />
          ))}
        </section>

        <section className={styles.section}>
          <h2>SEO &amp; Analytics</h2>
          {SEO.map((title, index) => (
            <CheckBox key={'seo' + index} title={title} />
          ))}
        </section>

        <section className={styles.section}>
          <h2>Social</h2>
          {SOCIAL.map((title, index) => (
            <CheckBox key={'social' + index} title={title} />
          ))}
        </section>

        <section className={styles.section}>
          <h2>Markup</h2>
          {MARKUP.map((title, index) => (
            <CheckBox key={'markup' + index} title={title} />
          ))}
        </section>

        <section className={styles.section}>
          <h2>Accessibility</h2>
          {ACCESSIBILITY.map((title, index) => (
            <CheckBox key={'accessibility' + index} title={title} />
          ))}
        </section>

        <section className={styles.section}>
          <h2>Rendering</h2>
          {RENDERING.map((title, index) => (
            <CheckBox key={'rendering' + index} title={title} />
          ))}
        </section>

        <section className={styles.section}>
          <h2>Functionality</h2>
          {FUNCTIONALITY.map((title, index) => (
            <CheckBox key={'functionality' + index} title={title} />
          ))}
        </section>

        <section className={styles.section}>
          <h2>Optimization</h2>
          {OPTIMIZATION.map((title, index) => (
            <CheckBox key={'optimization' + index} title={title} />
          ))}
        </section>

        <section className={styles.section}>
          <h2>Security</h2>
          {SECURITY.map((title, index) => (
            <CheckBox key={'security' + index} title={title} />
          ))}
        </section>

        <section className={styles.section}>
          <h2>Post Launch</h2>
          {POST_LAUNCH.map((title, index) => (
            <CheckBox key={'post-launch' + index} title={title} />
          ))}
        </section>

        <p className={styles.end}>Site launch 😊</p>
      </main>
    </div>
  )
}
