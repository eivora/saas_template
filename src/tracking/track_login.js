import { logEvent } from 'firebase/analytics';
import { useAnalytics } from '../lib/firebase';

const track_login = (sign_in_method) => {
  const analytics = useAnalytics();
  logEvent(analytics, 'login', { method: sign_in_method });
};

export { track_login };
