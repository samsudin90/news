import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="fixed w-full md:h-28 h-14 z-[100] shadow-xl bg-[#ecf0f3]">
            <div className="flex max-w-[1240px] mx-auto items-center w-full h-full px-2 2xl:px-16 flex-col gap-6 mt-4">
                <div className="w-full flex justify-between items-center">
                    <Image src={"/"} alt="as" width={24} height={24} />
                    <div>
                        <div className="hidden md:flex border-2 border-gray-400 rounded-xl shadow-lg p-1">
                            <input className="bg-[#ecf0f3] focus:outline-none" placeholder="cari sesuatu" />
                            <p className="pr-1">c</p>
                        </div>
                        <p className="md:hidden">saf</p>
                    </div>
                </div>
                <div className="mx-8 gap-3 w-full overflow-scroll scroll-smooth pl-28 md:pl-0 items-center justify-center hidden md:flex no-scrollbar">
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">Home</h2>
                    </Link>
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">News</h2>
                    </Link>
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">Crypto</h2>
                    </Link>
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">Saham</h2>
                    </Link>
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">Bola</h2>
                    </Link>
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">Tekno</h2>
                    </Link>
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">Kriminal</h2>
                    </Link>
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">Islami</h2>
                    </Link>
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">Otomotif</h2>
                    </Link>
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">Kesehatan</h2>
                    </Link>
                    <Link href={"/"}>
                        <h2 className="font-medium tracking-wide text-xl hover:tracking-widest hover:text-blue-600">Politik</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar