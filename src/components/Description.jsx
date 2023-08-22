import React from "react";


export default function Description () {
    return (
        <div className="w-full flex justify-around items-center h-[500px] bg-white mt-10">
            <div className="w-1/3">
                <h1 className="text-[40px] font-extrabold">We Keep Your Money Save</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, fugit totam odio praesentium dolores necessitatibus ab distinctio qui modi magnam quas, mollitia hic sunt illo. Laborum saepe laudantium nisi ipsam?</p>
                <button className="mt-6 px-6 py-1 text-[28px] bg-green-300 rounded-3xl" type="button">See Now</button>
            </div>
            <div className="grid w-400px grid-cols-2 gap-4">
                <div className="w-[250px] hover:z-50 transform transition duration-500 hover:scale-150 hover:bg-slate-900 hover:text-white  h-[250px] bg-slate-200 rounded-2xl text-center pt-4">
                    <h2 className="font-bold">Card spending your control</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident aliquid numquam magnam recusandae nihil ipsa accusamus, modi at ex non minima odio dolor ducimus reiciendis, facilis aspernatur doloribus ea!</p>
                </div>
                <div className="w-[250px] hover:z-50 transform transition duration-500 hover:scale-150 hover:bg-slate-900 hover:text-white  h-[250px] bg-slate-200 rounded-2xl text-center pt-4">
                    <h2 className="font-bold">Card spending your control</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident aliquid numquam magnam recusandae nihil ipsa accusamus, modi at ex non minima odio dolor ducimus reiciendis, facilis aspernatur doloribus ea!</p>
                </div>
                <div className="w-[250px] hover:z-50 transform transition duration-500 hover:scale-150 hover:bg-slate-900 hover:text-white  h-[250px] bg-slate-200 rounded-2xl text-center pt-4">
                    <h2 className="font-bold">Card spending your control</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident aliquid numquam magnam recusandae nihil ipsa accusamus, modi at ex non minima odio dolor ducimus reiciendis, facilis aspernatur doloribus ea!</p>
                </div>
                <div className="w-[250px] hover:z-50 transform transition duration-500 hover:scale-150 hover:bg-slate-900 hover:text-white  h-[250px] bg-slate-200 rounded-2xl text-center pt-4">
                    <h2 className="font-bold">Card spending your control</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident aliquid numquam magnam recusandae nihil ipsa accusamus, modi at ex non minima odio dolor ducimus reiciendis, facilis aspernatur doloribus ea!</p>
                </div>
            </div>
        </div>
    )
}