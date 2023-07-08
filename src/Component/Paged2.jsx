import React, { useEffect, useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';
import './paged2.css'
// import { Previewer } from 'pagedjs';

// import './index.css'
import Header from './Header';
import Footer from './Footer';
const MyComponent = () => {
    const print_details = [
        {
            _id: 1,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem  nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi su, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 2,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 3,
            description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 4,
            description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 5,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 6,
            description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 7,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 8,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 9,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 10,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 11,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 12,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },

        {
            _id: 13,
            description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dict Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dict ",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 14,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 15,
            description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
       
        {
            _id: 16,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 17,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 18,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 19,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 20,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 21,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 120000,
            gst: "18%",

        },
        {
            _id: 22,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 60000,
            gst: "18%",

        },
        {
            _id: 23,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 24,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 25,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 60000,
            gst: "18%",

        },
        {
            _id: 26,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 27,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 28,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 60000,
            gst: "18%",

        },
        {
            _id: 29,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 30,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 31,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 32,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 33,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 34,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 35,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 36,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 37,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 38,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 39,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 40,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 41,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 42,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 43,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 44,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 45,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 46,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 20,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 20000,
            gst: "18%",

        },
        {
            _id: 21,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 120000,
            gst: "18%",

        },
        {
            _id: 22,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 60000,
            gst: "18%",

        },
        {
            _id: 23,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 24,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 25,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 60000,
            gst: "18%",

        },
        {
            _id: 26,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 27,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 28,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 60000,
            gst: "18%",

        },
        {
            _id: 29,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 30,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 31,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 32,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 33,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 34,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 35,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 36,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 37,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 38,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 39,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 40,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 41,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 42,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 43,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },
        {
            _id: 44,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 45,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 200,
            gst: "18%",

        },
        {
            _id: 46,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
            date: "2023/02/02",
            price: 240000,
            gst: "88%",

        },



    ];
    const ref = useRef('')

    // const Printvariable = useReactToPrint({
    //     content: () => ref.current,
    //     documentTitle: 'NEW',

    // })


    window.PagedConfig = {
        auto: false
    }

    window.addEventListener('load', () => {
        const btnEl = document.querySelector('.btn');

        btnEl.addEventListener('click', () => {
            window.PagedPolyfill.preview().then(() => {
                window.print();
            })
        })
    })


    // const MyPreviwer = new Previewer()
    // MyPreviwer.preview(
    //     document.querySelector('#root'),
    //     // document.body

    // )


    // const handlePrint = () => {
    //     console.log('printing')
    //     const previewer = new Previewer();
    //     previewer.preview();

    //     const printStyles = `
    //   @page {
    //     size: A4;
    //     margin: 1cm;
    //   }

    //   /* Additional print styles go here */
    // `;

    //     const styleElement = document.createElement('style');
    //     styleElement.textContent = printStyles;
    //     document.head.appendChild(styleElement);

    //     // Print the content
    //     previewer.print();
    // };
    // useEffect(() => {
    //     const previewer = new Previewer();
    //     // previewer.preview(
    //     //     document.querySelector(".content").innerHTML,
    //     //     document.body
    //     // );
    // }, []);

    return (

        <>
            {/* To the Table */}
            <button className='btn'>Print the Table</button>

            <center>
                <div className="header">
                    <Header />
                </div>

                <div className="footer">
                    <Footer />
                </div>
                <div className='content' ref={ref}>


                    <table className='table' border={1}  >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {print_details.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item._id}</td>
                                        <td>{item.description}</td>
                                        <td>{item.date}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </center>
        </>

    );
};

export default MyComponent;
