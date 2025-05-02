import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const FeaturedSection = () => {
  return (
    <section className="py-5">
        <div className="container mx-auto">
          {/* Featured  */}
          <Link
            href="/"
            className="relative w-full min-h-[80vh]  rounded-2xl overflow-hidden p-10 text-white flex flex-col justify-end"
          >
            <Image
              src="/designer-work-office.jpg"
              className="-z-20"
              quality={100}
              objectFit="cover"
              objectPosition="bottom"
              fill
              alt=""
            />
            <div className="absolute inset-0 bg-black/50 -z-10"></div>
            <div className="max-w-5xl">
              <p className="text-base md:text-md font-medium">Featured</p>
              <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl mb-6 mt-2">
                Breaking Into Product Design: Advice form READER Founder, Frank
              </h1>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique numquam illum atque pariatur, nemo temporibus facere
                perspiciatis laboriosam non, eos aspernatur eligendi quam
                dolorem ab soluta consequuntur. Cupiditate, quasi cum.
              </p>
            </div>
          </Link>
        </div>
      </section>
  )
}

export default FeaturedSection