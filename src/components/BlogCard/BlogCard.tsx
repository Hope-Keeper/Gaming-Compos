/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import './BlogCard.css'
import image from '../../assets/picture/Rectangle 2.png'
import clock_three from '../Social-Icons/clock-three.svg'

interface BlogCardProps {
  blogImageSrc: string
  blogLable: string
  blogText: string
  blogInfo: { name: string; avatarSrc: string; date: string }
}

const BlogCard: FunctionComponent<BlogCardProps> = ({
  blogImageSrc = '../../assets/picture/Rectangle 2.png',
  blogLable = 'آموزشی',
  blogText = 'دسترسی رایگان به بخش چند نفره بازی‌های پلی استیشن آغاز شد',
  blogInfo = {
    name: 'فرداد بهمانی',
    avatarSrc: '',
    date: 'روز پیش' + '۲'
  }
}) => {
  return (
    <>
      <div className="blogCard">
        <div className="blogImageContainer">
          <img className="blogImage" src={image} alt="" />
        </div>
        <div className="blogDetails">
          <div className="blogLable">
            <p className="blogLableText">{blogLable}</p>
          </div>
          <div className="blogText">{blogText}</div>
          <div className="blogInfo">
            <div className="blogInfoDate">
              <p>{blogInfo.date}</p>

              <img src={clock_three} alt="" />
            </div>
            <div dir="rtl" className="blogInfoBlogger">
              <img className="bloggerAvatar" src={blogInfo.avatarSrc} alt="" />{' '}
              <div className="bloggerName">
                <p>{blogInfo.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
