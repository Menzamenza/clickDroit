// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Etape3Consultation = ({ date, heureDebut, heureFin, onChange, onNext, onBack }) => {
//     const [selectedDate, setSelectedDate] = useState(date || new Date());
//     const [startTime, setStartTime] = useState(heureDebut || "");
//     const [endTime, setEndTime] = useState(heureFin || "");

//     const handleNextClick = () => {
//         onChange({
//             date: selectedDate,
//             heureDebut: startTime,
//             heureFin: endTime
//         });
//         onNext();
//     };

//     return (
//         <div className="">
//             <div className="text-center merriweather-sans">
//                 <h2 className="text-xl font-bold mb-4 ">Créneau horaire</h2>
//                 <p>Définissez votre créneau horaire idéal</p>
//             </div>

//             <div className=" shadow p-6 rounded-lg space-y-6">

//                 <div className="flex flex-col items-center space-y-4">
//                     <label className="font-semibold">Sélectionnez une date :</label>
//                     <DatePicker
//                         selected={selectedDate}
//                         onChange={(date) => setSelectedDate(date)}
//                         minDate={new Date()}
//                         showMonthDropdown
//                         showYearDropdown
//                         dropdownMode="select"
//                         className="border p-2 rounded w-60"
//                     />
//                 </div>

//                 <div className="flex flex-col md:flex-row justify-center gap-4">
//                     <div>
//                         <label className="font-semibold">Heure de début :</label>
//                         <input
//                             type="time"
//                             value={startTime}
//                             onChange={(e) => setStartTime(e.target.value)}
//                             className="border p-2 rounded w-40"
//                         />
//                     </div>

//                     <div>
//                         <label className="font-semibold">Heure de fin :</label>
//                         <input
//                             type="time"
//                             value={endTime}
//                             onChange={(e) => setEndTime(e.target.value)}
//                             className="border p-2 rounded w-40"
//                         />
//                     </div>
//                 </div>

//                 <div className="">
//                     <button
//                         onClick={handleNextClick}
//                         className="bg-bleu text-white py-2 px-6 rounded  mb-3">Suivant →
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Etape3Consultation;
// import React, { useState } from "react";
// import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, format, isSameMonth, isSameDay } from "date-fns";

// const Etape3Consultation = ({ date, onChange, onNext, onBack }) => {
//     const [currentMonth, setCurrentMonth] = useState(new Date());
//     const [selectedDate, setSelectedDate] = useState(date || null);

//     const renderHeader = () => (
//         <div className="flex justify-between items-center mb-4">
//             <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>&lt;</button>
//             <h2 className="text-xl font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
//             <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>&gt;</button>
//         </div>
//     );

//     const renderDays = () => {
//         const days = [];
//         const dateFormat = "EEE"; // Jour abrégé (Mon, Tue, etc.)

//         const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });

//         for (let i = 0; i < 7; i++) {
//             days.push(
//                 <div key={i} className="text-center font-semibold w-10">{format(addDays(startDate, i), dateFormat)}</div>
//             );
//         }
//         return <div className="flex justify-center items-center gap-2">{days}</div>;
//     };

//     const renderCells = () => {
//         const monthStart = startOfMonth(currentMonth);
//         const monthEnd = endOfMonth(monthStart);
//         const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
//         const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

//         const rows = [];
//         let days = [];
//         let day = startDate;

//         while (day <= endDate) {
//             for (let i = 0; i < 7; i++) {
//                 const cloneDay = day;
//                 const isSelected = selectedDate && isSameDay(day, selectedDate);
//                 const isCurrentMonth = isSameMonth(day, monthStart);

//                 days.push(
//                     <div
//                         key={day}
//                         className={`w-10 h-10 flex items-center justify-center m-1 rounded cursor-pointer
//                         ${isSelected ? "bg-blue-600 text-white" : isCurrentMonth ? "bg-white text-black" : "bg-gray-100 text-gray-400"}`}
//                         onClick={() => setSelectedDate(cloneDay)}
//                     >
//                         {format(day, "d")}
//                     </div>
//                 );

//                 day = addDays(day, 1);
//             }
//             rows.push(<div key={day} className="flex justify-center">{days}</div>);
//             days = [];
//         }
//         return <div>{rows}</div>;
//     };

//     const handleNextClick = () => {
//         onChange({ date: selectedDate });
//         onNext();
//     };

//     return (
//         <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-lg mx-auto">
//             <h2 className="text-center text-xl font-bold mb-6">Choisissez la date de votre rendez-vous</h2>
//             {renderHeader()}
//             {renderDays()}
//             {renderCells()}

//             <div className="flex justify-between mt-6">
//                 <button onClick={onBack} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Retour</button>
//                 <button onClick={handleNextClick} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" disabled={!selectedDate}>Suivant</button>
//             </div>
//         </div>
//     );
// };

// export default Etape3Consultation;
import React, { useState } from "react";
import {
    startOfMonth, endOfMonth, startOfWeek, endOfWeek,
    addDays, addMonths, subMonths, format, isSameMonth, isSameDay
} from "date-fns";
import { fr } from 'date-fns/locale';

const Etape3Consultation = ({ data, onChange, onNext, onBack }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(data?.date || null);
    const [startHour, setStartHour] = useState(data?.startHour || "");
    const [endHour, setEndHour] = useState(data?.endHour || "");

    const heures = [
        "08:00", "09:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
    ];

    const renderHeader = () => (
        <div className="flex justify-center gap-3 items-center mb-4 font-bold">
            <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>&lt;</button>
            <h2 className="text-xl font-semibold">
                {format(currentMonth, "MMMM yyyy", { locale: fr })}
            </h2>
            <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>&gt;</button>
        </div>
    );

    const renderDays = () => {
        const days = [];
        const dateFormat = "EEEEE"; // Lun, Mar, etc.
        const startDate = startOfWeek(currentMonth, { weekStartsOn: 1, locale: fr });

        for (let i = 0; i < 7; i++) {
            days.push(
                <div key={i} className="text-center font-semibold w-10">
                    {format(addDays(startDate, i), dateFormat, { locale: fr })}
                </div>
            );
        }
        return <div className="flex justify-center items-center gap-0 md:gap-2">{days}</div>;
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart, { weekStartsOn: 1, locale: fr });
        const endDate = endOfWeek(monthEnd, { weekStartsOn: 1, locale: fr });

        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const cloneDay = day;
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isCurrentMonth = isSameMonth(day, monthStart);

                days.push(
                    <div
                        key={day}
                        className={`border border-gray-200 w-10 h-10 flex items-center justify-center m-1 cursor-pointer
                        ${isSelected ? "bg-blue-600 text-white" : isCurrentMonth ? "bg-white text-black" : "bg-gray-200 text-gray-400"}`}
                        onClick={() => setSelectedDate(cloneDay)}>
                        {format(day, "d")}
                    </div>
                );

                day = addDays(day, 1);
            }
            rows.push(<div key={day} className="flex justify-center">{days}</div>);
            days = [];
        }
        return <div>{rows}</div>;
    };

    const handleNextClick = () => {
        onChange({
            date: selectedDate,
            startHour: startHour,
            endHour: endHour
        });
        onNext();
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="text-center merriweather-sans mb-4">
                <h2 className="text-xl font-bold ">Créneau horaire</h2>
                <p>Définissez votre créneau horaire idéal</p>
            </div>
            <div className="shadow p-6 rounded-lg ">
                {renderHeader()}
                {renderDays()}
                {renderCells()}

                {selectedDate && (
                    <div className="mt-6">
                        <div className="flex gap-4">
                            <div>
                                <label>Heure de début :</label>
                                <select value={startHour} onChange={e => setStartHour(e.target.value)} className="ml-2 border border-gray-300 rounded p-1">
                                    <option value="">--</option>
                                    {heures.map(h => <option key={h} value={h}>{h}</option>)}
                                </select>
                            </div>

                            <div>
                                <label>Heure de fin :</label>
                                <select value={endHour} onChange={e => setEndHour(e.target.value)} className="ml-2 border border-gray-300 rounded p-1">
                                    <option value="">--</option>
                                    {heures.map(h => <option key={h} value={h}>{h}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className=" mt-4 flex justify-center items-center">
                <button
                    onClick={handleNextClick}
                    className="bg-bleu text-white py-2 px-6 rounded  mb-3"
                    disabled={!selectedDate || !startHour || !endHour}>
                    Suivant →
                </button>
            </div>
        </div>
    );
};

export default Etape3Consultation;
