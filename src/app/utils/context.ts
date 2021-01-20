import { createContext } from 'react';

export interface stockDataType {
  Date: string;
  Open: string;
  High: string;
  Low: string;
  Close: string;
  Volume: string;
  OpenInt: string;
}

export interface metricsDataType {
  'Page Total Likes': string;
  Type: string;
  Category: string;
  'Post Month': string;
  'Post Weekday': string;
  'Post Hour': string;
  Paid: string;
  'Lifetime Post Total Reach': string;
  'Lifetime Post Total Impressions': string;
  'Lifetime Engaged Users': string;
  'Lifetime Post Consumers': string;
  'Lifetime Post Consumptions': string;
  'Lifetime Post Impressions by people who have liked your Page': string;
  'Lifetime Post reach by people who like your Page': string;
  // eslint-disable-next-line max-len
  'Lifetime People who have liked your Page and engaged with your post': string;
  comment: string;
  like: string;
  share: string;
  'Total Interactions': string;
}

export interface InitialAppState {
  fb: {
    metrics: metricsDataType[] | null;
    stocks: stockDataType[] | null;
  };
}

export interface AppContextType {
  // eslint-disable-next-line no-unused-vars
  changeContext: (newState: InitialAppState) => void;
  data: InitialAppState;
}

const context: AppContextType = {
  changeContext: () => {},
  data: { fb: { metrics: null, stocks: null } },
};

const AppContext = createContext<AppContextType>(context);

export default AppContext;
