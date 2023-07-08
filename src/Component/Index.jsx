import React, { useRef } from 'react'
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import './index.css'
import table from 'react-bootstrap/table';

import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Index() {

    const print_details = [
        {
            _id: 1,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
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
            description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dict ",
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
        // {
        //     _id: 21,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 120000,
        //     gst: "18%",

        // },
        // {
        //     _id: 22,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 60000,
        //     gst: "18%",

        // },
        // {
        //     _id: 23,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 24,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 25,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 60000,
        //     gst: "18%",

        // },
        // {
        //     _id: 26,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 27,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 28,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 60000,
        //     gst: "18%",

        // },
        // {
        //     _id: 29,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 30,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 31,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 32,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 33,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 34,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 35,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 36,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 37,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 38,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 39,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 40,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 41,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 42,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 43,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 44,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 45,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 46,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 20,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 20000,
        //     gst: "18%",

        // },
        // {
        //     _id: 21,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 120000,
        //     gst: "18%",

        // },
        // {
        //     _id: 22,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 60000,
        //     gst: "18%",

        // },
        // {
        //     _id: 23,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 24,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 25,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 60000,
        //     gst: "18%",

        // },
        // {
        //     _id: 26,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 27,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 28,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 60000,
        //     gst: "18%",

        // },
        // {
        //     _id: 29,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 30,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 31,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 32,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 33,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 34,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 35,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 36,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 37,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 38,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 39,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 40,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 41,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 42,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 43,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },
        // {
        //     _id: 44,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 45,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 200,
        //     gst: "18%",

        // },
        // {
        //     _id: 46,
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dictaLorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic modi necessitatibus, tempore, eligendi ea nihil facere quam eum placeat nisi suscipit maxime. Animi incidunt, inventore deleniti rerum exercitationem dicta.",
        //     date: "2023/02/02",
        //     price: 240000,
        //     gst: "88%",

        // },



    ];

    const ref = useRef(null)

    const printvariable = useReactToPrint({
        content: () => ref.current,
        documentTitle: 'I am Document',




    })

    const PrintValue = () => {
        // console.log('page')
        setTimeout(() => {
            printvariable()
        }, 500)
    }

    // useEffect(() => {
    //     function addpage() {
    //         const totalPages = Math.round(document.body.scrollHeight / window.innerHeight);
    //         console.log('totalPages', totalPages)

    //         const getCurrentPageNumber = () => {
    //             return (
    //                 (Math.ceil(window.scrollY / window.innerHeight) + 1)*2
    //             )
    //         }
    //         for (let i = 1; i <= totalPages; i++) {
    //             // console.log('PAge,', totalPages[i])
    //             const pageNumber = document.createElement('span');
    //             pageNumber.textContent = getCurrentPageNumber();
    //             pageNumber.className = 'page-number';
    //             document.body.appendChild(pageNumber);
    //         }
    //     }
    //     addpage()

    // }, [])

    // window.onload = addPageNumbers
    // function addPageNumbers() {
    //     var totalPages = Math.round(document.body.scrollHeight / 300);  //842px A4 pageheight for 72dpi, 1123px A4 pageheight for 96dpi, 
    //     console.log('totalPages', totalPages)
    //     console.log(document.body.scrollHeight)
    //     for (var i = 1; i <= totalPages; i++) {
    //         var pageNumberDiv = document.createElement("div");
    //         // var MainPageDiv = document.createElement("div");
    //         // MainPageDiv.className='MainPageDiv'
    //         const content = document.getElementById('content')
    //         var pageNumber = document.createTextNode("Page " + i + " of " + totalPages);
    //         pageNumberDiv.style.position = "relative";
    //         // pageNumberDiv.style.top = "calc((" + i + " * (297mm - 0.5px)) - 40px)";

    //         // pageNumberDiv.style.top = '-180px'
    //         // pageNumberDiv.style.bottom = '300px'

    //         //297mm A4 pageheight; 0,5px unknown needed necessary correction value; additional wanted 40px margin from bottom(own element height included)

    //         pageNumberDiv.style.height = "36px";
    //         // pageNumberDiv.style.position = "relative";
    //         pageNumberDiv.className = `PageNumber${i}  page-number-${i}`;
    //         pageNumberDiv.style.fontSize = "25px";
    //         pageNumberDiv.style.backgroundColor = 'yellow'
    //         pageNumberDiv.appendChild(pageNumber);
    //         console.log('pageNumber',pageNumberDiv)

    //         // document.body.insertBefore(pageNumberDiv, document.getElementById("content"));
    //         // pageNumberDiv.style.left = "calc(100% - (" + pageNumberDiv.offsetWidth + "px + 10px))";
    //         pageNumberDiv.style.left='0'
    //         // MainPageDiv.appendChild(pageNumberDiv)
    //         content.appendChild(pageNumberDiv)
    //     }
    // }
    // useEffect(() => {
    //     return () => {
    //         addPageNumbers()
    //     }
    // }, [])
    // const Totalpage = Math.round(document.body.scrollHeight / 300);
    let PageDiv = document.createElement('div')

    let Totalpage;
    let i;
    let Page;
    function AddPage() {
        Totalpage = Math.round(document.body.scrollHeight / (print_details.length*10)/2.5*2);
        console.log(print_details.length,'Length')
        console.log(Totalpage)
        console.log('ScrollHeight', document.body.scrollHeight)
        console.log('wndowHeight', window.innerHeight)

        for (i = 1; i <= Totalpage; i++) {
            const content = document.getElementById('content')
            console.log('Page', i)
            let PageDiv = document.createElement('div')
            let pagenumber = document.createTextNode(`Page ${i} of ${Totalpage}`)
            // PageDiv.id = `Page${i} page-number-${i}`
            PageDiv.className = `Page${i} page-number-${i}`
            PageDiv.style.fontSize = "25px";
            PageDiv.style.position = "relative";
            // PageDiv.style.top = "-11500px";
            // PageDiv.style.display = "inline-flex";
            PageDiv.style.justifyContent = "center";
            // PageDiv.style.height = "20px";
            PageDiv.style.height = "5px";

            // last totaltop
            // let last=Totalpage*1000
            let topvalue;
            let bottomvalue;
            // if(i==1){
            //     // topvalue=480+'px'
            //     bottomvalue=690+'rem';
            // }
            // // else if(i==2){
            // //     // topvalue=480+'px'
            // //     bottomvalue=626+'rem';
            // // }
            // else{
            //     // topvalue=(i*20)+'px';
            //     // bottomvalue=(690-(64*i)+i)+'rem';
            // }
            //64

            //
            // bottomvalue=((753)-(64*i)+i)+'rem';
            bottomvalue = ((65 * Totalpage) - (64 * i)) + 'rem';

            // bottomvalue=(i*690)+'rem';
            // topvalue=(i*-1000)+'px';


            // PageDiv.style.top = topvalue;
            PageDiv.style.bottom = bottomvalue;
            console.log(`bottomvalue for ${i}`, bottomvalue)
            // console.log(`topvalue for ${i}`,topvalue)

            PageDiv.style.backgroundColor = "yellow";

            PageDiv.appendChild(pagenumber)
            content.append(PageDiv)


        }

    }
    useEffect(() => {

        return () => {
            AddPage()
        }
    }, [i])

    // useEffect(() => {

    //     const ALL = () => {
    //         const page1 = document.getElementById(`Page1`)

    //         console.log('Page1@@@@@', page1)
    //     }
    //     window.onload = ALL()


    // }, [PageDiv])
    return (
        <>
            <center>
                <button>PRINT</button>
                <div id='content' className='content' ref={ref}>
                    {/* <div className="text">
                        Header Text
                    </div> */}
                    <div className="header">
                        <Header />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <div className="page-header-space">

                                    </div>
                                </td>
                            </tr>
                        </thead>
                        <button onClick={PrintValue}>Print</button>
                        <tbody>
                            {/* <h1  className='sec-header-table'>table Header</h1> */}

                            <table className='table' border={1}  >
                                <thead className="thead" >
                                    <tr>
                                        <th>Id</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className='tbody'>
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
                            {/* <h1 className='sec-footer-table'>table Footer</h1> */}

                        </tbody>

                        <tfoot>
                            <div className="page-footer-space">

                            </div>
                            {/* <div className="page-after-footer-space">

                            </div> */}
                        </tfoot>
                    </table>

                    <div className="footer">
                        <Footer />
                    </div>
                    <div className='pagenumber' id="page-number">
                        {/* {'Page 1 of 8'} */}
                    </div>
                    {/* <div className="top-footer">
                        <h1>Top Footer</h1>
                    </div> */}

                </div>
            </center>

        </>
    )
}
