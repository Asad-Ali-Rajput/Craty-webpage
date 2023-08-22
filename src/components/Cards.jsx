import React from "react";

export default function Cards() {
    const data = [
        {
            title: "250K",
            Paragraph: "Univers's from over the globe"
        },
        {
            title: "500M",
            Paragraph: "Univers's from over the globe"
        },
        {
            title: "280%",
            Paragraph: "Univers's from over the globe"
        }
    ]
  return (
    <div className="grid text-center grid-cols-3 bg-white pl-[5%]">
        {data.map(item => (
            <div key={item} className="card my-[10%] rounded-3xl">
            <p className="text-[60px] font-extrabold">{item.title}</p>
            <p>{item.Paragraph}</p>
          </div>
        ))}
    </div>
  );
}
