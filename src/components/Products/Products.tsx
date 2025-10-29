import { productsData } from "../../constants";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/utils";

function Products() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container py-14">
        <motion.h2
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView={"show"}
          className="pb-10 text-center text-3xl font-bold"
        >
          Our Product
        </motion.h2>
        {/* Card Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {productsData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp(item.delay)}
              initial="hidden"
              whileInView={"show"}
              className="max-w-[300px]: mx-auto flex flex-col items-center justify-center rounded-xl bg-white p-5 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 w-[100px] transition-all duration-300 hover:scale-110 hover:rotate-12"
              />
              <div className="space-y-2 text-center">
                <h3 className="font-handwriting text-center text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="text-center text-sm text-gray-600">{item.desc}</p>
                <button className="border-primary text-primary hover:bg-primary mt-5! rounded-md border-2 px-6 py-2 duration-200 hover:text-white">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
