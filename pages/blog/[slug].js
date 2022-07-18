import Navbar from "../../components/Navbar";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Pageee({ data }) {
  const myroute = useRouter();
  return (
    <>
      <Head>
        <title>{data.meta_title}</title>
        <meta name="Author" content="Homebaba"></meta>
        <meta name="Email" content="info@homebaba.ca"></meta>
        <meta name="Description" content={data.meta_description}></meta>
        <link
          rel="canonical"
          href={"https://homebaba.ca/blog/" + myroute.query.slug + "/"}
        />

        <meta property="og:type" content="og:website" />
        <meta property="og:title" content={data.meta_title} />
        <meta property="og:description" content={data.meta_description} />
        <meta
          property="og:image"
          content={"https://api.homebaba.ca" + data.thumbnail_image}
        />
        <meta
          property="og:url"
          content={"https://homebaba.ca/blog/" + myroute.query.slug + "/"}
        />
        <meta property="og:site_name" content="Homebaba" />
      </Head>
      <Navbar borderrr="shadow-mine" />
      <div className="w-100 bg-light d-flex align-items-center"></div>
      <div className="bg-white">
        <div className="text-center" id="thumb">
          <div className="container-fluid px-3">
            <div className="row row-cols-1 row-cols-sm-3 g-5 mx-0">
              <div
                className="col-12 col-sm-7 rounded nnn container bg-white"
                id="mymtn"
              >
                <div className="mt-5">
                  <Image
                    src={"https://api.homebaba.ca" + data.thumbnail_image}
                    className="img-fluid card-img-top"
                    alt={data.thumbnail_image_alt_description}
                    height={400}
                    width={1000}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div className="my-1"></div>
                  <div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-1 py-sm-3">
                      <Link href="/blog">
                        <a className="btn btn-sm px-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-arrow-left-short"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                            />
                          </svg>
                          Back to Homebaba blogs
                        </a>
                      </Link>
                      <Breadcrumbs />
                      <Link href="/buy-house">
                        <a className="btn btn-sm btn-light">
                          Search for a House
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h1 className="text-start main-title py-3 mb-3 fs-1">
                    {data.title}
                  </h1>
                  <div className="my-1"></div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-secondary text-start py-2 d-flex align-items-center">
                      <img
                        src={
                          "https://api.homebaba.ca" + data.author.profile_img
                        }
                        alt="..."
                        className="img-fluid roundd"
                        height="80px"
                        width="80px"
                      />
                      <div className="px-2">
                        <div className="fw-bold text-dark">
                          {data.author.user.first_name +
                            " " +
                            data.author.user.last_name}
                        </div>
                        <div className="text-secondary text-start">
                          {data.author.user_post}
                        </div>
                      </div>
                    </div>
                    <div className="text-secondary text-start">
                      Oct. 3, 2020
                      <br />
                      15 min read
                    </div>
                  </div>
                  <hr />
                  <div className="text-start mt-5 text-inside">
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="sidebar mt-3">
                  <div className="myps3">
                    <div className="position-relative">
                      <h2 className="ps">
                        <strike className="text-danger"> $15</strike>
                        <span className="my-2"></span>
                        <span className="text-success"> $0.00</span>
                      </h2>
                      <img
                        src="/book/bookmock.jpg"
                        alt="..."
                        className="img-fluid w-75"
                      />
                    </div>
                    <p className="fw-bold">
                      <span className="aff">Only</span>
                      <span className="text-danger fs-1">7</span>Left ! Do you
                      want if for free now Before it’s gone ?
                    </p>
                    <input
                      type="text"
                      className="form-control py-3 no-border my-3"
                      placeholder="Enter Phone"
                    />
                    <input
                      type="text"
                      className="form-control py-3 no-border my-3"
                      placeholder="Enter your email"
                    />
                    <button className="btn btn-mine4 btn-lg w-100">
                      Yes ! Send Me a Copy Fast
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 py-5"></div>
        <div className="container mt-2">
          <main>
            <h3 className="main-title">Related Articles</h3>
            <div className="py-3"></div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {data.related1.map((ele) => (
                <div key={ele.category.name} className="col">
                  <BlogCard elee={ele} />
                </div>
              ))}
            </div>
            <div className="my-3"></div>
          </main>
          <div className="py-4"></div>
        </div>
        <div className="py-5"></div>
        <div className="py-5"></div>
        {/* <div className="container">
          <div className="col-sm-10 py-4">
            <h2 className="fw-bold">
              Related <u className="bordbot">Posts</u>
            </h2>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="py-5"></div>
        </div> */}
      </div>
      <Image
        src="/line.png"
        alt="Line image"
        height="4"
        width="100"
        layout="responsive"
        className="img-fluid foot-up-img"
      />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://api.homebaba.ca/api/posts/");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.results.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const req = await fetch("https://api.homebaba.ca/api/posts/" + params.slug);
  const res = await req.json();
  return {
    props: {
      data: res,
    }, // will be passed to the page component as props
    revalidate: 1,
  };
}
