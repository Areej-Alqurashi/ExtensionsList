import { useState, useEffect } from "react";
import "../App.css";
import Cards from "./Cards";
import Bottun from "./Bottun";

export default function ExtensionsList() {
    const [darkMode, setDarkMode] = useState(false);
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error loading data:', error));
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="bg-blue-50 dark:bg-gray-900 min-h-screen flex justify-center items-center">
            <div className='mx-auto pt-0 lg:px-64 sm:p-6 md:p-8 '>

                {/* Search bar */}
                <div className="flex justify-center mt-3">
                    <div className="relative w-full">

                        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <img
                                src="/assets/images/logo.svg"
                                alt="Logo"
                                className="w-33 h-6 object-contain"
                            />
                        </div>

                        {/* input */}
                        <input
                            type="text"
                            className="w-full h-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pl-33 pr-12 bg-white dark:bg-gray-800"
                        />

                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <img
                                onClick={() => setDarkMode(!darkMode)}
                                src={darkMode ? "/assets/images/icon-sun.svg" : "/assets/images/icon-moon.svg"}
                                alt="Dark Mode"
                                className="w-6 h-6 object-contain cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-xl font-bold ml-3-2 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h2 className="whitespace-nowrap text-3xl font-bold dark:text-white text-black">Extensions List</h2>

                    <div className="flex gap-3 flex-nowrap bg-transparent dark:bg-transparent">
                        <Bottun
                            name="All"
                            textColor="text-black dark:text-white"
                            size="px-3 py-3"
                            fontSize="text-sm"
                            border="border border-black dark:border-white"
                        />
                        <Bottun
                            name="Active"
                            textColor="text-black dark:text-white"
                            size="px-2 py-2"
                            fontSize="text-sm"
                            border="border border-black dark:border-white"
                        />
                        <Bottun
                            name="Inactive"
                            textColor="text-black dark:text-white"
                            bgColor="bg-transparent dark:bg-gray-800"
                            size="px-3 py-3"
                            fontSize="text-xs"
                            border="border border-black dark:border-white"
                        />
                    </div>
                </div>

                {/* Cards */}
                <div className="p-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-4 md:px-0 space-y-2">
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <Cards
                                key={index}
                                name={item.name}
                                con={item.description}
                                img={item.logo}
                            />
                        ))
                    ) : (
                        <p>Loading data...</p>  // عند تحميل البيانات
                    )}
                </div>

            </div>
        </div>
    );
}
