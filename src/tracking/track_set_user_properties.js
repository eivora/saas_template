import { setUserProperties } from 'firebase/analytics';
import { useAnalytics } from '../lib/firebase';

const track_set_user_properties = (user_property) => {
  const analytics = useAnalytics();
  setUserProperties(analytics, user_property);
};

export { track_set_user_properties };
