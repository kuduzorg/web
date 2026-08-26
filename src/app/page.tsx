import { HomeDashboard } from "@/components/home/home-dashboard";
import { Symptoms } from "@/components/symptoms";
import { ResourcesSection } from "@/components/resources-section";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { query } from "@/lib/db";

interface NewsItem { id:string;title:string;source:string;tag:string;published_at:string;link:string|null }
export default async function Home() {
  const [counts, news] = await Promise.all([
    query<{reports:number;contributions:number;news:number}>(`SELECT (SELECT count(*)::int FROM reports) reports,(SELECT count(*)::int FROM contribution_requests) contributions,(SELECT count(*)::int FROM news) news`),
    query<NewsItem>(`SELECT id,title,source,tag,published_at,link FROM news ORDER BY published_at DESC LIMIT 3`),
  ]);
  return (
    <>
      <HomeDashboard stats={counts.rows[0]} news={news.rows} />
      <Symptoms />
      <ResourcesSection />
      <FAQ />
      <Footer />
    </>
  );
}
