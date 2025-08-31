import React from "react";
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const TaskFlow = () => {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  useEffect(() => {
    ScrollReveal().reveal(".page-header", {
      origin: "top",
      distance: "100px",
      duration: 2300,
      reset: true,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".cards", {
      origin: "bottom",
      distance: "100px",
      duration: 2000,
      reset: true,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".reviews", {
      origin: "bottom",
      distance: "100px",
      duration: 2000,
      reset: true,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".payment-options", {
      origin: "bottom",
      distance: "100px",
      duration: 2000,
      reset: true,
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="page-header justify-center text-center">
        <h1 className="text-8xl sm:text-4xl md:text-[180px] lg:text-9xl mt-48 sm:mt-24 md:mt-[60%] lg:mt-48 text-amber-900">TaskFlow</h1>
        <p className="text-slate-600 md:text-3xl">
          Oragnization. Flow. Peace of mind.
        </p>
        <button
          className="btn py-3 px-16 md:text-4xl lg:text-base rounded-full border-0 bg-yellow-500 text-white text-lg"
          onClick={executeScroll}
        >
          Let's Start
        </button>
      </div>

      <div className="cards-section" ref={myRef}>
        <h3 className="text-center pt-16 mt-48 md:mt-96 sm:mb-12 md:mb-24 lg:mb-36 text-5xl sm:text-3xl md:text-5xl lg:text-5xl text-amber-900">
          Features
        </h3>
        <div className="flex flex-col lg:flex-row gap-6 my-12 px-5 justify-center items-center">
          <div class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex-shrink-0">
            <div class="p-4 justify-items-center">
              <div className="card-icon text-5xl mt-4">
                <i class="fa-regular fa-calendar-days"></i>
              </div>
              <p class="text-gray-700 mx-5 text-center my-6">
                View and manage your timelines using calendars.
              </p>
              <a
                href="#"
                class="block mx-auto px-4 py-2 mb-2 text-white bg-yellow-500 rounded-lg hover:bg-amber-900 transition "
              >
                Learn More
              </a>
            </div>
          </div>

          <div class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div class="p-4 justify-items-center">
              <div className="card-icon text-5xl mt-4">
                <i class="fa-regular fa-pen-to-square"></i>
              </div>
              <p class="text-gray-700 mb-4 mx-5 text-center">
                Add tasks and schedule your meetings automatically into your
                calendar using Natural Language Processing.
              </p>
              <a
                href="#"
                class="block mx-auto px-4 py-2 mb-2 text-white bg-yellow-500 rounded-lg hover:bg-amber-900 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          <div class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div class="p-4 justify-items-center">
              <div className="card-icon text-5xl mt-4">
                <i class="fa-regular fa-comments"></i>
              </div>
              <p class="text-gray-700 mb-4 mx-5 text-center">
                Collaborate with your team, accomplishing more tasks efficiently
                with Team Chat and White Board.
              </p>
              <a
                href="#"
                class="block mx-auto mb-2 px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-amber-900 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <h3 className="text-center mt-24 sm:mt-12 md:mt-24 lg:mt-60 mb-12 sm:mb-12 md:mb-24 lg:mb-20 text-5xl sm:text-3xl md:text-5xl lg:text-5xl text-amber-900">
          Reviews
        </h3>
        <div className="reviews px-5 md:px-20">
          <div class="max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-auto mb-10">
            <div class="p-4">
              <h5 class="text-xl font-bold mb-2 mt-1 text-amber-900">
                John Doe
              </h5>
              <p class="text-gray-700 mb-4">
                Organization is important to me, without it my life is a mess.
                Taskflow helped me witht that.
              </p>
            </div>
          </div>

          <div class="max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-auto mb-10">
            <div class="p-4">
              <h5 class="text-xl font-bold mb-2 mt-1 text-amber-900">
                Jack Doe
              </h5>
              <p class="text-gray-700 mb-4">
                I've never encountered a task organization application with a
                good price such as TaskFlow in all my years of living.
              </p>
            </div>
          </div>

          <div class="max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-auto mb-10">
            <div class="p-4">
              <h5 class="text-xl font-bold mb-2 mt-1 text-amber-900">
                Jane Doe
              </h5>
              <p class="text-gray-700 mb-4">
                TaskFlow was a game changer for me. I am now more organized than
                ever thanks to it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-section">
        <h3 className=" text-5xl sm:text-3xl md:text-5xl lg:text-5xl text-center mt-24 sm:mt-12 md:mt-24 lg:mt-48 mb-12 sm:mb-12 md:mb-24 lg:mb-20 text-amber-900">
          Pricing Options
        </h3>
        <div className="payment-options flex flex-col md:flex-row gap-6 justify-center items-center px-4 md:px-10 mb-40">
          <div class="card max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div class=" p-4 justify-items-center mx-3">
              <h5 class="text-3xl font-bold mb-0 mt-3">FREE</h5>
              <h5 class="text-5xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">$0.00/mo</h5>
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
              <h5 class="text-5xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">$14.99/mo</h5>
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
              <h5 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-0 mt-4">ENTERPRISE</h5>
              <h5 class="text-5xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">$49.99/mo</h5>
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
