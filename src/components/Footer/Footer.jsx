import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0b1020] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-20 lg:max-w-[60rem] xl:max-w-[76rem] 2xl:max-w-[80rem] py-5 lg:py-9">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <a target="_blank" href="https://github.com/SupakunZ" className="text-[#7000ff]">Supakun Thata</a>
          </p>
          <div className="flex items-center gap-2">
            {/* <a
              target="_blank"
              href="https://github.com/SupakunZ/Portfolio"
              className="flex items-center gap-2 [&>:nth-child(1)]:hover:text-[#fde047] text-sm"
            >
              <IoStar />
              <span>Star</span>
            </a> */}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;