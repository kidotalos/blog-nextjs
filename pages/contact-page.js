import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-2xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            width={100}
            height={100}
            alt="Avatar"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Name</p>
          <p className="text-xs mt-2 text-gray-600 pb-4">城戸　拓也</p>
          <p className="font-bold">Job</p>
          <p className="text-xs mt-2 text-gray-600 pb-4">システムエンジニア</p>
          <p className="font-bold">Hobby</p>
          <p className="text-xs mt-2 text-gray-600 pb-4">ジム ゴルフ 麻雀</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600 pb-4">
            takuyakido1993@gmail.com
          </p>
          <p className="font-bold mt-3">portfolio</p>
        </div>
        <div className="mt-6 flex justify-around">
          <div>
            <a href="https://winwin-fukuoka.com/">
              <Image
                className="rounded-full"
                src="/winwin.JPG"
                width={50}
                height={50}
                alt="WinWin"
              />
              <p className="text-xs">WinWin</p>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/">
              <Image
                className="rounded-full"
                src="/instagram.png"
                width={50}
                height={50}
                alt="instagram"
              />
              <p className="text-xs">instagram</p>
            </a>
          </div>
          <div>
            <a href="https://majan-kokushi.web.app/">
              <Image
                className="rounded-full"
                src="/kokushi.png"
                width={50}
                height={50}
                alt="kokushi"
              />
              <p className="text-xs">kokushi</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
