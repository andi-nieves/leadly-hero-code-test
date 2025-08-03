import LogoIcon from "@/assets/icons/Logo";
import LoginButton from "./LoginButton";
import Link from "next/link";
import KebabIcon from "@/assets/icons/Kebab";

export default function Navbar() {
    return (
        <div className="w-full flex justify-center mt-[41px]">
            <div className="w-full bg-white py-[13px] px-[36px] rounded-(--radius-20) flex flex-row items-center box-shadow">
                <div className="visible md:hidden">
                    <button><KebabIcon /></button>
                </div>
                <h1 className="font-bold text-(--text-primary) flex flex-row gap-1 items-center justify-center flex-1 md:flex-none">
                    topspeed
                     <LogoIcon />
                </h1>
                <div className="flex flex-1 items-center justify-center gap-[30px] hidden md:flex">
                    <Link className="nav-links" href="#">Help & Advice</Link>
                    <Link className="nav-links" href="#">Locations</Link>
                    <Link className="nav-links" href="#">Contact Us</Link>
                </div>
                <LoginButton />
            </div>
        </div>
    );
}
