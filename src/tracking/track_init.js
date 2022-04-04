import { useAnalytics } from '../lib/firebase';

const track_init = () => {
  useAnalytics();
};

export { track_init };
