
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { ARTICLES } from '../constants';

const BlogList: React.FC = () => {
  const featuredArticle = ARTICLES.find(a => a.isFeatured);
  const otherArticles = ARTICLES.filter(a => !a.isFeatured);

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div class="mb-10">
        <h1 class="text-[#111418] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4 font-display">
          產業部落格
        </h1>
        <p class="text-[#617589] dark:text-gray-400 text-lg md:text-xl font-normal max-w-2xl">
          探索人工智能的最新趨勢、技術見解與產業分析
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 xl:gap-12">
        <div class="w-full lg:w-2/3 flex flex-col gap-8">
          {/* Featured Post */}
          {featuredArticle && (
            <article class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
              <Link to={`/article/${featuredArticle.id}`} class="flex flex-col md:flex-row h-full">
                <div 
                  class="w-full md:w-2/5 h-64 md:h-auto bg-gray-200 dark:bg-gray-800 bg-center bg-cover relative" 
                  style={{ backgroundImage: `url("${featuredArticle.image}")` }}
                >
                  <div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Featured
                  </div>
                </div>
                <div class="p-6 md:p-8 flex flex-col justify-center flex-1">
                  <div class="flex items-center gap-2 mb-3 text-xs text-[#617589] dark:text-gray-400 font-medium uppercase tracking-wide">
                    <span class="text-primary font-bold">{featuredArticle.category}</span>
                    <span>•</span>
                    <span>{featuredArticle.author}</span>
                  </div>
                  <h2 class="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p class="text-[#617589] dark:text-gray-400 text-base mb-6 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div class="flex items-center justify-between mt-auto">
                    <span class="text-xs text-gray-400 dark:text-gray-500 font-display">{featuredArticle.date}</span>
                    <button class="flex items-center gap-1 text-primary text-sm font-bold hover:gap-2 transition-all">
                      閱讀更多 <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </Link>
            </article>
          )}

          {/* Article Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherArticles.map((article) => (
              <article key={article.id} class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full group">
                <Link to={`/article/${article.id}`} class="flex flex-col h-full">
                  <div 
                    class="aspect-video w-full bg-gray-200 dark:bg-gray-800 bg-cover bg-center" 
                    style={{ backgroundImage: `url("${article.image}")` }}
                  ></div>
                  <div class="p-5 flex flex-col flex-grow">
                    <div class="mb-2">
                      <span class="inline-block px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-semibold rounded">
                        {article.category}
                      </span>
                    </div>
                    <h3 class="text-lg font-bold text-[#111418] dark:text-white mb-2 leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p class="text-[#617589] dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                      {article.excerpt}
                    </p>
                    <div class="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800 mt-auto">
                      <div class="flex items-center gap-2">
                        <div 
                          class="size-6 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover" 
                          style={{ backgroundImage: `url("${article.authorImage}")` }}
                        ></div>
                        <span class="text-xs text-[#617589] dark:text-gray-400">{article.author}</span>
                      </div>
                      <span class="text-xs text-gray-400 dark:text-gray-500 font-display">{article.date.replace('2024/', '').replace('/', '月') + '日'}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div class="flex justify-center mt-8">
            <nav class="flex items-center gap-2">
              <button class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 disabled:opacity-50">
                <span class="material-symbols-outlined text-base">chevron_left</span>
              </button>
              <button class="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-medium text-sm">1</button>
              <button class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-[#111418] dark:text-gray-300 font-medium text-sm">2</button>
              <button class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-[#111418] dark:text-gray-300 font-medium text-sm">3</button>
              <span class="text-gray-400 dark:text-gray-600 mx-1">...</span>
              <button class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-[#111418] dark:text-gray-300 font-medium text-sm">8</button>
              <button class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
                <span class="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </nav>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default BlogList;
