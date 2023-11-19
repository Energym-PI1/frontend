import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClassCard from "../components/ClassCard";

const Classes = () => {
    const [classesInfo, setClassesInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://energym-403700.uc.r.appspot.com/energym-api/classes"
                );
                if (response.status === 200) {
                    console.log(response);
                    setClassesInfo(response.data);
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    Swal.fire({
                        title: "Error!",
                        text: "No se han encontrado clases",
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                    console.error("API request failed:", error.response);
                }
            }
        };

        fetchData();
    }, []);

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
