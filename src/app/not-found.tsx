import errorImage from "@/assests/error404.svg"
import Image from "next/image"
import Link from "next/link"

const Error404 = () => {
  return (
    <div className='px-[5%] h-screen flex flex-col justify-center items-center space-y-12'>
      <h1 className="text-3xl">Oops something went wrong</h1>
      <div className="flex w-4/5 lg:w-1/3 ">
          <Image src={errorImage} alt="404" className="w-full" />
      </div>
      <Link href="/" className="bg-primary text-white px-4 py-2">Back to Home</Link>
    </div>
  )
}

export default Error404