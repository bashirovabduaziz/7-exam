import Carts from '../../components/Carts/Carts';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import { slides } from "../../static/static.json";
import Categories from '../../components/categories/Categories';
import Footer from '../../components/Footer/Footer';
import Image from '../../assets/mainimg/02.svg'
import Posts from '../../components/Posts/Posts';

const YourComponent = () => {
 
    return (
        <div>
    <Header />
    <Carousel data={slides} />
    <div className='flex items-center justify-between mx-auto w-[1200px]  '>
              <Categories />
           <Carts />
           </div>
           <div className="w-[1200px] mx-auto mt-[50px]">
            <img src={Image} alt="" />
           </div>
               <Posts />
           <Footer />
        </div>
    );
};

export default YourComponent;
