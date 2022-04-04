import { logEvent } from 'firebase/analytics';
import { useAnalytics } from '../lib/firebase';

const track_logout = () => {
  const analytics = useAnalytics();
  logEvent(analytics, 'logout');
};

export { track_logout };
