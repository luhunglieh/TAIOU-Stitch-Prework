
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, POPULAR_POSTS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside class="w-full lg:w-1/3 flex flex-col gap-8">
      {/* Search */}
      <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <label class="block relative">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <span class="material-symbols-outlined">search</span>
          </span>
          <input 
            class="w-full py-2.5 pl-10 pr-4 bg-[#f0f2f4] dark:bg-gray-800 border-transparent rounded-lg text-sm placeholder-gray-500 focus:bg-white dark:focus:bg-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900 dark:text-gray-100" 
            placeholder="搜尋文章..." 
            type="text"
          />
        </label>
      </div>

      {/* Categories */}
      <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 class="text-lg font-bold text-[#111418] dark:text-white mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">category</span>
          文章分類
        </h3>
        <div class="flex flex-col gap-1">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.name}
              to="/" 
              class="flex items-center justify-between p-2 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 text-[#617589] dark:text-gray-400 hover:text-primary transition-colors group"
            >
              <span class="text-sm font-medium">{cat.name}</span>
              <span class="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs px-2 py-0.5 rounded-full group-hover:bg-primary/20 group-hover:text-primary">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 class="text-lg font-bold text-[#111418] dark:text-white mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">trending_up</span>
          熱門文章
        </h3>
        <div class="flex flex-col gap-4">
          {POPULAR_POSTS.map((post) => (
            <Link key={post.id} to={`/article/${post.id}`} class="group flex gap-3">
              <span class="text-2xl font-black text-gray-200 dark:text-gray-700 group-hover:text-primary/40 font-display leading-none">
                {post.rank}
              </span>
              <div>
                <h4 class="text-sm font-bold text-[#111418] dark:text-gray-200 group-hover:text-primary mb-1 line-clamp-2 transition-colors">
                  {post.title}
                </h4>
                <span class="text-xs text-gray-400 dark:text-gray-500">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
