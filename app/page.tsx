import Image from 'next/image'
import DefaultNavbar from './components/DefaultNavbar'
import DefaultFooter from './components/footer'

export default function Home() {
  return (
    <div>
      <DefaultNavbar />

      {/* Banner */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-5 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl text-primary-700 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Elevate Vitality and Stamina with Ayurveda</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Experience the Natural Boost Your Body Craves with Our Ayurvedic Tablet for Optimal Well-being.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Know More
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/ojuset new.JPG" alt="mockup" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="/ojuest-insta-banner.jpg" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/kurol-insta.jpg" alt="office content 2" />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl text-primary-700 tracking-tight font-extrabold  dark:text-white">Pure Ingredients and Quality Assurance</h2>
            <p className="mb-4">we prioritize the use of pure, natural ingredients and stringent quality assurance measures to ensure that our Ayurvedic tablets for vitality and stamina are of the highest standard.</p>
            <p>We believe that the key to optimal well-being lies in the quality of the ingredients we use.We believe in preserving the authenticity of Ayurveda to deliver maximum benefits to our customers.</p>
          </div>

        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 h-2/3 lg:mt-8 ">
        <h2 className="mb-2 text-center text-4xl text-primary-700 tracking-tight font-extrabold text-gray-900 dark:text-white">How The Magic Happens !</h2>
        <p className="mb-4 font-bold text-center text-primary-400">Learn More about the manufacturing process</p>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-5 lg:px-6">
          <div className='mb-4' >
            <img className="w-full rounded-lg" src="/ashwagandha.jpg" alt="office content 1" />
            <h2 className="mt-2  text-xl text-primary-700 tracking-tight font-extrabold text-gray-900 dark:text-white">Rigorous Quality Control</h2>
            <p className="mt-2 font-light text-gray-500 sm:text-lg dark:text-gray-400">Our manufacturing processes adhere to strict quality control standards. We conduct thorough testing and analysis at every stage, from raw materials to finished products.</p>

          </div>

          <div className='mb-4' >
            <img className="w-full rounded-lg" src="/ingredients.jpg" alt="office content 1" />
            <h2 className="mt-2  text-xl text-primary-700 tracking-tight font-extrabold text-gray-900 dark:text-white">Authentic Ayurvedic Herbs</h2>
            <p className="mt-2 font-light text-gray-500 sm:text-lg dark:text-gray-400"> We source our herbs and ingredients from trusted suppliers who specialize in Ayurvedic botanicals. These herbs are carefully selected based on their purity, potency, and traditional Ayurvedic wisdom.</p>
          </div>

          <div className='mb-4' >
            <img className="w-full rounded-lg" src="/ayurveda-ing.jpg" alt="office content 1" />
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
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
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
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
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
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
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
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
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
