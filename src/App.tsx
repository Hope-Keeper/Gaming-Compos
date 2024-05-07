/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
import BlogCard from './components/BlogCard/BlogCard'
import Footer from './components/Footer/Footer'
import './dist/output.css'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  return (
    <>
      <Footer />
      <BlogCard
        blogImageSrc={'../../assets/picture/Rectangle 2.png'}
        blogLable={'آموزشی'}
        blogText={'دسترسی رایگان به بخش چند نفره بازی‌های پلی استیشن آغاز شد'}
        blogInfo={{
          name: 'فرداد بهمانی',
          avatarSrc: '',
          date: 'روز پیش' + '۲'
        }}
      />
    </>
  )
}

export default App
