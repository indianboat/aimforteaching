import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube, BsTwitter, BsWhatsapp } from "react-icons/bs";

const SocialIcons = () => {
  return (
  <>
    <div className="border fixed right-0 z-40 lg:bottom-10 md:bottom-0 sm:bottom-0 bottom-0 lg:flex md:flex sm:hidden hidden">
      <div className="flex flex-col gap-4 py-2 px-3 rounded-s-2xl border dark:bg-neutral-800 bg-white">
        <Link aria-label="facebook" className="text-[#3b5998] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"https://goo.gl/GK5nHo"} target="_blank"><BsFacebook size={26}/></Link>
        <Link aria-label="instagram" className="text-[#E1306C] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"https://www.instagram.com/invites/contact/?i=1v5pbl1xz8lj1&utm_content=2gkx6og"} target="_blank"><BsInstagram size={26}/></Link>
        <Link aria-label="telegram" className="text-[#0088cc] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"https://t.me/joinchat/KUKpShcwvYuTUZ8uBIhkVQ"} target="_blank"><BsTelegram size={26}/></Link>
        <Link aria-label="youtube" className="text-[#ff0000] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"https://www.youtube.com/@AimforTeaching"} target="_blank"><BsYoutube size={26}/></Link>
        <Link aria-label="twitter" className="text-[#1da1f2] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"https://twitter.com/aimforteaching?t=fW0lAJhuOn91ZKWkWgklEA&s=09"} target="_blank"><BsTwitter size={26}/></Link>
        <Link aria-label="whatsapp" className="text-[#25d366] opacity-50 dark:opacity-75 dark:hover:opacity-100 hover:opacity-100" href={"https://chat.whatsapp.com/BsmR8a2H7h1BTaEtvx18aX"} target="_blank"><BsWhatsapp size={26}/></Link>

      </div>
    </div>
  </>
  )
}

export default SocialIcons