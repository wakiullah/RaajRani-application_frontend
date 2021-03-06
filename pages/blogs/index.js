import Authors from "@/components/Blogs/Authors";
import Catagories from "@/components/Blogs/Catagories";
import RecentPost from "@/components/Blogs/RecentPost";
import React from "react";

const BlogPage = () => {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <div className="px-6 py-8 mt-16">
        <div className="container flex justify-between mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                Post
              </h1>
              <div>
                <select className="w-full px-2 py-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Latest</option>
                  <option>Last Week</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-light text-gray-600">Jun 1, 2020</span>
                  <a
                    href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    Laravel
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-2xl font-bold text-gray-700 hover:underline"
                  >
                    Build Your New Idea with Laravel Freamwork.
                  </a>
                  <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque.
                    Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    Read more
                  </a>
                  <div>
                    <a href="#" className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                        alt="avatar"
                        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      />
                      <h1 className="font-bold text-gray-700 hover:underline">
                        Alex John
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-light text-gray-600">mar 4, 2019</span>
                  <a
                    href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    Design
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-2xl font-bold text-gray-700 hover:underline"
                  >
                    Accessibility tools for designers and developers
                  </a>
                  <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque.
                    Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    Read more
                  </a>
                  <div>
                    <a href="#" className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                        alt="avatar"
                        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      />
                      <h1 className="font-bold text-gray-700 hover:underline">
                        Jane Doe
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-light text-gray-600">Feb 14, 2019</span>
                  <a
                    href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    PHP
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-2xl font-bold text-gray-700 hover:underline"
                  >
                    PHP: Array to Map
                  </a>
                  <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque.
                    Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    Read more
                  </a>
                  <div>
                    <a href="#" className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                        alt="avatar"
                        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      />
                      <h1 className="font-bold text-gray-700 hover:underline">
                        Lisa Way
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-light text-gray-600">Dec 23, 2018</span>
                  <a
                    href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    Django
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-2xl font-bold text-gray-700 hover:underline"
                  >
                    Django Dashboard - Learn by Coding
                  </a>
                  <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque.
                    Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    Read more
                  </a>
                  <div>
                    <a href="#" className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                        alt="avatar"
                        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      />
                      <h1 className="font-bold text-gray-700 hover:underline">
                        Steve Matt
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-light text-gray-600">Mar 10, 2018</span>
                  <a
                    href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    Testing
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-2xl font-bold text-gray-700 hover:underline"
                  >
                    TDD Frist
                  </a>
                  <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque.
                    Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    Read more
                  </a>
                  <div>
                    <a href="#" className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                        alt="avatar"
                        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      />
                      <h1 className="font-bold text-gray-700 hover:underline">
                        Khatab Wedaa
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex">
                <a
                  href="#"
                  className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed"
                >
                  previous
                </a>

                <a
                  href="#"
                  className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                >
                  1
                </a>

                <a
                  href="#"
                  className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                >
                  2
                </a>

                <a
                  href="#"
                  className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                >
                  3
                </a>

                <a
                  href="#"
                  className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                >
                  Next
                </a>
              </div>
            </div>
          </div>
          <div className="hidden w-4/12 -mx-8 lg:block">
            <Authors />
            <Catagories />
            <RecentPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
