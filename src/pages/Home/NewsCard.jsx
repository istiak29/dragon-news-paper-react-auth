import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { title, image_url: thumbnail_url, details, _id } = news;

    return (
        <div className='mb-8'>
            <div>
                
            </div>
            <div className="card w-96">
                <h2 className="card-title px-5">{title}</h2>
                <figure className="px-5 pt-5">
                    <img src={thumbnail_url} alt="" className="rounded-md" />
                </figure>

                {/* description */}
                <div className="card-body px-5">
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)} <Link
                                to={`/news/${_id}`}
                                className='text-orange-600'>Read more ...</Link></p> :
                            <p>{details}</p>
                    }
                </div>

                {/* rating */}
                <div className='px-5'>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    news: PropTypes.object
}