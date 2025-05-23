export interface CryptoPrice {
  symbol: string;
  price: string;
}

export interface CryptoData {
  symbol: string;
  price: string;
  previousPrice: string | null;
  lastUpdated: number;
}

export interface PortfolioItem {
  symbol: string;
  amount: number;
  purchasePrice: number;
  purchaseDate: number;
  fee?: number;
  notes?: string;
}

// Add this to your existing types file
export interface Wallet {
  id: string;
  name: string;
  items: PortfolioItem[];
}

// Update the Portfolio interface
export interface Portfolio {
  items?: PortfolioItem[];
  wallets: Wallet[];
  lastUpdated: number;
}

export interface CoinData {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  volume: number;
  price: string;
  priceChangePercent: number;
  isTrending?: boolean;
  marketCap?: number;
  high24h?: number;
  low24h?: number;
  priceHistory?: {timestamp: number, price: number}[];
}

export interface CryptoData {
  symbol: string;
  price: string;
  previousPrice: string | null;
  lastUpdated: number;
  marketCap?: number;
  volume24h?: number;
  high24h?: number;
  low24h?: number;
  priceHistory?: {timestamp: number, price: number}[];
  isExpanded?: boolean;
  priceChange24h?: number;
}

export interface UserHistoryItem {
  count: number;
  lastSearched: number;
}

export interface UserSearchHistory {
  [symbol: string]: UserHistoryItem;
}

export interface SearchResult {
  symbol: string;
  score: number;
  matchType: 'exact' | 'prefix' | 'fuzzy' | 'popular' | 'history' | 'trending';
}