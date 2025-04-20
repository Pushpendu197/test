import React, { useState } from 'react'
import { FaBoxOpen, FaThLarge, FaMapMarkerAlt, FaExclamationTriangle, FaStream, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion, useAnimation } from 'framer-motion';

import { useEffect } from 'react';
import Modal from 'react-modal';

import hexa from '../assets/video/hex.mp4';
Modal.setAppElement('#root')


const chartVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
};

const filterButtonStyle = "bg-[#374151] rounded-md py-1.5 px-3 text-sm w-full text-left focus:outline-none flex items-center justify-between";
const filterButtonActiveStyle = "bg-[#6B7280] text-white";
const filterButtonTextStyle = "text-gray-400";
const filterButtonTextActiveStyle = "text-white";

const Demo = () => {

    const [activeFilters, setActiveFilters] = useState({
        WORKSPACE_SEGMENT: 'All',
        EMAIL_DOMAIN_TYPE: 'All',
        company_segment: 'All',
        company_sales_region: 'All',
        sales_type: 'Self serve',
        last_x_months: 'Company',
    });


    const [menuOpen, setMenuOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const graphImageUrl = 'https://png.pngtree.com/background/20230520/original/pngtree-animated-chart-is-shown-on-a-large-black-background-picture-image_2675773.jpg';

    const warehouseIntegrationsImageUrl = 'https://png.pngtree.com/png-clipart/20230806/original/pngtree-word-cloud---data-warehouse-management-system-mart-vector-picture-image_9887660.png';
    const dbtIntegrationImageUrl = 'https://miro.medium.com/v2/resize:fit:1200/1*bs4QsEzWBpQMfwP2cNfrWw.png';
    const pythonIntegrationImageUrl = 'https://miro.medium.com/v2/resize:fit:750/1*QYOB_HwZQxHGmBWA5WJt3Q.png';
    const gitIntegrationImageUrl = 'https://miro.medium.com/v2/resize:fit:910/0*34gq1dUeh3sBwQyM.png';
    const orchestrationIntegrationImageUrl = 'https://help.sap.com/doc/90c8ad90cb684ee5979856093efe7462/SHIP/en-US/loiof3985ace7dfa4ccebf6480184d13a90a_LowRes.png';
    const hexApiImageUrl = 'https://static.vecteezy.com/system/resources/previews/023/205/362/non_2x/hexagon-shape-kazakhstan-map-free-png.png';
    const hex = 'https://hex.tech/static/3bd1ec0824e940a0092557da452f3a63/c6f92/cell-chart-1%402x.avif';
    const securityShieldImageUrl = 'https://static.vecteezy.com/system/resources/previews/040/533/256/non_2x/ai-generated-3d-rendering-of-a-computer-motherboard-or-cpu-on-transparent-background-ai-generated-free-png.png';

    const notion = 'https://img.icons8.com/ios7/512/notion.png'
    const treasure = 'https://partners.jpmorgan.com/on/demandware.static/-/Sites-at_catalog-marketplace/default/dwec82e232/images/large/moderntreasury-logo-642x379.png'
    const rapid = 'https://images.seeklogo.com/logo-png/11/2/rapid-logo-png_seeklogo-115837.png'
    const operation = 'https://cdn-icons-png.freepik.com/512/8687/8687766.png'
    const user = 'https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png?v=2025041806'
    const azure = 'https://miro.medium.com/v2/resize:fit:1033/1*1PgtDdrpChFFaywWHt-WgQ.png';



    const dataClusteringImageUrl = 'https://img.favpng.com/4/19/13/cluster-analysis-k-means-clustering-data-mining-sas-png-favpng-m6222B7431qZKLnPFEActBsbz.jpg';
    const exploratoryAnalysisImageUrl = 'https://www.datocms-assets.com/64859/1700733893-exploratory-data-analysis-unraveling-its-impact-on-decision-making-1700733893381.png?q=70&auto=format&w=1280';
    const sentimentAnalysisImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiqwfwe-RgTsyvPviCPPbLHZr8TDktGW2Ag&s';
    const kpiDashboardsImageUrl = 'https://images.ctfassets.net/dfcvkz6j859j/46Nz2VvCmtNEgLp63dIhsZ/bffba25ea872c338ac5b973f71ba48d1/Stripe_KPI_Dashboard_Example.png';
    const dataModelingImageUrl = 'https://images.surferseo.art/adaaee27-e98c-4e93-9cda-dfa0f7f42ab8.jpeg';
    const dataVisualizationImageUrl = 'https://miro.medium.com/v2/resize:fit:1400/1*HVzy5JT4V3_2_IZx1fyIWw.png';
    const timeSeriesImageUrl = 'https://png.pngtree.com/background/20230522/original/pngtree-landscape-and-time-series-cloud-and-internet-network-picture-image_2690437.jpg';
    const naturalLanguageProcessingImageUrl = 'https://media.istockphoto.com/id/2050481773/photo/natural-language-processing-nlp.jpg?s=612x612&w=0&k=20&c=4qjS_Z_mX8FyJOXG5GHtKJzaaHaRBmIGNP8fmiMm1MA=';


    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                await controls.start({ scale: 1.1, transition: { duration: 1, yoyo: Infinity } });
                await controls.start({ scale: 1, transition: { duration: 1, yoyo: Infinity } });
            }
        };

        sequence();
    }, [controls]);

    return (
        <>
            <div className="min-h-screen bg-[#16161F] text-white font-sans bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] px-10 py-6  ">
                {/* Navbar */}
                <div className='border'>
                    <nav className="text-[#f1c1c1] py-6 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-[20rem] font-sans relative z-50">
                        <div className="flex justify-between items-center">
                            {/* Left Menu - Desktop */}
                            <div className="hidden lg:flex items-center space-x-6 text-lg">
                                <div className="flex items-center space-x-1 hover:text-pink-300 cursor-pointer">
                                    <FaBoxOpen size={20} />
                                    <span>Product</span>
                                    <IoIosArrowDown size={12} />
                                </div>
                                <div className="flex items-center space-x-1 hover:text-pink-300 cursor-pointer">
                                    <FaThLarge size={14} />
                                    <span>Use cases</span>
                                    <IoIosArrowDown size={12} />
                                </div>
                                <div className="flex items-center space-x-1 hover:text-pink-300 cursor-pointer">
                                    <FaMapMarkerAlt size={14} />
                                    <span>Enterprise</span>
                                </div>
                            </div>

                            {/* Logo */}
                            <h1 className="text-3xl font-bold tracking-widest text-[#f1c1c1]">HEX</h1>

                            {/* Right Menu - Desktop */}
                            <div className="hidden lg:flex items-center space-x-6 text-lg">
                                <div className="flex items-center space-x-1 hover:text-pink-300 cursor-pointer">
                                    <FaExclamationTriangle size={14} />
                                    <span>Resources</span>
                                    <IoIosArrowDown size={12} />
                                </div>
                                <div className="flex items-center space-x-1 hover:text-pink-300 cursor-pointer">
                                    <FaStream size={14} />
                                    <span>Pricing</span>
                                </div>
                                <span className="hover:text-pink-300 cursor-pointer">Log In</span>
                                <button className="border border-[#f1c1c1] px-4 py-1 rounded-full hover:bg-[#f1c1c1] hover:text-black transition text-xl font-semibold">
                                    Get started
                                </button>
                            </div>

                            {/* Hamburger Icon - Mobile */}
                            <div className="lg:hidden">
                                <button onClick={() => setMenuOpen(!menuOpen)}>
                                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {menuOpen && (
                            <div className="lg:hidden mt-4 space-y-4 text-lg bg-[#1c1c27] p-6 rounded-lg shadow-lg">
                                <div className="flex items-center space-x-2 hover:text-pink-300 cursor-pointer">
                                    <FaBoxOpen size={18} />
                                    <span>Product</span>
                                </div>
                                <div className="flex items-center space-x-2 hover:text-pink-300 cursor-pointer">
                                    <FaThLarge size={18} />
                                    <span>Use cases</span>
                                </div>
                                <div className="flex items-center space-x-2 hover:text-pink-300 cursor-pointer">
                                    <FaMapMarkerAlt size={18} />
                                    <span>Enterprise</span>
                                </div>
                                <div className="flex items-center space-x-2 hover:text-pink-300 cursor-pointer">
                                    <FaExclamationTriangle size={18} />
                                    <span>Resources</span>
                                </div>
                                <div className="flex items-center space-x-2 hover:text-pink-300 cursor-pointer">
                                    <FaStream size={18} />
                                    <span>Pricing</span>
                                </div>
                                <div className="hover:text-pink-300 cursor-pointer">Log In</div>
                                <button className="w-full border border-[#f1c1c1] px-4 py-2 rounded-full hover:bg-[#f1c1c1] hover:text-black transition text-xl font-semibold">
                                    Get started
                                </button>
                            </div>
                        )}
                    </nav>

                    {/* Hero Section */}
                    <div className="relative text-white mt-10 px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-animated-grid opacity-70 pointer-events-none z-0"></div>

                        {/* Left Text Content */}
                        <div className="relative z-10 w-full md:w-1/2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-bold leading-tight tracking-wide sm:tracking-wider mb-6">
                                Bring <br /> everyone <br /> together <br /> with data
                            </h2>
                        </div>

                        {/* Right Text and Buttons */}
                        <div className="relative z-10 w-full md:w-1/2 max-w-md">
                            <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6 md:mb-8 text-center md:text-right">
                                Go end-to-end from quick queries to deep-dive analyses to beautiful interactive data apps – all in one collaborative, AI-powered workspace.
                            </p>
                            <div className="flex flex-col sm:flex-row md:justify-end gap-4">
                                <button className="bg-transparent border border-white rounded-md py-3 px-6 text-base sm:text-lg font-semibold hover:bg-white hover:text-[#16161F] transition duration-300">
                                    Get started for free
                                </button>
                                <button className="bg-transparent border border-gray-500 rounded-md py-3 px-6 text-base sm:text-lg font-semibold hover:bg-gray-500 hover:text-white transition duration-300">
                                    Request a demo
                                </button>
                            </div>
                        </div>
                    </div>




                    {/* ................................... */}
                    <div className='bg-animated-grid'
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                            width: '100vw',
                            boxSizing: 'border-box',
                            overflow: 'hidden',

                            margin: 0,
                        }}
                    >
                        <div
                            style={{
                                position: 'relative',
                                width: '70%',
                                maxWidth: '1200px',
                                height: '80%',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}
                        >
                            {/* Background Video */}
                            <video
                                src={hexa}
                                muted
                                loop
                                autoPlay
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                }}
                            />

                            {/* Watch Demo Button */}
                            <button
                                onClick={openModal}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    padding: '12px 24px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    color: 'white',
                                    border: '2px solid transparent',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    animation: 'glow 2s infinite ease-in-out',
                                }}
                            >
                                ▶ Watch Full Demo
                            </button>

                            {/* Glow Animation Style */}
                            <style>
                                {`
      @keyframes glow {
        0% {
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2),
                      0 0 10px rgba(255, 255, 255, 0.2),
                      0 0 15px rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }
        50% {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
                      0 0 20px rgba(255, 255, 255, 0.5),
                      0 0 30px rgba(255, 255, 255, 0.5);
          border-color: rgba(255, 255, 255, 0.7);
        }
        100% {
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2),
                      0 0 10px rgba(255, 255, 255, 0.2),
                      0 0 15px rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }
      }
    `}
                            </style>

                            {/* Modal Component */}
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Video Modal"
                                style={{
                                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
                                    content: {
                                        top: '50%',
                                        left: '50%',
                                        right: 'auto',
                                        bottom: 'auto',
                                        marginRight: '-50%',
                                        transform: 'translate(-50%, -50%)',
                                        padding: '0',
                                        border: 'none',
                                        background: 'transparent',
                                    },
                                }}
                            >
                                <div style={{ position: 'relative' }}>
                                    <video
                                        src="/video.mp4"
                                        controls
                                        autoPlay
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '8px',
                                        }}
                                    />
                                    <button
                                        onClick={closeModal}
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            backgroundColor: '#fff',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '32px',
                                            height: '32px',
                                            fontSize: '18px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            </Modal>
                        </div>
                    </div>





                    {/* .................................. */}



                    <div class="grid grid-cols-6 max-w-screen-xl mx-auto p-12 mt-20   text-[#FCECEC] text-center text-xl">
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/reddit.svg" alt="reddit" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/notion.svg" alt="Notion" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/brex.svg" alt="Brex" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/anthropic.svg" alt="Anthropic" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/hinge.svg" alt="Hinge" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/seatgeek.svg" alt="SeatGeek" class="mx-auto h-6" />
                        </div>

                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/babylist.svg" alt="Babylist" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/clickup.svg" alt="ClickUp" class="mx-auto h-6" />
                        </div>
                        <div class="col-span-2 row-span-2 flex items-center justify-center bg-[#16161F] text-center border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <p class="text-4xl font-bold text-[#FCECEC] leading-snug p-3">
                                Trusted by<br />leading data<br />teams
                            </p>
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/algolia.svg" alt="Algolia" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/fivetran.svg" alt="Fivetran" class="mx-auto h-6" />
                        </div>

                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/loom.svg" alt="Loom" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/alltrails.svg" alt="AllTrails" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/moderntreasury.svg" alt="Modern Treasury" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/hightouch.svg" alt="Hightouch" class="mx-auto h-6" />
                        </div>

                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/ramp.svg" alt="Ramp" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/recursion.svg" alt="Recursion" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/sedgwick.svg" alt="Sedgwick" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/appfolio.svg" alt="Appfolio" class="mx-auto h-6" />
                        </div>

                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/avalara.svg" alt="Avalara" class="mx-auto h-6" />
                        </div>
                        <div class=" p-6 border border-[#2A2A3B] hover:bg-[#1f1f2d] transition-colors duration-200">
                            <img src="/logos/chesapeake.svg" alt="Chesapeake" class="mx-auto h-6" />
                        </div>
                    </div>



                    <hr className="custom-hr border-0 h-px opacity-40 mt-20" />



                    {/* .................................... */}
                    <section class=" py-10 relative text-center overflow-hidden">
                        <div class="max-w-4xl mx-auto px-4">
                            <h2 class="text-5xl md:text-6xl font-semibold leading-tight bg-gradient-to-r from-[#fddcdc] to-[#fcecec] text-transparent bg-clip-text">
                                All your workflows,<br />
                                in one workspace
                            </h2>
                        </div>
                    </section>

                    <hr className="custom-hr border-0 h-px opacity-40" />


                    <section class=" text-white py-24 px-6 md:px-12">
                        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                            <div class="md:w-1/4 space-y-6">

                                <div class="w-10 h-10 mb-4">
                                    <img src={notion} alt="Icon" class="filter grayscale invert" />
                                </div>



                                <h2 class="text-4xl md:text-5xl font-bold leading-tight">
                                    Data<br />
                                    exploration<br />
                                    superpowers
                                </h2>


                                <p class="text-[#fddcdc] text-xl leading-relaxed">
                                    SQL, Python, R, pivots, spreadsheets, charts, all together, all in a modular, notebook-based canvas.
                                </p>


                                <a href="#" class="inline-block border border-[#fddcdc] text-[#fddcdc] px-6 py-2 rounded hover:bg-[#fddcdc] hover:text-[#1a1a24] transition">
                                    Explore Notebooks
                                </a>
                            </div>


                            <motion.div
                                className="md:w-auto rounded-lg p-6 shadow-md overflow-hidden"
                                animate={controls}
                            >
                                <img
                                    src={hex}
                                    alt="Code Snippet"
                                    className="w-full h-auto"
                                />
                            </motion.div>
                        </div>
                    </section>



                    {/* ................ */}

                    <div className=" text-white py-16 text-center">
                        <div className="mb-6">
                            {/* Icon (replace with your actual icon or image) */}
                            <div className="w-12 h-12 mx-auto border border-gray-500 rounded-md flex items-center justify-center text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 9v-3m6 3v-3m-3 3v-3m-3 3h6m3 9a9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9zm-9 9v-3m0-3v-3m0 3h6m3-6a3 3 0 00-3-3H9a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3v-3m-3-3H9m6 0h-6"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Magical AI, built right in</h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Generate queries, write code, create visualizations, fix bugs, and kickstart
                            whole analyses - all from a prompt.
                        </p>
                        <div className="relative w-full max-w-4xl mx-auto shadow-md">
                            {/* Graph Image */}
                            {hex && <img src={hex} alt="Retention Trend" className="rounded-md" />}

                            {/* AI Input with Animated Dark Glow */}
                            <div className="absolute left-10 right-10 bottom-[-30px] rounded-full py-2 px-4 flex items-center justify-center bg-[#2D3748] shadow-glow backdrop-blur-sm transition-all duration-300">

                                {/* Animated Glow Background Overlay */}
                                <div className="absolute inset-0 z-[-1] rounded-full animate-glow bg-gradient-to-r from-[#2D3748] via-[#1A202C] to-[#2D3748] opacity-70 blur-xl"></div>

                                {/* Icon */}
                                <div className="rounded-full bg-[#4A5568] w-6 h-6 flex items-center justify-center mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 text-gray-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 17.25L12 21m0-12V21m8.69-9.04l-3-3m3 3l3-3m-6-3h.01M6 20.69L8.79 17.91m-3-3l3 3m-3-3l-3 3m6-3h.01m6 3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                                        />
                                    </svg>
                                </div>

                                <input
                                    type="text"
                                    placeholder="What would you like to add?"
                                    className="bg-transparent border-none outline-none text-white text-sm w-full"
                                />
                            </div>
                        </div>

                        <button className="bg-transparent border border-gray-500 rounded-md py-2 px-6 mt-12 text-sm hover:bg-gray-500 hover:text-white transition duration-300">
                            Explore AI tools
                        </button>
                    </div>



                    {/*  */}
                    <div className="text-white py-16 px-6 sm:px-12 md:px-20 lg:px-[10rem] xl:px-[20rem]">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold mb-4 leading-tight">
                                Instant integration <br className="hidden sm:block" />
                                with the whole stack
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
                                Out-of-the-box connections and flexible APIs make setup a breeze.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Grid Items */}
                            {[
                                {
                                    title: "Built for the warehouse",
                                    description:
                                        "Hex has built-in connections to the most popular data warehouses, lakehouses, and databases. It’s easy to set up data connections, and securely share them with your team.",
                                    image: warehouseIntegrationsImageUrl,
                                    alt: "Warehouse Integrations",
                                },
                                {
                                    title: "dbt metadata, docs, & metrics",
                                    description:
                                        "Hex has a deep integration with dbt, including automatically enriching schemas with dbt docs.",
                                    image: dbtIntegrationImageUrl,
                                    alt: "dbt Integration",
                                },
                                {
                                    title: "Push your Python",
                                    description:
                                        "Hex has deep integrations with Snowflake and Spark (soon!), allowing you to push Python code to remote execution environments.",
                                    image: pythonIntegrationImageUrl,
                                    alt: "Python Integration",
                                },
                                {
                                    title: "Git it together",
                                    description:
                                        "Export your projects to GitHub or GitLab to create an audit trail.",
                                    image: gitIntegrationImageUrl,
                                    alt: "Git Integration",
                                },
                                {
                                    title: "Orchestration",
                                    description:
                                        "You can include Hex projects in DAGs in Airflow, Dagster, or Prefect.",
                                    image: orchestrationIntegrationImageUrl,
                                    alt: "Orchestration Integration",
                                },
                                {
                                    title: "Hex API",
                                    description:
                                        "Want to connect to something we haven’t thought of? Use our powerful public API to write your own integrations.",
                                    image: hexApiImageUrl,
                                    alt: "Hex API",
                                },
                            ].map(({ title, description, image, alt }, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#302A32] rounded-md p-6 transition duration-300 ease-in-out hover:shadow-xl hover:shadow-purple-500/30 hover:ring-2 hover:ring-purple-500/50 hover:scale-[1.02]"
                                >
                                    {image && <img src={image} alt={alt} className="mb-4" />}
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
                                    <p className="text-sm text-gray-300">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/*...................................................  */}
                    <div className=" text-white py-16 px-10 md:px-20 lg:px-32 xl:px-48">
                        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_auto] gap-10">
                            {/* Left Section */}
                            <motion.div
                                className="flex flex-col space-y-8"
                                variants={chartVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="flex items-start">
                                    <div className=" rounded-lg p-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400 mb-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-2.252a8.962 8.962 0 00-8.707-4.769M12 21h8.707a8.962 8.962 0 00-8.707-4.769M12 8.25V21m-8.707-4.769l8.707-4.769 8.707 4.769M4.016 16.512l-3.665-3.665a.75.75 0 010-1.06m3.665 3.665l3.665-3.665m-3.665 3.665l-3.665 3.665a.75.75 0 01-1.06 0m3.665 3.665l1.06-1.06" />
                                        </svg>
                                        <h2 className="text-[3rem] leading-tight  font-bold mb-2">Interactive <br /> apps and reporting</h2>
                                        <p className="text-gray-300 text-xl mb-4">
                                            Publish your work into beautiful reports, data apps, and dashboards with a drag-and-drop UI builder.
                                        </p>
                                        <button className="border text-white font-semibold py-2 px-4 rounded-md text-sm focus:outline-none">
                                            Explore App Builder
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Section */}
                            <motion.div
                                className="flex flex-col space-y-6 relative overflow-hidden"
                                variants={chartVariants}
                                initial="hidden"
                                animate="visible"
                            >

                                <div className="animated-gradient-background"></div>

                                <div className="bg-[#2D3748] rounded-lg p-6 relative z-10">
                                    <h2 className="text-xl font-bold mb-2">Vantage Cohort Definitions</h2>
                                    <p className="text-gray-300 text-sm mb-4">
                                        This self-serve analytics churn app allows you to segment & filter ARR churn data for all Vantage subscribers.
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                                        {Object.entries(activeFilters).map(([key, value]) => (
                                            <div key={key}>
                                                <label className="block text-gray-400 text-xs capitalize mb-1">{key.split('_').join(' ')}</label>
                                                <div className="relative">
                                                    <button
                                                        className={`${filterButtonStyle} ${value !== 'All' ? filterButtonActiveStyle : ''}`}
                                                        onClick={() => console.log(`Open dropdown for ${key}`)} // Replace with actual dropdown logic
                                                    >
                                                        <span className={value !== 'All' ? filterButtonTextActiveStyle : filterButtonTextStyle}>{value}</span>
                                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </button>
                                                    {/* Placeholder for dropdown */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#2D3748] rounded-lg p-6 relative z-10">
                                    <h2 className="text-xl font-bold mb-4">ARR and Workspaces Churned by Month</h2>
                                    <div className="grid grid-cols-1">
                                        {/* Animated Chart 1 Placeholder */}
                                        <div className="relative rounded-md bg-[#374151] overflow-hidden" style={{ height: 220 }}>
                                            <h3 className="absolute top-3 left-3 text-sm text-gray-400">Number of churned workspaces by churn month</h3>
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                                                {/* Replace this with your animated line chart */}
                                                <svg width="80%" height="70%" viewBox="0 0 300 200">
                                                    {/* Example static representation - replace with animated chart */}
                                                    <path d="M20,180 C80,100 180,120 280,50" stroke="#6EE7B7" strokeWidth="2" fill="none" />
                                                    <path d="M20,160 C80,90 180,110 280,40" stroke="#A78BFA" strokeWidth="2" fill="none" />
                                                    <path d="M20,140 C80,80 180,100 280,30" stroke="#FACC15" strokeWidth="2" fill="none" />
                                                    {/* Add axes and labels as needed */}
                                                </svg>
                                            </div>
                                            <div className="absolute bottom-2 left-2 text-xs text-gray-400">Apr 2023</div>
                                            <div className="absolute bottom-2 right-2 text-xs text-gray-400">Apr 2024</div>
                                            <div className="absolute left-2 top-1/4 text-xs text-gray-400">2,000</div>
                                            <div className="absolute left-2 top-1/2 text-xs text-gray-400">1,000</div>
                                            {/* Add more y-axis labels */}
                                            <div className="absolute top-3 right-3 flex items-center text-xs">
                                                <div className="w-2 h-2 rounded-full bg-[#6EE7B7] mr-1"></div> ENT
                                                <div className="w-2 h-2 rounded-full bg-[#A78BFA] ml-2 mr-1"></div> mid
                                                <div className="w-2 h-2 rounded-full bg-[#FACC15] ml-2 mr-1"></div> downmarket
                                                <div className="w-2 h-2 rounded-full bg-[#FCF55F] ml-2 mr-1"></div> opmarket
                                                <div className="w-2 h-2 rounded-full bg-[#86EFAC] ml-2 mr-1"></div> Sum
                                            </div>
                                        </div>

                                        {/* Animated Chart 2 Placeholder */}
                                        <div className="relative rounded-md bg-[#374151] overflow-hidden mt-4" style={{ height: 220 }}>
                                            <h3 className="absolute top-3 left-3 text-sm text-gray-400">Churned workspace mix by division</h3>
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                                                {/* Replace this with your animated bar chart */}
                                                <svg width="80%" height="70%" viewBox="0 0 300 200">
                                                    {/* Example static representation - replace with animated chart */}
                                                    <rect x="20" y="150" width="30" height="30" fill="#6EE7B7" />
                                                    <rect x="60" y="120" width="30" height="60" fill="#A78BFA" />
                                                    <rect x="100" y="100" width="30" height="80" fill="#FACC15" />
                                                    {/* Add more bars */}
                                                    {/* Add axes and labels as needed */}
                                                </svg>
                                            </div>
                                            <div className="absolute bottom-2 left-2 text-xs text-gray-400">Apr 2023</div>
                                            <div className="absolute bottom-2 right-2 text-xs text-gray-400">Apr 2024</div>
                                            <div className="absolute left-2 top-1/4 text-xs text-gray-400">1,500</div>
                                            <div className="absolute left-2 top-1/2 text-xs text-gray-400">750</div>
                                            {/* Add more y-axis labels */}
                                            <div className="absolute top-3 right-3 flex items-center text-xs">
                                                <div className="w-2 h-2 rounded-full bg-[#6EE7B7] mr-1"></div> ENT
                                                <div className="w-2 h-2 rounded-full bg-[#A78BFA] ml-2 mr-1"></div> mid
                                                <div className="w-2 h-2 rounded-full bg-[#FACC15] ml-2 mr-1"></div> downmarket
                                                <div className="w-2 h-2 rounded-full bg-[#FCF55F] ml-2 mr-1"></div> opmarket
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>



                    {/*  */}
                    <div className="text-white py-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 text-center">
                        {/* Header Section */}
                        <div className="relative text-white py-24 border bg-animated-grid">
                            <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
                            <div className="relative z-10">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    A new standard <br /> for data work
                                </h1>
                                <p className="text-base sm:text-lg text-gray-300">
                                    Hex helps 1,000s of teams do more with their data.
                                </p>
                            </div>
                        </div>

                        {/* Grid Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-20 text-left">
                            {/* Card 1 */}
                            <div className="border border-gray-200 p-5 rounded-md bg-[#1e1e1e]">
                                <div className="mb-4">
                                    <img src={rapid} alt="StubHub" className="max-w-24" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Rapid exploration on-demand</h3>
                                <p className="text-sm leading-relaxed text-gray-300">
                                    StubHub realigned its analytics stack with Hex for speed and quality.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-gray-200 p-5 rounded-md bg-[#1e1e1e]">
                                <div className="mb-4">
                                    <img src={operation} alt="ClickUp" className="max-w-24" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Operationalized data science</h3>
                                <p className="text-sm leading-relaxed text-gray-300">
                                    ClickUp used Hex to turn a data science churn project into a cross-functional, customer-saving program.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="border border-gray-200 p-5 rounded-md bg-[#1e1e1e]">
                                <div className="mb-4">
                                    <img src={notion} alt="Notion" className="max-w-24" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">One place for insights</h3>
                                <p className="text-sm leading-relaxed text-gray-300">
                                    Notion made Hex the one place for everyone, from data science to CX and sales, to make decisions with data.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="border border-gray-200 p-5 rounded-md bg-[#1e1e1e]">
                                <div className="mb-4">
                                    <img src={treasure} alt="Modern Treasury" className="max-w-24" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Empowering exploration</h3>
                                <p className="text-sm leading-relaxed text-gray-300">
                                    Modern Treasury uses Hex to enable Engineering, Product, and Design teams to explore on their own.
                                </p>
                            </div>
                        </div>
                    </div>



                    {/*  */}



                    {/*  */}
                    <div className="relative  overflow-hidden text-white pb-16 px-10 md:px-20 lg:px-32 xl:px-48 flex flex-col lg:flex-row items-center justify-center">

                        {/* 🌐 Animated Radial Gradient Globe Background */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center">
                            <div className="w-[600px] h-[600px] bg-gradient-to-br from-[#3A2CFF] via-[#FF6CAB] to-[#FFB88C] rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
                        </div>

                        {/* 🔐 Left Text Content */}
                        <div className="relative z-10 max-w-lg text-center lg:text-left">
                            <ul className="space-y-4">
                                <li>
                                    <p className="font-semibold text-xl text-[#F5C0C0]">Enterprise-grade security:</p>
                                    <p className="text-lg text-gray-300">SOC2, HIPAA, and privacy regulations.</p>
                                </li>
                                <li>
                                    <p className="font-semibold text-xl text-[#F5C0C0]">Flexible deployment models</p>
                                    <p className="text-lg text-gray-300">
                                        Multi-tenant, HIPAA, Single-Tenant, and Private Cloud options available
                                    </p>
                                </li>
                                <li>
                                    <p className="font-semibold text-xl text-[#F5C0C0]">Easy authentication and authorization</p>
                                    <p className="text-lg text-gray-300">
                                        SSO and SCIM with Google, AzureAD, Okta, and more
                                    </p>
                                </li>
                                <li>
                                    <p className="font-semibold text-xl text-[#F5C0C0]">Secure database connections</p>
                                    <p className="text-lg text-gray-300">SSL and pass-through OAuth available</p>
                                </li>
                            </ul>
                            <button className="bg-transparent border border-white rounded-md py-2 px-6 mt-8 text-sm hover:bg-white hover:text-[#16161F] transition duration-300">
                                Read more about Security
                            </button>
                        </div>

                        {/* 🛡️ Right Image */}
                        <div className="relative z-10 max-w-md mt-10 lg:mt-0">
                            {securityShieldImageUrl && (
                                <img
                                    src={securityShieldImageUrl}
                                    alt="Security Shield"
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                            )}
                        </div>
                    </div>



                    {/* ............... */}




                    <div className=" text-white py-10 flex justify-center gap-10 px-5 ">
                        {/* Left Section - Users love Hex */}
                        <div className="border border-gray-300  p-8 w-full max-w-md text-center">
                            <img
                                src={azure}
                                alt="G2 Badges"
                                className="mb-6 mx-auto w-3/4 max-w-full h-auto md:h-64 lg:h-40 object-contain"
                            />

                            <h2 className="text-2xl font-bold mb-4">Users love Hex</h2>
                            <p className="text-sm text-gray-400">
                                Rated on G2 as an industry leader based on customer reviews.
                                <a href="#" className="text-white hover:underline ml-1">
                                    Check them out →
                                </a>
                            </p>
                        </div>

                        {/* Right Section - Notion Quote */}
                        <div className="border border-gray-300  p-8 w-full max-w-md flex flex-col justify-between">
                            <div>
                                <div className="mb-4">
                                    <img src={notion} alt="Notion Logo" className="h-8 w-auto filter grayscale invert" />
                                </div>
                                <blockquote className="text-lg italic text-gray-300">
                                    "Our vision for Notion's data team is that anyone, regardless of technical
                                    proficiency, is comfortable using data to answer their own questions — and
                                    Hex enables that."
                                </blockquote>
                            </div>
                            <div className="mt-6 flex items-center text-sm text-gray-400">
                                <img
                                    src={user}
                                    alt="Abhishek Modi"
                                    className="rounded-full w-8 h-8 mr-2"
                                />
                                <div className="">
                                    <span className="text-white font-semibold">Abhishek Modi</span>
                                    <p className="text-xs">Software Engineer at Notion</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <footer className="bg-[#16161F] text-white py-12 px-10 md:px-20 lg:px-32 xl:px-48 mt-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-start">
                            {/* Hex Info */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2 uppercase tracking-wider">hex</h3>
                                <p className="text-sm text-gray-400 mb-4">Made with <span className="text-[#8670FF]">♥</span> on <span className="text-[#6EEB83]">Earth</span>.</p>
                            </div>

                            {/* Company */}
                            <div>
                                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Media Kit</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
                                </ul>
                            </div>

                            {/* Product */}
                            <div>
                                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Product</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li><a href="#" className="hover:text-white transition-colors">Notebooks</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Explore</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Hex Magic</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">For Teams</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">App Builder</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Quickstart</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Trust Center</a></li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="md:text-right">
                                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Sales</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Email Us</a></li>
                                </ul>
                                <p className="mt-6 text-sm text-gray-400 font-mono">24569.16</p>
                            </div>
                        </div>

                        {/* Copyright and Legal */}
                        <div className="mt-12 border-t border-gray-700 py-4 text-center text-xs text-gray-400">
                            <p>© 2025 Hex Technologies Inc.</p>
                            <ul className="flex justify-center space-x-4 mt-2">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Modern slavery statement</a></li>
                            </ul>
                        </div>
                    </footer>

                </div>
            </div >
        </>
    )
}

export default Demo