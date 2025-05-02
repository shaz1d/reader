import Image from 'next/image'
import React from 'react'



const SideArticle = () => {
  return (
    <div className="flex gap-5">
                  <Image
                    src="/designer-work-office.jpg"
                    className="rounded-xl"
                    height={20}
                    width={170}
                    objectFit="cover"
                    alt=""
                  />
                  <div>
                    <h3 className="text-md font-semibold capitalize mb-2">
                      8 Pshycology-Based Design hacks that will make you a
                      better designer
                    </h3>
                    <p className="text-xs text-gray-600">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Facere nobis unde exercitationem
                    </p>
                    <div className="flex gap-2 items-center mt-3">
                      <Image
                        className="rounded-full h-6 w-6 object-cover"
                        src="/author.jpg"
                        quality={100}
                        height={24}
                        width={24}
                        alt="author"
                      />

                      <p>
                        <span className="font-medium text-xs">
                          Chistan Bhuut
                        </span>{" "}
                        <span className="mx-1">•</span>{" "}
                        <span className="text-gray-950/60 text-xs">
                          Arp 10, 2025
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
  )
}

export default SideArticle