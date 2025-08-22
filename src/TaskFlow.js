import React from "react";

const TaskFlow = () => {
  return (
    <div className="container-fluid">
      <div className="page-header">
        <h1 className="text-amber-900">TASKFLOW</h1>
        <p className="text-slate-600">Oragnization. Flow. Peace of mind.</p>
        <button className="btn py-3 px-16 rounded-full border-0 bg-yellow-500 text-white text-lg">Let's Start</button>
      </div>

      <div className="cards-section">
        <h3 className="text-center mt-48 mb-48 text-6xl text-amber-900">FEATURES</h3>
        <div className="cards">
          <div class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div class="p-4 justify-items-center">
              <h5 class="text-xl font-bold mb-2">Card Title</h5>
              <p class="text-gray-700 mb-4 mx-5">
                This is a simple card built with Tailwind CSS. You can use it to
                display content in a clean way. This is a simple card built with
                Tailwind CSS. You can use it to display content in a clean way.
              </p>
              <a
                href="#"
                class="block mx-auto px-4 py-2 mb-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition "
              >
                Learn More
              </a>
            </div>
          </div>

          <div class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div class="p-4 justify-items-center">
              <h5 class="text-xl font-bold mb-2">Card Title</h5>
              <p class="text-gray-700 mb-4 mx-5">
                This is a simple card built with Tailwind CSS. You can use it to
                display content in a clean way. This is a simple card built with
                Tailwind CSS. You can use it to display content in a clean way.
              </p>
              <a
                href="#"
                class="block mx-auto px-4 py-2 mb-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          <div class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div class="p-4 justify-items-center">
              <h5 class="text-xl font-bold mb-2">Card Title</h5>
              <p class="text-gray-700 mb-4 mx-5">
                This is a simple card built with Tailwind CSS. You can use it to
                display content in a clean way. This is a simple card built with
                Tailwind CSS. You can use it to display content in a clean way.
              </p>
              <a
                href="#"
                class="block mx-auto mb-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews">
        <h3 className="text-center mt-48 mb-20 text-6xl text-amber-900">REVIEWS</h3>
        <div class="max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-auto mb-10">
          <div class="p-4">
            <h5 class="text-xl font-bold mb-2 mt-1">Card Title</h5>
            <p class="text-gray-700 mb-4">
              This is a simple card built with Tailwind CSS. You can use it to
              display content in a clean way. This is a simple card built with
              Tailwind CSS. You can use it to display content in a clean way.
            </p>
          </div>
        </div>

        <div class="max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-auto mb-10">
          <div class="p-4">
            <h5 class="text-xl font-bold mb-2 mt-1">Card Title</h5>
            <p class="text-gray-700 mb-4">
              This is a simple card built with Tailwind CSS. You can use it to
              display content in a clean way. This is a simple card built with
              Tailwind CSS. You can use it to display content in a clean way.
            </p>
          </div>
        </div>

        <div class="max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-auto mb-10">
          <div class="p-4">
            <h5 class="text-xl font-bold mb-2 mt-1">Card Title</h5>
            <p class="text-gray-700 mb-4">
              This is a simple card built with Tailwind CSS. You can use it to
              display content in a clean way. This is a simple card built with
              Tailwind CSS. You can use it to display content in a clean way.
            </p>
          </div>
        </div>
      </div>

      <div className="payment-section">
        <h3 className="text-center mt-48 mb-40 text-6xl text-amber-900">PAYMENT OPTIONS</h3>
        <div className="payment-options mb-20">
          <div class="card max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div class=" p-4 justify-items-center mx-6">
              <h5 class="text-3xl font-bold mb-0 mt-3">FREE</h5>
              <h5 class="text-5xl font-bold mt-3 mb-5">$0.00/mo</h5>
              <p class="text-gray-700 mb-4  mt-10 justify-content-center text-center">
                Basic Features
              </p>
              <p class="text-gray-700 mb-4 justify-content-center text-center">
                Limited Number of Tasks
              </p>
              <p class="text-gray-700 mb-4 justify-content-center text-center">
                Email Notifications Only
              </p>
              <a
                href="#"
                class="block mx-auto px-4 py-2  mt-10 text-white bg-gray-400 rounded-lg hover:bg-gray-300 transition"
              >
                TRY FREE
              </a>
            </div>
          </div>
          <div class="card max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div class="p-4 justify-items-center">
              <h5 class="text-3xl font-bold mb-0 mt-3">PRO</h5>
              <h5 class="text-5xl font-bold mt-3 mb-5">$14.99/mo</h5>
              <p class="text-gray-700 mb-4 mt-10 justify-content-center text-center">
                Customizable Features
              </p>
              <p class="text-gray-700 mb-4 justify-content-center text-center">
                Unlimited Number of Tasks
              </p>
              <p class="text-gray-700 mb-4 justify-content-center text-center">
                Push Notifications
              </p>
              <a
                href="#"
                class="block mx-auto mt-10 px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-amber-900 transition"
              >
                GET STARTED
              </a>
            </div>
          </div>
          <div class="card max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div class="p-4 justify-items-center">
              <h5 class="text-3xl font-bold mb-0 mt-3">ENTERPRISE</h5>
              <h5 class="text-5xl font-bold mt-3 mb-5">$49.99/mo</h5>
              <p class="text-gray-700 mb-4 mt-10 justify-content-center text-center">
                Invite Team Members
              </p>
              <p class="text-gray-700 mb-4 justify-content-center text-center">
                Access Team Tools
              </p>
              <p class="text-gray-700 mb-4 justify-content-center text-center">
                Team Chatroom & White Board
              </p>
              <a
                href="#"
                class="block mx-auto px-4 py-2 mt-10 text-white bg-yellow-500 rounded-lg hover:bg-amber-900 transition"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskFlow;
