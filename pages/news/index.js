import { Fragment } from "react";

import Link from "next//link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href="/news/detail">See details</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
