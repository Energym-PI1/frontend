import PropTypes from "prop-types";
import { PiChalkboardTeacher, PiClock } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const ClassCard = ({ classId, title, img, value, time, rating }) => {
    ClassCard.propTypes = {
        classId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string,
        value: PropTypes.number,
        time: PropTypes.number,
        rating: PropTypes.number,
    };
    return (
        <article className="max-w-[20rem] h-fit border-2 border-blue-light rounded-2xl px-4 py-4">
            <div className="relative w-full h-3/5">
                <img
                    src={img}
                    alt="sport image"
                    className="w-full h-full rounded-2xl object-cover object-center"
                />
                <div className="absolute bg-white px-2 py-1 flex items-center justify-between gap-1 top-2 right-2 rounded-md">
                    <CiStar className="text-blue-light w-5 h-5" />
                    <span className="text-blue-light text-sm">{rating}</span>
                </div>
            </div>
            <h2 className="text-lg font-semibold text-left my-3">{title}</h2>
            <div className="flex items-center justify-between gap-2 my-3">
                <div className="flex items-center justify-start bg-[#D9D9D9] rounded-full w-full px-2 py-1 ">
                    <PiChalkboardTeacher className="text-black w-5 h-5" />
                    <p className="text-left ml-1 text-base">${value}</p>
                </div>
                <div className="flex items-center justify-start bg-[#D9D9D9] rounded-full w-full px-2 py-1">
                    <PiClock className="text-black w-4 h-4" />
                    <p className="text-left ml-1 text-base">{time} min</p>
                </div>
            </div>

            <Link to={`/classes/${classId}`}>
                <button className="w-full bg-blue-light border rounded-md text-white text-lg font-semibold py-2 hover:bg-blue transition-all duration-300">
                    Saber más...
                </button>
            </Link>
        </article>
    );
};

export default ClassCard;
