import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import WhatsappIcon from "../public/whatsapp-icon.svg";
import Link from "next/link";
import Image from "next/image";
import GmailIcon from "../public/gmail-icon.svg";

const EmailSection = () => { 


    return (
        <main className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative" id="contact">
            <div className="z-10">
                <h5 className="text-4xl font-bold text-white my-2 ">Let&lsquo;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
                I&lsquo;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&lsquo;ll try my best to get back to you!
                </p>
                <h4 className="pb-3 mt-6">Let&lsquo;s get in touch!</h4>
                <div className=" flex flex-row gap-4 mt-6">
                    <Link href="https://github.com/SamuelTing48">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    {/* <Link href="https://www.linkedin.com/in/samuel-ting-li-wei-5203b62a4">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                    <Link href="https://www.instagram.com/samuel_tlw/" className="mt-1">
                        <Image src={InstagramIcon}/>
                    </Link> */}
                    <Link href="mailto:samueltlw17@gmail.com" className="mt-1">
                        <Image src={GmailIcon}/>
                    </Link>
                    <Link href="https://wa.me/60133351123">
                        <Image src={WhatsappIcon} alt="whatsapp" />
                    </Link>

                </div>
            </div>
        </main>
    );
};

export default EmailSection;