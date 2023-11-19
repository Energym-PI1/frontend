import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClassCard from "../components/ClassCard";

const Classes = () => {
    const classesInfo = [
        {
            code: "265326",
            title: "Bodyweight Strength Training",
            img: "https://www.bodybuilding.com/images/page-graphics/beginning-bodyweight-strength-training-for-women-1-700xh.jpg",
            value: 10.0,
            time: "30 min",
            rating: 4.8,
        },
        {
            code: "265326",
            title: "Yoga Flow",
            img: "https://www.theclassyoga.com/wp-content/uploads/2021/04/vinyasa-yoga.jpeg",
            value: 15.0,
            time: "60 min",
            rating: 4.5,
        },
        {
            code: "265326",
            title: "Spin Class",
            img: "https://coac.swellclubs.com/wp-content/uploads/sites/3/2022/09/coac-october-blog-What-is-Spin-Class.jpg",
            value: 20.0,
            time: "45 min",
            rating: 4.7,
        },
        {
            code: "265326",
            title: "Zumba",
            img: "https://hips.hearstapps.com/hmg-prod/images/whatsapp-image-2020-10-27-at-11-23-00-2-1603794297.jpeg",
            value: 18.0,
            time: "50 min",
            rating: 4.6,
        },
        {
            code: "265326",
            title: "Pilates",
            img: "https://rehabilitacionpremiummadrid.com/wp-content/uploads/2020/03/P1280018-scaled.jpg",
            value: 12.0,
            time: "45 min",
            rating: 4.4,
        },
        {
            code: "265326",
            title: "Kickboxing",
            img: "https://img.freepik.com/fotos-premium/dos-hombres-boxeadores-luchando-muay-thai-kickboxing-hgh-kick-fondo-acero_183314-4724.jpg",
            value: 25.0,
            time: "60 min",
            rating: 4.8,
        },
        {
            code: "265326",
            title: "Barre",
            img: "https://www.ispo.com/sites/default/files/2023-04/shutterstock_2160084053_0_0.jpg",
            value: 16.0,
            time: "50 min",
            rating: 4.3,
        },
        {
            code: "265326",
            title: "TRX Suspension Training",
            img: "https://www.trxtraining.eu/cdn/shop/products/SMSTC.jpg?v=1651162504",
            value: 14.0,
            time: "45 min",
            rating: 4.5,
        },
        {
            code: "265326",
            title: "Indoor Cycling",
            img: "https://sportsolutions.com.mx/wp-content/uploads/2021/01/beneficios-de-practicar-indoor-cycling.jpg",
            value: 20.0,
            time: "45 min",
            rating: 4.7,
        },
        {
            code: "265326",
            title: "Aqua Aerobics",
            img: "https://www.yawa.com.au/getattachment/ce678a6a-4397-4677-ac2e-7f1d439147dd/BANNER_AQUA-AEROBICS-02-01.jpg?lang=en-AU&width=2000&height=857&ext=.jpg",
            value: 18.0,
            time: "1h",
            rating: 3.0,
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredClasses, setFilteredClasses] = useState(classesInfo);

    const debounceSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        let timeoutId = null;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            setSearchTerm(searchTerm);

            const filtered = classesInfo.filter((classItem) =>
                classItem.title.toLowerCase().includes(searchTerm)
            );

            setFilteredClasses(filtered);
        }, 250); // Delay the execution of the search function by 250 milliseconds
    };

    const handleSearch = (event) => {
        debounceSearch(event);
    };

    return (
        <div className="">
            <Navbar />
            <div className="py-10 px-28">
                <div className="flex justify-start items-center gap-3 my-10">
                    <p className="text-base text-left ">Buscar clase:</p>
                    <input
                        type="search"
                        name="search"
                        id=""
                        onChange={handleSearch}
                        className="border-blue-light border py-1 px-2 rounded-md focus:outline-none "
                    />
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-9 justify-between">
                    {filteredClasses.map((classItem, index) => (
                        <ClassCard
                            key={index}
                            classCode={classItem.code}
                            title={classItem.title}
                            value={classItem.value}
                            rating={classItem.rating}
                            img={classItem.img}
                            time={classItem.time}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Classes;
