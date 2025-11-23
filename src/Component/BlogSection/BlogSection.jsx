import React from "react";
import { blogData } from "../../Mockdata/blogData";

// Shadow colors for both base and hover
const hoverShadowColors = [
  "hover:shadow-green-400/60",
  "hover:shadow-purple-400/60",
  "hover:shadow-blue-400/60",
  "hover:shadow-yellow-400/60",
  "hover:shadow-pink-400/60",
  "hover:shadow-rose-400/60",
];

const baseShadowColors = [
  "shadow-green-200",
  "shadow-purple-200",
  "shadow-blue-200",
  "shadow-yellow-200",
  "shadow-pink-200",
  "shadow-rose-200",
];

const BlogSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-green-50 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-700 relative inline-block">
            Latest from <span className="text-green-500">Our Blog</span>
            <span className="block w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto mt-2 rounded-full"></span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Stay updated with the latest articles and insights from CIHS Institute. Curated with expert knowledge.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((post, index) => {
            const hoverColor = hoverShadowColors[index % hoverShadowColors.length];
            const baseColor = baseShadowColors[index % baseShadowColors.length];

            return (
              <div
                key={post.id}
                className={`bg-white rounded-xl overflow-hidden ${baseColor} shadow-md ${hoverColor}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto sm:h-64 md:h-52 lg:h-56 object-contain sm:object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-700 mb-4">{post.excerpt}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
