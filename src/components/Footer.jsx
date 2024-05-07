import React from 'react'

import logo from '../icons/logo.svg'
import twitter from '../icons/Twitter.svg'
import telegram from '../icons/Telegram.svg'
import instagram from '../icons/Instagram.svg'
import whatsapp from '../icons/WhatsApp.svg'
import youtube from '../icons/YouTube.svg'

const Footer = () => {
  return (<>
    <footer
      className="
      relative
      top-[50px]
           flex
           h-[653px]
           w-[1441px]
            flex-col
             items-center
           justify-between

             dark:bg-gray-dark
             max-[600px]:w-[350px]
             max-[600px]:flex-row
             "
    >
      <div
        className="
        absolute
        top-0

           flex
           h-[273px]
           w-[1211px]

           justify-between

           rounded-[15px]
            bg-[#013370]
           p-[50px]
             dark:bg-gray-dark

             "
      >
        <div
          className="
          flex
          w-[371px]
        flex-col
       items-center
       gap-[50px]

           dark:bg-gray-dark

           "
        >
          <p className="h-[58px] w-[371px] text-right font-yekan text-[16px] font-bold leading-[28.8px] text-white">
            برای اطلاع از آخرین تخفیف ها و جدید ترین کالاها میتونی ایمیلت رو
            وارد کنی !
          </p>

          <div
            className="
            flex
            w-[100%]
      flex-row
     items-center
     gap-[71px]
     rounded-[10px]
     border-[1px]
     bg-white
     p-[8px]
         dark:bg-gray-dark"
          >
            <button
              className="flex
              h-[41px]
              w-[78px]

              items-center justify-center
            gap-[8px]
            rounded-[10px]
            bg-[#79D52E]
            px-[1px]
            py-[16px]

            "
            >
              <div className="hidden"></div>
              <p>عضویت</p>
            </button>

            <div className="flex h-[25px] w-[200px] flex-row items-center gap-[9px]">
              <input
                type="text"
                className="h-[25px] w-[173px] font-yekan text-[14px] font-normal leading-[25.2px] text-[#AFB1BA] "
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
              <div className="size-[24px]">
                <img src={mailIcon} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="
          relative
           flex
         h-[173px]
           w-[603px]
           flex-col
         items-center
         gap-[25px]

          p-[20px]
             dark:bg-gray-dark

             "
        >
          <div className="absolute right-0 top-0 h-[48px] w-[115.4px]">
           <img src={logo} alt="" />
          </div>
          <div className="absolute bottom-0 right-0 h-[100px] w-[603px]">
            <p className="text-right font-yekan text-[14px] font-normal leading-[25.2px]  text-white ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم
            </p>
          </div>
        </div>
      </div>

      <div
        className="
        absolute
        bottom-0
      flex
      h-[531px]
     w-[1441px]
     items-center
     gap-[105px]
    px-[160px] pb-[70px] pt-[250px] shadow-[0_10px_30px_0_rgba(0,0,0,0.05)]

    dark:bg-gray-dark"
      >
        <div className="flex h-[211px] w-[280px] flex-col gap-[18px]">
          <h6 className="text-right font-yekan text-[16px] font-bold leading-[28.8px] text-[#011222]">
            !اعتماد شما سرمایه ماست
          </h6>

          <div className="flex flex-row gap-[12px]">
            <div className="flex h-[106px] w-[90px] items-center gap-[10px] rounded-[10px] bg-pink-primary px-[15px] py-[10px]"></div>
            <div className="flex h-[106px] w-[90px] items-center gap-[10px] rounded-[10px] bg-grape-primary px-[15px] py-[10px]"></div>
            <div className="flex h-[106px] w-[90px] items-center gap-[10px] rounded-[10px] bg-red-secondary px-[15px] py-[10px]"></div>
          </div>

          <div className="flex h-[40px] w-[280px] flex-row gap-[20px]">
           <img src={twitter}/>
           <img src={instagram}/>
           <img src={youtube}/>
           <img src={telegram}/>
           <img src={whatsapp}/>
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          <h6 className="text-right font-yekan text-[16px] font-bold leading-[28.8px] text-[#011222]">
            راه های ارتباطی
          </h6>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            تلفن : ۰۷۱۲۳۴۵۶۷۸۹
          </p>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            info@gmail.com : ایمیل
          </p>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            آدرس: شیراز خیابان زند ، کوچه اول، پلاک ۴
          </p>
        </div>

        <div className="flex flex-col gap-[18px]">
          <h6 className="text-right font-yekan text-[16px] font-bold leading-[28.8px] text-[#011222]">
            خدمات مشتریان
          </h6>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            پرسش های متداول
          </p>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            پیگیری سفارش ها
          </p>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            شرایظ و قوانین
          </p>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            ثبت شکایات و پیشنهادات
          </p>
        </div>

        <div className="flex flex-col gap-[18px]">
          <h6 className="text-right font-yekan text-[16px] font-bold leading-[28.8px] text-[#011222]">
            فروشگاه
          </h6>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            درباره ما
          </p>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            تماس با ما
          </p>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            مجله باز
          </p>
          <p
            className="text-right font-yekan text-[14px] font-normal leading-[25.2px] text-[#011222]
"
          >
            گارانتی کنسول ها
          </p>
        </div>
      </div>
    </footer></>
  )
}

export default Footer
