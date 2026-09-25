import { blogsData } from "../../constants";

function Blogs() {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <h3 className="pb-8 text-center text-3xl font-bold">Blogs</h3>
        {/* card section */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogsData.map((data) => (
            <div
              key={data.id}
              className="mx-auto flex max-w-75 flex-col items-center justify-center gap-6 rounded-md bg-white p-2 shadow-lg transition-all duration-300 hover:-translate-y-2 md:p-5"
              data-mouselabel="read"
              data-mousecustom={JSON.stringify({
                width: "70px",
                height: "70px",
                color: "black",
              })}
            >
              <img src={data.image} alt={`blog-img-${data.id}`} />
              <div className="space-y-2">
                <h3 className="line-clamp-2 text-xl font-bold">{data.title}</h3>
                <p className="line-clamp-2">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;