import Image from "next/image";

interface DropDownLink {
    title: string
    url: string
}

interface SidePanelDropdownProps {
    title: string
    src: string
    links: DropDownLink[]
    // Define your prop types here
}

const sidePanelDropdown: React.FC<SidePanelDropdownProps> = (props) => {
    const { title, src, links } = props
    return (
        <>
            <button
                type="button"
                className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-pages"
                data-collapse-toggle="dropdown-pages"
            >
                <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clip-rule="evenodd"
                    ></path>
                </svg>

                <div className="relative w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    <Image alt="dashboard" style={{ objectFit: "contain" }} src={src} fill={true} />
                </div>
                <span className="flex-1 ml-3 text-left whitespace-nowrap"
                >{title}</span>

            </button>
            <ul id="dropdown-pages" className="py-2 space-y-2">
                <li>
                    <a
                        href="#"
                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >Settings</a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >Kanban</a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >Calendar</a>
                </li>
            </ul>
        </>

    )
}

export default sidePanelDropdown;