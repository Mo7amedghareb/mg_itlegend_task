// "use client";
// import { useRef } from "react";
// import Testomonials from "./Testomonials";
// import Icons from "./Icons";

// export default function Scroll() {
//     const targetRef = useRef(null);

//     // دالة للتمرير إلى العنصر المستهدف
//     const scrollToSection = () => {
//         targetRef.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <>
//             {/* تمرير دالة التمرير إلى مكون Icons */}
//             <Icons scrollToSection={scrollToSection} />

//             {/* إضافة مسافة لجعل التمرير أكثر وضوحًا */}
//             <div style={{ height: "100vh" }}></div>

//             {/* القسم المستهدف */}
//             <div style={{ backgroundColor: "lightgray", padding: "50px", border: "2px solid black" }} ref={targetRef}>
//                 <Testomonials />
//             </div>
//         </>
//     );
// }
