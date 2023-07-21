import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTelegram, BsLinkedin, BsYoutube, BsTwitter, BsWhatsapp } from "react-icons/bs";

const SocialIcons = () => {
  return (
  <>
    <div className="border fixed right-0 z-40 lg:bottom-10 md:bottom-0 sm:bottom-0 bottom-0 lg:flex md:flex sm:hidden hidden">
      <div className="flex flex-col gap-4 py-2 px-3 rounded-s-2xl border dark:bg-neutral-800 bg-white">
        <Link className="text-[#3b5998] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"/"}><BsFacebook size={26}/></Link>
        <Link className="text-[#E1306C] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"/"}><BsInstagram size={26}/></Link>
        <Link className="text-[#3b5998] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"/"}><BsTelegram size={26}/></Link>
        <Link className="text-[#0a66c2] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"/"}><BsLinkedin size={26}/></Link>
        <Link className="text-[#ff0000] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"/"}><BsYoutube size={26}/></Link>
        <Link className="text-[#1da1f2] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"/"}><BsTwitter size={26}/></Link>
        <Link className="text-[#25d366] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"/"}><BsWhatsapp size={26}/></Link>

      </div>
    </div>
  </>
  )
}

export default SocialIcons