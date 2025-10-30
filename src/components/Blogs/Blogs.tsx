import { UpdateFollower } from "react-mouse-follower";
import { blogsData } from "../../constants";

function Blogs() {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <h3 className="pb-8 text-center text-3xl font-bold">Blogs</h3>
        {/* card section */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogsData.map((data) => (
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 9999,
                followSpeed: 1.5,
                text: "read",
                textFontSize: "3px",
                scale: 5,
              }}
            >
              <div
                key={data.id}
                className="mx-auto flex max-w-[300px] flex-col items-center justify-center gap-6 rounded-md bg-white p-2 shadow-lg transition-all duration-300 hover:-translate-y-2 md:p-5"
              >
                <img src={data.image} alt={`blog-img-${data.id}`} />
                <div className="space-y-2">
                  <h3 className="line-clamp-2 text-xl font-bold">
                    {data.title}
                  </h3>
                  <p className="line-clamp-2">{data.description}</p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
