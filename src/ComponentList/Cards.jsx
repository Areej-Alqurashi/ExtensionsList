import Bottun from "./Bottun";

export default function Cards({ name, con, img }) {
    return (
        <div className="flex flex-col w-80 max-w-full rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:outline-white/10 overflow-hidden h-65 justify-between">


            <div>
                <div className="flex items-center gap-x-4">

                    <img className="w-12 h-12  object-cover" src={img} alt=" Logo" />

                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold text-black dark:text-white">{name}</h2>
                    </div>
                </div>


                <p className="text-gray-500 dark:text-gray-400 px-2 pt-3 ">{con}</p>
            </div>


            <div className="flex justify-between items-center p-2">
                <Bottun name="Remove" textColor="text-white" bgColor="bg-red-500 hover:bg-red-600" size="px-4 py-2" />

                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-red-700 relative transition-all duration-300">
                        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
                    </div>
                </label>
            </div>

        </div>


    )
}
