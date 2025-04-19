import React from 'react'
import { FaBoxOpen, FaThLarge, FaMapMarkerAlt, FaExclamationTriangle, FaStream } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Demo = () => {
    const graphImageUrl = 'https://png.pngtree.com/background/20230520/original/pngtree-animated-chart-is-shown-on-a-large-black-background-picture-image_2675773.jpg';

    const warehouseIntegrationsImageUrl = 'PASTE_WAREHOUSE_INTEGRATIONS_IMAGE_URL_HERE';
    const dbtIntegrationImageUrl = 'PASTE_DBT_INTEGRATION_IMAGE_URL_HERE';
    const pythonIntegrationImageUrl = 'PASTE_PYTHON_INTEGRATION_IMAGE_URL_HERE';
    const gitIntegrationImageUrl = 'PASTE_GIT_INTEGRATION_IMAGE_URL_HERE';
    const orchestrationIntegrationImageUrl = 'PASTE_ORCHESTRATION_INTEGRATION_IMAGE_URL_HERE';
    const hexApiImageUrl = 'PASTE_HEX_API_IMAGE_URL_HERE';

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


    return (
        <>
            <div className="min-h-screen bg-[#16161F] text-white font-sans bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] px-10 py-6  ">
                {/* Navbar */}
                <div className='border'>
                    <nav className=" text-[#f1c1c1]  py-6 flex justify-between items-center font-sans px-[20rem]">
                        {/* Left Menu */}
                        <div className="flex items-center space-x-6 text-lg">
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

                        {/* Center Logo */}
                        <h1 className="text-3xl font-bold tracking-widest text-[#f1c1c1]">HEX</h1>

                        {/* Right Menu */}
                        <div className="flex items-center space-x-6 text-lg">
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
                    </nav>

                    {/* Hero Section */}
                    <div className="relative  text-white py-24 px-10 md:px-20 lg:px-32 xl:px-48 flex items-center justify-center gap-10">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>

                        {/* Left Text Content */}
                        <div className="relative z-10 max-w-full">
                            <h2 className="text-[5rem] font-bold leading-tight tracking-[0.5rem] mb-6">
                                Bring <br /> everyone <br /> together <br /> with data
                            </h2>
                        </div>

                        {/* Right Text and Buttons */}
                        <div className="relative z-10 max-w-md text-right">
                            <p className="text-2xl text-gray-300 mb-8">
                                Go end-to-end from quick queries to deep-dive analyses to
                                beautiful interactive data apps – all in one collaborative, AI-
                                powered workspace.
                            </p>
                            <div className="flex justify-end gap-4">
                                <button className="bg-transparent border border-white rounded-md py-3 px-6 text-xl font-semibold hover:bg-white hover:text-[#16161F] transition duration-300">
                                    Get started for free
                                </button>
                                <button className="bg-transparent border border-gray-500 rounded-md py-3 px-6 text-xl font-semibold hover:bg-gray-500 hover:text-white transition duration-300">
                                    Request a demo
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* ................................... */}



                    <div class="grid grid-cols-6 max-w-screen-xl mx-auto p-12  text-[#FCECEC] text-center text-xl">
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


                    {/* .................................... */}
                    <section class=" py-24 relative text-center overflow-hidden border-b border-t mt-4">
                        <div class="max-w-4xl mx-auto px-4">
                            <h2 class="text-5xl md:text-6xl font-semibold leading-tight bg-gradient-to-r from-[#fddcdc] to-[#fcecec] text-transparent bg-clip-text">
                                All your workflows,<br />
                                in one workspace
                            </h2>
                        </div>
                    </section>


                    <section class=" text-white py-24 px-6 md:px-12">
                        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                            <div class="md:w-1/4 space-y-6">

                                <div class="w-10 h-10 mb-4">
                                    <img src="/path-to-your-icon.svg" alt="Icon" />
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


                            <div class="md:w-auto rounded-lg p-6 shadow-md overflow-auto">
                                <pre class="text-sm font-mono text-[#f1f1f1] leading-relaxed">
                                    <span class="text-blue-400">with</span> central_values_all <span class="text-blue-400">as</span>
                                    <span class="text-blue-400">select</span> central_values_all.*,
                                    central_values_churn.churned_arr,
                                    central_values_churn.churned_workspaces,
                                    central_values_churn.churned_arr/central_values_all.arr_total_beginning
                                    <span class="text-blue-400">from</span> central_values_all
                                    <span class="text-blue-400">left join</span> central_values_churn <span class="text-blue-400">on</span> central_values_all.group_name = central_values_churn.group_name
                                    <span class="text-blue-400">and</span> central_values_all.snapshot_month = central_values_churn.snapshot_month
                                    <span class="text-blue-400">order by</span> snapshot_month,
                                    group_name <span class="text-blue-400">desc</span>;
                                </pre>
                            </div>
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
                        <div className="relative w-full max-w-4xl mx-auto">
                            {/* Graph Image */}
                            {graphImageUrl && <img src={graphImageUrl} alt="Retention Trend" className="rounded-md " />}
                            {/* AI Input */}
                            <div className="absolute left-40 right-40 bottom-[-30px] bg-[#2D3748] rounded-full py-2 px-4 flex items-center justify-center">
                                {/* Icon for the input */}
                                <div className="rounded-full bg-[#4A5568] w-6 h-6 flex items-center justify-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0-12V21m8.69-9.04l-3-3m3 3l3-3m-6-3h.01M6 20.69L8.79 17.91m-3-3l3 3m-3-3l-3 3m6-3h.01m6 3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
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
                    <div className=" text-white py-16 px-[20rem]">
                        <div className="text-center mb-12">
                            <h2 className="text-[4rem] font-bold mb-4 leading-tight">Instant integration <br /> with the whole stack</h2>
                            <p className="text-2xl text-gray-300">Out-of-the-box connections and flexible APIs make setup a breeze.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Built for the warehouse */}
                            <div className="bg-[#2D3748] rounded-md p-6">
                                {warehouseIntegrationsImageUrl && <img src={warehouseIntegrationsImageUrl} alt="Warehouse Integrations" className="mb-4" />}
                                <h3 className="text-xl font-semibold mb-2">Built for the warehouse</h3>
                                <p className="text-sm text-gray-300">
                                    Hex has built-in connections to the most popular data warehouses,
                                    lakehouses, and databases. It’s easy to set up data connections,
                                    and securely share them with your team.
                                </p>
                            </div>

                            {/* dbt metadata, docs, & metrics */}
                            <div className="bg-[#2D3748] rounded-md p-6">
                                {dbtIntegrationImageUrl && <img src={dbtIntegrationImageUrl} alt="dbt Integration" className="mb-4" />}
                                <h3 className="text-xl font-semibold mb-2">dbt metadata, docs, & metrics</h3>
                                <p className="text-sm text-gray-300">
                                    Hex has a deep integration with dbt, including automatically enriching
                                    schemas with dbt docs.
                                </p>
                            </div>

                            {/* Push your Python */}
                            <div className="bg-[#2D3748] rounded-md p-6">
                                {pythonIntegrationImageUrl && <img src={pythonIntegrationImageUrl} alt="Python Integration" className="mb-4" />}
                                <h3 className="text-xl font-semibold mb-2">Push your Python</h3>
                                <p className="text-sm text-gray-300">
                                    Hex has deep integrations with Snowflake and Spark (soon!), allowing
                                    you to push Python code to remote execution environments.
                                </p>
                            </div>

                            {/* Git it together */}
                            <div className="bg-[#2D3748] rounded-md p-6">
                                {gitIntegrationImageUrl && <img src={gitIntegrationImageUrl} alt="Git Integration" className="mb-4" />}
                                <h3 className="text-xl font-semibold mb-2">Git it together</h3>
                                <p className="text-sm text-gray-300">
                                    Export your projects to GitHub or GitLab to create an audit trail.
                                </p>
                            </div>

                            {/* Orchestration */}
                            <div className="bg-[#2D3748] rounded-md p-6">
                                {orchestrationIntegrationImageUrl && <img src={orchestrationIntegrationImageUrl} alt="Orchestration Integration" className="mb-4" />}
                                <h3 className="text-xl font-semibold mb-2">Orchestration</h3>
                                <p className="text-sm text-gray-300">
                                    You can include Hex projects in DAGs in Airflow, Dagster, or Prefect.
                                </p>
                            </div>

                            {/* Hex API */}
                            <div className="bg-[#2D3748] rounded-md p-6">
                                {hexApiImageUrl && <img src={hexApiImageUrl} alt="Hex API" className="mb-4" />}
                                <h3 className="text-xl font-semibold mb-2">Hex API</h3>
                                <p className="text-sm text-gray-300">
                                    Want to connect to something we haven’t thought of? Use our powerful
                                    public API to write your own integrations.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/*  */}
                    <div className=" text-white py-10 text-center px-[20rem] ">
                        <div className="relative bg-[#16161F] text-white py-24 text-center border">
                            {/* Background Grid (CSS will handle this) */}
                            <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
                            <div className="relative z-10 ">
                                <h1 className="text-5xl font-bold mb-6">A new standard <br /> for data work</h1>
                                <p className="text-lg text-gray-300">Hex helps 1,000s of teams do more with their data.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                            <div className=" border-gray-200 border p-5  text-left">
                                <div className="mb-4">
                                    <img src={rapid} alt="StubHub" className="max-w-24" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Rapid exploration on-demand</h3>
                                <p className="text-sm leading-relaxed">
                                    StubHub realigned its analytics stack with Hex for speed and quality.
                                </p>
                            </div>
                            <div className=" border-gray-200 border p-5  text-left">
                                <div className="mb-4">
                                    <img src={operation} alt="ClickUp" className="max-w-24" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Operationalized data science</h3>
                                <p className="text-sm leading-relaxed">
                                    ClickUp used Hex to turn a data science churn project into a
                                    cross-functional, customer-saving program.
                                </p>
                            </div>
                            <div className=" border-gray-200 border p-5  text-left">
                                <div className="mb-4">
                                    <img src={notion} alt="Notion" className="max-w-24" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">One place for insights</h3>
                                <p className="text-sm leading-relaxed">
                                    Notion made Hex the one place for everyone, from data science to CX
                                    and sales, to make decisions with data.
                                </p>
                            </div>
                            <div className=" border-gray-200 border p-5  text-left">
                                <div className="mb-4">
                                    <img src={treasure} alt="Modern Treasury" className="max-w-24" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Empowering exploration</h3>
                                <p className="text-sm leading-relaxed">
                                    Modern Treasury uses Hex to enable Engineering, Product, and Design
                                    teams to explore on their own.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/*  */}
                    <div className="bg-[#16161F] text-white py-16 px-10 md:px-20 lg:px-32 xl:px-48">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Build anything with data</h2>
                            <p className="text-lg text-gray-300">
                                Learn how to do almost anything in Hex, from complex ML forecasting to critical
                                business dashboards.
                            </p>
                            <button className="bg-white text-black font-semibold py-2 px-4 rounded-md mt-4 hover:bg-gray-100 transition duration-300">
                                View all templates
                            </button>
                        </div>

                        {/* Exact Grid Structure with Image Backgrounds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-8">
                            {/* Row 1 */}
                            <div className="rounded-lg border border-gray-700 bg-cover bg-center" style={{ backgroundImage: `url('${dataClusteringImageUrl}')` }}>
                                <div className="p-4 bg-black bg-opacity-50 h-full flex flex-col justify-end">
                                    <h3 className="text-xl font-semibold mb-2">Data Clustering</h3>
                                    <p className="text-sm text-gray-300">
                                        Unlock the power of data clustering—an unsupervised machine learning
                                        technique that uncovers patterns and groups similar data together
                                        without the need for labeled data.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg border border-gray-700 bg-cover bg-center" style={{ backgroundImage: `url('${exploratoryAnalysisImageUrl}')` }}>
                                <div className="p-4 bg-black bg-opacity-50 h-full flex flex-col justify-end">
                                    <h3 className="text-xl font-semibold mb-2">Exploratory Analysis</h3>
                                    <p className="text-sm text-gray-300">
                                        Deep dives, rabbit holes, what-ifs, and ad-hoc explorations.
                                    </p>
                                </div>
                            </div>
                            {/* Empty cell for visual spacing */}
                            <div></div>
                            <div className="rounded-lg border border-gray-700 bg-cover bg-center" style={{ backgroundImage: `url('${kpiDashboardsImageUrl}')` }}>
                                <div className="p-4 bg-black bg-opacity-50 h-full flex flex-col justify-end">
                                    <h3 className="text-xl font-semibold mb-2">KPI Dashboards</h3>
                                    <p className="text-sm text-gray-300">
                                        Track and measure business KPIs, offer insights into sales
                                        performance, customer satisfaction, and operational efficiency.
                                    </p>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="rounded-lg border border-gray-700 bg-cover bg-center" style={{ backgroundImage: `url('${dataModelingImageUrl}')` }}>
                                <div className="p-4 bg-black bg-opacity-50 h-full flex flex-col justify-end">
                                    <h3 className="text-xl font-semibold mb-2">Data Modeling</h3>
                                    <p className="text-sm text-gray-300">
                                        Take raw data and transform it into ready-to-use data sets
                                        for prediction models, interactive apps for exploration, or
                                        for company reporting.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg border border-gray-700 bg-cover bg-center" style={{ backgroundImage: `url('${sentimentAnalysisImageUrl}')` }}>
                                <div className="p-4 bg-black bg-opacity-50 h-full flex flex-col justify-end">
                                    <h3 className="text-xl font-semibold mb-2">Sentiment Analysis</h3>
                                    <p className="text-sm text-gray-300">
                                        Decipher subjective information in text to determine its
                                        polarity and subjectivity; explore advanced techniques and
                                        Python libraries for sentiment analysis.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg border border-gray-700 bg-cover bg-center" style={{ backgroundImage: `url('${naturalLanguageProcessingImageUrl}')` }}>
                                <div className="p-4 bg-black bg-opacity-50 h-full flex flex-col justify-end">
                                    <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
                                    <p className="text-sm text-gray-300">
                                        Empower your AI and ML applications with intelligent text
                                        recognition, and representation using powerful
                                        Natural Language Processing (NLP) algorithms.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg border border-gray-700 bg-cover bg-center" style={{ backgroundImage: `url('${dataVisualizationImageUrl}')` }}>
                                <div className="p-4 bg-black bg-opacity-50 h-full flex flex-col justify-end">
                                    <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
                                    <p className="text-sm text-gray-300">
                                        Transform raw data into actionable insights with
                                        interactive visualizations, dashboards, and data apps.
                                    </p>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="rounded-lg border border-gray-700 bg-cover bg-center" style={{ backgroundImage: `url('${timeSeriesImageUrl}')` }}>
                                <div className="p-4 bg-black bg-opacity-50 h-full flex flex-col justify-end">
                                    <h3 className="text-xl font-semibold mb-2">Time Series</h3>
                                    <p className="text-sm text-gray-300">
                                        Discover meaningful patterns and trends by visualizing
                                        data over time.
                                    </p>
                                </div>
                            </div>
                            {/* Empty cells to match the layout */}
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>


                    {/*  */}
                    <h2 className="text-[5rem] mt-16 font-bold mb-6 leading-tight flex justify-center items-center ">Built for security and control</h2>
                    <div className=" text-white pb-16 px-10 md:px-20 lg:px-32 xl:px-48 flex flex-col lg:flex-row items-center justify-center">

                        {/* Left Text Content */}
                        <div className="max-w-lg text-center lg:text-left">

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

                        {/* Right Image */}
                        <div className="max-w-md">
                            {securityShieldImageUrl && <img src={securityShieldImageUrl} alt="Security Shield" className="w-full h-auto" />}
                        </div>
                    </div>



                    <div className=" text-white py-10 flex justify-center gap-10 px-5">
                        {/* Left Section - Users love Hex */}
                        <div className="border border-gray-300  p-8 w-full max-w-md text-center">
                            <img src={azure} alt="G2 Badges" className="mb-6 mx-auto max-w-full" />
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
                                    <img src={notion} alt="Notion Logo" className="h-8 w-auto" />
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
            </div>
        </>
    )
}

export default Demo