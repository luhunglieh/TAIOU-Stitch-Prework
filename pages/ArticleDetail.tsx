
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { ARTICLES } from '../constants';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = ARTICLES.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div class="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 class="text-2xl font-bold mb-4">找不到文章</h2>
        <Link to="/" class="text-primary hover:underline">返回首頁</Link>
      </div>
    );
  }

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
      <div class="flex flex-col lg:flex-row gap-12">
        <main class="w-full lg:w-[68%]">
          {/* Breadcrumb */}
          <div class="flex flex-wrap items-center gap-2 mb-6 text-sm font-medium font-body">
            <Link to="/" class="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">首頁</Link>
            <span class="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
            <Link to="/" class="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">產業部落格</Link>
            <span class="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
            <span class="text-primary">{article.category}</span>
          </div>

          <header class="mb-8">
            <div class="flex gap-2 mb-4">
              <span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider">
                TRENDS
              </span>
            </div>
            <h1 class="text-[#111418] dark:text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-display">
              {article.title}
            </h1>
            <div class="flex items-center justify-between border-y border-gray-100 dark:border-gray-800 py-4">
              <div class="flex items-center gap-3">
                <div 
                  class="size-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden bg-cover bg-center" 
                  style={{ backgroundImage: `url("${article.authorImage}")` }}
                ></div>
                <div>
                  <p class="text-sm font-bold text-gray-900 dark:text-white font-body">{article.author}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400 font-body">資深產業分析師</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-gray-500 dark:text-gray-400 font-body">{article.date}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 font-body">{article.readTime}</p>
              </div>
            </div>
          </header>

          <figure class="mb-10 w-full">
            <img 
              alt={article.title} 
              class="w-full h-auto rounded-xl object-cover shadow-sm aspect-[16/9]" 
              src={article.image}
            />
            <figcaption class="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 italic">
              AI 技術與產業發展示意圖：自動化生產線與數據監控中心
            </figcaption>
          </figure>

          <article class="prose prose-lg dark:prose-invert max-w-none article-content">
            <p class="text-lg leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <p>
              在過去的十年中，台灣製造業一直以其高效的供應鏈管理和精密的生產技術聞名於世。然而，隨著全球市場需求的快速變化和勞動力結構的轉變，傳統的自動化模式正面臨前所未有的挑戰。這正是生成式 AI（Generative AI）進場的時刻——它不僅僅是為了節省成本，更是為了創造全新的價值。
            </p>
            <h2 class="text-2xl font-bold mt-10 mb-4">供應鏈管理的革新</h2>
            <p>
              傳統的供應鏈管理依賴於歷史數據的線性預測。然而，生成式 AI 能夠處理非結構化數據，如新聞報導、氣候預測甚至是社群媒體的情緒分析，從而提供更具前瞻性的庫存建議。根據 TAIOU 的最新研究報告，導入 AI 預測模型的企業，其庫存周轉率平均提升了 18%。
            </p>
            
            <div class="bg-gray-50 dark:bg-surface-dark border-l-4 border-primary p-6 rounded-r-lg my-8 shadow-sm">
              <blockquote class="text-xl font-medium italic text-gray-700 dark:text-gray-200 border-none p-0 m-0">
                "AI 不會取代專家，但善用 AI 的專家將取代那些拒絕改變的人。在製造業，這意味著從『操作機器』轉向『管理智能』。"
              </blockquote>
            </div>

            <p>
              透過大型語言模型（LLM），工廠管理者現在可以用自然語言查詢複雜的生產數據。例如，不再需要編寫 SQL 查詢，只需問系統：「上週三號產線的良率為何下降？」，AI 便能迅速分析相關日誌並給出可能的根本原因。
            </p>

            <figure class="my-10">
              <img 
                alt="Data visualization" 
                class="w-full h-auto rounded-xl object-cover shadow-sm" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5_Z0AGfw5zLV2mZFbzu1bJokqTV4AAM8o-zWmpCzeonoM4WDwwIqYAU8NL8-_d4p32QDvyHLiPnP_mdIivqF5D85ciQAL0Qq-_LhejpgQEmcLcRRxnebnOSmShs7cNP4VCwdSTH4wzjvQ6Hk55NO7o78KWLE6NGrpxLpr5bJdWBxw0iKEeLNIbcwII7w9GXjSU0y4z3YYZUei8WKRDdFuaOvoJftTB9vhez9xKOhbJhXbu6ZO-sLyelwmvDd8fJtKAasU3Un9ezVu"
              />
            </figure>

            <h2 class="text-2xl font-bold mt-10 mb-4">數據驅動的決策</h2>
            <p>
              除了生產線的優化，生成式 AI 在產品設計階段也展現了驚人的潛力。工程師可以輸入設計參數與限制，AI 能在幾秒鐘內生成數百種設計方案，並模擬其結構強度與材料成本。這將產品開發週期從數月縮短至數週。
            </p>
            <p>
              展望未來，台灣製造業若能成功整合 IT（資訊技術）與 OT（營運技術），並輔以 AI 的決策支援，將能在全球智慧製造的浪潮中，持續保持領先地位。這不僅是技術的升級，更是思維模式的徹底轉型。
            </p>
          </article>

          {/* Tags and Share */}
          <div class="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div class="flex flex-wrap gap-2 items-center">
                <span class="text-sm font-bold text-gray-500 dark:text-gray-400 mr-2">標籤:</span>
                {article.tags?.map(tag => (
                  <Link 
                    key={tag} 
                    to="/" 
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-sm text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <div class="flex items-center gap-3">
                <span class="text-sm font-bold text-gray-500 dark:text-gray-400">分享:</span>
                <button class="size-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <span class="text-xs font-bold">F</span>
                </button>
                <button class="size-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <span class="text-xs font-bold">in</span>
                </button>
                <button class="size-8 rounded-full bg-[#00C300] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <span class="text-xs font-bold">L</span>
                </button>
                <button class="size-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  <span class="material-symbols-outlined text-[18px]">link</span>
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div class="mt-16">
            <h3 class="text-2xl font-bold mb-8 text-[#111418] dark:text-white font-display">相關文章</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ARTICLES.slice(0, 3).map(rel => (
                <Link key={rel.id} to={`/article/${rel.id}`} class="group flex flex-col">
                  <div class="overflow-hidden rounded-lg mb-3 aspect-[3/2]">
                    <img alt={rel.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={rel.image} />
                  </div>
                  <h4 class="font-bold text-lg leading-snug group-hover:text-primary transition-colors mb-2 dark:text-gray-200 line-clamp-2">
                    {rel.title}
                  </h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">{rel.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Sidebar />
      </div>
    </div>
  );
};

export default ArticleDetail;
