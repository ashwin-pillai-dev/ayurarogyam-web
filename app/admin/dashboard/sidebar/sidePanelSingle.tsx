import Image from "next/image";

interface SidePanelSingleProps {
    title:string
    src:string
    url:string
    // Define your prop types here
}

const SidePanelSingle: React.FC<SidePanelSingleProps> = (props) => {
    const {title,url,src} = props
    return(
        <a
        href="#"
        className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
        <div className="relative w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
            <Image  alt="dashboard"  style={{ objectFit: "contain" }} src={src} fill={true} />
        </div>
        <span className="ml-3">{title}</span>
    </a>
    )
}

export default SidePanelSingle;