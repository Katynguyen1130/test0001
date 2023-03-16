import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div>
      {/* footer top */}

      {/* footer bottom */}
      <div className=" relative w-full lg:min-h-[350px] flex flex-col justify-end footer-image ">
        <div className="  py-10 mx-5 md:mx-8 lg:mx-[70px] xl:mx-[83px] 2xl-mx-[116px]">
          <div className="mx-auto my-10">
            <div className="mx-auto ">
              <div className="grid grid-cols-2  gap-4 ">
                <div>
                  <ul className="leading-10  list-none">
                    <li className="text-[#6D6D6D] dark:text-white font-extrabold">About DMPLE</li>
                    <li className="footer-link">
                      <Link to="/" className="footer-link  ">
                        Company
                      </Link>
                    </li>
                    <li className=" footer-link">
                      <Link to="/#helloJam" className="footer-link  ">
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/about/" className="footer-link  ">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/career/" className="footer-link  ">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div>
                <ul className="leading-10  list-none">
                  <li className="text-[#6D6D6D] pb-4 font-extrabold">Connect</li>
                  <li className="footer-link  ">Social Handlers</li>
                  <li className="footer-link  ">Community channels</li>
                  <li className="footer-link  ">Email</li>
                </ul>
              </div> */}
                {/* <div>
                  <ul className="leading-10  list-none">
                    <li className="footer-link  ">List of products</li>
                  <li className="footer-link  ">Roadmap</li>
                  </ul>
                </div> */}
                {/* <div>
                <ul className="leading-10  list-none">
                  <li className="text-[#6D6D6D]  pb-4 font-extrabold">Resources</li>
                  <li className="footer-link  ">News</li>
                  <li className="footer-link  ">Blog</li>
                  <li className="footer-link  ">Media Kit</li>
                </ul>
              </div> */}
                <div>
                  <ul class="leading-10  list-none">
                    <li className="text-[#6D6D6D] dark:text-white pb-4 font-extrabold">Legal</li>
                    <li className="footer-link  ">
                      <Link to="/privacy/"> Privacy Policy</Link>
                    </li>
                    <li className="footer-link  ">
                      <Link to="/terms/">Terms and conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social media sections */}
        <div className="flex w-full items-center justify-end flex-col">
          <div className=" flex flex-row gap-x-10 py-10">
            <a href="https://www.linkedin.com/company/80190162/admin/" target="_blank">
              <svg width="40" height="40" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.6545 0.884033H2.34549C1.85603 0.884033 1.38663 1.07847 1.04053 1.42456C0.694435 1.77066 0.5 2.24007 0.5 2.72952V24.0385C0.5 24.528 0.694435 24.9974 1.04053 25.3435C1.38663 25.6896 1.85603 25.884 2.34549 25.884H23.6545C24.144 25.884 24.6134 25.6896 24.9595 25.3435C25.3056 24.9974 25.5 24.528 25.5 24.0385V2.72952C25.5 2.24007 25.3056 1.77066 24.9595 1.42456C24.6134 1.07847 24.144 0.884033 23.6545 0.884033ZM7.95139 22.1809H4.19271V10.2417H7.95139V22.1809ZM6.06944 8.58716C5.64309 8.58476 5.22699 8.45611 4.87368 8.21746C4.52037 7.9788 4.24567 7.64084 4.08425 7.24621C3.92283 6.85158 3.88192 6.41798 3.9667 6.00013C4.05147 5.58228 4.25813 5.1989 4.56058 4.89839C4.86303 4.59787 5.24772 4.39369 5.66611 4.3116C6.0845 4.22951 6.51783 4.27319 6.91141 4.43714C7.30499 4.60109 7.64119 4.87796 7.87757 5.2328C8.11395 5.58763 8.23992 6.00454 8.23958 6.43091C8.24361 6.71636 8.19012 6.9997 8.0823 7.26404C7.97449 7.52838 7.81456 7.7683 7.61205 7.96952C7.40954 8.17073 7.16859 8.32912 6.90357 8.43523C6.63854 8.54134 6.35486 8.59301 6.06944 8.58716ZM21.8056 22.1913H18.0486V15.6688C18.0486 13.7451 17.2309 13.1514 16.1753 13.1514C15.0608 13.1514 13.967 13.9917 13.967 15.7174V22.1913H10.2083V10.2504H13.8229V11.9049H13.8715C14.2344 11.1705 15.5052 9.91528 17.4444 9.91528C19.5417 9.91528 21.8073 11.1601 21.8073 14.8059L21.8056 22.1913Z"
                  fill="white"
                />
              </svg>
            </a>

            <a href="https://twitter.com/DmpleStudio" target="_blank">
              <svg width="40" height="40" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.5 2.69268C23.6177 3.08465 22.6681 3.34863 21.6722 3.46782C22.6889 2.85826 23.4697 1.89353 23.8368 0.744007C22.8865 1.30877 21.8314 1.71754 20.7107 1.93913C19.8123 0.982394 18.5316 0.384033 17.1165 0.384033C14.3975 0.384033 12.1928 2.58869 12.1928 5.3077C12.1928 5.69328 12.2368 6.06925 12.3208 6.43003C8.22829 6.22524 4.60053 4.26457 2.17189 1.28557C1.74792 2.01272 1.50553 2.85827 1.50553 3.76061C1.50553 5.4685 2.37347 6.9756 3.69579 7.85874C2.88784 7.83314 2.12949 7.61156 1.46473 7.24278V7.30437C1.46473 9.69061 3.16302 11.6801 5.41407 12.1337C5.0013 12.2456 4.56613 12.3064 4.11736 12.3064C3.79978 12.3064 3.491 12.2752 3.19022 12.2176C3.81658 14.1735 5.63566 15.5974 7.78991 15.6374C6.10523 16.9573 3.98217 17.7453 1.67512 17.7453C1.27675 17.7453 0.884774 17.7221 0.5 17.6757C2.67905 19.0724 5.26688 19.8883 8.0475 19.8883C17.1037 19.8883 22.0562 12.3856 22.0562 5.87966C22.0562 5.66608 22.0522 5.4533 22.0418 5.24291C23.0049 4.54696 23.84 3.67981 24.5 2.69268Z"
                  fill="white"
                />
              </svg>
            </a>

            <a href="https://medium.com/@dmplestudio" target="_blank">
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"
                  fill="white"
                />
              </svg>
            </a>

            <a href="https://www.facebook.com/dmplestudio" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
                  fill="white"
                />
              </svg>
            </a>

            <a href="https://www.instagram.com/dmple_studio/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div
            className="border sefl-center box-border dark:border-white
          w-[calc(100%-40px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-70px)] xl:w-[calc(100%-100px)] 2xl:w-[calc(100%-160px)]
           border-x-0 border-t-1 border-b-0 mx-5 md:mx-8 lg:mx-[70px] xl:mx-[83px] 2xl-mx-[116px]"
          ></div>
          <div className="py-3 self-start mx-5 md:mx-8 lg:mx-[70px] xl:mx-[83px] 2xl-mx-[116px] dark:text-white">©Dmple Studio. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
