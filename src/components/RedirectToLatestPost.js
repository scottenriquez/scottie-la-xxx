import { Redirect } from '@docusaurus/router';

export default function RedirectToLatestPost({ items }) {
  if (items?.length > 0) {
    return <Redirect to={items[0].content.metadata.permalink} />;
  }
  return <div>No posts found.</div>;
}
