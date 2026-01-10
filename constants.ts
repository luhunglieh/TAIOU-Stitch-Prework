
import { Article, Category, PopularPost } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: '2024 台北 AI 產業白皮書發布：未來十年的機遇與挑戰',
    excerpt: '深入分析台北在亞太地區 AI 生態系中的戰略地位，探討技術創新如何驅動產業升級，並針對人才培育提出具體建議方案。',
    category: '產業白皮書',
    author: '工會專家小組',
    date: '2024/05/20',
    readTime: '10 分鐘閱讀',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKSuJSz_MohWX9hl-gS37wTtbwC9tDwXuFtUaUe17I-d0d2WmSI3RdJ2KBlFQYKISM20l7Ae_toT2kThmhBc83EgoNWmRfGNTyQha1McXLnrCbk28gdgPf2aRxu7ZRJEFwYs6wGm-OQxnTKXA2Wkhh52f5LDKY8XeW46Xm7WscepwNR0Ik4DdszPFYTIgZD2_t6Z6S3uMjj69sgXKVybV3yQzT8Nlxtylr6eyCSjQXEE_mLqH0H3u8iU1vd-U8d9FEn8Lb-bm5fqUh',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByZN7YGw_Stkc59vS1QCcMy5VoZ8qRb5vEGyUcsW9LB1PdEBZmcGVSaa6jwLfJUEnrrPvUkHjSMKRDYnE4gU6PBiK0gLRKjopen1FdBLH5zMA4f9Yif84KTIQ-9QVqyapqda_Ta--ijxnQ3a3wzx7ZEwDpgwhW32hrW9HfK_JaKahFbJ23f02q05UOyCCd44rVTYs7o0Z-0zQRI0ex6bg-m_a_njLXDjiSVidMgw5jwbH-TScXo7NaY96opWnp2pDWgKUPlZTFy3nO',
    isFeatured: true,
    tags: ['AI 政策', '產業分析', '台北市'],
    content: `在過去的十年中，台灣製造業一直以其高效的供應鏈管理和精密的生產技術聞名於世。然而，隨著全球市場需求的快速變化和勞動力結構的轉變，傳統的自動化模式正面臨前所未有的挑戰。這正是生成式 AI（Generative AI）進場的時刻——它不僅僅是為了節省成本，更是為了創造全新的價值。`
  },
  {
    id: '2',
    title: '生成式 AI 在台灣製造業的應用案例',
    excerpt: '深入探討本地工廠如何利用 AI 優化供應鏈，減少浪費並提高生產效率的實際數據分析。',
    category: '應用案例',
    author: '產業研究組',
    date: '2024/05/18',
    readTime: '5 分鐘閱讀',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0so9bcSJCAjb39_L1TNgyv5iczIgqM9uRjTLzgDWGd2dzHyoOrDbQu2Czbwd-ITJZPyXY00AsdwIFPIkp1XwXVb_tPoAMbpXAE2M022X2qNnmuMhwRYty8nRVZdi6oGTcz2LprYAHTKGBQ5_lEuGNkB5axC_bwuQZWfreAnyUG9Pmr9ceGQjpaKENyw9emHpSO65VOZDOHl8iMXL2jycoQXndonjnLUQWeLulQKRniBdXa63nb--FgFkjXomuBHuT-r4YyA2cOYmT',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2AK9kuG9nxms5Co0nFNOJpg293ribh8P8MIsyGy5F7ZExGQcqDBmZJtQX1Xj0siKeaufeDpq_Ndo5Ftpu-lcfZMhRv3w3EwhdqubxpgG9pW3XVBUuktMTsU53ywZZw8o6LTefUIotw0CpYOm9_gfkxMsEfkLI7skPC55h59gChQsrt_mlgYdahcrYyQ0Oz5w0mwTzHwxH6A0ausjlY_MY_kl8hoxOMP12iloJ-qYnm8r2Z7fHORi1BgFXfFswz9vQjjDs1QAEIlZC',
    tags: ['智慧製造', '供應鏈', '數位轉型']
  },
  {
    id: '3',
    title: 'AI 倫理與法律框架探討',
    excerpt: '隨著 AI 普及，法律界如何應對新興挑戰？本文整理了近期重要的國際法規變動。',
    category: '法律與倫理',
    author: '法務顧問',
    date: '2024/05/15',
    readTime: '8 分鐘閱讀',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjPiTUIUZZYERpuJRHspXhkUbFuRdC9VAloRPu_9xsrsVAbQ2kOHzlu3nRpHD4IiZIh_WdXOW0twwVjJHCjGNwGRPb93mm8tdb5JzGpJk4RxD00Y8NZDYoY6WcQejCILskyJyvehG-00TlgwqkfENc6Z2AjqOU2nbnA9zP5lGZoLkOuZq2rtmtjwRbbBPCeg5Ag8FJHUuCl_upw82re2g3ts-gmQY-Fw7ZKmja24it1CE7kiopauaE5fPdIG0G0JP4bM6_Ylyq84W3',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0ZXu9dG2T0jL-nWbuwEXBRwmEIoYyQd-g_031X80DBDRPVWuocA_-6e-fZUdQbBqXbS86cX_aaYLLqY7qB0n0RgeNS4l6zySK63dbdzS_uTqBPBfesnU1johIb5qxYK8t283SljwtIVuTpuLY9Mt59RyXK7yfyAzsB8a0xmRALFRdYbXj6zmxEChm7UtnxmEXakvQnegBP3ivruyyjJIAjR9gMn3Fwb8FZuJiwqyjVeUIFm45BRrMb8jn67tiUitQhXKxz0WZtq4b',
    tags: ['法律', '倫理', '合規']
  },
  {
    id: '4',
    title: '智慧城市：台北的數位轉型之路',
    excerpt: '台北市政府推動的最新智慧交通與安防專案，如何透過大數據改善市民生活品質。',
    category: '智慧城市',
    author: '城市規劃組',
    date: '2024/05/12',
    readTime: '6 分鐘閱讀',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBFGvv1d9duLMjxGmJwuwNOPdb6CTtXYvYmdW8Ja9LNo4yTCHsH4z36uy385Rpuf1AhOjymYt63UOOlqXQKj01kwNGNK9ItRueDjZIEGpxmI4YQtzom3Ieh_CtoxHry0_tDTnSSp4fstlnB92Cs4zpIrYHe5dx3iD_WJgmjnaokhRaNhwJpqhBagDn85VAoVeYxmwrjz_zNYR-V6bFBAU4o7FcBJY2gOQDpnY1IjS4715wAFzgX_BN2cyyKkrHNdUiPFf79fJD5mG0',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0KAu9HvWB1FjJ8-qCAcN_FS8jfXYKhZa1BppkgAFuQYxjsO6mK1p9RiwVGiXyQxfqTLMNCKO-fCjivVjjP_pHGxIUPpIuhN9NmrtNrg1tQ7Enxaa34XFyqZKFAxW8Cjm4B9OgWU_oTFQY9ClXh3GUXSnDH9Z53AmL7ybP9j1_lDnv-HujoFvXSdn14NQF23doOlFbmL7DTofB04d4pMhYsJi1QktrQzI6INlyk_f7O-evq1RFXulPqlt3ZOk5camrrb7MoTGMW3Ai',
    tags: ['智慧城市', '交通', '大數據']
  },
  {
    id: '5',
    title: '中小企業如何導入 AI 工具',
    excerpt: '針對資源有限的中小企業，提供成本效益分析與實施步驟完全指南。',
    category: '企業輔導',
    author: '企業輔導',
    date: '2024/05/10',
    readTime: '12 分鐘閱讀',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfXi5vDDQYmt3R7IXjILyp3IPpL6EB56P4RREeZylgQNHXfQmRlZAHH8jdgTbpOY7BZX2fAww4KYf3rKBEwsxtzXLIkS-tQU4ZBQ1625NcU-VaKmSafj0wO1iPfyu424gxhsHvi6XiRtc-A6mv3jfSd5sglmTTb9UIPHAkZUeiXo5tbrUNgj9XBmsA6oEhtaUS08orzdZEZn3GqN6jO1UhKsrd9U15O0ruB1N4oE9isWEAQRLBHivIz3Z6cCDXTY8xLYZhsjrbMGOQ',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJFrqFcATjl0F8NhqOe_KR3t2Sgjl22V9ZaUYio2J3MHmrCnj-cg1f1E_mtsWfdo52p6wDnktF6XKMuYNfSYgvnOQxux44rRDJb0CDhDMLeKsdEDbuQfePVwdLy1cakytmOMpaGDgu5Caa2o--kb420nq8rRJGlrKHOrf9opVNa8N8N8DSKoZrEGjXxpWb94N3haDVgqVXNI1nj0rk_hOCdMSzCqsJk3r53O_EcvKfw-ynAA-CRnt5t1hSlhPjqk9mKpqKyqCGViyS',
    tags: ['中小企業', '實務指南', '工具推薦']
  },
  {
    id: '6',
    title: '綠色 AI：運算效能與永續發展',
    excerpt: '如何平衡算力需求與碳排放，達成淨零目標的技術前沿探討。',
    category: '永續發展',
    author: '永續發展',
    date: '2024/05/05',
    readTime: '7 分鐘閱讀',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtDa_g9SR5Gmqguhe5jLu5VTsdi7qRu5RQ8d-YcwT7FtRCaTDcsglFqLR3YmESbaxbnfmD6YMJgHcweBenfGQxmOl_i4pN7VFKPC_9OCwv18Gx9T1tzBRoaejCfeq-K30BEv6G5RLaKQLxpK9TI_Wq1QRskxpMMmVjEzcDkmlZ2j_mVkVkDmzjphbpkv-83HzrgMeE3CynR04MVvUwibpZe1FMY1DwlkkYw5fxTiL9dFBu7P96z_O1upoWXxcC_yHWvN4SgkIBD416',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0XslxxoBb64lGWv9Hnruu3xzZjzRWcZPxemYJWYMjSNVBcpFrvz9yW5K9mIGy2vW--aYoSF8yX2ZlWtqU5K4sqEFzAdewoZy5hTYx11C0Pgzdko6LHZGKQhsvW1xRHbmjg2t0UbSixQjF9keppZ-w9_JGUixUsyzrulvtAjs1NmzvA8A4-80H1AIIcF9u9XPYJ2443pXuDynUEVHS63obwSlJRD8B5D45BHnFC0d8N7jgP1YbwoMRx7AKp8t83UKLGKdEV1zTjMFA',
    tags: ['ESG', '淨零排放', '綠色運算']
  }
];

export const CATEGORIES: Category[] = [
  { name: 'AI 政策 (AI Policy)', count: 12 },
  { name: '技術趨勢 (Tech Trends)', count: 24 },
  { name: '案例研究 (Case Studies)', count: 8 },
  { name: '活動快訊 (Events)', count: 5 },
  { name: '法律與倫理 (Ethics)', count: 15 }
];

export const POPULAR_POSTS: PopularPost[] = [
  { id: '1', rank: '01', title: '2024 台北 AI 產業白皮書發布', date: '5月20日' },
  { id: '2', rank: '02', title: '生成式 AI 在台灣製造業的應用案例', date: '5月18日' },
  { id: '10', rank: '03', title: 'NVIDIA 執行長訪台演講重點整理', date: '5月10日' },
  { id: '11', rank: '04', title: '中小企業數位轉型補助計畫懶人包', date: '4月28日' },
  { id: '12', rank: '05', title: '量子計算與 AI 的未來交匯點', date: '4月22日' }
];
