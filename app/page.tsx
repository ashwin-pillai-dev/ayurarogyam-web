import Image from 'next/image'
import DefaultNavbar from './components/DefaultNavbar'
import DefaultFooter from './components/footer'
import Slider from './components/slider/slider'
import EmblaCarousel from './components/carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';

export default function Home() {
  const slides = [
    // { title: 'Nature’s Science', desc: 'Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.', image: '/1-Fresh-Mint.JPG' },
    // { title: 'Tested, Result Giving, Age Old Kayakalpa Rasayana Formulation', desc: 'Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.', image: '/2-fresh-herb.JPG' },
    { title: '100% Pure Ayurvedic Products', desc: 'Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.', image: '/100-ayurveidc.jpg' },
    // { title: 'Serving Mankind With Quality Medicines', desc: 'Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.', image: '/6-outdoors.JPG' },
    // { title: 'A Herbo Mineral Preparatory Supplement', desc: 'Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.', image: '/ojuset-product.JPG' },
    // { title: 'Energy Stimulant ', desc: 'Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.', image: '/4 cute-couple-walking.JPG' },   

];

const SLIDES:any= [
    { title: 'Serving Mankind With Quality Medicines', desc: 'Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.', src: '/6-outdoors.jpg' },
    { title: 'A Herbo Mineral Preparatory Supplement', desc: 'Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.', src: '/PUNARJITH- OJUSET Capsules.jpg' },
    { title: 'Nature’s Science', desc: 'Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.', src: '/1-Fresh-Mint.jpg' },
    { title: '100% Pure Ayurvedic Products', src: '/100-ayurveidc.jpg', desc: 'Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.' },
    { title: 'The Herbal way of Healing Piles', src: '/kurol-banner-1.jpg', desc: 'Complete relief from piles.' },
]
const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <div>
      <DefaultNavbar />

      {/* Banner */}
      <section className="bg-white dark:bg-gray-900">
        {/* <Slider slides={slides}/> */}
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      </section>

      {/* Content */}
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid  lg:py-8 lg:px-6">
          {/* <div className="grid grid-cols-2 gap-4 mt-8">
            <Image className="w-full rounded-lg" src="/ojuest-insta-banner.jpg" alt="office content 1" width={500} height={500} />
            <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/kurol-insta.jpg" alt="office content 2" width={500} height={500} />
          </div> */}
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl text-primary-700 tracking-tight font-extrabold text-center  dark:text-white">"Discover the Wisdom of Ayurveda"</h2>
            <p className="mb-4 text-center">"Welcome to Ayur Arogyam, where ancient wisdom meets modern wellness. At the heart of our mission is Ayurveda – a holistic approach to health and well-being that has stood the test of time for over 5,000 years. Ayurveda, often referred to as the 'Science of Life,' offers profound insights into achieving harmony and balance in all aspects of our existence."</p>
          </div>
        </div>
      </section>


      <section className="bg-white dark:bg-gray-900 h-2/3 lg:mt-8 ">
        <h2 className="mb-2 text-center text-4xl text-primary-700 tracking-tight font-extrabold text-gray-900 dark:text-white">How The Magic Happens !</h2>
        <p className="mb-4 font-bold text-center text-primary-400">Learn More about the manufacturing process</p>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-5 lg:px-6">
          <div className='mb-4' >
            <Image height={500} width={500} className="w-full rounded-lg" src="/ashwagandha.jpg" alt="office content 1" />
            <h2 className="mt-2  text-xl text-primary-700 tracking-tight font-extrabold text-gray-900 dark:text-white">Rigorous Quality Control</h2>
            <p className="mt-2 font-light text-gray-500 sm:text-lg dark:text-gray-400">Our manufacturing processes adhere to strict quality control standards. We conduct thorough testing and analysis at every stage, from raw materials to finished products.</p>

          </div>

          <div className='mb-4' >
            <Image height={500} width={500} className="w-full rounded-lg" src="/ingredients.jpg" alt="office content 1" />
            <h2 className="mt-2  text-xl text-primary-700 tracking-tight font-extrabold text-gray-900 dark:text-white">Authentic Ayurvedic Herbs</h2>
            <p className="mt-2 font-light text-gray-500 sm:text-lg dark:text-gray-400"> We source our herbs and ingredients from trusted suppliers who specialize in Ayurvedic botanicals. These herbs are carefully selected based on their purity, potency, and traditional Ayurvedic wisdom.</p>
          </div>

          <div className='mb-4' >
            <Image height={500} width={500} className="w-full rounded-lg" src="/ayurveda-ing.jpg" alt="office content 1" />
            <h2 className="mt-2  text-xl text-primary-700 tracking-tight font-extrabold text-gray-900 dark:text-white">Sustainable and Ethical Practices</h2>
            <p className="mt-2 font-light text-gray-500 sm:text-lg dark:text-gray-400">We are dedicated to promoting sustainable and ethical practices throughout our supply chain. We prioritize responsible sourcing, fair trade, and environmentally conscious methods. </p>
          </div>
        </div>

      </section>

      <section className="bg-primary-500 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Testimonials</h2>
            <p className="mb-8 font-light text-gray-100 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                <p className="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                <p className="my-4">Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                <p className="my-4">If you care for your time, I hands down would go with this."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Image height={500} width={500} className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                <p className="my-4">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
                <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Image height={500} width={500} className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Roberta Casas</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                <p className="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>
                <p className="my-4">Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</p>
                <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Image height={500} width={500} className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jese Leos</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                <p className="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
                <p className="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Image height={500} width={500} className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                </div>
              </figcaption>
            </figure>
          </div>
          {/* <div className="text-center">
          <a href="#" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a> 
      </div> */}
        </div>
      </section>






      <DefaultFooter />

    </div>

  )
}
