import { projectAnalytics } from '../firebase/config';

const track_template_view = (
  page_component,
  template_component,
  template_id,
  ab_test_id = '',
  ab_test_group = ''
) => {
  projectAnalytics.logEvent('template_view', {
    page_component,
    template_component,
    template_id,
    ab_test_id,
    ab_test_group
  });
};

export { track_template_view };
