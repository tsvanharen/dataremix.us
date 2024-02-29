import { InsightCategory } from './type';

type CategoryName = 'Home' | 'Family' | 'UnitedStates';

const insightCategories: {
  [K in CategoryName]: InsightCategory
} = {
  Home: {
    slug: 'home',
    title: 'Home',
    intro: '',
  },
  Family: {
    slug: 'family',
    title: 'Family',
    intro: '',
  },
  UnitedStates: {
    slug: 'united-states',
    title: 'United States',
    intro: '',
  },
};

export default insightCategories;
