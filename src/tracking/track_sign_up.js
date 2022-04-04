import { logEvent } from 'firebase/analytics';
import { useAnalytics } from '../lib/firebase';

const track_sign_up = (sign_up_method) => {
  const analytics = useAnalytics();
  logEvent(analytics, 'sign_up', {
    method: sign_up_method
  });
};

export { track_sign_up };
